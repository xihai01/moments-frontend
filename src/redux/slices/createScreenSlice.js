import { createSlice } from '@reduxjs/toolkit';

const initialCheckboxGroups = {
  checkboxes1: [
    { id: 1, title: 'Case 1', checked: false },
    { id: 2, title: 'Case 2', checked: false },
    { id: 3, title: 'Case 3', checked: false },
    { id: 4, title: 'Case 4', checked: false },
  ],
  checkboxesCasa: [
    { id: 5, title: 'Supervisor', checked: false },
    { id: 6, title: 'Youth', checked: false },
  ],
  checkboxesEducation: [
    { id: 7, title: 'Guidance Counselor', checked: false },
    { id: 8, title: 'IEP Team', checked: false },
    { id: 9, title: 'School', checked: false },
    { id: 10, title: 'Teacher', checked: false },
  ],
  checkboxesFamily: [
    { id: 11, title: 'Parent', checked: false },
    { id: 12, title: 'Aunt Uncle or Cousin', checked: false },
    { id: 13, title: 'Fictive Kin', checked: false },
    { id: 14, title: 'Grandparent', checked: false },
    { id: 15, title: 'Other Family', checked: false },
    { id: 16, title: 'Sibling', checked: false },
  ],
  checkboxesHealth: [
    { id: 17, title: 'Medical Professional', checked: false },
    { id: 18, title: 'Mental Health Therapist', checked: false },
    { id: 19, title: 'Other Therapist', checked: false },
    { id: 20, title: 'Psychiatric Practitioner', checked: false },
  ],
  checkboxesLegal: [
    { id: 21, title: 'Attorney', checked: false },
    { id: 22, title: 'Court', checked: false },
  ],
  checkboxesPlacement: [
    { id: 23, title: 'Caregiver Family', checked: false },
    { id: 24, title: 'Foster Parent', checked: false },
    { id: 25, title: 'Therapeutic Agency Worker', checked: false },
  ],
  checkboxesSS: [{ id: 26, title: 'Social Worker', checked: false }],
  checkboxes3a: [
    { id: 27, title: 'Yes', checked: false },
    { id: 28, title: 'No', checked: false },
  ],
  checkboxes3b: [
    { id: 29, title: 'In Person', checked: false },
    { id: 30, title: 'Text/Email', checked: false },
    { id: 31, title: 'Video', checked: false },
    { id: 32, title: 'Voice Only', checked: false },
    { id: 33, title: 'Letter', checked: false },
  ],
  checkboxes4b: [
    { id: 34, title: 'Yes', checked: false },
    { id: 35, title: 'No', checked: false },
  ],

  currentPage: 1,
  miles: '',
  hours: '',
  minutes: '',
  notes: '',
  date: new Date().toISOString().split('T')[0].toString(),
};

const initialState = {
  ...initialCheckboxGroups,
  currentPage: 1,
  miles: '',
  hours: '',
  minutes: '',
  notes: '',
  date: new Date().toISOString().split('T')[0],
  formData: {}, // To store all form data on submit
};

export const createScreenSlice = createSlice({
  name: 'createScreen',
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      const { group, id } = action.payload;
      if (state[group]) {
        state[group] = state[group].map((checkbox) =>
          checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
      }
    },
    updateField: (state, action) => {
      const { field, value } = action.payload;
      if (state[field] !== undefined) {
        state[field] = value;
      }
    },
    nextPage: (state) => {
      if (state.currentPage < 4) state.currentPage += 1;
    },
    previousPage: (state) => {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    submitForm: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload, // Combine existing data with new data
      };
      console.log('Form submitted:', state.formData); // Debugging or logging
    },
  },
});

export const { toggleCheckbox, updateField } = createScreenSlice.actions;
export default createScreenSlice.reducer;
