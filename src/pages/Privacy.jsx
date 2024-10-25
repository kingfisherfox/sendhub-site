// Privacy.jsx
import React from 'react';
import HeaderMenuLeft from '../components/HeaderMenuLeft.jsx';

// Constants for easy updates
const PRODUCT_NAME = "Business Daddy Studio";
const COMPANY_NAME = "Business Daddy Studio, Inc.";
const WEBSITE_URL = "https://businessdaddy.org";
const CONTACT_EMAIL = "support@businessdaddy.org";
const CURRENT_YEAR = new Date().getFullYear();

const Privacy = () => {
  return (
    <>
      <HeaderMenuLeft />
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto text-gray-900">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            Your privacy is important to us. This privacy policy explains the types of personal information we collect and how we use, share, and protect that information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            {PRODUCT_NAME} collects various types of information, including information that identifies or can be used to identify you, directly or indirectly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Information</h2>
          <p className="mb-4">
            The information we collect is used to provide, operate, and improve our services, personalize your experience, and comply with legal obligations.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Protection</h2>
          <p className="mb-4">
            {COMPANY_NAME} respects your privacy and will not sell or share your data with third parties without consent, except as required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
          <p className="mb-4">
            You have choices regarding your information, including access, correction, deletion, and portability. To exercise your choices, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">{CONTACT_EMAIL}</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">{CONTACT_EMAIL}</a>.
          </p>
          
          <p className="mt-8 text-sm text-gray-600">
            &copy; {CURRENT_YEAR} <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{COMPANY_NAME}</a>. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;