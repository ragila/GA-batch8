import React from 'react'
import Dashboard from '../screens/Dashboard'
import OtherPage from '../screens/OtherPage'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function DashboardStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Other" component={OtherPage} />
        </Stack.Navigator>
    )
}