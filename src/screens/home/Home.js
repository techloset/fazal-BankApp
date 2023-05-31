import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import Button from '../../components/Button';
import {styles} from './HomeStyle';

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Ellipse1.png')}
        style={styles.background}>
        <View style={styles.ellipse}>
          <View style={styles.ellipse3}>
            <Image source={require('../../assets/images/Ellipse3.png')} />
            <Text style={styles.bankText}>Bank App</Text>
          </View>
          <Image source={require('../../assets/images/Vector.png')} />
        </View>

        <Text style={styles.bank}>Create Bank account in 3 minutes</Text>
        <Text style={[styles.subText, {marginTop: 25}]}>Easy.</Text>
        <Text style={styles.subText}>Fast.</Text>
        <Text style={styles.subText}>Secure.</Text>
      </ImageBackground>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../assets/images/Ellipse2.png')}
          style={styles.ellipse2}
        />
      </View>
      <Button title={'Create Account'} />
      <View style={styles.member}>
        <Text style={styles.memberText}>Already Member?</Text>
      </View>
    </View>
  );
}

export default Home;
