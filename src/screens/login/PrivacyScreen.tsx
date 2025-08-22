//import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import tw from 'twrnc';

function PrivacyScreen() {
  return (
    <View style={tw`justify-between items-center gap-3 flex-1 bg-[#f2f2f2]`}>
      <Text style={tw`text-lg font-bold`}>Privacy Policy</Text>
      <Text style={tw`text-base text-gray-600`}>
        This is the privacy policy for our application...
      </Text>
    </View>
  );
}

export default PrivacyScreen;
