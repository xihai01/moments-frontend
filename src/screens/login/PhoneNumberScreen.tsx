//import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
//import AuthForm from '../components/AuthForm';
import Button from 'src/components/Button';
import tw from 'twrnc';

// note to self: removed previously added "w-65 h-auto pb-20 z-1" from rfgLogo
const logo = require('assets/registration/illustration.png');

function PhoneNumberScreen({ navigation }) {
  const [countryCode, setCountryCode] = useState<CountryCode>('CA');
  const [country, setCountry] = useState<Country | null>(null);
  //const [withFlag, setWithFlag] = useState(true);
  //const [withCallingCode, setWithCallingCode] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
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
        <Text>What's your phone number?</Text>
        <View
          style={tw`flex-row items-center w-80 bg-white border border-gray-300 rounded-full px-4`}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCode
            withFilter
            onSelect={(country) => {
              setCountryCode(country.cca2);
              setCountry(country);
            }}
            containerButtonStyle={tw``}
          />
          <Text style={tw`mr-2 h-full pr-2 py-4 border-r-2 border-[#EFEFEF]`}>{country?.callingCode ? `+${country.callingCode[0]}` : '+1'}</Text>
          <TextInput
            testID="phone-number-input"
            style={tw``}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>
      <Button
        onPress={() =>
          console.log(
            `Send phone number pressed: +${country?.callingCode?.[0] || '1'}${phoneNumber}`
          )
        }
        buttonStyle={tw`bg-blue-500 p-4 rounded-full w-80 bg-black`}
        textStyle={tw`text-white text-center`}>
        Send
      </Button>
    </View>
  );
}

export default PhoneNumberScreen;
