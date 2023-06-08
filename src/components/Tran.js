import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './TranStyle';

function Tran() {
  return (
    <View style={styles.container}>
      <View style={styles.trans}>
        <Text style={styles.transText}>Transcations</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <View style={styles.logo}>
        <Image source={require('../assets/images/Starbucks.png')} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <View style={styles.textCont}>
            <Text style={styles.Text}>Starbucks</Text>
            <Text style={styles.text2}>25 OCT 2021 12:20</Text>
          </View>
          <Text style={styles.text3}>-$5.81</Text>
        </View>
      </View>
      <View style={styles.logo}>
        <Image source={require('../assets/images/Spotify.png')} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <View style={styles.textCont}>
            <Text style={styles.Text}>Spotify</Text>
            <Text style={styles.text2}>25 OCT 2021 12:20</Text>
          </View>
          <Text style={styles.text3}>-$3.81</Text>
        </View>
      </View>
      <View style={styles.logo}>
        <Image source={require('../assets/images/Netflix.png')} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <View style={styles.textCont}>
            <Text style={styles.Text}>Netflix</Text>
            <Text style={styles.text2}>25 OCT 2021 12:20</Text>
          </View>
          <Text style={styles.text3}>-$15.81</Text>
        </View>
      </View>
    </View>
  );
}

export default Tran;
