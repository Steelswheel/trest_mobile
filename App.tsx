import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { AuthProvider } from '@/modules/auth/Auth'
import { Navigation } from '@/navigation/Navigation'

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <AuthProvider>
                    <Navigation/>
                </AuthProvider>
            </Provider>
        </SafeAreaProvider>
    )
}
