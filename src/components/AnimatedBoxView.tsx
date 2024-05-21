import React from 'react';
import {View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function AnimatedBoxView() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'blue'},
          animatedStyles,
        ]}
      />
      <Button
        title="Move"
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
      />
    </View>
  );
}
