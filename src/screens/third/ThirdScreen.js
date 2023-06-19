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
import Group17 from '../../assets/images/Group17.svg';
import Tran from '../../components/Tran';
import Button from '../../components/Button';
import {styles} from './ThirdStyle';
import {useNavigation} from '@react-navigation/native';
import {commonColors} from '../../assets/colors/Colors';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
// import Ellipse7 from '../../assets/images/Ellipse7.svg';

function ThirdScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: commonColors.inputBg,
          height: '32%',
          // marginLeft: 10,
          // padding: 10,
        }}>
        <ImageBackground
          source={require('../../assets/images/Group15.png')}
          style={styles.background}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Vector8 style={{marginTop: 10}} />
          </TouchableOpacity>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total Balance</Text>
            <Image source={require('../../assets/images/Visa.png')} />
          </View>
          <Text style={styles.text2}>$4,661.91</Text>
          <View style={styles.view}>
            <Text style={styles.text3}>****4661</Text>
            <Text style={styles.text4}>12/26</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.view2}>
        <Text style={styles.week}>Weekly | </Text>
        <Text
          style={{fontSize: 16, fontFamily: 'Inter-Medium', color: '#002D57'}}>
          Monthly
        </Text>
        <Text style={styles.week}> | Yearly</Text>
      </View>
      <ImageBackground
        source={require('../../assets/images/Vector10.png')}
        style={{width: '100%', height: verticalScale(125)}}>
        <Group17 />
      </ImageBackground>
      <View style={styles.view3}>
        <Text style={styles.month}>Feb</Text>
        <Text style={styles.month}>Mar</Text>
        <Text style={styles.month}>Apr</Text>
        <Text style={styles.month}>May</Text>
        <Text
          style={{fontSize: 14, fontFamily: 'Inter-Medium', color: '#002D57'}}>
          Jun
        </Text>
        <Text style={styles.month}>Jul</Text>
      </View>
      <ScrollView style={{marginBottom: 24}}>
        <View style={{padding: 20}}>
          <Tran />
        </View>
        <Button title={'Order a new card'} style={{marginTop: 24}} />
      </ScrollView>
    </View>
  );
}

export default ThirdScreen;
