import { Text, View, TextInput, StyleSheet, Animated } from 'react-native'
import { PurpleButton } from '@/components/purpleButton/PurpleButton'
import { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { login } from '@/modules/auth/requests'
import { useAuth } from '@/modules/auth/Auth'
import { useActions } from '@/hooks/actions'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { wsStart } from '@/modules/auth/ws'

export function AuthForm({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secure, setSecure] = useState(true)
    const buttonErrorAnim = useRef(new Animated.Value(0)).current
    const { saveAuth, setCurrentUser, logout } = useAuth()
    const { setUser } = useActions()

    async function authHandler() {
        if (email.length > 0 && password.length > 0) {
            setIsLoading(true)

            try {
                const {data: user} = await login(email.trim(), password.trim())

                if (user) {
                    saveAuth(user)
                    setCurrentUser(user)
                    setUser(user)
                    //wsStart(user.ws)
                } else {
                    console.error('Ошибка авторизации')
                }
            } catch (e) {
                logout()
                console.error('Неверно указаны e-mail или пароль')
            }

            setIsLoading(false)
        } else {
            shake()
            console.error('Не указаны e-mail или пароль')
        }
    }

    const shake = () => {
        Animated.loop(
            Animated.sequence(
                [
                    Animated.timing(buttonErrorAnim, {
                        toValue: 2,
                        duration: 50,
                        useNativeDriver: true
                    }),
                    Animated.timing(buttonErrorAnim, {
                        toValue: 2,
                        duration: 50,
                        useNativeDriver: true
                    }),
                    Animated.timing(buttonErrorAnim, {
                        toValue: 0,
                        duration: 50,
                        useNativeDriver: true
                    })
                ]
            ),
            { iterations: 2 }
        ).start()
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F7FA'}}>
            <View style={styles.authForm}>
                <View style={{marginBottom: 30}}>
                    <Text style={styles.authFormHeader}>
                        Войдите в аккаунт
                    </Text>
                </View>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    placeholder={'E-mail'}
                    style={{...styles.authFormInput, marginBottom: 20}}
                    clearButtonMode={'unless-editing'}
                    autoCapitalize={'none'}
                />
                <View style={{marginBottom: 30, position: 'relative'}}>
                    <TextInput 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secure}
                        placeholder={'Пароль'}
                        style={styles.authFormInput}
                        clearButtonMode={'unless-editing'}
                        autoCapitalize={'none'}
                    />
                    {secure &&
                        <FeatherIcons 
                            style={styles.authFormEyeIcon}
                            name={'eye'} 
                            size={20} 
                            color={'#797C88'}
                            onPress={() => setSecure(false)} 
                        />
                    }
                    {!secure &&
                        <FeatherIcons 
                            style={styles.authFormEyeIcon}
                            name={'eye-off'} 
                            size={20} 
                            color={'#797C88'}
                            onPress={() => setSecure(true)}
                        />
                    }
                </View>
                <Animated.View style={{ transform: [{ translateX: buttonErrorAnim }] }}>
                    <PurpleButton 
                        text={'Войти'}
                        btnStyle={{elevation: 0}}
                        onClick={authHandler}
                    />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    authForm: {
        paddingHorizontal: 28,
        width: '100%'
    },
    authFormHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#202020'
    },
    authFormInput: {
        fontSize: 14,
        height: 51,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 50
    },
    authFormEyeIcon: {
        position: 'absolute',
        right: 20,
        top: 15
    }
})