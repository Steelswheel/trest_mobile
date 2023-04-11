import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Offers } from '@/components/offers/Offers'
import { LastNews } from '@/components/lastNews/LastNews'

export const ForYou = () => {
    return (<>
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                <Offers />
                <LastNews />
            </ScrollView>
        </SafeAreaView>
    </>)
}