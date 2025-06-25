// For /app/terms/page.jsx or /pages/terms.js
import React from "react";

const TermsPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        Welcome to <strong>codewithkunal.in</strong>. By using this website, you
        agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Content</h2>
      <p className="mb-4">
        All content on this website, including text, images, and code, is the
        property of Kunal S.U. and is protected by copyright laws. You may not
        reuse or distribute any content without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Donations</h2>
      <p className="mb-4">
        Donations made through this site are voluntary and non-refundable. The
        funds are used to support the creator's personal development and project
        work.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. External Links</h2>
      <p className="mb-4">
        This site may contain links to other websites. I am not responsible for
        the content or practices of these third-party websites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="mb-4">
        I may update these terms from time to time. Continued use of the site
        indicates your acceptance of the modified terms.
      </p>

      <p className="mt-6 text-sm text-gray-400">Last updated: June 24, 2025</p>
    </div>
  );
};

export default TermsPage;
