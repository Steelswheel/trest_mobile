import { Text, View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export function AuthLoader() {
    return (
        <LinearGradient
            style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}
            start={[0, 1]}
            end={[1, 0]}
            locations={[0.13, 0.53, 1]}
            colors={['#8757E8', '#6170E8', '#8757E8']}
        >
            <View style={styles.authLoaderHeader}>
                <Text style={styles.authLoaderHeaderText}>
                    ТРЕСТ
                </Text>
            </View>
            <View>
                <Text style={styles.authLoaderSubheaderText}>
                    финансы
                </Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    authLoaderHeader: {
        paddingBottom: 7,
        borderBottomColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 2
    },
    authLoaderHeaderText: {
        fontSize: 41,
        lineHeight: 41,
        fontWeight: '800',
        color: 'white',
        textAlign: 'center'
    },
    authLoaderSubheaderText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
})