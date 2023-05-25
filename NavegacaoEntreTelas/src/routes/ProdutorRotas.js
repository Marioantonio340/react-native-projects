import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtor from "../telas/Produtor";
import Home from "../telas/Home";
export default function ProdutorRotas({ComponentePrincipal = Home}) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
            <Stack.Screen name='Produtor' component={Produtor} />

        </Stack.Navigator>
    );
}