import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import * as Constants  from 'expo';
import AppNavigator from './navigation/AppNavigator';

const store = createStore(
    reducer /* preloadedState, */,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
);

function FlashcardStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    );
}
FlashcardStatusBar.propTypes = {
    backgroundColor: PropTypes.string.isRequired
};

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <FlashcardStatusBar
                        backgroundColor="green"
                        barStyle="light-content"
                    />
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dde'
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: 50,
        // paddingBottom: 20,
        // paddingLeft: 20,
        // paddingRight: 20,
        // justifyContent: 'space-around'
        // borderWidth: 2,
        // borderColor: 'orange'
    }
});