import React, { useEffect } from 'react'
import tw from 'tailwind-rn';
import { Text ,View } from 'react-native';

export const FlexBoxScreen = () => {
  useEffect(() => {
    console.log('mounted FlexBox');
    return () => {
      console.log('un-mounted FlexBox');
    }
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>FlexBoxScreen</Text>
    </View>
  );
}

