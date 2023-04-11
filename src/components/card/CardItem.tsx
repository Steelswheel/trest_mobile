import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

let screenWidth = Dimensions.get('window').width

export const CardItem = () => {
  return (
    <LinearGradient
      style={styles.cardItem}
      start={{ x: 0.2, y: 0.0 }}
      end={{ x: 0.8, y: 1.0 }}
      colors={['#8757E8', '#5777E8', '#8757E8']}
    >
      <View style={styles.top}>
        <Text style={styles.topLabel}>Договор</Text>
        <Text style={styles.topText}>№ 345676545</Text>
      </View>

      <View style={styles.center}>
        <Text style={styles.centerLabel}>МАКСИМАЛЬЫЙ ДОХОД</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomLabel}>Баланс</Text>
        <Text style={styles.bottomText}>7,274.00</Text>
      </View>
      <View style={styles.percent}>
        <Text style={styles.percentText}>13.8 %</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    width: screenWidth - 90,
    height: 150,
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 25
  },
  top: {
    flex: 1,
    flexDirection: 'row'
  },
  topLabel: {
    color: '#FFF',
    fontSize: 13,
    marginRight: 5,
    fontWeight: '300'
  },
  topText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600'
  },
  center: {
    marginBottom: 8
  },
  centerLabel: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 5,
    fontWeight: '300'
  },

  bottom: {},
  bottomLabel: {
    color: '#FFF',
    fontSize: 13,
    marginRight: 5,
    fontWeight: '300'
  },
  bottomText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '900'
  },
  percent: {
    position: 'absolute',
    width: '100%',
    top: 120
  },
  percentText: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'right',
    fontWeight: '600'
  }
})
