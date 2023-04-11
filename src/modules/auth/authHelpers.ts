import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthModel } from '@/interface/interface'

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'

const getAuth = async (): Promise<AuthModel | undefined> => {
    if (!AsyncStorage) {
        return undefined
    }

    try {
        const lsValue: string | null = await AsyncStorage.getItem(AUTH_LOCAL_STORAGE_KEY)

        if (lsValue) {
            try {
                const auth: AuthModel = JSON.parse(lsValue) as AuthModel
        
                if (auth) {
                    return auth
                }
            } catch (error) {
                console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
            }
        } else {
            return undefined
        }
    } catch (error) {
        console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
    }
}

const setAuth = async (auth: AuthModel) => {
    if (!AsyncStorage) {
        return undefined
    }

    try {
        const lsValue = JSON.stringify(auth)

        await AsyncStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
    } catch (error) {
        console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
    }
}

const removeAuth = async () => {
    if (!AsyncStorage) {
        return undefined
    }

    try {
        await AsyncStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
    } catch (error) {
        console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
    }
}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY }