import React from 'react';
import firstImage from "../../src/assets/img/services/one.png";
import secondImage from "../../src/assets/img/services/two.png";
import thirdImage from "../../src/assets/img/services/three.png";
import NumberOne from "../../src/assets/img/services/no1.png";
import NumberTwo from "../../src/assets/img/services/no2.png";
import NumberThree from "../../src/assets/img/services/no2.png";
import legalNumberone from "../../src/assets/img/services/numberone.png";
import legalNumbertwo from "../../src/assets/img/services/numbertwo.png";
import legalNumberthree from "../../src/assets/img/services/numberthree.png";
const ServicesContent = () => {
  return (
    <section className='h-full min-h-[80vh] mb-8 xl:mb-24 pt-[50px]'>
       <div className='w-full flex flex-col items-center justify-center px-4 lg:px-0 min-h-[30vh]'>
  <h1 className='text-4xl lg:text-[48px] font-bold leading-none mb-6 text-center' style={{fontFamily: '"Raleway", sans-serif'}}>
    <span style={{ color: '#2E86AB'  }} >Our</span> Services
  </h1>
  
  <p
  className='max-w-[800px] mb-8 text-center'
  style={{
    fontFamily: '"Open Sans", sans-serif',
    color: '#272829',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  }}
>
  Explore our comprehensive services designed to simplify property management and support housing needs. From tailored contracts to trusted insurance providers and expert legal assistance, we provide the resources and connections you need to ensure smooth, compliant, and secure property solutions. Let us help you navigate every step with confidence and ease.
</p>

  </div>



  <div className='flex flex-col items-center w-full'>
  <div className='flex items-center w-full justify-center mt-[50px]'>
    <div className='h-[2px] bg-[#2E86AB] w-full max-w-[1200px]'></div>
    <h3 className='text-[#2E86AB] mx-4 text-4xl font-bold'>Contracts</h3>
    <div className='h-[2px] bg-[#2E86AB] w-full max-w-[1200px]'></div>
  </div>
  
  <div className='w-full flex flex-col items-center mt-8'>
  <p className='text-center max-w-[500px] mb-6 text-[#272829] font-normal px-4 text-sm md:text-base'>
  Our contracts are tailored for supported housing. Choose from our list or request a custom draft.
</p>

    <div className='flex flex-col gap-6 items-center w-full px-4'>
  <div className='w-full max-w-[598px] h-auto bg-[#2E86AB33] rounded-[30px] flex flex-col md:flex-row items-center gap-10 p-4'>
    <img
      src={firstImage}
      alt='Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <div className='flex flex-col items-center md:items-start gap-2'>
      <p
        className='text-[#2E86AB] text-sm md:text-lg font-semibold text-center md:text-left'
        style={{ fontFamily: '"Open Sans", sans-serif' }}
      >
        Lease Agreement Template
      </p>
      <button
        className='w-[100px] md:w-[135px] h-[30px] md:h-[33.56px] bg-[#2E86AB] text-white rounded-[30.51px] text-xs md:ml-[60px]'
      >
        Download
      </button>
    </div>
  </div>

  <div className='w-full max-w-[598px] h-auto bg-[#2E86AB33] rounded-[30px] flex flex-col md:flex-row items-center gap-10 p-4'>
    <img
      src={secondImage}
      alt='Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <div className='flex flex-col items-center md:items-start gap-2'>
      <p
        className='text-[#2E86AB] text-sm md:text-lg font-semibold text-center md:text-left'
        style={{ fontFamily: '"Open Sans", sans-serif' }}
      >
        Tenancy Agreement Template
      </p>
      <button
        className='w-[100px] md:w-[135px] h-[30px] md:h-[33.56px] bg-[#2E86AB] text-white rounded-[30.51px] text-xs md:ml-[60px]'
      >
        Download
      </button>
    </div>
  </div>

  <div className='w-full max-w-[598px] h-auto bg-[#2E86AB33] rounded-[30px] flex flex-col md:flex-row items-center gap-10 p-4'>
    <img
      src={thirdImage}
      alt='Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <div className='flex flex-col items-center md:items-start gap-2'>
      <p
        className='text-[#2E86AB] text-sm md:text-lg font-semibold text-center md:text-left'
        style={{ fontFamily: '"Open Sans", sans-serif' }}
      >
        Supported Housing Lease Contract
      </p>
      <button
        className='w-[100px] md:w-[135px] h-[30px] md:h-[33.56px] bg-[#2E86AB] text-white rounded-[30.51px] text-xs md:ml-[60px]'
      >
        Download
      </button>
    </div>
  </div>
</div>


<button className='w-[220.71px] h-[40px] bg-[#2E86AB] text-white rounded-[30.51px] text-xs mx-auto mt-[60px] shadow-lg text-bold'>
  Request Custom Contract
</button>

    </div>
    </div>
















    <div className='flex flex-col items-center w-full mt-[100px]'>
  {/* First Child Div: Insurance Heading with Lines */}
  <div className='flex items-center w-full justify-center mt-[50px]'>
    <div className='h-[2px] bg-[#C64C7B] w-full max-w-[1200px]'></div>
    <h3 className='text-[#C64C7B] mx-4 text-2xl sm:text-3xl md:text-4xl font-bold'>
      Insurance
    </h3>
    <div className='h-[2px] bg-[#C64C7B] w-full max-w-[1200px]'></div>
  </div>

  {/* Second Child Div: Paragraph and Rectangles */}
  <div className='w-full flex flex-col items-center mt-8 px-4'>
    {/* Paragraph */}
    <p className='text-center max-w-[500px] mb-6 text-[#272829] font-normal text-sm sm:text-base'>
      Connect with trusted insurance providers for rental property insurance
    </p>
  </div>

  <div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-40 max-w-[1200px] mt-12'>
  <div className='flex flex-col gap-6 items-center w-full lg:w-[50%] px-4'>
  {/* Rectangle 1 */}
  <div className='flex flex-row items-center gap-4 w-full max-w-[598px] h-auto bg-[#C64C7B56] rounded-[30px] p-4'>
    <img
      src={NumberOne}
      alt='Insurance Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <p className='text-[#C64C7B] text-sm sm:text-base md:text-lg font-semibold'>
      SecureShield Insurance
    </p>
  </div>

  {/* Rectangle 2 */}
  <div className='flex flex-row items-center gap-4 w-full max-w-[598px] h-auto bg-[#C64C7B56] rounded-[30px] p-4'>
    <img
      src={NumberTwo}
      alt='Insurance Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <p className='text-[#C64C7B] text-sm sm:text-base md:text-lg font-semibold'>
      PropertyProtect Plan
    </p>
  </div>

  {/* Rectangle 3 */}
  <div className='flex flex-row items-center gap-4 w-full max-w-[598px] h-auto bg-[#C64C7B56] rounded-[30px] p-4'>
    <img
      src={NumberThree}
      alt='Insurance Icon'
      className='w-[56px] h-[56px] md:w-[76px] md:h-[76px]'
    />
    <p className='text-[#C64C7B] text-sm sm:text-base md:text-lg font-semibold'>
      TenantCare Coverage
    </p>
  </div>
</div>

<div className='w-full lg:w-[50%] flex flex-col px-4'>
  <h4 className='text-[#C64C7B] text-lg sm:text-xl md:text-2xl font-semibold mb-6'>
    Provider Contact Request Form
  </h4>
  <form className='w-full max-w-[500px] self-center'>
    <label htmlFor='name' className='block text-black mb-2 text-sm sm:text-base'>
      Name
    </label>
    <input
      id='name'
      type='text'
      className='w-[90%] p-2 mb-4 bg-transparent border-2 border-black rounded-[5px] text-black text-sm sm:text-base'
      placeholder="Enter your name"
    />

    <label htmlFor='email' className='block text-black mb-2 text-sm sm:text-base'>
      Insurance Providers
    </label>
    <input
      id='email'
      type='email'
      className='w-[90%] p-2 mb-4 bg-transparent border-2 border-black rounded-[5px] text-black text-sm sm:text-base'
    />

    <label htmlFor='subject' className='block text-black mb-2 text-sm sm:text-base'>
      Email
    </label>
    <input
      id='subject'
      type='text'
      className='w-[90%] p-2 mb-4 bg-transparent border-2 border-black rounded-[5px] text-black text-sm sm:text-base'
    />

    <label htmlFor='heard-from' className='block text-black mb-2 text-sm sm:text-base'>
      Mobile Information
    </label>
    <input
      id='heard-from'
      type='text'
      className='w-[90%] p-2 mb-4 bg-transparent border-2 border-black rounded-[5px] text-black text-sm sm:text-base'
    />

    <div className='flex items-center mb-4'>
      <input
        id='contact-checkbox'
        type='checkbox'
        className='mr-2'
      />
      <label htmlFor='contact-checkbox' className='text-[#C64C7B] text-sm sm:text-base'>
        Would you like the provider to contact you directly?
      </label>
    </div>

    <button
      type='submit'
      className='w-[120px] sm:w-[132px] h-[40px] sm:h-[43px] bg-[#C64C7B] text-white rounded-[38.73px] text-xs sm:text-sm'
    >
      Submit
    </button>
  </form>
</div>

  </div>
</div>



















<div className='flex flex-col items-center w-full mt-[100px] mb-[100px]'>
  {/* Heading Section: Legal Assistance */}
  <div className='flex items-center w-full justify-center mt-[50px] '>
    <div className='h-[2px] bg-[#A6C48A] w-full max-w-[1200px]'></div>
    <h3 className='text-[#A6C48A] text-2xl sm:text-3xl md:text-4xl font-bold flex gap-3 mx-4'>
      Legal <span>Assistance</span>
    </h3>
    <div className='h-[2px] bg-[#A6C48A] w-full max-w-[1200px]'></div>
  </div>

  {/* Paragraph */}
  <div className='w-full flex flex-col items-center mt-8'>
    <p className='text-center max-w-[500px] mb-6 text-[#272829] font-normal text-sm sm:text-base'>
      Get expert legal advice for property compliance and lease agreements.
    </p>
  </div>
{/* Boxes Section */}
<div className='flex flex-wrap gap-8 w-full justify-center mt-10 px-4'>
  {/* Box 1 */}
  <div className='w-full sm:w-[90%] md:w-[456px] h-auto bg-[#dbe7d0] rounded-[30px] p-6 mb-8'>
    <div className='flex items-center'>
      <img src={legalNumberone} alt='Img1' className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' />
      <h4 className='text-[#8FBC64] text-sm sm:text-lg font-semibold ml-4'>
        CareLegal Associates
      </h4>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Speciality</h5>
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Propertty compliance and lease agreements for supported housing.
      </p>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Contact</h5>
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Phone:(555) 555-1234 <br />Email: Info@carelegalassociates.com <br />Address: 123 Harmony Lane, cityville, ca 12345
      </p>
    </div>
  </div>

  {/* Box 2 */}
  <div className='w-full sm:w-[90%] md:w-[456px] h-auto bg-[#dbe7d0] rounded-[30px] p-6 mb-8'>
    <div className='flex items-center'>
      <img src={legalNumbertwo} alt='Img2' className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' />
      <h4 className='text-[#8FBC64] text-sm sm:text-lg font-semibold ml-4'>
        SafeHeaven Legal Group
      </h4>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Speciality</h5>
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Landlord-tenant law and contract drafting.
      </p>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Contact</h5>
      
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Phone:(555) 555-1234 <br />Email: Info@carelegalassociates.com <br />Address: 123 Harmony Lane, cityville, ca 12345
      </p>
    </div>
  </div>

  {/* Box 3 */}
  <div className='w-full sm:w-[90%] md:w-[456px] h-[310px]  bg-[#dbe7d0] rounded-[30px] p-6'>
    <div className='flex items-center'>
      <img src={legalNumberthree} alt='Img3' className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]' />
      <h4 className='text-[#8FBC64] text-sm sm:text-lg font-semibold ml-4'>
        Guardian Law Partners
      </h4>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Speciality</h5>
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Expert Legal guidance for housing agreements and property disputes.
      </p>
    </div>
    <div className='mt-6'>
      <h5 className='font-semibold text-xs sm:text-base'>Contact</h5>
     
      <p className='text-[#272829] ml-4 mt-2 text-xs sm:text-sm'>
        Phone:(555) 555-1234 <br />Email: Info@carelegalassociates.com <br />Address: 123 Harmony Lane, cityville, ca 12345
      </p>
    </div>
  </div>
</div>

</div>
















    </section>
  );
};

export default ServicesContent;
