import React, { useState } from "react";
import "../../assets/css/dashboardEditProfile/dashboardEditProfile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from '../../Redux/authSlice';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 
import { setLandlord } from "../../Redux/landlordSlice";
import { baseUrl } from "../../const/url.const";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const landlord = useSelector((state) => state.landlord); // Access landlord details from Redux store
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: landlord.fullName,
    phone: landlord.phoneNumber,
    email: landlord.email,
    companyName: landlord.companyName,
    companyNumber: landlord.companyNumber,
    companyAddress: landlord.companyAddress,
    totalCompaniesManaged: landlord.totalCompaniesManaged,
    interestedInSellingProperty:landlord.interestedInSellingProperty,
    optionToBuyProperty:landlord.optionToBuyProperty

  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Handle Logout
const handleLogout = () => {
  dispatch(logout());    
  navigate('/login');
};
  





const handleSave = async (e) => {
  e.preventDefault();
  setIsEditing(false);

  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');

  if (!token) {
    toast.dismiss();
    toast.error("You are not authenticated. Please log in again.");
    return;
  }

  try {
    // First, send the request to update name and email
    const userResponse = await fetch(`${baseUrl}/auth/users/${landlord.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
      }),
    });

    if (!userResponse.ok) {
      const errorMessage = await userResponse.text();
      console.error(`Error: ${userResponse.status} - ${errorMessage}`);

      if (userResponse.status === 401) {
        // Handle unauthorized error
        toast.dismiss();
        toast.error("Your session has expired. Please log in again.");
        handleLogout();
        return;
      }

      throw new Error(`Failed to update: ${userResponse.statusText}`);
    }

    // Then, send the request to update landlord details
    const landlordResponse = await fetch(`${baseUrl}/auth/landlord/${landlord.landlordId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Add the token here
      },
      body: JSON.stringify({
        companyName: formData.companyName,
        companyNumber: formData.companyNumber,
        companyAddress: formData.companyAddress,
        totalPropertiesManaged: formData.totalCompaniesManaged,
        phoneNumber: formData.phone,

        interestInSellingProperty: formData.interestedInSellingProperty,
        optionToBuy: formData.optionToBuyProperty,
      }),
    });

    if (!landlordResponse.ok) {
      const errorMessage = await landlordResponse.text();
      console.error(`Error: ${landlordResponse.status} - ${errorMessage}`);

      if (landlordResponse.status === 401) {
        // Handle unauthorized error
        toast.dismiss();
        toast.error("Your session has expired. Please log in again.");
        handleLogout();
        return;
      }

      throw new Error(`Failed to update: ${landlordResponse.statusText}`);
    }

    // Fetch the updated landlord data
    const updatedLandlordResponse = await fetch(`${baseUrl}/auth/users/${landlord.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!updatedLandlordResponse.ok) {
      const errorMessage = await updatedLandlordResponse.text();
      console.error(`Error: ${updatedLandlordResponse.status} - ${errorMessage}`);
      throw new Error(`Failed to fetch updated landlord data: ${updatedLandlordResponse.statusText}`);
    }

    const updatedLandlordData = await updatedLandlordResponse.json();

    // Update the Redux store with the updated landlord data
    dispatch(setLandlord(updatedLandlordData));

    // Notify the user of success
    toast.dismiss();
    toast.success("Profile updated successfully.");
  } catch (error) {
    console.error("Error updating profile:", error);
    toast.dismiss();
    toast.error("An error occurred while updating your profile.");
  }
};

  
  return (
    <div className="editProfile">
      <div className="editProfileTopBar">
        <h1>Edit Your Profile</h1>
        <button className="editProfileBtn" onClick={handleEditClick}>
          Edit Details
        </button>
      </div>
      <form className="editProfileForm" onSubmit={handleSave}>
      
        <div className="formField">
          <label htmlFor="landlordId">Landlord Id</label>
          <input
            type="text"
            name="landlordId"
            id="landlordId"
            value={isEditing ? landlord.id : `Landlord Id: ${landlord.id}`}
            disabled={!isEditing}
            className={isEditing ? "editable" : ""}
          />
        </div>

    
        <div className="formField">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={isEditing ? formData.fullName : landlord.fullName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.fullName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={isEditing ? formData.phone : landlord.phoneNumber}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.phoneNumber : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={isEditing ? formData.email : landlord.email}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.email : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={isEditing ? formData.companyName : landlord.companyName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.companyName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>
{/* 
        <div className="formField">
          <label htmlFor="companyNumber">Company Number</label>
          <input
            type="text"
            name="companyNumber"
            id="companyNumber"
            value={isEditing ? formData.companyNumber : landlord.companyNumber}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.companyNumber : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="companyAddress">Company Address</label>
          <input
            type="text"
            name="companyAddress"
            id="companyAddress"
            value={isEditing ? formData.companyAddress : landlord.companyAddress}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.companyAddress : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>
*/}
        {/* Total Companies Managed */}
        <div className="formField">
          <label htmlFor="totalCompaniesManaged">Total Properties Managed</label>
          <input
            type="text"
            name="totalCompaniesManaged"
            id="totalCompaniesManaged"
            value={isEditing ? formData.totalPropertiesManaged : landlord.totalPropertiesManaged}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? landlord.totalPropertiesManaged : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>
     {/*    <div className="formField">
  <label htmlFor="interestInSellingProperty">Interest in Selling Property</label>
  <select
    name="interestInSellingProperty"
    id="interestInSellingProperty"
    value={isEditing ? formData.interestInSellingProperty : landlord.interestInSellingProperty}
    disabled={!isEditing}
    onChange={handleChange}
    className={isEditing ? "editable" : ""}
  >
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
</div>

<div className="formField">
  <label htmlFor="optionToBuy">Option to Buy</label>
  <select
    name="optionToBuy"
    id="optionToBuy"
    value={isEditing ? formData.optionToBuy : landlord.optionToBuy}
    disabled={!isEditing}
    onChange={handleChange}
    className={isEditing ? "editable" : ""}
  >
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
</div>*/}

        {isEditing && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default EditProfile;
