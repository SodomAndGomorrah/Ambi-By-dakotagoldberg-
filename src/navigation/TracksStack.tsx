import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import TracksScreen from '../screens/TracksScreen'
import TrackOverview from '../screens/TrackOverviewScreen'

const Stack = createStackNavigator();

function TracksStack() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name="Tracks" component={TracksScreen} />
            <Stack.Screen name="TrackOverview" component={TrackOverview} />
        </Stack.Navigator>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps)(TracksStack)