import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IDoc } from '@/interface/interface'
import { DocCard } from '@/components/doc/DocCard'
import { layoutStyles } from '@/styles/layout'

export const Doc = () => {
    const data: Array<IDoc> = [
        {
            name: 'Документ1',
            url: 'фывфыв.рф',
            ext: 'pdf'
        },
        {
            name: 'Документ2',
            url: 'https://yandex.ru',
            ext: 'pdf'
        },
        {
            name: 'Документ3',
            url: 'https://yandex.ru',
            ext: 'pdf'
        },
        {
            name: 'Документ4',
            url: 'https://yandex.ru',
            ext: 'doc'
        },
        {
            name: 'Документ5',
            url: 'https://yandex.ru',
            ext: 'docx'
        },
        {
            name: 'Документ6',
            url: 'https://yandex.ru',
            ext: 'docx'
        },
        {
            name: 'Документ7',
            url: 'https://yandex.ru',
            ext: 'xls'
        },
        {
            name: 'Документ8',
            url: 'https://yandex.ru',
            ext: 'xlsx'
        },
        {
            name: 'Документ9',
            url: 'https://yandex.ru',
            ext: 'xlsx'
        }
    ];

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 28, paddingVertical: 15 }}>
                <View style={{width: '100%'}}>
                    <Text style={{...layoutStyles.header, marginBottom: 12}}>
                        Документы
                    </Text>
                </View>
                { data.map((item: IDoc) => <DocCard item={item} key={item.name} />) }
            </ScrollView>
        </SafeAreaView>
    )
}