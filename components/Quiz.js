import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Constants  from 'expo';
import Quiz_Android from './Quiz_Android';
import Quiz_iOS from './Quiz_iOS';

export class Quiz extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title', '');
        return {
            title: `${title} Quiz`
        };
    };
    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', '');

      /*  if (Constants.platform.android) {
            return <Quiz_Android title={title} />;
        }*/
        return <Quiz_iOS title={title} />;
    }
}

export default Quiz;