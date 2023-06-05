import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.inputBg, flex: 1},
  bank: {
    fontWeight: '700',
    fontSize: 36,
    color: '#fff',
    marginTop: 50,
  },
  bankText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
  },
  subText: {
    color: '#002D57',
    fontWeight: '700',
    fontSize: 24,
  },
  background: {height: 465, width: '98%', flex: 1, paddingLeft: 20},
  ellipse: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 54,
    justifyContent: 'space-between',
  },
  ellipse2: {
    position: 'absolute',
    top: -200,
  },
  ellipse3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 125,
  },
  member: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  memberText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
