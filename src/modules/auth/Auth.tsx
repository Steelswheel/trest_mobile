import { createContext, useContext, useState } from 'react'
import * as authHelper from '@/modules/auth/authHelpers'
import { AuthModel, IUserModel } from '@/interface/interface'

interface IAuthParams {
    auth: AuthModel | undefined
    saveAuth: (auth: AuthModel | undefined) => void
    currentUser: IUserModel | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<IUserModel | undefined>>
    logout: () => void
}

const initAuthContextPropsState: IAuthParams = {
    auth: undefined,
    saveAuth: () => {},
    currentUser: undefined,
    setCurrentUser: () => {},
    logout: () => {}
}

const AuthContext = createContext<IAuthParams>(initAuthContextPropsState)

const useAuth = () => {
    return useContext(AuthContext)
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [auth, setAuth] = useState<AuthModel | undefined>()
    const [currentUser, setCurrentUser] = useState<IUserModel | undefined>()

    const saveAuth = (auth: AuthModel | undefined) => {
        setAuth(auth)

        if (auth) {
            authHelper.setAuth(auth)
        } else {
            authHelper.removeAuth()
        }
    }

    const logout = () => {
        saveAuth(undefined)
        setCurrentUser(undefined)
    }

    return (
        <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }