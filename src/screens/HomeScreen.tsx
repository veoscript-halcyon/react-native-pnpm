import React from 'react';
import tw from '../styles/tailwind';
import {View, Text} from 'react-native';

import DefaultLayout from '../layouts/DefaultLayout';

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <View style={tw`flex-col items-center w-full p-5 bg-accent-1 rounded-b-[2rem]`}>
        <Text style={tw`font-raleway-black text-[18px] text-accent-4`}>Home Screen</Text>
      </View>
    </DefaultLayout>
  );
};

export default HomeScreen;
