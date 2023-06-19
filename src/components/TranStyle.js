import {StyleSheet} from 'react-native';
import {commonColors} from '../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
    marginTop: 20,
  },
  trans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#000000',
  },
  see: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FE6310',
  },
  logo: {
    flexDirection: 'row',
    marginTop: 20,
    // justifyContent: 'space-between',
    gap: 10,
  },
  textCont: {
    marginTop: 5,
    // marginRight: 130,
  },
  Text: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#002D57',
  },
  text2: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#A5A5A5',
    marginTop: 5,
  },
  text3: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#002D57',
  },
});
