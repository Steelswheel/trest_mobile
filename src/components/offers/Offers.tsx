import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { OffersCard } from '@/components/offers/OffersCard'
import { IOffer } from '@/interface/interface'
import { layoutStyles } from '@/styles/layout'
import { useLazyGetOffersQuery } from '@/store/appApi'
import { useAuth } from '@/modules/auth/Auth'
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export const Offers = () => {
    const [offers, setOffers] = useState<Array<IOffer> | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const [reposGetOffers] = useLazyGetOffersQuery()
    const { saveAuth } = useAuth()

    const focused = useIsFocused()

    useEffect(() => {
        if (focused) {
            setIsLoading(true)

            reposGetOffers({}).then(({ data, error }) => {
                //@ts-ignore
                if (error && error.data.message === 'token_error') {
                    saveAuth(undefined)
                } else {
                    if (data) {
                        setOffers(data)
                    }
                }
            })
            .catch(e => console.error(e))
            .finally(() => setIsLoading(false))
        }
    }, [focused])

    return (<>
        <View style={{width: '100%', marginTop: 15}}>
            <Text style={{...layoutStyles.header, marginBottom: 19, paddingHorizontal: 28}}>
                Предложения для вас
            </Text>
        </View>
        {isLoading && <ActivityIndicator style={{margin: 10}} size="large" color="#8757E8" />}
        {!isLoading && offers.map(item => <OffersCard item={item} key={item.id} />) }
        <View style={styles.bottomLine}></View>
    </>)
}

const styles = StyleSheet.create({
    bottomLine: {
        backgroundColor: '#F4F4F9',
        marginTop: 9,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 158,
        height: 4
    }
})
