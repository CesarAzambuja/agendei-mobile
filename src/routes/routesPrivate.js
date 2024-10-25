import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './../screens/main/main';
import Services from './../screens/services/services';
import Schedule from './../screens/schedule/schedule';
import { COLORS } from '../constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function RoutesPrivate(){

    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main} options={{headerShown: false}} />
            <Stack.Screen name="schedule" component={Schedule} options={{
                headerTitle: 'Fazer uma reservas',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: COLORS.blue,
            }}  />
            <Stack.Screen name="services" component={Services} 
            options={{
              headerTitle: 'Serviços',
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerTintColor: COLORS.white,
              headerStyle:{
                backgroundColor: COLORS.blue
                
              }
            }} />
        </Stack.Navigator>
    )

}

export default RoutesPrivate;