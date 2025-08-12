import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../screens/Home/Home';
import { Gallery } from '../screens/Gallery/Gallery';

const {Navigator, Screen} = createDrawerNavigator();

export function DrawerRoutes(){
    return (
        <Navigator>
            <Screen name='Home' component={Home}/>
            <Screen name='Gallery' component={Gallery}/>
        </Navigator>
    )
}