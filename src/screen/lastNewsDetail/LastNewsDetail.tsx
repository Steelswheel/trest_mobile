import { Text, View, ScrollView, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Navbar } from '@/components/navbar/Navbar'
import { ILastNewsItem } from '@/interface/interface'
import { layoutStyles } from '@/styles/layout'
import HTML from 'react-native-render-html'

export const LastNewsDetail = ({ route }: { route: any }) => {
    const { title, text, src }: ILastNewsItem = route.params
    const contentWidth = useWindowDimensions().width

    const navbarConf = {
        leftButton: {
            text: 'Назад',
            icon: '@/assets/arrow-left.webp',
            url: 'ForYou',
            style: {
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 14,
                marginLeft: 22
            }
        }
    }

    return (<>
        <SafeAreaView style={{flex: 1}}>
			<ScrollView contentContainerStyle={{ backgroundColor: '#805CE8', alignItems: 'center' }}>
				<Navbar config={navbarConf} />
				<View style={{ backgroundColor: 'white', width: '100%', paddingHorizontal: 28, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
					<View>
						<Text style={{...layoutStyles.header, marginTop: 28, marginBottom: 19}}>
							{ title }
						</Text>
					</View>
					<View style={styles.lastNewsItem}>
						<ImageBackground
							style={styles.lastNewsItemImage}
							source={{uri: src}}
							resizeMode={'contain'}
						/>
					</View>
                    <View style={{...styles.lastNewsItemText, marginBottom: 46}}>
                        <HTML source={{html: JSON.parse(text)}} contentWidth={contentWidth} />
                    </View>
				</View>
			</ScrollView>
		</SafeAreaView>
    </>)
}

const styles = StyleSheet.create({
    lastNewsItem: {
        borderRadius: 20,
        width: '100%',
        minHeight: 152
    },
    lastNewsItemImage: {
        width: '100%',
        minHeight: 152
    },
    lastNewsItemText: {
        marginTop: 20,
        textAlign: 'justify',
        fontSize: 15,
        lineHeight: 17
    }
})