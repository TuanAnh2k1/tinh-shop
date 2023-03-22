/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from '../actions';
import AddMembers from '../screens/AddMembers/AddMembers';
import Home from '../screens/Home/Home';
import ProductsScreens from '../screens/ProductsScreens/ProductsScreen';
import QRCodeInvite from '../screens/QrCode/QRCodeInvite';
import AddShirt from '../screens/Shirt/AddShirt/AddShirt';
import EmailShirt from '../screens/Shirt/EmailShirt/EmailShirt';
import Shirt from '../screens/Shirt/Shirt';
import ShirtDetail from '../screens/Shirt/ShirtDetail/ShirtDetail';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Single from '../screens/Single/Single';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Product"
        component={ProductsScreens}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddMembers"
        component={AddMembers}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Shirt"
        component={Shirt}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ShirtDetail"
        component={ShirtDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EmailShirt"
        component={EmailShirt}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddShirt"
        component={AddShirt}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Single"
        component={Single}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="QRCodeInvite"
        component={QRCodeInvite}
      />
    </Stack.Navigator>
  );
}

const Mainnavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default Mainnavigator;
