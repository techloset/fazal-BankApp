import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';

function Button({title}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFD703',
        width: '90%',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 18,
        padding: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '700',
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
