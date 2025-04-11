import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BannerTop } from '@/components/BannerTop';
import { MenuFunction } from '@/components/MenuFunction';
import { FullWindowOverlay } from 'react-native-screens';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets(); 

  return (
    <ParallaxScrollView>
      <BannerTop style={{ padding: 0, margin: 0, marginTop: insets.top, marginBottom: insets.bottom, width: '100%' }} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          <ThemedText style={{ color: 'red', fontFamily: 'DancingScript' }}>Make your life!</ThemedText> Libary Covers
        </ThemedText>
        <Image source={{ uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' }} style={styles.logoHome} />
      </ThemedView>
      <MenuFunction />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  logoHome: {
    height: 50,
    width: 50,
    borderRadius: 50,
  }
});
