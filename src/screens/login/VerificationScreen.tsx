//import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
//import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
//import AuthForm from '../components/AuthForm';
import Button from 'src/components/Button';
import tw from 'twrnc';

// note to self: removed previously added "w-65 h-auto pb-20 z-1" from rfgLogo
const logo = require('assets/registration/verification.png');

function PhoneNumberScreen({ navigation }) {
  const [code, setCode] = useState('');
  //const navigation = useNavigation();
  return (
    <View style={tw`flex-col justify-around items-center w-full h-full p-4`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`flex w-full mt-16`}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={tw`justify-center items-center`}>
        <Image source={logo} style={tw`object-contain`} />
      </View>
      <View style={tw`flex-col justify-center items-center gap-6`}>
        <Text>Enter Verification Code</Text>
        <View
          style={tw`flex-row items-center w-80 bg-white border border-gray-300 rounded-full px-4`}>
          <TextInput
            testID="verification-code-input"
            style={tw`h-8`}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
        </View>
        <TouchableOpacity onPress={() => console.log('do something')} style={tw`flex w-full mt-16`}>
          <Text style={tw`text-black underline`}>Didn't Get A Code?</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => console.log(`Send verification code pressed: ${code}`)}
        buttonStyle={tw`bg-blue-500 p-4 rounded-full w-80 bg-black`}
        textStyle={tw`text-white text-center`}>
        Send
      </Button>
    </View>
  );
}

export default PhoneNumberScreen;
