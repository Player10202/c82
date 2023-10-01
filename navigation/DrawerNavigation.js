import React from "react";
import {createDrawerNavigation} from "@react-navigation/drawer";
import TabNavigator from "./tabnavigator";
import Profile from "../screens/createprofile";

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;