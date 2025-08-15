import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import tw from 'twrnc';

const Page1 = ({ checkboxes1 = [], handleCheckboxChange = () => {} }) => (
  <View style={tw`p-4`}>
    <Text style={tw`text-2xl text-center mb-4`}>1. Select all relevant Casa cases🔸</Text>

    <ScrollView style={tw`h-90`}>
      {checkboxes1.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxes1', checkbox.id)}
          containerStyle={tw`bg-transparent border-0`}
          textStyle={tw`text-base`}
        />
      ))}
    </ScrollView>
  </View>
);

export default Page1;
