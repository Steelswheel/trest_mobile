import { AuthForm } from '@/components/authForm/AuthForm'
import { AuthLoader } from '@/components/authLoader/AuthLoader'
import { useState, useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export const Auth = () => {
    const [isLoading, setIsLoading] = useState(false)
    const fadeAnimAuthForm = useRef(new Animated.Value(0)).current
    const fadeAnimAuthLoader = useRef(new Animated.Value(0)).current

    const fadeInAuthForm = () => {
        Animated.timing(fadeAnimAuthForm, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    const fadeOutAuthForm = () => {
        Animated.timing(fadeAnimAuthForm, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    const fadeInAuthLoader = () => {
        Animated.timing(fadeAnimAuthLoader, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    const fadeOutAuthLoader = () => {
        Animated.timing(fadeAnimAuthLoader, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        if (isLoading) {
            fadeOutAuthForm()
            fadeInAuthLoader()
        } else {
            fadeInAuthForm()
            fadeOutAuthLoader()
        }
    }, [isLoading])

    return (<>
        {isLoading && 
            <Animated.View style={{opacity: fadeAnimAuthLoader}}>
                <AuthLoader/>
            </Animated.View>
        }
        {!isLoading &&
            <Animated.View style={{width: '100%', height: '100%', opacity: fadeAnimAuthForm}}>
                <AuthForm setIsLoading={setIsLoading} />
            </Animated.View>
        }
    </>)
}
