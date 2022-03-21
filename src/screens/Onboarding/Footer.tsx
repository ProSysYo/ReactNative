import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from 'shared/theme';
import {slides} from './slides';

type Props = {
  currentSlideIndex: number;
  goToNextSlide: () => void;
  navigateTo: () => void;
};

export const Footer: React.FC<Props> = props => {
  const {currentSlideIndex, goToNextSlide, navigateTo} = props;
  return (
    <View style={styles.footerContainer}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && {
                backgroundColor: COLORS.white,
                width: 20,
              },
            ]}
          />
        ))}
      </View>

      <View>
        {currentSlideIndex === slides.length - 1 ? (
          <View style={{height: 50}}>
            <TouchableOpacity style={styles.btn} onPress={navigateTo}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: COLORS.indigo,
                }}>
                Разрешить уведомления
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{height: 50}}>
            <TouchableOpacity style={styles.btn} onPress={goToNextSlide}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: COLORS.indigo,
                }}>
                Далее
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 5,
    width: 5,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    height: SIZES.height * 0.1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderwidth: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '-30%',
  },
});
