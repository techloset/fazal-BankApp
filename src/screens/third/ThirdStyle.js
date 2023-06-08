import {StyleSheet} from 'react-native';
import {commonColors} from '../../assets/colors/Colors';
// import {fonts} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
    flex: 1,
  },
  background: {
    width: '90%',
    flex: 1,
    padding: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#000',
    marginTop: 20,
  },
  text2: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginTop: 20,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 31,
  },
  text3: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
  },
  text4: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    marginRight: 100,
  },
  view2: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view3: {
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  week: {
    fontSize: 16,
    fontFamily: 'Inter-Light',
    color: '#686868',
  },
  month: {
    fontSize: 14,
    fontWeight: 500,
    color: '#A5A5A5',
  },
});
