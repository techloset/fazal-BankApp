import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {commonColors} from '../assets/colors/Colors';

function Button({title}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: commonColors.button,
        width: '90%',
        borderRadius: 10,
        // marginBottom: 10,
        marginHorizontal: 18,
        padding: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontFamily: 'Inter-SemiBold',
          color: '#000',
        }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: '#FE6310',
          borderRadius: 50,
          width: 13,
          height: 13,
          marginTop: 5,
          marginLeft: 10,
        }}
      />
    </TouchableOpacity>
  );
}

export default Button;
