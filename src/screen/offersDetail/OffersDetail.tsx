import { 
    Text, 
    View, 
    ScrollView, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity, 
    useWindowDimensions 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Navbar } from '@/components/navbar/Navbar'
import { IOffer } from '@/interface/interface'
import { layoutStyles } from '@/styles/layout'
import { PurpleButton } from '@/components/purpleButton/PurpleButton'
import HTML from 'react-native-render-html'

export const OffersDetail = ({ route }: { route: any }) => {
    const { id, text, src }: IOffer = route.params
    const contentWidth = useWindowDimensions().width

    const navbarConf = {
        leftButton: {
            text: 'Назад'
        }
    }

    return (<>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{ backgroundColor: '#805CE8', alignItems: 'center' }}>
                <Navbar config={navbarConf} />
                <View style={{ backgroundColor: '#F5F7FA', width: '100%', paddingHorizontal: 28, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                    <View>
                        <Text style={{...layoutStyles.header, marginTop: 28, marginBottom: 19}}>
                            Предложение для Вас
                        </Text>
                    </View>
                    <View style={styles.offersItem}>
                        <ImageBackground
                            style={styles.offersItemImage}
                            source={{uri: src}}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={{...styles.offersItemText}}>
                        <HTML source={{html: JSON.parse(text)}} contentWidth={contentWidth} />
                    </View>
                </View>
            </ScrollView>
            <View style={{backgroundColor: '#F5F7FA', paddingTop: 21, paddingBottom: 46, paddingHorizontal: 28}}>
                <TouchableOpacity style={{marginHorizontal: 'auto'}}>
                    <Text style={styles.linkButton}>
                        Правила проведения
                    </Text>
                </TouchableOpacity>
                <PurpleButton 
                    text={'Оформить'} 
                    wrapStyle={{marginTop: 28, marginHorizontal: 'auto'}} 
                />
            </View>
        </SafeAreaView>
    </>)
}

const styles = StyleSheet.create({
    linkButton: {
        color: '#738BB0',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    offersItem: {
        borderRadius: 20,
        width: '100%',
        minHeight: 152
    },
    offersItemImage: {
        width: '100%',
        minHeight: 152
    },
    offersItemText: {
        marginTop: 20,
        textAlign: 'justify',
        fontSize: 15,
        lineHeight: 17
    }
})