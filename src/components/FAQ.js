import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Homely apartment?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "How do I sign up on the platform?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Can I filter apartments by location, budget, and type?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "How do I contact an agent for more details?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Are the accommodations verified?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Can I schedule a property viewing?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
        <div className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

