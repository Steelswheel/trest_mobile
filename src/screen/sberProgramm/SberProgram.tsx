import {Image, StyleSheet, Text, View} from "react-native";

interface IProgramList {
  name: string
  minPrice: string
  percent: string
  minMonth: string
  color: string
}

const programList: IProgramList []= [
  {
    name: 'Промо',
    minPrice: '200 000',
    percent: '15%',
    minMonth: '6 мес',
    color: '#FAE637',
  },{
    name: 'Промо2',
    minPrice: '300 000',
    percent: '16%',
    minMonth: '16 мес',
    color: '#FF9F59',
  },{
    name: 'Промо3',
    minPrice: '300 000',
    percent: '16%',
    minMonth: '16 мес',
    color: '#9FDEBB',
  },{
    name: 'Промо4',
    minPrice: '1 000 000',
    percent: '16%',
    minMonth: '16 мес',
    color: '#805CE8',
  },
]
export const SberProgram = () => {
  return (<View style={styles.wrap}>
    <Text className='text-base font-bold mb-5'>СБЕРЕГАТЕЛЬНЫЕ ПРОГРАММЫ</Text>
    {programList.map((i,key) => (
      <View key={key} style={styles.wrapItem} className='flex flex-row items-center w-full'>
        <View className='w-6 h-full	flex flex-row items-center justify-center' style={
          key === 0
            ? {...styles.topRadius, backgroundColor: i.color}
            : key ===  programList.length - 1
              ? {...styles.bottomRadius, backgroundColor: i.color}
              : {backgroundColor: i.color}
        } >

          <Image
            style={styles.image}
            source={require('@/assets/strelka.png')}
          ></Image>

        </View>
        <View className='flex  flex-row items-center justify-between grow'>

          <View className='ml-3'>
            <Text className='font-semibold mb-1' style={styles.colorHead}>
              {i.name} {key} {programList.length - 1}
            </Text>
            <Text className='text-current' style={styles.color2}>{i.minPrice}</Text>
          </View>
          <View>
            <Text className='text-right font-semibold mb-z colorHead' style={styles.colorHead}>
              {i.percent}
            </Text>
            <Text className='text-right text-current' style={styles.color2} >{i.minMonth}</Text>
          </View>

        </View>
      </View>)
    )}
    </View>)
}

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 5
  },
  topRadius: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },

  bottomRadius: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  wrapItem: {
    height: 59
  },
  colorHead: {
    color: '#805CE8'
  },
  color2: {
    color: '#797C88'
  },
  image: {
    width: 5,
    height: 10,
  }

})