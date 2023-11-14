// import type { userStoreType } from "./type"
import { auth } from '@/firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'


const signUp = async (context: any, payload: { email: string, password: string }) => {
    const { email, password } = payload
    const res: any = await createUserWithEmailAndPassword(auth, email, password)

    if (res) {
        context.commit('SetUser', res.user)
    } else {
        throw new Error('could not complete sign up')
    }

    context.commit('SET_login', !!res?.user?.accessToken)
}

const login = async (context: any, payload: { email: string, password: string }) => {
    const { email, password } = payload
    const res: any = await signInWithEmailAndPassword(auth, email, password)

    if (res) {
        context.commit('SetUser', res.user)
        //TODO
        localStorage.setItem("user", JSON.stringify(res.user))
    } else {
        throw new Error('could not complete login')
    }
    
    context.commit('SET_login', !!res?.user?.accessToken)
}


export { signUp, login }