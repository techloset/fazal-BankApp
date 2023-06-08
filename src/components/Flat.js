import React, {useState, useRef} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {commonColors} from '../assets/colors/Colors';

const MyFlatListComponent = () => {
  const slidesData = [
    {id: 'slide1', backgroundColor: commonColors.card},
    {id: 'slide2', backgroundColor: commonColors.inputBgLine},
    {id: 'slide3', backgroundColor: commonColors.green},
  ];

  const renderItem = ({item}) => (
    <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
      <View style={styles.slideContent}>
        <View style={styles.slideHeader}>
          <Text style={styles.totalBalanceText}>Total Balance</Text>
          <Image
            source={require('../assets/images/Vector2.png')}
            style={{marginRight: 17}}
          />
        </View>
        <Text style={styles.balanceText}>$ 17,982.22</Text>
        <Text style={styles.bcmText}>BCM</Text>
        <Text style={styles.accountText}>GBPM12 ATR51 U78AA 1234</Text>
      </View>
    </View>
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderDot = ({index}) => (
    <TouchableOpacity
      onPress={() => carouselRef.current.scrollToIndex({index})}
      key={index}>
      <View
        style={[
          styles.dot,
          index === activeIndex ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    </TouchableOpacity>
  );

  const handleScroll = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(contentOffset / viewSize);
    setActiveIndex(activeIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselRef}
        data={slidesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
        scrollEventThrottle={16}
      />

      <View style={styles.dotContainer}>
        {slidesData.map((_, index) => renderDot({index}))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 161,
    marginTop: 20,
  },
  slide: {
    flex: 1,
    // padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 300,
  },
  defaultSlideContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    // padding: 20,
    marginTop: 20,
    marginLeft: 23,
  },
  slideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalBalanceText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#000000',
  },
  balanceText: {
    fontSize: 24,
    fontFamily: 'Inter-Black',
    color: '#000000',
    // marginTop: 20,
  },
  bcmText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#000000',
    marginTop: 25,
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#000000',
    marginBottom: 15,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 20,
    marginRight: 6,
    backgroundColor: '#FE6310',
    marginTop: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    backgroundColor: '#FE6310',
    width: 22,
  },
  inactiveDot: {
    backgroundColor: '#C4C4C4',
  },
};

export default MyFlatListComponent;
