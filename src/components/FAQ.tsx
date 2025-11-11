import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ as FAQType } from '../data/siteData';

interface FAQProps {
  faqs: FAQType[];
  activeFaq: number | null;
  setActiveFaq: (index: number | null) => void;
}

const FAQ: React.FC<FAQProps> = ({ faqs, activeFaq, setActiveFaq }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        常见问题
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              aria-expanded={activeFaq === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
              {activeFaq === index && (
              <div 
                id={`faq-answer-${index}`}
                className="bg-white dark:bg-gray-800 px-4 py-3 rounded-b-lg shadow-md mt-1"
              >
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
              )}
          </div>
          ))}
      </div>
    </section>
  );
};

export default FAQ;
