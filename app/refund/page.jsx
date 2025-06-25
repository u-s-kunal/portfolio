// For /app/refund/page.jsx or /pages/refund.js
import React from "react";

const RefundPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        Refund & Cancellation Policy
      </h1>
      <p className="mb-4">
        At <strong>codewithkunal.in</strong>, we truly appreciate your support.
        Since our services are based on voluntary donations and digital content,
        we follow a strict no-refund policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Donations</h2>
      <p className="mb-4">
        All donations made are final and non-refundable. These contributions
        help support content creation, learning, and personal development.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Cancellation Policy
      </h2>
      <p className="mb-4">
        As there are no physical goods or subscription-based services provided,
        cancellation of a donation or support payment is not applicable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Exceptions</h2>
      <p className="mb-4">
        In rare cases of mistaken transactions or duplicate payments, you may
        contact us within 24 hours of the transaction. We will review the issue
        and may initiate a refund at our discretion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
      <p className="mb-4">
        If you have any concerns regarding your transaction, please reach out to{" "}
        <strong>developerkunal01@gmail.com</strong>.
      </p>

      <p className="mt-6 text-sm text-gray-400">Last updated: June 24, 2025</p>
    </div>
  );
};

export default RefundPage;
