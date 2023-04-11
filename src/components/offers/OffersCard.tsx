import { ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { useTypedNavigation } from '@/navigation/useTypedNavigation'

let screenWidth = Dimensions.get('window').width;

export const OffersCard = ({ item } : { item: any }) => {
    const { navigate } = useTypedNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigate('OffersDetail', item)}
            style={{...styles.offersItem, marginVertical: 9}}
        >
            <ImageBackground
                style={styles.offersItemImage}
                source={require('@/assets/offer.webp')}
                resizeMode={'contain'}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    offersItem: {
        borderRadius: 20,
        width: screenWidth - 56,
        minHeight: 152
    },
    offersItemImage: {
        width: '100%',
        minHeight: 152
    },
})