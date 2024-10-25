
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from "react-native"
import Home from "../abahome/home";
import Calendar from "../abacalendar/calendar";
import Profile from "../abaProfile/profile";
import icon from "../../constants/icon";


const Tab = createBottomTabNavigator();


function Main (){
    return<Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                unmountOnBlur: true,
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>

            <Tab.Screen name="Calendar" component={Calendar} options={{
                unmountOnBlur: true,
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10 }}/>
                },
                tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>

            <Tab.Screen name="Perfile" component={Profile} options={{
                unmountOnBlur: true,
                headerTitle: () => {
                    return <Image source={icon.logo} style={{width: 125, height: 29, marginBottom: 10}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                     return <Image source={icon.profile} style={{width: 28, height: 28, opacity: focused ? 1 : 0.3}}/>
                }
            }}/>
        </Tab.Navigator>
}

export default Main