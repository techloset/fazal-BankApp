import {StyleSheet} from 'react-native';
import {commonColors} from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
    flex: 1,
    padding: 20,
    // marginTop: 32,
  },
  ellipse: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  ellipse3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 125,
  },
  bankText: {
    color: '#002D57',
    fontSize: 18,
    fontWeight: 700,
  },
  trans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
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
  card: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  scroll: {
    marginTop: 20,
    // marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  dot: {
    // marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    width: 7,
    height: 7,
    borderRadius: 20,
    marginRight: 6,
  },
  dotImage: {
    marginLeft: 5,
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  listItemImage: {
    marginTop: 20,
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  paginationDot: {
    width: 7,
    height: 7,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
    marginRight: 6,
  },
  activeDot: {
    width: 22,
    backgroundColor: '#FE6310',
  },
  inactiveDot: {
    backgroundColor: '#C4C4C4',
  },
  dotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    flexDirection: 'row',
    // backgroundColor: '#000',
    // marginTop: 10,
    // marginBottom: 50,
  },
  dot: {
    backgroundColor: '#FE6310',
    height: 7,
    width: 22,
    borderRadius: 10,
  },
  dot1: {
    backgroundColor: '#C4C4C4',
    height: 7,
    width: 7,
    borderRadius: 10,
    marginLeft: 8,
  },
});
