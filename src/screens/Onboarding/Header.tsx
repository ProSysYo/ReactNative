import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from 'shared/theme';

type Props = {
  skip: () => void;
};

export const Header: React.FC<Props> = props => {
  const {skip} = props;
  return (
    <View
      style={{
        height: SIZES.height * 0.03,
        alignItems: 'flex-end',
        paddingHorizontal: 15,
      }}>
      <TouchableOpacity onPress={skip}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: COLORS.white,
          }}>
          Пропустить
        </Text>
      </TouchableOpacity>
    </View>
  );
};
