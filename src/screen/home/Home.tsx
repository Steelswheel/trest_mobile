import { useTypedNavigation } from '@/navigation/useTypedNavigation'
import { SberProgram } from '@/screen/sberProgramm/SberProgram'
import {Pressable, ScrollView, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AllBalance } from '@/components/allBalance/AllBalans'
import { Card } from '@/components/card/Card'
import { NavigateCard } from '@/components/navigateCard/NavigateCard'
import { UserHeader } from '@/components/user/UserHeader'

export const Home = () => {
  const { navigate } = useTypedNavigation()

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <UserHeader name='Андрей Ваганов' />

          <AllBalance />

          <Card />

          <NavigateCard />

          <SberProgram />

          <Pressable onPress={() => navigate('AddProduct')} className='mt-5 ml-5'>
            <Text>AddProduct</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>


    </>
  )
}
