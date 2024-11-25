import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import Local from "../pages/local";
import Doe from "../pages/doe";

export default function Routes(){
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false,
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Doe"
                component={Doe}
            />
             <Stack.Screen
                name="Local"
                component={Local}
            />
            

        </Stack.Navigator>
    )
}
