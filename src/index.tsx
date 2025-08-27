import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import Button from './components/Button';
import { Context as AuthContext } from './components/context/AuthContext';
import AccountScreen from './screens/AccountScreen';
import CaseContactCreateScreen from './screens/CaseContactCreateScreen';
import CaseContactDetailScreen from './screens/CaseContactDetailScreen';
import CaseContactListScreen from './screens/CaseContactListScreen';
import LoginScreen from './screens/login/LoginScreen';
import PhoneNumberScreen from './screens/login/PhoneNumberScreen';
import PrivacyScreen from './screens/login/PrivacyScreen';
import TermsScreen from './screens/login/TermsScreen';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function CustomTabBar({ navigation }: BottomTabBarProps) {
  return (
    <View style={tw`flex-row pb-10 items-center justify-around h-1/8 w-full bg-[#434343] py-1`}>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        onPress={() => navigation.navigate('CaseContactListScreen')}>
        My Cases
      </Button>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[25] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        onPress={() => navigation.navigate('CaseContactCreateScreen')}>
        Create
      </Button>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#3a9ca6] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        onPress={() => navigation.navigate('AccountScreen')}>
        Account
      </Button>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="CaseContactListScreen" component={CaseContactListScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="CaseContactCreateScreen" component={CaseContactCreateScreen} />
      <Tab.Screen name="CaseContactDetailScreen" component={CaseContactDetailScreen} />
    </Tab.Navigator>
  );
}

function Main() {
  const { state } = useContext(AuthContext);
  // Attempt to restore token from AsyncStorage when the app starts
  /*
  useEffect(() => {
    tryLocalSignin();
  }, []);
  */

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {state.isSignedIn ? (
          <RootStack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <RootStack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="PhoneNumberScreen"
              component={PhoneNumberScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="PrivacyScreen"
              component={PrivacyScreen}
              options={{ headerShown: true }}
            />
            <RootStack.Screen
              name="TermsScreen"
              component={TermsScreen}
              options={{ headerShown: true }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

//registerRootComponent(App);
export default Main;
