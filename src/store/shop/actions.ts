import { collection, getDocs, query, limit, or, where } from "firebase/firestore"
import { db } from "@/firebase/db"

const callProducts = async (context: any, payload: number) => {
    const collecttionDB = collection(db, "storeProducts")

    const queryDB = query(collecttionDB, where("title","!=","null"), limit(payload || '100'))
    const querySnapshot = await getDocs(queryDB)

    const data: any = {}
    querySnapshot.forEach((doc) => {  
        data[doc.data().title] = doc.data()
})

context.commit('setProducts', data)
}

export { callProducts }