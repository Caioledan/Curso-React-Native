import { createStackNavigator } from '@react-navigation/stack'
import { Home } from "../screens/Home/Home"
import { Gallery } from "../screens/Gallery/Gallery"

const {Screen, Navigator} = createStackNavigator()

export function StackRoutes(){
    return(
        <Navigator>
            <Screen name='home' component={Home} options={{
                title: 'Home',
                headerTintColor: "blue",
                headerShown: false,
            }}/>
            <Screen name='gallery' component={Gallery}/>
        </Navigator>
    )
}