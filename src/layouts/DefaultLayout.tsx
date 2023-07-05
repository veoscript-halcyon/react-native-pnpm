import React from 'react';
import tw from '../styles/tailwind';
import {SafeAreaView, View} from 'react-native';

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({children}): JSX.Element => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-col w-full`}>{children}</View>
    </SafeAreaView>
  );
};

export default DefaultLayout;
