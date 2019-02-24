import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import colors from '../styles/colors';

export default class Button extends Component {
    render() {
        const btnStyle = {
            button: {
                borderWidth: 2,
                borderColor: colors.white2,
                width: '100%',
                borderRadius: 20,
                marginVertical: 10,
                backgroundColor: this.props.bgcolor != null ? this.props.bgcolor : colors.whats
            },
            buttonText: {
                color: this.props.textColor,
                fontWeight: 'bold',
                paddingHorizontal: 20,
                paddingVertical: 10,
                textAlign: 'center'
            },
        }
        return (
            <TouchableOpacity
                onPress={() => { this.props.onPress() }}
                style={btnStyle.button}
                disabled={this.props.loading}
            >
                {this.props.loading && <ActivityIndicator style={btnStyle.buttonText} color={colors.black} animating />}

                {!this.props.loading && <Text style={btnStyle.buttonText}>{this.props.text}</Text>}
            </TouchableOpacity>
        );
    }
}