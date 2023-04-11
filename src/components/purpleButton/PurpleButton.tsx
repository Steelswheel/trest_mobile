import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export function PurpleButton({ text, onClick, btnStyle, wrapStyle }: { text: string, onClick?: () => any, btnStyle?: {}, wrapStyle?: {} }) {
    return (
        <TouchableOpacity 
            style={{...wrapStyle}}
            onPress={onClick}
        >
            <LinearGradient
                style={{...styles.purpleButton, ...btnStyle}}
                start={[0, 0]}
                end={[1, 1]}
                locations={[0.19, 0.68]}
                colors={['#8757E8', '#5777E8']}
            >
                <Text style={styles.purpleButtonText}>
                    { text }
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    purpleButton: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 50,
        shadowColor: '#A7B8D3',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 6
    },
    purpleButtonText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFF',
        fontWeight: 'bold'
    }
})