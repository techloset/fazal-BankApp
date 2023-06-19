import {StyleSheet} from 'react-native';
import {commonColors} from '../../assets/colors/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../responsiveNess';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.inputBg,
    flex: 1,
  },
  background: {
    flex: 1,
    height: heightPixel(840),
    paddingRight: moderateScale(20),
    // backgroundColor: '#000',
  },

  bank: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#fff',
    marginTop: scale(40),
    paddingLeft: pixelSizeHorizontal(20),
  },
  bankText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    textAlign: 'justify',
    marginLeft: moderateScale(10),
  },
  subText: {
    color: '#002D57',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    paddingLeft: pixelSizeHorizontal(20),
  },
  ellipse: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(30),
    justifyContent: 'space-between',
    // backgroundColor: '#000',
    paddingLeft: pixelSizeHorizontal(20),
  },
  ellipse2Container: {
    // position: 'relative',
    // bottom: verticalScale(10),
    // left: scale(0),
    // right: scale(0),
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#000',
    // height: screenHeight * 0.15,
    // marginTop: 40,
    // width: '100%',
  },
  ellipse2: {
    // position: 'absolute',
    top: -25,
    // bottom: 30,
    // marginRight: 30,
    marginLeft: verticalScale(-55),
    // marginLeft: 10,
    // marginTop: '-7%',
    // width: '100%',
    // height: 'auto',
    // aspectRatio: 1,
  },
  ellipse3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // width: screenWidth * 0.35,
    // backgroundColor: '#000',
  },
  buttonContainer: {
    marginTop: verticalScale(132),
    alignItems: 'center',
  },
  member: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(11),
    marginTop: scale(10),
  },
  memberText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-Medium',
  },
});
