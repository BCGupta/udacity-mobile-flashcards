import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Deck from './Deck';
import TouchButton from '../navigation/TouchButton';
import TextButton from '../navigation/TextButton';
import { gray, textGray, green, white, red } from '../../utils/appColors';
import { connect } from 'react-redux';
import { removeDeck } from '../../actions';
import { removeDeckAS } from '../../utils/projectAPI';

export class Details extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        removeDeck: PropTypes.func.isRequired,
        deck: PropTypes.object
    };
    shouldComponentUpdate(nextProps) {
        return nextProps.deck !== undefined;
    }
    handleDelete = id => {
        const { removeDeck, navigation } = this.props;

        removeDeck(id);
        removeDeckAS(id);

        navigation.goBack();
    };
    render() {
        const { deck } = this.props;

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
                        onPress={() =>
                            this.props.navigation.navigate('Quiz', { title: deck.title })
                        }
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

const mapStateToProps = (state, { navigation }) => {
    const title = navigation.getParam('title', 'undefined');
    const deck = state[title];

    return { deck };
};

export default connect(mapStateToProps, { removeDeck })(Details);