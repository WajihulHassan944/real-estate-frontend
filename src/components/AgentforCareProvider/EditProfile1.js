import React, { useState } from "react";
import "../../assets/css/dashboardEditProfile/dashboardEditProfile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAgentLandlord } from "../../Redux/agentLandlordSlice"; 
const EditProfile1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const agentLandlord = useSelector((state) => state.agentLandlord); 
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: agentLandlord.fullName,
    phone: agentLandlord.phoneNumber,
    email: agentLandlord.email,
    companyName: agentLandlord.companyName,
    agencyLicenseNumber: agentLandlord.agencyLicenseNumber,
    totalPropertiesManaged: agentLandlord.totalPropertiesManaged,
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

 
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false);

    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.dismiss();
      toast.error("You are not authenticated. Please log in again.");
      return;
    }

    try {
  
      const response = await axios.put(
        `https://api.example.com/agent-landlord/${agentLandlord.id}`, // Replace with real API
        {
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          companyName: formData.companyName,
          agencyLicenseNumber: formData.agencyLicenseNumber,
          totalPropertiesManaged: formData.totalPropertiesManaged,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedData = response.data;

    
        dispatch(setAgentLandlord(updatedData));

       
        toast.dismiss();
        toast.success("Profile updated successfully.");
      } else {
        throw new Error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.dismiss();
      toast.error("An error occurred while updating your profile.");
    }
  };

  return (
    <div className="editProfile">
      <div className="editProfileTopBar">
        <h1>Edit Profile</h1>
        <button className="editProfileBtn" onClick={handleEditClick}>
          Edit Details
        </button>
      </div>
      <form className="editProfileForm" onSubmit={handleSave}>
        <div className="formField">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={isEditing ? formData.fullName : agentLandlord.fullName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? agentLandlord.fullName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={isEditing ? formData.phone : agentLandlord.phoneNumber}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? agentLandlord.phoneNumber : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={isEditing ? formData.email : agentLandlord.email}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? agentLandlord.email : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={isEditing ? formData.companyName : agentLandlord.companyName}
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? agentLandlord.companyName : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="agencyLicenseNumber">Agency License Number</label>
          <input
            type="text"
            name="agencyLicenseNumber"
            id="agencyLicenseNumber"
            value={
              isEditing
                ? formData.agencyLicenseNumber
                : agentLandlord.agencyLicenseNumber
            }
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={!isEditing ? agentLandlord.agencyLicenseNumber : ""}
            className={isEditing ? "editable" : ""}
          />
        </div>

        <div className="formField">
          <label htmlFor="totalPropertiesManaged">
            Total Properties Managed
          </label>
          <input
            type="text"
            name="totalPropertiesManaged"
            id="totalPropertiesManaged"
            value={
              isEditing
                ? formData.totalPropertiesManaged
                : agentLandlord.totalPropertiesManaged
            }
            disabled={!isEditing}
            onChange={handleChange}
            placeholder={
              !isEditing ? agentLandlord.totalPropertiesManaged : ""
            }
            className={isEditing ? "editable" : ""}
          />
        </div>

        {isEditing && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default EditProfile1;
