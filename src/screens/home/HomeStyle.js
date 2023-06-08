import {StyleSheet} from 'react-native';
import {commonColors} from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: commonColors.inputBg, flex: 1},
  bank: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginTop: 50,
  },
  bankText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    textAlign: 'justify',
  },
  subText: {
    color: '#002D57',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
  },
  background: {
    width: '97.5%',
    flex: 1,
    // padding: 20,
    // backgroundColor: '#000',
    // marginBottom: 40,
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  ellipse: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  ellipse2: {
    position: 'absolute',
    // top: -110,
    marginLeft: -15.5,
    marginTop: '-5%',
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
    // marginBottom: 44,
    marginTop: 17,
  },
  memberText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
