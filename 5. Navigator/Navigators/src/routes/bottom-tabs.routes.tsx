import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Home } from "../screens/Home/Home";
import { Gallery } from "../screens/Gallery/Gallery";

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return (
        <Navigator>
            <Screen name="home" component={Home} options={{
                tabBarIcon: ({size}) => (<MaterialCommunityIcons name="home" color="red" size={size}/>)
            }}/>
            <Screen name="gallery" component={Gallery} options={{
                tabBarIcon: () => (<MaterialCommunityIcons name="view-gallery" size={24} color={"blue"} />),
                title: "Main"
            }}/>
        </Navigator>
    )
}