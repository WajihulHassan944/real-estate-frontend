import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-5xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1762A9]">
          Welcome to PropertyConnectHub
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Where compassion meets connection. We are your trusted bridge between dedicated care providers, supportive agents, and landlords who care.
          Our mission is simple but powerful: to create an inclusive, dependable community where care-focused organisations and landlords come together to provide safe, quality housing. Whether you're a care provider seeking compliant homes or a landlord with properties to offer, we're here to make the process smooth, supportive, and tailored to your needs.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#1762A9] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#145a94] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
