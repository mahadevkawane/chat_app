import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";
import Chat from './screens/Chat';
import room from './screens/room';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="room"
          component={room}
          options={{
            headerShown: false
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}