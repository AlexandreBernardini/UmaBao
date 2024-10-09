import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import {createNativeStackNavigator} from "react-native-screens/native-stack";

type RootStackParamList = {
    Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator >
                <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}