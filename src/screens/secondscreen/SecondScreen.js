import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './SecondStyle';
// import {SliderBox} from 'react-native-image-slider-box';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse}>
        <View style={styles.ellipse3}>
          <Image source={require('../../assets/images/Ellipse03.png')} />
          <Text style={styles.bankText}>Bank App</Text>
        </View>
        <Image source={require('../../assets/images/Vector01.png')} />
      </View>
      <View style={styles.trans}>
        <Text style={styles.transText}>Transcations</Text>
        <Text style={styles.see}>See All</Text>
      </View>
    </View>
  );
}

export default SecondScreen;
