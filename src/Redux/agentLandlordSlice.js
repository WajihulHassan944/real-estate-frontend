import { createSlice } from '@reduxjs/toolkit';

const agentLandlordSlice = createSlice({
  name: 'agent',
  initialState: {
    id: null,
    agentId: null,
    fullName: '',
    email: '',
    phone: '',
    agencyName: '',
    agencyAddress: '',
    licenseNumber: '',
    totalClientsManaged: '',
    interestedInCollaborating: false,
    availableForConsultation: false,
  },
  reducers: {
    setAgent: (state, action) => {
      const { id, name: fullName, email, agentDetails } = action.payload;
      return {
        ...state,
        id,
        fullName,
        email,
        phone: agentDetails.phoneNumber,
        agencyName: agentDetails.agencyName,
        licenseNumber: agentDetails.licenseNumber,
        totalClientsManaged: agentDetails.totalClientsManaged,
        interestedInCollaborating: agentDetails.interestedInCollaborating,
        agentId: agentDetails.id,
        availableForConsultation: agentDetails.availableForConsultation,
      };
    },
    clearAgent: (state) => {
      return {
        id: null,
        agentId: null,
        fullName: '',
        email: '',
        phone: '',
        agencyName: '',
        agencyAddress: '',
        licenseNumber: '',
        totalClientsManaged: '',
        interestedInCollaborating: false,
        availableForConsultation: false,
      };
    },
  },
});

export const { setAgentLandlord, clearAgentLandlord } = agentLandlordSlice.actions;
export default agentLandlordSlice.reducer;
