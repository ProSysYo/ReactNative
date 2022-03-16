import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from 'shared/theme';
import {SlideItem} from './types';

export const Slide: React.FC<{item: SlideItem}> = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '70%', width: SIZES.width, resizeMode: 'contain'}}
      />
      <View style={{marginTop: 20}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: SIZES.width,
    height: 300,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
