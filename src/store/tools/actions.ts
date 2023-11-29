import { collection, getDocs, query, limit, where, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/db"
import { type publicTool, type toolType, type ToolsState, type personalTools, dbCollections } from "./type"

export const callTools = async (context: any, payload: number) => {
    // methods ------------------------------
    const getPublicTools = async (payload: toolType[], limitQuery?: number) => {
        const collecttionDB = collection(db, dbCollections.PublicTools)
        const IN = extractExtends(payload)

        const queryDB = query(collecttionDB, where("EAN", "in", IN), limit(limitQuery || 100))
        const querySnapshot = await getDocs(queryDB)
        // console.log(querySnapshot)
        const data: any = {}
        querySnapshot.forEach((doc) => {
            data[doc.data().EAN] = doc.data()
            data[doc.data().EAN].private = { publicToolID: doc.id }

        })

        return data
    }

    const getPersonalTools = async (payload: number) => {
        const collecttionDB = collection(db, dbCollections.PersonalTools)

        const queryDB = query(collecttionDB, where("owner", "==", "wjnCEzeiA4f6M75FeLMf6efZ8433"), limit(payload || 100))
        const querySnapshot = await getDocs(queryDB)

        const data: any = {}
        querySnapshot.forEach((doc) => {
            data[doc.data().ID] = doc.data()
            data[doc.data().ID].private = { personalToolID: doc.id }
        })

        return data
    }

    const extractExtends = (payload: toolType[]) => {
        return Object.values(payload).reduce((acc: any, cur: toolType) => {
            return [...acc, cur.extends]
        }, [])
    }

    const combineExtended = (personalTools: any[], publicTools: publicTool[]) => {
        const items: any = { ...personalTools }

        Object.keys(items).forEach((i: string) => {
            const EAN = items[i].Extends
            if (publicTools[EAN]) {
                items[i] = { ...publicTools[EAN], ...items[i], private: { ...publicTools[EAN].private, ...items[i].private } }
            }
        })

        return items
    }

    // calls ------------------------------
    const usersTools = await getPersonalTools(payload)
    const extendedTools = await getPublicTools(usersTools)

    // combination ------------------------------
    const combined = combineExtended(usersTools, extendedTools)
    context.commit('setTools', combined)
}

export const AddTool = async (context: any, payload: toolType) => {
    const newData: toolType = JSON.parse(JSON.stringify(payload))
    const splitForPublic = (payload: toolType): publicTool => {
        return {
            color: payload.color,
            currentMarketPrice: payload.currentMarketPrice,
            consumables: payload.consumables,
            description: payload.description,
            images: payload.images,
            maker: payload.maker,
            model: payload.model,
            otherID: payload.otherID,
            usedIn: payload.usedIn,
            size: payload.size,
            weight: payload.weight,
            EAN: payload.EAN,
            retailPrice: payload.retailPrice,
        }
    }

    const splitForPersonal = (payload: toolType): personalTools => {
        return {
            color: payload.color,
            currentMarketPrice: payload.currentMarketPrice,
            consumables: payload.consumables,
            description: payload.description,
            images: payload.images,
            maker: payload.maker,
            model: payload.model,
            otherID: payload.otherID,
            usedIn: payload.usedIn,
            size: payload.size,
            weight: payload.weight,
            ID: payload.ID,
            owner: payload.owner,
            extends: payload.extends,
            price: payload.price,
            mods: payload.mods,
            purchaseDate: payload.purchaseDate,
            usage: payload.usage,
            repairs: payload.repairs,
            borrowed: payload.borrowed,
            location: payload.location
        }
    }

    if (newData.extends) {
        // add new public tool
        const toolPublic = JSON.parse(JSON.stringify(splitForPublic(newData)))
        await addDoc(collection(db, dbCollections.PublicTools), toolPublic)
    }

    // add a new personal
    const toolPersonal = JSON.parse(JSON.stringify(splitForPersonal(newData)))
    await addDoc(collection(db, dbCollections.PersonalTools), toolPersonal)
    return
}

const setPublicTool = async (id: string, data: toolType) => {
    // clean data
    const newData = {
        EAN: data.EAN,
        Name: data.Name,
        Make: data.Make,
        Descriptiption: data.Descriptiption,
        price: data.price,
    }

    // send to firebase
    const docRef = await setDoc(doc(db, dbCollections.PublicTools, id), JSON.parse(JSON.stringify(newData)))

    return docRef
}

const setPersonalTool = async (id: string, data: toolType) => {
    // clean data
    const newData = {
        ID: data.ID,
        Name: data.Name,
        Descriptiption: data.Descriptiption,
        price: data.price,
        Extends: data.Extends,
    }

    // send to firebase
    const docRef = await setDoc(doc(db, dbCollections.PersonalTools, id), JSON.parse(JSON.stringify(newData)))

    console.log(id, newData, docRef)
    return true
}

export const EditTool = async (context: { state: ToolsState }, payload: toolType) => {
    const { personalToolID, publicToolID } = context.state.tools[payload.ID].private

    if (personalToolID) {
        await setPersonalTool(personalToolID, payload)
    }

    if (publicToolID) {
        await setPublicTool(publicToolID, payload)
    }

    return true
}

export const RemoveTools = async (context: { state: ToolsState }, payload: toolType) => {
    //local remove
    delete context.state.tools[payload.ID]
    //server remove
    console.log(payload.private.personalToolID)
    await deleteDoc(doc(db, dbCollections.PersonalTools, payload.private.personalToolID))
}
