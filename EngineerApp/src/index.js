import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from './screens/Dashboard'
import BlankPage from './screens/BlankPage'

import DashboardStack from './navigator/DashboardStack'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" 
          component={DashboardStack} 
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          />
        <Tab.Screen name="Blank" 
          component={BlankPage}
          options={{
            tabBarLabel: 'Other',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
           />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
