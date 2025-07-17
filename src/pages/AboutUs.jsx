import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <h3
            className="text-lg font-semibold text-black-700 cursor-pointer"
            onClick={() => toggleAnswer(index)}
            >
            {faq.question}
          </h3>
          {openIndex === index && (
            <p className="lg:col-span-2 bg-white p-8 rounded shadow text-gray-700 mt-1">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};



const faqs = [
  {
    question: '~How does Drop Hope work?',
    answer:
    'Drop Hope connects verified NGOs with donors who want to contribute specific items to real needs. You can browse campaigns, donate products, and track delivery — all in one transparent platform.',
  },
  {
    question: '~Can I donate items instead of food?',
    answer:
    'Yes! Drop Hope is designed to let you donate specific items like groceries, school supplies, hygiene kits, and more. You choose what to give, and we take care of the delivery.',
  },
  {
    question: '~Are the NGOs on Drop Hope verified?',
    answer:
    'Absolutely. All NGOs undergo a thorough verification process before joining the platform. We ensure they are compliant, accountable, and mission-aligned.',
  },
  {
    question: '~How do I know if my donation reached the right place?',
    answer:
    'Every donation is tracked. You’ll receive updates and visual proof (like photos or reports) once your donation is delivered to the beneficiaries.',
  },
  {
    question: '~Is there any platform fee or commission?',
    answer:
    'No. Drop Hope charges zero commission from your donation. 100% of your contribution goes toward the cause you choose to support.',
  },
  {
    question: '~Can I start a fundraiser on Drop Hope?',
    answer:
    'If you’re an NGO or community initiative, yes! You can apply to start a campaign. Our team will guide you through the process after verifying your credentials.',
  },
  {
    question: '~Is my donation eligible for tax exemption?',
    answer:
    'Most donations are eligible for tax benefits under Section 80G (in India). The eligibility depends on the NGO you support. You’ll receive a digital receipt for your records.',
  },
  {
    question: '~How do I contact Drop Hope for help or partnership?',
    answer:
    'We’d love to hear from you. Visit our Contact page or email us at support@drophope.org.',
  },
];




const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-2 text-blue-600">About Drop Hope</h1>
      <p className="text-xl text-center text-gray-600 mb-10">Spreading Kindness, One Drop at a Time</p>

      <section className="lg:col-span-2 bg-white p-8 rounded shadow mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧩 Who We Are</h2>
        <p>
          At <strong>Drop Hope</strong>, we believe that even a small act of giving can create a ripple effect of change. 
          We're a donation platform built to connect compassionate individuals with trusted NGOs and communities in need — 
          quickly, transparently, and impactfully.
        </p>
      </section>




      <section className="lg:col-span-2 bg-white p-8 rounded shadow mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
        <p className="mb-2">
          Our mission is simple yet powerful:
        </p>
        <p className="italic mb-4">To make giving easy, transparent, and truly impactful.</p>
        <p>
          We aim to bridge the gap between those who wish to donate and those who truly need support — whether it’s food, clothing, 
          educational materials, or essential items.
        </p>
      </section>




      <section className="lg:col-span-2 bg-white p-8 rounded shadow mb-10">
        <h2 className="text-2xl font-semibold mb-2">🤝 What We Do</h2>
        <p className="mb-4">
          Unlike traditional donation drives, Drop Hope lets you:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Browse live campaigns with real needs</li>
          <li>Donate specific items (not just money)</li>
          <li>Track the impact of your donation from start to finish</li>
        </ul>
        <p className="mt-4">
          Whether it’s helping a child go to school or aiding families during a disaster, 
          we ensure your contribution reaches the right hands.
        </p>
      </section>




      <section className="lg:col-span-2 bg-white p-8 rounded shadow mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔐 Our Promise</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ 100% Transparency</li>
          <li>✅ Verified NGO Partnerships</li>
          <li>✅ Real-Time Impact Tracking</li>
          <li>✅ No Middlemen</li>
        </ul>
        <p className="mt-4">
          We provide proof of every donation delivered, so you can give with confidence.
        </p>
      </section>




      <section className="lg:col-span-2 bg-white p-8 rounded shadow mb-16">
        <h2 className="text-2xl font-semibold mb-2">🌍 Why Drop Hope Matters</h2>
        <p>
          Every donation you make brings hope — the kind that changes lives. Together, we’re building a world 
          where giving is not just easy, but empowering — for both the giver and the receiver.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">📌 Frequently Asked Questions</h2>
        <FAQs />
      </section>
    </div>
    <Footer/>
    </>
  );
};
export default AboutUs;