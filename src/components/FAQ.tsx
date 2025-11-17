import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ as FAQType } from '../data/siteData';

interface FAQProps {
  faqs: FAQType[];
  activeFaq: number | null;
  toggleFaq: (index: number) => void;
}

const FAQ: React.FC<FAQProps> = ({ faqs, activeFaq, toggleFaq }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          常见问题
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          以下是用户经常询问的问题，如果您有其他问题，欢迎随时联系我们
        </p>
      </div>
      
      <div 
        className="max-w-3xl mx-auto"
        role="region"
        aria-labelledby="faq-heading"
      >
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`mb-4 transition-all duration-300 ${
              activeFaq === index ? 'transform scale-[1.02]' : ''
            }`}
          >
            <button
              className={`w-full flex items-center justify-between p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                activeFaq === index 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750'
              }`}
              onClick={() => toggleFaq(index)}
              aria-expanded={activeFaq === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className={`text-left font-medium ${
                activeFaq === index 
                  ? 'text-blue-700 dark:text-blue-300' 
                  : 'text-gray-900 dark:text-white'
              }`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-all duration-300 ${
                  activeFaq === index 
                    ? 'text-blue-600 dark:text-blue-400 rotate-180' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
                aria-hidden="true"
              />
            </button>
            
            <div 
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                activeFaq === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              aria-hidden={activeFaq !== index}
            >
              <div className="bg-white dark:bg-gray-800 px-4 py-4 rounded-b-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;