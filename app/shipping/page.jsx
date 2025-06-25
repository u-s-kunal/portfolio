import React from "react";

const ShippingPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        Shipping & Delivery Policy
      </h1>

      <p className="mb-4">
        At <strong>codewithkunal.in</strong>, we currently do not offer any
        physical products. All our offerings are digital in nature — including
        content, support services, or donations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Digital Delivery</h2>
      <p className="mb-4">
        Once a donation or payment is successfully completed, you may receive a
        confirmation message or email. No physical shipping or delivery is
        applicable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. No Shipping Charges
      </h2>
      <p className="mb-4">
        As we do not ship physical goods, there are no shipping fees or
        logistics involved.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding digital access or support after
        payment, feel free to reach out to us at{" "}
        <strong>developerkunal01@gmail.com</strong>.
      </p>

      <p className="mt-6 text-sm text-gray-400">Last updated: June 24, 2025</p>
    </div>
  );
};

export default ShippingPage;
