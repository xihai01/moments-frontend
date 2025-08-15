import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import tw from 'twrnc';

const Page2 = ({
  checkboxesCasa = [],
  checkboxesEducation = [],
  checkboxesFamily = [],
  checkboxesHealth = [],
  checkboxesLegal = [],
  checkboxesPlacement = [],
  checkboxesSS = [],
  handleCheckboxChange = () => {},
}) => (
  <View style={tw`p-4`}>
    <Text style={tw`text-2xl text-center`}>2. Select all Content Types🔸</Text>
    <ScrollView style={tw`flex h-375 flex-col`}>
      <Text style={tw`text-xl pt-2 text-center`}>Casa</Text>
      {checkboxesCasa.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesCasa', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Education</Text>
      {checkboxesEducation.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesEducation', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Family</Text>
      {checkboxesFamily.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesFamily', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Health</Text>
      {checkboxesHealth.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesHealth', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Legal</Text>
      {checkboxesLegal.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesLegal', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Placement</Text>
      {checkboxesPlacement.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesPlacement', checkbox.id)}
        />
      ))}

      <Text style={tw`text-xl pt-2 text-center`}>Social Services</Text>
      {checkboxesSS.map((checkbox) => (
        <CheckBox
          key={checkbox.id}
          title={checkbox.title}
          checked={checkbox.checked}
          onPress={() => handleCheckboxChange('checkboxesSS', checkbox.id)}
        />
      ))}
    </ScrollView>
  </View>
);

export default Page2;
