import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';
import { gray, green } from '../utils/colors';

export class AddDeck extends Component {
    state = {
        text: ''
    };
    handleChange = text => {
        this.setState({ text });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 60 }} />
                <View style={styles.block}>
                    <Text style={styles.title}>What is the title of your new deck?</Text>
                </View>
                <View style={[styles.block]}>
                    <TextInput
                        style={styles.input}
                        value={this.state.value}
                        onChangeText={this.handleChange}
                    />
                </View>
                <TouchButton
                    btnStyle={{ backgroundColor: green }}
                    onPress={() => console.log('deck created')}
                >
                    Create Deck
                </TouchButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        backgroundColor: gray
        // borderWidth: 1,
        // borderColor: 'red'
        // justifyContent: 'center'
    },
    block: {
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 32
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 20,
        height: 40,
        marginBottom: 20
    }
});

export default AddDeck;