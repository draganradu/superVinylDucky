import { collection, getDocs, query, limit, where, addDoc, setDoc, doc } from "firebase/firestore"
import { db } from "@/firebase/db"
import type { publicTool, toolType, ToolsState } from "./type"

export const callTools = async (context: any, payload: number) => {
    // methods ------------------------------
    const getPublicTools = async (payload: toolType[], limitQuery?: number) => {
        const collecttionDB = collection(db, "AllTools")
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
        const collecttionDB = collection(db, "Tools")

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
            return [...acc, cur.Extends]
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
    // const docRef = await addDoc(collection(db, "Tools"), payload)
    // console.log("Document written with ID: ", docRef.id)
    // console.log("set", docRef)
    // return docRef
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
    const docRef = await setDoc(doc(db, "PublicTools", id), JSON.parse(JSON.stringify(newData)))

    console.log(id, newData, docRef)
    return true
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
    const docRef = await setDoc(doc(db, "PersonalTools", id), JSON.parse(JSON.stringify(newData)))

    console.log(id, newData, docRef)
    return true
}

export const EditTool = async (context: ToolsState, payload: toolType) => {
    const { personalToolID, publicToolID } = context.state.tools[payload.ID].private

    if (personalToolID) {
        await setPersonalTool(personalToolID, payload)
    }

    if (publicToolID) {
        await setPublicTool(publicToolID, payload)
    }

    return true
}

