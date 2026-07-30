import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-sb-white-one px-4 py-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          We are SupportBuy Limited
          (“SupportBuy”), a company
          incorporated under the laws of
          Nigeria. For any access
          request, questions, or
          inquiries about how we use
          your Personal Data and our
          privacy practices, please
          contact us at{" "}
          <a
            href="mailto:privacy@supportbuy.com"
            className="text-blue-600 underline"
          >
            privacy@supportbuy.com
          </a>
          .
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Overview
          </h2>
          <p className="text-gray-600">
            SupportBuy and its
            affiliates (“we”, “us”,
            “our”) are committed to
            protecting the rights and
            privacy of individuals in
            accordance with Data
            Protection Legislation. This
            Privacy Policy explains our
            practices, security
            measures, and your rights
            when we collect or process
            your Personal Data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Our Privacy Principles
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Empower individuals to
              control their Personal
              Data.
            </li>
            <li>
              Secure and protect
              Personal Data responsibly.
            </li>
            <li>
              Be transparent and educate
              users about data
              practices.
            </li>
            <li>
              Comply with local laws and
              regulations.
            </li>
            <li>
              Ensure Personal Data is
              accurate and up to date.
            </li>
            <li>
              Collect and store data
              only when necessary.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Personal Data We May Collect
          </h2>
          <p className="text-gray-600 mb-2">
            We may collect identity,
            contact, technical,
            financial, transactional,
            and communication data to
            provide our services and
            comply with legal
            obligations.
          </p>
          <p className="text-gray-600">
            Examples include: full name,
            government-issued ID, email
            address, phone number, IP
            address, bank account
            details, and transaction
            records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Data Protection Rights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Right to be informed about
              data processing.
            </li>
            <li>
              Right to access your
              Personal Data.
            </li>
            <li>
              Right to request deletion
              or correction of data.
            </li>
            <li>
              Right to opt-out of
              marketing communications.
            </li>
            <li>
              Right to withdraw consent
              at any time.
            </li>
            <li>
              Right to data portability.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            To exercise your rights or
            for inquiries, contact our
            Data Protection Officer at{" "}
            <a
              href="mailto:privacy@supportbuy.com"
              className="text-blue-600 underline"
            >
              privacy@supportbuy.com
            </a>
            . We aim to respond within
            30 days in accordance with
            applicable law.
          </p>
        </section>

        <footer className="border-t pt-4 mt-6 text-sm text-gray-500">
          <p>Last updated: July 2026</p>
        </footer>
      </div>
    </main>
  );
}
