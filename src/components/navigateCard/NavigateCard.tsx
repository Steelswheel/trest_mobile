import { Image, StyleSheet, Text, View } from 'react-native'

export const NavigateCard = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapNav}>
        <View style={styles.item}>
          <View style={styles.blocCenter}>
            <Image
              style={styles.image}
              source={require('@/assets/bar_ii1.svg')}
            ></Image>
          </View>
          <View>
            <Text style={styles.textCenter}>Пополнить счет</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.blocCenter}>
            <Image
              style={styles.image}
              source={require('@/assets/bar_i2.png')}
            ></Image>
          </View>
          <View>
            <Text style={styles.textCenter}>Снять сбережения</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.blocCenter}>
            <Image
              style={styles.image}
              source={require('@/assets/bar_i3.png')}
            ></Image>
          </View>
          <View>
            <Text style={styles.textCenter}>График выплат</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.blocCenter}>
            <Image
              style={styles.image}
              source={require('@/assets/bar_i4.png')}
            ></Image>
          </View>
          <View>
            <Text style={styles.textCenter}>История платежей</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 5
  },
  wrapNav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    width: 80,
    height: 70,
    overflow: 'hidden'
  },
  image: {
    width: 25,
    height: 25
  },
  blocCenter: {
    alignItems: 'center',
    marginBottom: 10
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 12
  }
})
