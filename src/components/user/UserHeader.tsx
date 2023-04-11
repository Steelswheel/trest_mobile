import { Image, StyleSheet, Text, View } from 'react-native'

interface IUserHeader {
  src?: String
  name: String
}
export const UserHeader = ({ name }: IUserHeader) => {
  return (
    <View style={styles.wrapMain}>
      <View style={styles.userAvatar}>
        <Image
          style={styles.image}
          source={require('@/assets/user.jpeg')}
        ></Image>
      </View>

      <View style={styles.wrapText}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textDes}>Добро пожаловать!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapMain: {
    marginLeft: 20,
    flexDirection: 'row'
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 70,
    backgroundColor: '#961010'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 70
  },
  wrapText: {
    marginLeft: 8,
    justifyContent: 'center'
  },
  textName: {
    fontSize: 14
  },
  textDes: {
    fontSize: 14,
    // fontWeight: 200,
    color: '#ADADAD'
  }
})
