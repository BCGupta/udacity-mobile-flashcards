import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import DeckList from '../decks/ListOfDecks';
import AddDeck from '../decks/NewDeck';
import DeckDetail from '../decks/Details';
import AddCard from '../decks/NewCard';
import Settings from "../Settings";
import Quiz from '../quiz/Quiz';

import { darkGray, white, green, lightGreen } from '../../utils/appColors';

const isIOS = Platform.OS === 'android' ? true : false;

const routeConfigs = {
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
                    name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
                    size={30}
                    color={tintColor}
                />
            )
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-add" size={30} color={tintColor} />
            )
        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-build" size={30} color={tintColor} />
            )
        }
    }
};


const tabNavigatorConfig = {
    navigationOptions: {
        header: null
    },
    defaultNavigationOptions: {
        bounces: true
    },
    tabBarOptions: {
        activeTintColor: isIOS ? green : white,
        style: {
            // height: isIOS ? 56 : 70,
            height: 60,
            backgroundColor: isIOS ? white : green,
            shadowColor: 'rgba(0,0,0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1,
            borderTopWidth: 1,
            borderTopColor: darkGray
        },
        labelStyle: {
            // fontSize: isIOS ? 11 : 12
            fontSize: 12,
            fontWeight: 'bold'
        },
        tabStyle: {
            // marginTop: isIOS ? 0 : 5
            marginTop: 5,
            marginBottom: 3
        },
        showIcon: true
    }
};

// const Tabs = isIOS
//   ? createBottomTabNavigator(routeConfigs, tabNavigatorConfig)
//   : createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig);
const Tabs = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: green,
            headerStyle: {
                backgroundColor: lightGreen
                // height: 20
            },
            title: 'Deck Details'
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: green,
            headerStyle: {
                backgroundColor: lightGreen
                // height: 20
            },
            headerTitleStyle: {
                textAlign: 'center',
                justifyContent: 'center',
            },
            title: 'Add Card'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: green,
            headerStyle: {
                backgroundColor: lightGreen
                // height: 20
            },
            title: 'Quiz'
        }
    }
});

export default MainNavigator;