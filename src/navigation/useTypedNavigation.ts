import { NavigationProp, useNavigation } from '@react-navigation/native'
import { TypeRootStackParamsList } from '@/navigation/navigationTypes'

export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamsList>>()
