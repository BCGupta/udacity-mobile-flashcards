import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from './TouchButton';
import TextButton from './TextButton';
import { gray, textGray, green, white, red } from '../utils/colors';
import { connect } from 'react-redux';
import { removeDeck } from '../actions/index';

export class DeckDetail extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        removeDeck: PropTypes.func.isRequired,
        decks: PropTypes.object.isRequired
    };
    handleDelete = id => {
        this.props.removeDeck(id);
        this.props.navigation.goBack();
    };
    render() {
        const { navigation, decks } = this.props;

        const title = navigation.getParam('title', 'Undefined title');
        const deck = decks[title];

        return (
            <View style={styles.container}>
                <Deck id={deck.title} />
                <View>
                    <TouchButton
                        btnStyle={{ backgroundColor: white, borderColor: textGray }}
                        txtStyle={{ color: textGray }}
                        onPress={() =>
                            this.props.navigation.navigate('AddCard', { title: deck.title })
                        }
                    >
                        Add Card
                    </TouchButton>
                    <TouchButton
                        btnStyle={{ backgroundColor: green, borderColor: white }}
                        txtStyle={{ color: white }}
                        onPress={() => this.props.navigation.navigate('Quiz')}
                    >
                        Start Quiz
                    </TouchButton>
                </View>
                <TextButton
                    txtStyle={{ color: red }}
                    onPress={() => this.handleDelete(deck.title)}
                >
                    Delete Deck
                </TextButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        backgroundColor: gray
    }
});

const mapStateToProps = decks => ({ decks });

export default connect(
    mapStateToProps,
    { removeDeck }
)(DeckDetail);