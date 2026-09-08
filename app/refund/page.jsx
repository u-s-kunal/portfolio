
import React from "react";

const RefundPage = () => {
  return (
    <main className="policy-page">
      <div className="policy-container">

        <header className="policy-header">
          <span className="policy-label">POLICY</span>
          <h1>Refund & Cancellation Policy</h1>
          <p>
            This policy explains how refunds and cancellations are handled for
            donations and support payments made through this website.
          </p>
        </header>

        <div className="policy-divider" />

        <article className="policy-content">

          <section className="policy-section">
            <span className="policy-number">01</span>

            <div>
              <h2>Donations</h2>
              <p>
                All donations made through this website are considered final
                and non-refundable. These contributions help support content
                creation, learning, and personal development.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <span className="policy-number">02</span>

            <div>
              <h2>Cancellation Policy</h2>
              <p>
                As there are no physical goods or subscription-based services
                provided through this website, cancellation of a donation or
                support payment is generally not applicable.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <span className="policy-number">03</span>

            <div>
              <h2>Exceptions</h2>
              <p>
                In rare cases involving a mistaken transaction or duplicate
                payment, you may contact us within 24 hours of the transaction.
                Each request will be reviewed individually, and a refund may
                be issued at our discretion.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <span className="policy-number">04</span>

            <div>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns regarding a transaction,
                please contact us at{" "}
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

export default RefundPage;

