
import React, { Component } from "react";
import Ripple from "react-native-material-ripple";
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';
import colors from "../styles/colors";

export default props => (
    <Ripple
        onPress={() => { props.onPress ? props.onPress() : Actions.pop() }}
        style={{ width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
        rippleContainerBorderRadius={20}
        rippleCentered={true}
        rippleSize={40}>
        <Icon name='arrow-back' style={{ color: props.arrowWhite ? colors.white : colors.black }} />
    </Ripple>
);
