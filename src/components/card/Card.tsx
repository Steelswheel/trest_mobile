import { CardItem } from './CardItem'
import { StyleSheet, View } from 'react-native'

export const Card = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapSlider}>
        <CardItem />
        <CardItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    height: 150,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5
  },
  wrapSlider: {
    flex: 1,
    flexDirection: 'row'
  }
})
