/* review */

import { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import { toggleCheckbox } from '../../slices/createScreenSlice';

const RenderFormPage = ({ currentPage }) => {
  const dispatch = useAppDispatch();

  // Use selector to access specific checkbox group from the state
  const checkboxes1 = useAppSelector((state) => state.createScreen.checkboxes1);

  const checkboxesCasa = useAppSelector((state) => state.createScreen.checkboxesCasa);
  const checkboxesEducation = useAppSelector((state) => state.createScreen.checkboxesEducation);
  const checkboxesFamily = useAppSelector((state) => state.createScreen.checkboxesFamily);
  const checkboxesHealth = useAppSelector((state) => state.createScreen.checkboxesHealth);
  const checkboxesLegal = useAppSelector((state) => state.createScreen.checkboxesLegal);
  const checkboxesPlacement = useAppSelector((state) => state.createScreen.checkboxesPlacement);
  const checkboxesSS = useAppSelector((state) => state.createScreen.checkboxesSS);

  const checkboxes3a = useAppSelector((state) => state.createScreen.checkboxes3a);
  const checkboxes3b = useAppSelector((state) => state.createScreen.checkboxes3b);
  const checkboxes4b = useAppSelector((state) => state.createScreen.checkboxes4b);

  const [show, setShow] = useState(false);
  const textInputRef = useRef(null);

  const miles = useAppSelector((state) => state.createScreen.miles);

  const hours = useAppSelector((state) => state.createScreen.hours);
  const minutes = useAppSelector((state) => state.createScreen.minutes);

  const notes = useAppSelector((state) => state.createScreen.notes);

  const date = useAppSelector((state) => state.createScreen.date);

  const allCheckboxes = {
    checkboxes1,
    checkboxesCasa,
    checkboxesEducation,
    checkboxesFamily,
    checkboxesHealth,
    checkboxesLegal,
    checkboxesPlacement,
    checkboxesSS,
    checkboxes3a,
    checkboxes3b,
    checkboxes4b,
  };

  const handleHoursChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    dispatch(hoursState(formattedText));
  };

  const handleMinutesChange = (text) => {
    // Remove any non-numeric characters from the input
    if (text < 61) {
      const formattedText = text.replace(/[^0-9]/g, '');

      dispatch(minutesState(formattedText));
    } else {
      Alert.alert('Invalid input', 'Please enter a value between 0 and 60', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(minutesState(''));
            if (textInputRef.current) {
              textInputRef.current.clear();
            }
          },
        },
      ]);
    }
  };
  const handleMilesChange = (text) => {
    // Remove any non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    dispatch(milesState(formattedText));
  };

  const handleNotesChange = (text) => {
    dispatch(notesState(text));
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (group, id) => {
    dispatch(toggleCheckbox({ group, id }));
  };

  switch (currentPage) {
    case 1:
      return <Page1 checkboxes1={checkboxes1} handleCheckboxChange={handleCheckboxChange} />;

    case 2:
      return (
        <Page2
          checkboxesCasa={checkboxesCasa}
          checkboxesEducation={checkboxesEducation}
          checkboxesFamily={checkboxesFamily}
          checkboxesHealth={checkboxesHealth}
          checkboxesLegal={checkboxesLegal}
          checkboxesPlacement={checkboxesPlacement}
          checkboxesSS={checkboxesSS}
          handleCheckboxChange={handleCheckboxChange}
        />
      );

    case 3:
      return (
        <Page3
          checkboxes3a={checkboxes3a}
          checkboxes3b={checkboxes3b}
          checkboxes4b={checkboxes4b}
          miles={miles}
          hours={hours}
          minutes={minutes}
          notes={notes}
          date={date}
          show={show}
          setShow={setShow}
          handleMilesChange={handleMilesChange}
          handleMinutesChange={handleMinutesChange}
          handleCheckboxChange={handleCheckboxChange}
        />
      );

    case 4:
      return (
        <Page4
          notes={notes}
          handleNotesChange={(text) => dispatch(notesState(text))}
          miles={miles}
          hours={hours}
          minutes={minutes}
          date={date}
          allCheckboxes={allCheckboxes}
        />
      );
  }
};

export default RenderFormPage;
