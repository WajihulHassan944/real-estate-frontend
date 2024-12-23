import { createSlice } from '@reduxjs/toolkit';

const careProviderSlice = createSlice({
  name: 'careProvider',
  initialState: {
    id: null,
    providerId: null,
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    companyNumber: '',
    companyAddressDifferent: '',
    companyRegisteredAddress: '',
    communicationAddress: '',
    mainContactName: '',
    mainContactNumber: '',
    companyEmailAddress: '',
    careRecipients: '',
    city: '',
    cqcRatings: '', // Added cqcRatings
    typeOfProvider: '', // Added typeOfProvider
    contactName: '', // Added contactName
    yearsInOperation: '', // Added yearsInOperation
    numberOfEmployees: '', // Added numberOfEmployees
  },
  reducers: {
    setCareProvider: (state, action) => {
      const {
        id,
        careProviderDetails, // Extract careProviderDetails from user
      } = action.payload;

      return {
        ...state,
        id,
        providerId: careProviderDetails.id, // Add providerId from careProviderDetails
        fullName: action.payload.name, // Full name corresponds to `name` in the user object
        phoneNumber: careProviderDetails.telephoneNumber,
        email: careProviderDetails.email,
        companyName: careProviderDetails.companyName,
        companyNumber: careProviderDetails.companyNumber,
        companyAddressDifferent: careProviderDetails.companyAddressDifferent,
        companyRegisteredAddress: careProviderDetails.companyRegisteredAddress,
        communicationAddress: careProviderDetails.communicationAddress || '', // Add communicationAddress if available
        mainContactName: careProviderDetails.mainContactName,
        mainContactNumber: careProviderDetails.mainContactNumber,
        companyEmailAddress: careProviderDetails.companyEmailAddress,
        careRecipients: careProviderDetails.careRecipients,
        city: careProviderDetails.city,
        cqcRatings: careProviderDetails.cqcRatings, // Added cqcRatings to state
        typeOfProvider: careProviderDetails.typeOfProvider, // Added typeOfProvider
        contactName: careProviderDetails.contactName, // Added contactName
        yearsInOperation: careProviderDetails.yearsInOperation, // Added yearsInOperation
        numberOfEmployees: careProviderDetails.numberOfEmployees, // Added numberOfEmployees
      };
    },
    clearCareProvider: () => {
      return {
        id: null,
        providerId: null,
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        companyNumber: '',
        companyAddressDifferent: '',
        companyRegisteredAddress: '',
        communicationAddress: '',
        mainContactName: '',
        mainContactNumber: '',
        companyEmailAddress: '',
        careRecipients: '',
        city: '',
        cqcRatings: '', 
        typeOfProvider: '',
        contactName: '', 
        yearsInOperation: '', 
        numberOfEmployees: '', 
      };
    },
  },
});

export const { setCareProvider, clearCareProvider } = careProviderSlice.actions;
export default careProviderSlice.reducer;
