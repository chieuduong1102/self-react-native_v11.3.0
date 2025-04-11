import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/app/(tabs)/index';
import GalleryScreen from '@/app/(tabs)/gallery'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
    </Stack.Navigator>
  );
}