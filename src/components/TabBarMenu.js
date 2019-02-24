import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default props => (
    <View>
        <Text>WhatsApp Clone</Text>
        <TabBar {...props} />
    </View>
)