import React from 'react';
import {
        Text,
        View
        } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
        </View>
    )
};

const styles = {
    viewStyle:{
        // flex: 1,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        width: '100%'
    },
    textStyle:{
        fontSize: 40,
        marginTop: 0
    }
};

export default Header;