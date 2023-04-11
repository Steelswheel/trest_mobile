import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useTypedNavigation } from '@/navigation/useTypedNavigation'

interface INavbar {
    style?: {},
    title?: string | undefined,
    leftButton: {
        text: string
    },
    rightButton?: {
        text?: string
    }
}

export function Navbar({config}: {config: INavbar}) {
    const { goBack } = useTypedNavigation();

    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.leftButton}
                onPress={goBack}
            >
                <Image style={{width: 10, height: 20}} source={require('@/assets/arrow-left.webp')} />
                <Text style={styles.leftButtonText}>
                    {config.leftButton?.text}
                </Text>
            </Pressable>
            <View>
                <Text>
                    {config.title}
                </Text>
            </View>
            <View>
                <Text>
                    {config.rightButton?.text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 28,
        height: 90,
        flexDirection: 'row'
    },
    leftButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftButtonText: {
        marginLeft: 22,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    }
})