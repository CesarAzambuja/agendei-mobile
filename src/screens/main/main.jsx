import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from "react-native"
import Home from "../abahome/home";
import Calendar from "../abacalendar/calendar";
import Profile from "../abaProfile/profile";
import icon from "../../constants/icon";


const Tab = createBottomTabNavigator();


function Main (){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>

            <Tab.Screen name="Agendamento" component={Calendar} options={{
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10 }}/>
                },
                tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>

            <Tab.Screen name="Perfil" component={Profile} options={{
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                     return <Image source={icon.profile} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
}

export default Main