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

function Home({navigation}) {
  const handlePress = () => {
    navigation.navigate('SecondScreen');
  };

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

        <Text style={[styles.bank, {width: 250}]}>
          Create Bank account in 3 minutes
        </Text>
        <Text style={[styles.subText, {marginTop: 27}]}>Easy.</Text>
        <Text style={styles.subText}>Fast.</Text>
        <Text style={styles.subText}>Secure.</Text>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/images/Ellipse2.png')}
            style={styles.ellipse2}
          />
        </View>
      </ImageBackground>
      {/* <View style={{position: 'relative'}}>
        <Image
          source={require('../../assets/images/Ellipse2.png')}
          style={styles.ellipse2}
        />
      </View> */}
      <View style={{marginTop: 200}}>
        <Button title={'Create Account'} />
      </View>
      <TouchableOpacity style={styles.member} onPress={handlePress}>
        <Text style={styles.memberText}>Already Member?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
