import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './SecondStyle';
import MySwiperComponent from '../../components/Swiper';
import Vector4 from '../../assets/images/Vector4.svg';
import Vector5 from '../../assets/images/Vector5.svg';
import Vector6 from '../../assets/images/Vector6.svg';
import Vector7 from '../../assets/images/Vector7.svg';
import Tran from '../../components/Tran';
import {useNavigation} from '@react-navigation/native';

function SecondScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.ellipse}>
        <View style={styles.ellipse3}>
          <Image source={require('../../assets/images/Ellipse03.png')} />
          <Text style={styles.bankText}>Bank App</Text>
        </View>
        <Image source={require('../../assets/images/Vector01.png')} />
      </View>
      <MySwiperComponent />
      <Tran />
      <View style={{marginTop: 20}}>
        <Text style={styles.card}>My Cards</Text>
      </View>

      <View style={styles.scroll}>
        <Image source={require('../../assets/images/Vector3.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
          <Image
            source={require('../../assets/images/Frame7.png')}
            style={{marginLeft: 14}}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/Frame8.png')}
          style={{marginLeft: 14}}
        />
      </View>

      <View style={styles.dot}>
        <Image source={require('../../assets/images/Rectangle8.png')} />
        <Image
          source={require('../../assets/images/Rectangle9.png')}
          style={styles.dotImage}
        />
        <Image
          source={require('../../assets/images/Rectangle9.png')}
          style={styles.dotImage}
        />
      </View>
      <View style={styles.Bottom}>
        <Vector5 />
        <Vector4 />
        <Vector6 />
        <Vector7 />
      </View>
    </View>
  );
}

export default SecondScreen;
