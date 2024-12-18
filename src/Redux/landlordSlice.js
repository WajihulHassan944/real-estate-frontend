import { createSlice } from '@reduxjs/toolkit';

const landlordSlice = createSlice({
  name: 'landlord',
  initialState: {
    id: null,
    landlordId: null,
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyAddress: '',
    companyNumber: '',
    totalPropertiesManaged:'',
    interestedInSellingProperty:false,
    optionToBuyProperty:false,
  },
  reducers: {
    setLandlord: (state, action) => {
      const { id, name: fullName, email, landlordDetails } = action.payload;
      return {
        ...state,
        id,
        fullName, 
        email,
        phoneNumber: landlordDetails.phoneNumber,
        companyName: landlordDetails.companyName,
        totalPropertiesManaged: landlordDetails.totalPropertiesManaged,
        interestInSellingProperty: landlordDetails.interestInSellingProperty,
        landlordId: landlordDetails.id,
        optionToBuy: landlordDetails.optionToBuy,
      };
    },
    clearLandlord: (state) => {
      return {
        id: null,
        landlordId: null,
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        companyAddress: '',
        companyNumber: '',
        totalCompaniesManaged:'',
        interestedInSellingProperty:false,
        optionToBuyProperty:false,
      };
    },
  },
});

export const { setLandlord, clearLandlord } = landlordSlice.actions;
export default landlordSlice.reducer;
