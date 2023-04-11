import { TypeRootStackParamsList } from '@/navigation/navigationTypes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screen/home/Home'
import { OffersDetail } from '@/screen/offersDetail/OffersDetail'
import { LastNewsDetail } from '@/screen/lastNewsDetail/LastNewsDetail'
import { ForYou } from '@/screen/forYou/ForYou'
import { Doc } from '@/screen/doc/Doc'
import { Chat } from '@/screen/chat/Chat'
import { Auth } from "@/screen/auth/Auth";

const Stack = createNativeStackNavigator<TypeRootStackParamsList>()

export const AuthScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="Auth"
            component={Auth}
        />
    </Stack.Navigator>
);

export const HomeScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Home" 
            component={Home}
        />
    </Stack.Navigator>
);

export const ForYouScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen 
            name="ForYou" 
            component={ForYou}
        />
        <Stack.Screen 
            name="OffersDetail" 
            component={OffersDetail}
        />
        <Stack.Screen 
            name="LastNewsDetail" 
            component={LastNewsDetail}
        />

    </Stack.Navigator>
);

export const DocScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Doc" 
            component={Doc}
        />
    </Stack.Navigator>
);

export const ChatScreen = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="Chat" 
            component={Chat}
        />
    </Stack.Navigator>
);