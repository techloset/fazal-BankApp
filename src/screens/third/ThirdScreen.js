import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Vector8 from '../../assets/images/Vector8.svg';
import Vector9 from '../../assets/images/Vector9.svg';
import Tran from '../../components/Tran';
import Button from '../../components/Button';
import {styles} from './ThirdStyle';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../assets/colors/Colors';

function ThirdScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: Colors.inputBg, height: '30%'}}>
        <ImageBackground
          source={require('../../assets/images/Ellipse5.png')}
          style={styles.background}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Vector8 style={{marginTop: 10}} />
          </TouchableOpacity>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total Balance</Text>
            <Image
              source={require('../../assets/images/Visa.png')}
              style={{marginRight: -35}}
            />
          </View>
          <Text style={styles.text2}>$4,661.91</Text>
          <View style={styles.view}>
            <Text style={styles.text3}>****4661</Text>
            <Text style={styles.text4}>12/26</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.view2}>
        <Text style={{fontSize: 16, fontFamily: 'Inter-Light'}}>Weekly | </Text>
        <Text
          style={{fontSize: 16, fontFamily: 'Inter-Medium', color: '#002D57'}}>
          Monthly
        </Text>
        <Text style={{fontSize: 16, fontFamily: 'Inter-Light'}}> | Yearly</Text>
      </View>
      <ImageBackground
        source={require('../../assets/images/Vector10.png')}
        style={{width: 395, height: 145}}>
        <Vector9 />
      </ImageBackground>
      <View style={styles.view3}>
        <Text style={{fontSize: 14, fontWeight: 500}}>Feb </Text>
        <Text style={{fontSize: 14, fontWeight: 500}}>Mar</Text>
        <Text style={{fontSize: 14, fontWeight: 500}}>Apr</Text>
        <Text style={{fontSize: 14, fontWeight: 500}}>May</Text>
        <Text style={{fontSize: 14, fontWeight: 500, color: '#002D57'}}>
          Jun
        </Text>
        <Text style={{fontSize: 14, fontWeight: 500}}>Jul</Text>
      </View>
      <ScrollView>
        <View style={{marginLeft: 10}}>
          <Tran />
        </View>
        <Button title={'Order a new card'} />
      </ScrollView>
    </View>
  );
}

export default ThirdScreen;
