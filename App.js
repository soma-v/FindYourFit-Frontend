// App.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView , Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Upload from './screens/Upload';
import FindFit from './screens/FindFit';
import TodaysFit from './screens/TodaysFit';
import Settings from './screens/Settings';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DashboardScreen({ navigation }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    if (isDrawerOpen) {
      navigation.closeDrawer();
      setIsDrawerOpen(false);
    } else {
      navigation.openDrawer();
      setIsDrawerOpen(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={handleDrawerToggle}
        style={styles.hamburgerButton}
      >
        <View style={styles.hamburgerIcon} />
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}


export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Upload" component={Upload} />
        <Drawer.Screen name="FindFit" component={FindFit} />
        <Drawer.Screen name="TodaysFit" component={TodaysFit} />
        <Drawer.Screen name="Settings" component={Settings} />
     
      </Drawer.Navigator>
    </NavigationContainer>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },
});

