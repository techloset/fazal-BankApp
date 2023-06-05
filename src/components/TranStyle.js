import {StyleSheet} from 'react-native';
import Colors from '../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  trans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  see: {
    fontWeight: '500',
    fontSize: 14,
    color: '#FE6310',
  },
  logo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textCont: {
    marginTop: 5,
    marginRight: 110,
  },
  Text: {
    fontSize: 14,
    fontWeight: 500,
    color: '#002D57',
  },
  text2: {
    fontSize: 12,
    fontWeight: 500,
    color: '#A5A5A5',
    marginTop: 5,
  },
  text3: {
    fontWeight: 700,
    fontSize: 14,
    color: '#002D57',
  },
});
