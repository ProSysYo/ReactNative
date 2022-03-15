import {fValue} from 'core/utils/ui';
import {Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const data = [
  {
    _id: '1',
    title: 'Play The Beat',
    description: 'Most beginner producers learn make creating by simple beats.',
    img: require('../assets/images/Guitar.png'),
  },
  {
    _id: '2',
    title: 'Live The Life',
    description:
      'In our daily lives, we often rush tasks trying to get them finish.',
    img: require('../assets/images/Enjoy.png'),
  },
  {
    _id: '3',
    title: 'Capture The Moment',
    description:
      'You are not alone. You have unique ability to go to another world.',
    img: require('../assets/images/Selfi.png'),
  },
];

export const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({changed}) => {
    setViewableItems(changed);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View style={styles.section}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Назад</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Пропустить</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View style={styles.section}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Следующий</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <ImageBackground source={item.img} style={styles.imgBackground} />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10 * 2,
      marginVertical: 10 * 2,
    },
    buttonText: {
      color: '#000',
      textAlign: 'center',
      fontSize: fValue(16),
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '30%',
      left: '45%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    dots: {
      width: 6,
      height: 6,
      borderRadius: 5,
      marginRight: 8,
      backgroundColor: 'grey',
    },
    listContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    itemContainer: {
      width: width,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    item: {
      alignItems: 'center',
      marginVertical: 10 * 2,
    },
    imgBackground: {
      width: 335,
      height: 335,
      resizeMode: 'contains',
    },
  });

  return (
    <View style={styles.listContainer}>
      {renderTopSection()}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        renderItem={renderFlatlistItem}
        extraData={width}
      />
      <View style={styles.dotsContainer}>
        {
          // No. of dots
          [...Array(data.length)].map((_, index) => (
            <View
              key={index}
              style={{...styles.dots, width: index === currentPage ? 24 : 6}}
            />
          ))
        }
      </View>
      {renderBottomSection()}
    </View>
  );
};
