import { StyleSheet, Text, View } from 'react-native'

export const AllBalance = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.textTop}>Общий баланс</Text>
      <Text style={styles.textPrice}>10 000 000 Руб</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  wrap: {
    marginTop: 20,
    marginLeft: 20
  },
  textTop: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textPrice: {
    fontSize: 16
  }
})
