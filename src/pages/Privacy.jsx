// Privacy.jsx
import React from 'react';
import HeaderMenuLeft from '../components/HeaderMenuLeft.jsx';

// Constants for easy updates
const PRODUCT_NAME = "Sendhub";
const COMPANY_NAME = "Business Daddy";
const COMPANY_LOCATION = "Australia and Thailand";
const WEBSITE_URL = "https://businessdaddy.org";
const CONTACT_EMAIL = "support@businessdaddy.org";
const CURRENT_YEAR = new Date().getFullYear();
const EFFECTIVE_DATE = "October 27, 2024";

const Privacy = () => {
  return (
    <>
      <HeaderMenuLeft />
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto text-gray-900">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy for {PRODUCT_NAME}</h1>
          <p className="mb-4">Effective Date: {EFFECTIVE_DATE}</p>
          <p className="mb-4">
            At {PRODUCT_NAME}, your privacy is of utmost importance to us. {PRODUCT_NAME} is a Chrome extension built by {COMPANY_NAME}, a small operation based in {COMPANY_LOCATION}. We are committed to transparency and user privacy, ensuring that no personally identifiable information (PII) is collected, stored, or shared by our extension.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            {PRODUCT_NAME} does not collect or store any personally identifiable information (PII). Specifically:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>We do not store API keys entered by users.</li>
            <li>We do not track your usage or interactions with the extension.</li>
            <li>We do not collect any personal information, such as names, emails, or browsing history.</li>
          </ul>
          <p className="mb-4">
            The only tracking that occurs is managed by Google Analytics within the Chrome Web Store, which tracks:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Extension installs</li>
            <li>Uninstalls</li>
            <li>User reviews</li>
            <li>Basic usage statistics for the Chrome Web Store</li>
          </ul>
          <p className="mb-4">
            This tracking is performed by Google, not by {PRODUCT_NAME} or {COMPANY_NAME}. No data is shared with us other than the anonymized install and review statistics provided by the Chrome Web Store.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">API Key Usage</h2>
          <p className="mb-4">
            {PRODUCT_NAME} utilizes third-party APIs, such as OpenAI’s API, to analyze content. Any API key you provide is stored locally on your device through Chrome’s `chrome.storage.local` and is never transmitted to us or stored on any of our servers. The API key is solely used to authenticate your requests.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">No Data Collection Policy</h2>
          <p className="mb-4">
            We are committed to never collecting or storing any data from users. {PRODUCT_NAME} is designed to help you analyze content without the need to track or collect personal data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We do not foresee making any changes to this Privacy Policy. However, in the event that changes become necessary, we will notify users by posting an update on our Privacy Policy page at {WEBSITE_URL}. Any changes will be clearly highlighted to ensure transparency.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            As a user of {PRODUCT_NAME}, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Uninstall the extension at any time through your Chrome browser settings without notifying us.</li>
            <li>Access and control your data. Since we do not store any personal data, there is no data to request access to or delete.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Terms & Conditions</h2>
          <p className="mb-4">Effective Date: {EFFECTIVE_DATE}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By installing or using the {PRODUCT_NAME} Chrome extension, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please uninstall the extension immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Purpose of {PRODUCT_NAME}</h2>
          <p className="mb-4">
            {PRODUCT_NAME} is designed to help users simplify and better understand complex content. By using language models, {PRODUCT_NAME} provides easy-to-read summaries of legal text.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p className="mb-4">You are responsible for using {PRODUCT_NAME} in accordance with all applicable laws. You must not:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Use {PRODUCT_NAME} to reverse engineer, decompile, or attempt to extract the source code of the extension.</li>
            <li>Misuse the extension for illegal or unethical purposes.</li>
            <li>Share, distribute, or modify the {PRODUCT_NAME} extension without permission.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclaimer of Warranties</h2>
          <p className="mb-4">
            {PRODUCT_NAME} is provided "as is" and "as available" without any warranties of any kind, whether express or implied. {COMPANY_NAME} makes no representations or warranties in relation to the operation or performance of the extension.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, {COMPANY_NAME} will not be liable for any damages of any kind arising from the use of {PRODUCT_NAME}, including direct, indirect, incidental, punitive, and consequential damages.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Ownership & Intellectual Property</h2>
          <p className="mb-4">
            All intellectual property rights in and to {PRODUCT_NAME}, including its design, functionality, and source code, belong to {COMPANY_NAME}. You may not copy, modify, distribute, sell, or lease any part of {PRODUCT_NAME} or its code.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to the Terms & Conditions</h2>
          <p className="mb-4">
            In the event that changes to these Terms & Conditions are required, we will notify users by posting an update on our website or within the extension itself.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p className="mb-4">
            You may uninstall and terminate your use of {PRODUCT_NAME} at any time. {COMPANY_NAME} reserves the right to terminate or suspend access to {PRODUCT_NAME} for any reason, including misuse or violations of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These Terms & Conditions are governed by and construed in accordance with the laws of {COMPANY_LOCATION}, without regard to conflict of law principles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p className="mb-4">
            For any questions regarding these Terms & Conditions or {PRODUCT_NAME}, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:underline">{CONTACT_EMAIL}</a>.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Privacy;