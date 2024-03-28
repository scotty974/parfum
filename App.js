

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Feed from "./Feed";
import Zoom from "./Zoom";
import Collections from "./Collections";
import Musee from "./Musee";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Feed' component={Feed} options={{headerShown: true}}/>
        <Stack.Screen name='Zoom' component={Zoom} options={{headerShown: true}}/>
        <Stack.Screen name='Musée du parfum' component={Musee} options={{headerShown: true}}/>
        <Stack.Screen name='Collections' component={Collections} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

