import React from "react";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-sb-white-one px-4 py-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Terms of Use
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to SupportBuy. These
          Terms of Use (“Terms”) govern
          your access to and use of our
          Services, applications, and
          websites. By using our
          Services, you agree to comply
          with these Terms.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using
            SupportBuy Services, you
            confirm that you have read,
            understood, and agree to be
            bound by these Terms. If you
            do not agree, you must
            discontinue use of our
            Services immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Eligibility
          </h2>
          <p className="text-gray-600">
            You must be at least 18
            years old to use our
            Services. By using our
            Services, you represent and
            warrant that you meet this
            requirement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Provide accurate and
              up-to-date information.
            </li>
            <li>
              Maintain the
              confidentiality of your
              account credentials.
            </li>
            <li>
              Comply with all applicable
              laws and regulations.
            </li>
            <li>
              Do not misuse or attempt
              to disrupt our Services.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content, trademarks, and
            intellectual property
            associated with SupportBuy
            remain the property of
            SupportBuy Limited. You may
            not copy, reproduce, or
            distribute our content
            without prior written
            consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            SupportBuy shall not be
            liable for any indirect,
            incidental, or consequential
            damages arising from your
            use of our Services. Your
            sole remedy is to
            discontinue use of the
            Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms are governed by
            the laws of Nigeria. Any
            disputes shall be resolved
            in accordance with
            applicable Nigerian law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Contact Us
          </h2>
          <p className="text-gray-600">
            For questions regarding
            these Terms, please contact
            us at{" "}
            <a
              href="mailto:privacy@supportbuy.com"
              className="text-blue-600 underline"
            >
              privacy@supportbuy.com
            </a>
            .
          </p>
        </section>

        <footer className="border-t pt-4 mt-6 text-sm text-gray-500">
          <p>Last updated: July 2026</p>
        </footer>
      </div>
    </main>
  );
}
