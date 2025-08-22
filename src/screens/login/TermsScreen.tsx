//import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import tw from 'twrnc';

function TermsScreen() {
  return (
    <View style={tw`justify-between items-center gap-3 flex-1 bg-[#f2f2f2]`}>
      <Text style={tw`text-lg font-bold`}>Terms & Conditions</Text>
      <Text style={tw`text-base text-gray-600`}>
        These are the terms and conditions for our application...
      </Text>
    </View>
  );
}

export default TermsScreen;
