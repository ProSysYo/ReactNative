import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from 'shared/theme';
import {SlideItem} from './types';

export const Slide: React.FC<{item: SlideItem}> = ({item}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
      <Image
        source={item?.image}
        style={{
          height: '60%',
          width: SIZES.width,
          resizeMode: 'contain',
        }}
      />
      <View>
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
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    maxWidth: SIZES.width,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
