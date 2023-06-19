import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import {styles} from './HomeStyle';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

function Home({navigation}) {
  const handlePress = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Group18.png')}
        style={styles.background}>
        <View style={styles.ellipse}>
          <View style={styles.ellipse3}>
            <Image source={require('../../assets/images/Ellipse3.png')} />
            <Text style={styles.bankText}>Bank App</Text>
          </View>
          <Image source={require('../../assets/images/Vector.png')} />
        </View>

        <Text style={[styles.bank, {width: screenWidth * 0.8}]}>
          Create Bank account in 3 minutes
        </Text>
        <Text style={[styles.subText, {marginTop: screenWidth * 0.06}]}>
          Easy.
        </Text>
        <Text style={styles.subText}>Fast.</Text>
        <Text style={styles.subText}>Secure.</Text>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Button title={'Create Account'} />
      </View>
      <TouchableOpacity style={styles.member} onPress={handlePress}>
        <Text style={styles.memberText}>Already Member?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
