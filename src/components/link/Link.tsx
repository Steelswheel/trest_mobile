import { useCallback } from 'react'
import { Linking, Pressable, Alert } from 'react-native'
import { ILink } from '@/interface/interface'

export const Link = ({url, children, styles}: ILink) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url)

        if (supported) {
            await Linking.openURL(url)
        } else {
            Alert.alert(`Невозможно открыть ссылку: ${url}`)
        }

    }, [url]);

    return (
        <Pressable 
            style={{...styles}}
            onPress={handlePress}
        >
            { children }
        </Pressable>
    );
};