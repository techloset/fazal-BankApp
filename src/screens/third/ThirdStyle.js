import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
// import {fonts} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
    fontWeight: 500,
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
});
