import { Text, View, ActivityIndicator } from 'react-native'
import { LastNewsCard } from '@/components/lastNews/LastNewsCard'
import { ILastNewsItem } from '@/interface/interface'
import { layoutStyles } from '@/styles/layout'
import { useLazyGetNewsQuery } from '@/store/appApi'
import { useAuth } from '@/modules/auth/Auth'
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export const LastNews = () => {
    const [news, setNews] = useState<Array<ILastNewsItem> | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const [reposGetNews] = useLazyGetNewsQuery()
    const { saveAuth } = useAuth()

    const focused = useIsFocused()

    useEffect(() => {
        if (focused) {
            setIsLoading(true)

            reposGetNews({}).then(({ data, error }) => {
                //@ts-ignore
                if (error && error.data.message === 'token_error') {
                    saveAuth(undefined)
                } else {
                    if (data) {
                        setNews(data)
                    }
                }
            })
            .catch(e => console.error(e))
            .finally(() => setIsLoading(false))
        }
    }, [focused])

    return (<>
        <View style={{width: '100%'}}>
            <Text style={{...layoutStyles.header, marginTop: 34, marginBottom: 19, paddingHorizontal: 28}}>
                Последние новости
            </Text>
        </View>
        <View style={{marginBottom: 19}}>
            {isLoading && <ActivityIndicator style={{margin: 10}} size="large" color="#8757E8" />}
            {!isLoading && news.map(item => <LastNewsCard item={item} key={item.id} />) }
        </View>
    </>)
}