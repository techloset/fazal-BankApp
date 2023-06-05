import React from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../assets/colors/Colors';

const MySwiperComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          loop={true}
          autoplay={true}
          paginationStyle={{marginBottom: -40}}
          activeDotColor="#FE6310">
          <View style={styles.slide3}>
            <Text>Slide 0</Text>
            <Text> rgtrhrhtr</Text>
          </View>
          <View style={styles.slide2}>
            <Text>Slide 0</Text>
            <Text> rgtrhrhtr</Text>
          </View>
          <View style={styles.slide1}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 16, fontWeight: 500}}>Total Balance</Text>
              <Image source={require('../assets/images/Vector2.png')} />
            </View>
            <Text style={{fontSize: 24, fontWeight: 900}}>$ 17,982.22</Text>
            <Text style={{fontSize: 14, fontWeight: 700, marginTop: 33}}>
              BCM
            </Text>
            <Text style={{fontSize: 14, fontWeight: 500}}>
              GBPM12 ATR51 U78AA 1234
            </Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 161,
    marginTop: 20,
  },
  swiperContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.card,
    borderRadius: 10,
  },
  slide2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  slide3: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FE6310',
    borderRadius: 10,
  },

  slideText: {
    fontSize: 16,
    color: 'white',
  },
};

export default MySwiperComponent;
