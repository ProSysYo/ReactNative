import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation/Routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/RootStack';
import {slides} from './slides';
import {COLORS, SIZES} from 'shared/theme';
import {Slide} from './Slide';
import {Footer} from './Footer';
import {Header} from './Header';

export const OnboardingScreen: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<FlatList>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * SIZES.width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const navigateTo = () => {
    navigation.replace(Routes.Home);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.indigo}}>
      <StatusBar backgroundColor={COLORS.indigo} />
      <Header />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: SIZES.height * 0.8}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer
        navigateTo={navigateTo}
        goToNextSlide={goToNextSlide}
        currentSlideIndex={currentSlideIndex}
      />
    </SafeAreaView>
  );
};
