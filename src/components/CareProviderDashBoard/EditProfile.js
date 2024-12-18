import React, { useState } from "react";
import "../../assets/css/dashboardEditProfile/dashboardEditProfile.css";
import {useSelector } from "react-redux";

const EditProfileCareProvider = () => {
  const landlord = useSelector((state) => state.landlord);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    companyName: "Example Co.",
    companyNumber: "123456",
    companyAddress: "123 Main St, Springfield",
   
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

  return (
    <div className="editProfile">
      <div className="editProfileTopBar">
        <h1>Edit Your Profile</h1>
        <button className="editProfileBtn" onClick={handleEditClick}>
          Edit Details
        </button>
      </div>
      <form className="editProfileForm" >
      
        <div className="formField">
          <label htmlFor="CareProviderId">Care Provider Id</label>
          <input
            type="text"
            name="CareProviderId"
            id="CareProviderId"
            value="11"
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
            value={isEditing ? formData.fullName : formData.fullName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? formData.fullName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={isEditing ? formData.phone : formData.phoneNumber}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? formData.phoneNumber : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={isEditing ? formData.email : formData.email}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? formData.email : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

       
        <div className="formField">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={isEditing ? formData.companyName : formData.companyName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? formData.companyName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>
     
 

        {isEditing && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default EditProfileCareProvider;
