import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Screens from '@/navigation/NavigationScreens'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { useAuth } from '@/modules/auth/Auth'

const Tab = createBottomTabNavigator()

export const Navigation = () => {
    const { auth } = useAuth()

    return (<>
        {!auth && 
            <NavigationContainer>
                <Screens.AuthScreen/>
            </NavigationContainer>
        }
        {auth &&
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={'Главная'}
                    screenOptions={() => ({
                        tabBarActiveTintColor: '#8757E8',
                        tabBarInactiveTintColor: '#ADADAD',
                        tabBarLabelStyle: {
                            fontSize: 12,
                            lineHeight: 14,
                            marginTop: 0
                        },
                        tabBarItemStyle: {
                            height: 50
                        },
                        tabBarStyle: {
                            height: 72,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    })}
                >
                    <Tab.Screen 
                        name="Главная" 
                        component={Screens.HomeScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => {
                                return <FeatherIcons name={'home'} size={size} color={color} />
                            }
                        }}
                    />
                    <Tab.Screen 
                        name="Для Вас" 
                        component={Screens.ForYouScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => {
                                return <FeatherIcons name={'activity'} size={size} color={color} />
                            }
                        }}
                    />
                    <Tab.Screen 
                        name="Документы" 
                        component={Screens.DocScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => {
                                return <FeatherIcons name={'file-text'} size={size} color={color} />
                            }
                        }}
                    />
                    <Tab.Screen 
                        name="Чат" 
                        component={Screens.ChatScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => {
                                return <FeatherIcons name={'message-square'} size={size} color={color} />
                            }
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        }
    </>)
}
