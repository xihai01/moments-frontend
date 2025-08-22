//import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text } from 'react-native';
//import AuthForm from '../components/AuthForm';
import Button from 'src/components/Button';
import tw from 'twrnc';

// note to self: removed previously added "w-65 h-auto pb-20 z-1" from rfgLogo

const logo = require('assets/rfgLogo.png');

function LoginScreen({ navigation }) {
  //const navigation = useNavigation();
  return (
    <View style={tw`flex-col justify-around items-center w-full h-full`}>
      <View style={tw`justify-center items-center`}>
        <Image source={logo} style={tw``} />
      </View>
      <View style={tw`flex-col justify-center items-center gap-6`}>
        <Button
          onPress={() => console.log('Login pressed')}
          buttonStyle={tw`bg-blue-500 p-4 rounded-full w-80 bg-black`}
          textStyle={tw`text-white text-center`}>
          Create Account
        </Button>
        <View style={tw`flex-row gap-8 px-8 w-full`}>
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyScreen')}>
            <Text style={tw`text-black underline`}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TermsScreen')}>
            <Text style={tw`text-black underline`}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
