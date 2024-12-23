import React, { useEffect, useState } from "react";
import "../../assets/css/dashboardEditProfile/dashboardEditProfile.css";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../const/url.const";
import { setCareProvider } from "../../Redux/careProviderSlice";
import { toast } from 'react-toastify'; 


const EditProfileCareProvider = () => {
  const dispatch = useDispatch();
  const careprovider = useSelector((state) => state.careProvider);
  const token = localStorage.getItem("authTokenCareProvider"); 
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    companyNumber: "",
    companyAddressDifferent: "",
    companyRegisteredAddress: "",
    communicationAddress: "",
    mainContactName: "",
    mainContactNumber: "",
    companyEmailAddress: "",
    careRecipients: "",
    city: "",
    cqcRatings: "",
    typeOfProvider: "",
    contactName: "",
    yearsInOperation: "",
    numberOfEmployees: "",
  });

 
  useEffect(() => {
    if (careprovider) {
      setFormData({
        fullName: careprovider.fullName || "",
        phoneNumber: careprovider.phoneNumber || "",
        email: careprovider.email || "",
        companyName: careprovider.companyName || "",
        companyNumber: careprovider.companyNumber || "",
        companyAddressDifferent: careprovider.companyAddressDifferent || "",
        companyRegisteredAddress: careprovider.companyRegisteredAddress || "",
        communicationAddress: careprovider.communicationAddress || "",
        mainContactName: careprovider.mainContactName || "",
        mainContactNumber: careprovider.mainContactNumber || "",
        companyEmailAddress: careprovider.companyEmailAddress || "",
        careRecipients: careprovider.careRecipients || "",
        city: careprovider.city || "",
        cqcRatings: careprovider.cqcRatings || "",
        typeOfProvider: careprovider.typeOfProvider || "",
        contactName: careprovider.contactName || "",
        yearsInOperation: careprovider.yearsInOperation || "",
        numberOfEmployees: careprovider.numberOfEmployees || "",
      });
    }
  }, [careprovider]);

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
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Show loading toast
    const loadingToast = toast.loading("Updating details...");
  
    const userData = {
      name: formData.fullName,
      email: formData.email,
    };
  
    try {
      // Update user details
      const userResponse = await axios.put(
        `${baseUrl}/auth/users/${careprovider.id}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User details updated:", userResponse.data);
  
      // Send other details to /auth/careprovider/:providerId
      const careProviderData = {
        companyName: formData.companyName,
        companyNumber: formData.companyNumber,
        companyAddressDifferent: formData.companyAddressDifferent,
        companyRegisteredAddress: formData.companyRegisteredAddress,
        communicationAddress: formData.communicationAddress,
        mainContactName: formData.mainContactName,
        mainContactNumber: formData.mainContactNumber,
        companyEmailAddress: formData.companyEmailAddress,
        careRecipients: formData.careRecipients,
        city: formData.city,
        cqcRatings: formData.cqcRatings,
        typeOfProvider: formData.typeOfProvider,
        contactName: formData.contactName,
        yearsInOperation: formData.yearsInOperation,
        numberOfEmployees: formData.numberOfEmployees,
      };
  
      const careProviderResponse = await axios.put(
        `${baseUrl}/auth/careprovider/${careprovider.providerId}`,
        careProviderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Care provider details updated:", careProviderResponse.data);
  
      // Fetch the updated care provider data
      const updatedCareProviderResponse = await fetch(`${baseUrl}/auth/users/${careprovider.id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!updatedCareProviderResponse.ok) {
        const errorMessage = await updatedCareProviderResponse.text();
        console.error(`Error: ${updatedCareProviderResponse.status} - ${errorMessage}`);
        throw new Error(`Failed to fetch updated care provider data: ${updatedCareProviderResponse.statusText}`);
      }
  
      const updatedCareProviderData = await updatedCareProviderResponse.json();
      dispatch(setCareProvider(updatedCareProviderData));
  
      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Care provider details updated successfully.");
  
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToast);
      toast.error("An error occurred while updating your details.");
    }
  };
  
  
  return (
    <div className="editProfile">
      <div className="editProfileTopBar">
        <h1>Manage Your Profile</h1>
        <button className="editProfileBtn" onClick={handleEditClick}>
          Edit Details
        </button>
      </div>
      <form className="editProfileForm" onSubmit={handleSubmit}>
      <div className="flexRow">
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
        </div>
        <div className="flexRow">
      
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
</div>
       
<div className="flexRow">
      
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
     
        <div className="formField">
  <label htmlFor="companyRegisteredAddress">Company Registered Address</label>
  <input
    type="text"
    name="companyRegisteredAddress"
    id="companyRegisteredAddress"
    value={isEditing ? formData.companyRegisteredAddress : formData.companyRegisteredAddress}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.companyRegisteredAddress : ""}
    className={isEditing ? "editable" : ""}
  />
</div>
</div>
<div className="flexRow">
      
<div className="formField">
  <label htmlFor="companyAddressDifferent">Company Address (For Any Communications)</label>
  <input
    type="text"
    name="companyAddressDifferent"
    id="companyAddressDifferent"
    value={isEditing ? formData.companyAddressDifferent : formData.companyAddressDifferent}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.companyAddressDifferent : ""}
    className={isEditing ? "editable" : ""}
  />
</div>

<div className="formField">
  <label htmlFor="companyEmailAddress">Company Email Address</label>
  <input
    type="email"
    name="companyEmailAddress"
    id="companyEmailAddress"
    value={isEditing ? formData.companyEmailAddress : formData.companyEmailAddress}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.companyEmailAddress : ""}
    className={isEditing ? "editable" : ""}
  />
</div>
</div>
<div className="flexRow">
      
<div className="formField">
  <label htmlFor="companyNumber">Company Registration Number</label>
  <input
    type="text"
    name="companyNumber"
    id="companyNumber"
    value={isEditing ? formData.companyNumber : formData.companyNumber}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.companyNumber : ""}
    className={isEditing ? "editable" : ""}
  />
</div>

<div className="formField">
  <label htmlFor="mainContactName">Main Contact Name</label>
  <input
    type="text"
    name="mainContactName"
    id="mainContactName"
    value={isEditing ? formData.mainContactName : formData.mainContactName}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.mainContactName : ""}
    className={isEditing ? "editable" : ""}
  />
</div>
</div>

<div className="flexRow">
      
<div className="formField">
  <label htmlFor="cqcRatings">CQC Ratings</label>
  <input
    type="text"
    name="cqcRatings"
    id="cqcRatings"
    value={isEditing ? formData.cqcRatings : formData.cqcRatings}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.cqcRatings : ""}
    className={isEditing ? "editable" : ""}
  />
</div>

<div className="formField">
  <label htmlFor="typeOfProvider">Type of Provider</label>
  <select
    name="typeOfProvider"
    id="typeOfProvider"
    onChange={handleChange}
    value={formData.typeOfProvider}
    disabled={!isEditing}
    required

    className={`editFormSelect ${isEditing ? "editable" : ""}`}
  >
    <option value="">Select Provider Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Specialist">Specialist</option>
  </select>
</div>

 </div>






 <div className="flexRow">
      
      <div className="formField">
        <label htmlFor="numberOfEmployees">Number of Employees</label>
        <input
          type="number"
          name="numberOfEmployees"
          id="numberOfEmployees"
          value={isEditing ? formData.numberOfEmployees : formData.numberOfEmployees}
          disabled={!isEditing}
          onChange={handleChange}
          placeholder={!isEditing ? formData.numberOfEmployees : ""}
          className={isEditing ? "editable" : ""}
        />
      </div>
      <div className="formField">
        <label htmlFor="yearsInOperation">Years in Operation</label>
        <input
          type="number"
          name="yearsInOperation"
          id="yearsInOperation"
          value={isEditing ? formData.yearsInOperation : formData.yearsInOperation}
          disabled={!isEditing}
          onChange={handleChange}
          placeholder={!isEditing ? formData.yearsInOperation : ""}
          className={isEditing ? "editable" : ""}
        />
      </div>
      
      
       </div>
      










<div className="flexRow">
      
<div className="formField">
  <label htmlFor="mainContactNumber">Main Contact Number</label>
  <input
    type="tel"
    name="mainContactNumber"
    id="mainContactNumber"
    value={isEditing ? formData.mainContactNumber : formData.mainContactNumber}
    disabled={!isEditing}
    onChange={handleChange}
    placeholder={!isEditing ? formData.mainContactNumber : ""}
    className={isEditing ? "editable" : ""}
  />
</div>

<div className="formField">
  <label htmlFor="careRecipients">Who do you provide care for?</label>
  <select
    name="careRecipients"
    id="careRecipients"
    onChange={handleChange}
    value={formData.careRecipients}
    disabled={!isEditing}
    required

    className={`editFormSelect ${isEditing ? "editable" : ""}`}
  >
    <option value="">Who do you provide care for?</option>
    <option value="MentalHealth">Individuals with Mental Health Issues</option>
    <option value="SubstanceUseDisorders">Individuals with Substance Use Disorders</option>
    <option value="ChildrenYoungPeople">Children and Young People</option>
    <option value="DomesticAbuseSurvivors">Survivors of Domestic Abuse</option>
    <option value="OlderAdults">Older Adults</option>
    <option value="PhysicalDisabilities">Individuals with Physical Disabilities</option>
    <option value="LearningDisabilities">Individuals with Learning Disabilities</option>
    <option value="Homelessness">People Experiencing Homelessness</option>
    <option value="ExOffenders">Ex-Offenders</option>
    <option value="AsylumRefugees">Asylum Seekers and Refugees</option>
    <option value="Veterans">Veterans</option>
    <option value="YoungParents">Young Parents</option>
    <option value="AutismSpectrum">Individuals with Autism Spectrum Disorders</option>
    <option value="HIVAIDS">Individuals with HIV/AIDS</option>
    <option value="SensoryImpairments">People with Sensory Impairments</option>
    <option value="ChronicIllnesses">Individuals with Chronic Illnesses</option>
    <option value="LGBTQ">LGBTQ+ Individuals</option>
    <option value="DualDiagnoses">Individuals with Dual Diagnoses</option>
    <option value="HumanTraffickingSurvivors">Survivors of Human Trafficking</option>
    <option value="BehavioralDisorders">Individuals with Behavioral Disorders</option>
  </select>
</div>
</div>
<div className="flexRow">

<div className="formField" style={{flexBasis:'100%'}}>
  <label htmlFor="city">City of Operation</label>
  <select
    name="city"
    id="city"
    value={formData.city}
    onChange={handleChange}
    disabled={!isEditing}
    required
    className={`editFormSelect ${isEditing ? "editable" : ""}`}
  >
    <option value="">City of Operation</option>
    <optgroup label="England">
      <option value="Bath">Bath</option>
      <option value="Birmingham">Birmingham*</option>
      <option value="Bradford">Bradford*</option>
      <option value="Brighton & Hove">Brighton & Hove</option>
      <option value="Bristol">Bristol*</option>
      <option value="Cambridge">Cambridge</option>
      <option value="Canterbury">Canterbury*</option>
      <option value="Carlisle">Carlisle</option>
      <option value="Chelmsford">Chelmsford</option>
      <option value="Chester">Chester*</option>
      <option value="Chichester">Chichester</option>
      <option value="Colchester">Colchester</option>
      <option value="Coventry">Coventry*</option>
      <option value="Derby">Derby</option>
      <option value="Doncaster">Doncaster</option>
      <option value="Durham">Durham</option>
      <option value="Ely">Ely</option>
      <option value="Exeter">Exeter*</option>
      <option value="Gloucester">Gloucester</option>
      <option value="Hereford">Hereford</option>
      <option value="Kingston-upon-Hull">Kingston-upon-Hull*</option>
      <option value="Lancaster">Lancaster</option>
      <option value="Leeds">Leeds*</option>
      <option value="Leicester">Leicester*</option>
      <option value="Lichfield">Lichfield</option>
      <option value="Lincoln">Lincoln</option>
      <option value="Liverpool">Liverpool*</option>
      <option value="London">London*</option>
      <option value="Manchester">Manchester*</option>
      <option value="Milton Keynes">Milton Keynes</option>
      <option value="Newcastle-upon-Tyne">Newcastle-upon-Tyne*</option>
      <option value="Norwich">Norwich*</option>
      <option value="Nottingham">Nottingham*</option>
      <option value="Oxford">Oxford*</option>
      <option value="Peterborough">Peterborough</option>
      <option value="Plymouth">Plymouth*</option>
      <option value="Portsmouth">Portsmouth*</option>
      <option value="Preston">Preston</option>
      <option value="Ripon">Ripon</option>
      <option value="Salford">Salford</option>
      <option value="Salisbury">Salisbury</option>
      <option value="Sheffield">Sheffield*</option>
      <option value="Southampton">Southampton*</option>
      <option value="Southend-on-Sea">Southend-on-Sea</option>
      <option value="St Albans">St Albans</option>
      <option value="Stoke on Trent">Stoke on Trent*</option>
      <option value="Sunderland">Sunderland</option>
      <option value="Truro">Truro</option>
      <option value="Wakefield">Wakefield</option>
      <option value="Wells">Wells</option>
      <option value="Westminster">Westminster*</option>
      <option value="Winchester">Winchester</option>
      <option value="Wolverhampton">Wolverhampton</option>
      <option value="Worcester">Worcester</option>
      <option value="York">York*</option>
    </optgroup>
    <optgroup label="Northern Ireland">
      <option value="Armagh">Armagh*</option>
      <option value="Bangor">Bangor</option>
      <option value="Belfast">Belfast*</option>
      <option value="Lisburn">Lisburn</option>
      <option value="Londonderry">Londonderry</option>
      <option value="Newry">Newry</option>
    </optgroup>
    <optgroup label="Scotland">
      <option value="Aberdeen">Aberdeen*</option>
      <option value="Dundee">Dundee*</option>
      <option value="Dunfermline">Dunfermline</option>
      <option value="Edinburgh">Edinburgh*</option>
      <option value="Glasgow">Glasgow*</option>
      <option value="Inverness">Inverness</option>
      <option value="Perth">Perth</option>
      <option value="Stirling">Stirling</option>
    </optgroup>
    <optgroup label="Wales">
      <option value="Bangor">Bangor</option>
      <option value="Cardiff">Cardiff*</option>
      <option value="Newport">Newport</option>
      <option value="St Asaph">St Asaph</option>
      <option value="St Davids">St Davids</option>
      <option value="Swansea">Swansea*</option>
      <option value="Wrexham">Wrexham</option>
    </optgroup>
  </select>
</div>

</div>

        {isEditing && <div className="editSubmitBtn"><button type="submit">Save</button></div>}
      </form>
    </div>
  );
};

export default EditProfileCareProvider;
