import { collection, getDocs, query, limit, where, doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase/db"
import { dbCollections } from "../tools/type"
import { formHelper } from "@/components/shop/crud/formStructure"

export const callProducts = async (context: any, payload: number) => {
    const collecttionDB = collection(db, "storeProducts")

    const queryDB = query(collecttionDB, where("title", "!=", "null"), limit(payload || 100))
    const querySnapshot = await getDocs(queryDB)

    const data: any = {}
    querySnapshot.forEach((doc) => {
        data[doc.data().title] = doc.data()
        data[doc.data().title].dbID = doc.id
    })

    context.commit('setProducts', data)
}


export const updateProduct = async (context: any, payload: { product: any, id: string }) => {

    // const newLocal = ["img", "category", "colors"]
    // send to firebase
    const newData = formHelper.toObject(JSON.parse(JSON.stringify(payload.product)))

    const docRef = await setDoc(doc(db, dbCollections.storeProducts, payload.id), newData)

    context.commit('setProduct', newData)
    return docRef
}