import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './SecondStyle';
// import MySwiperComponent from '../../components/Swiper';
import Vector4 from '../../assets/images/Vector4.svg';
import Vector5 from '../../assets/images/Vector5.svg';
import Vector6 from '../../assets/images/Vector6.svg';
import Vector7 from '../../assets/images/Vector7.svg';
import Tran from '../../components/Tran';
import {useNavigation} from '@react-navigation/native';
import MyFlatListComponent from '../../components/Flat';
import SecondFlat from '../../components/SecondFlat';
import {verticalScale} from 'react-native-size-matters';

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
      <MyFlatListComponent />
      <Tran />
      <View style={{marginTop: verticalScale(20)}}>
        <Text style={styles.card}>My Cards</Text>
      </View>
      <SecondFlat />
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.scroll}>
          <TouchableOpacity onPress={() => navigation.navigate('ThirdScreen')}>
            <Image source={require('../../assets/images/Vector3.png')} />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/Frame7.png')}
            style={{marginLeft: 14}}
          />
          <Image
            source={require('../../assets/images/Frame8.png')}
            style={{marginLeft: 14}}
          />
          <Image
            source={require('../../assets/images/Frame7.png')}
            style={{marginLeft: 14}}
          />
        </View>
      </ScrollView> */}

      <View style={styles.Bottom}>
        <TouchableOpacity>
          <Vector5 />
        </TouchableOpacity>
        <TouchableOpacity>
          <Vector4 />
        </TouchableOpacity>
        <TouchableOpacity>
          <Vector6 />
        </TouchableOpacity>
        <TouchableOpacity>
          <Vector7 />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SecondScreen;
