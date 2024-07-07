import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-paper";
//import Notifications from "./Notifications";
//import MoreScreen from "./MoreScreen";
//import Bookings from "./Bookings";
import  Icon from "react-native-vector-icons/FontAwesome";
//import ListItem from "../components/ListItem";
//import MenuItem from "../components/MenuItem";
//import SwipingImages from "../components/SwipingImages";
//import TripsItem from "../components/TripsItem";

const Tab = createBottomTabNavigator();



function AppBottomTabNavigator(props: any) {
    return (
    //   <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle:{height: 75, paddingBottom: 10}}}>
    //     <Tab.Screen name="Home" component={Home} 
    //     options={
    //       {
    //         tabBarIcon: ()=><Icon name="home" size={20} color={'black'} ></Icon>,
    //         headerShown: false
    //       }   
    //         }/>
    //     <Tab.Screen name="Bookings" component={Bookings} options={{tabBarIcon: ()=><Icon name="calendar" size={20} color={'black'} ></Icon>}} />
    //     <Tab.Screen name="Notifications" component={Notifications} options={{tabBarIcon: ()=><Icon name="bell" size={20} color={'black'} ></Icon>}} />
    //     <Tab.Screen name="More" component={MoreScreen} options={{tabBarIcon: ()=><Icon name="bars" size={20} color={'black'} ></Icon>}} />
    //   </Tab.Navigator>
    <Text>Bottom tab navigator</Text>
    );
  }