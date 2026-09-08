
import React from "react";

const ShippingPage = () => {
  return (
    <main className="policy-page">
      <div className="policy-container">

        <header className="policy-header">
          <span className="policy-label">POLICY</span>

          <h1>Shipping & Delivery Policy</h1>

          <p>
            This policy explains how delivery is handled for the digital
            offerings and support payments available through this website.
          </p>
        </header>

        <div className="policy-divider" />

        <article className="policy-content">

          <section className="policy-section">
            <span className="policy-number">01</span>

            <div>
              <h2>Digital Delivery</h2>

              <p>
                At <strong>codewithkunal.in</strong>, we currently do not offer
                physical products. Our offerings are digital in nature,
                including content, support services, and donations.
              </p>

              <p>
                Once a donation or payment is successfully completed, you may
                receive a confirmation message or email. No physical shipping
                or delivery is applicable.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <span className="policy-number">02</span>

            <div>
              <h2>No Shipping Charges</h2>

              <p>
                Since we do not ship physical goods, there are no shipping fees,
                courier charges, or logistics costs associated with payments
                made through this website.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <span className="policy-number">03</span>

            <div>
              <h2>Contact Us</h2>

              <p>
                If you have any questions regarding digital access,
                confirmation of payment, or support after completing a
                transaction, please contact us at{" "}
                <a href="mailto:developerkunal01@gmail.com">
                  developerkunal01@gmail.com
                </a>
                .
              </p>
            </div>
          </section>

        </article>

        <footer className="policy-footer">
          <span>Last updated</span>
          <time dateTime="2025-06-24">June 24, 2025</time>
        </footer>

      </div>
    </main>
  );
};

export default ShippingPage;

