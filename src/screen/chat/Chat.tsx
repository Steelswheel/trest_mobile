import { Image, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Chat = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={require('@/assets/bar_i1.png')}
      ></Image>

      <Text>Chat</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
})
