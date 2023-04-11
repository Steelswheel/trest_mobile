import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useTypedNavigation } from '@/navigation/useTypedNavigation'

let screenWidth = Dimensions.get('window').width

export const LastNewsCard = ({item} : {item: any}) => {
    const { navigate } = useTypedNavigation()

    return (
        <TouchableOpacity 
            onPress={() => navigate('LastNewsDetail', item)}
            style={styles.lastNewsItem}
        >
            <Image
                style={styles.lastNewsItemImage}
                source={{
                    uri: item.src
                }}
            ></Image>
            <View style={{marginLeft: 12, flex: 1}}>
                <Text style={styles.lastNewsItemText}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lastNewsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
        minHeight: 79,
        width: screenWidth - 56,
        backgroundColor: 'white',
        padding: 14,
        shadowColor: '#D6DEF1',
        shadowOffset: {
            width: 20,
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 4
    },
    lastNewsItemImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    lastNewsItemContent: {},
    lastNewsItemText: {
        fontSize: 15
    }
})