"use client";
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'; // Import icons from React Icons

const FAQSection = () => {
  const faqItems = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of IT solutions including cloud computing, AI, and cybersecurity services.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team through our contact page or by calling our support hotline.',
    },
    {
      question: 'What is cloud computing?',
      answer: 'Cloud computing is the delivery of computing services over the internet, including storage, processing, and software.',
    },
    {
      question: 'How secure is your cloud service?',
      answer: 'Our cloud service is highly secure, employing the latest encryption standards and security protocols to protect your data.',
    },
    {
      question: 'Do you offer custom software development?',
      answer: 'Yes, we specialize in custom software development tailored to meet your specific business needs.',
    },
    {
      question: 'What is AI and how can it benefit my business?',
      answer: 'AI, or artificial intelligence, refers to systems that can perform tasks that typically require human intelligence. It can improve efficiency, automate tasks, and provide insights through data analysis.',
    },
    {
      question: 'What is your approach to cybersecurity?',
      answer: 'We employ a multi-layered approach to cybersecurity, including firewalls, intrusion detection systems, and regular security audits to ensure your data is safe.',
    },
    {
      question: 'How do I get started with your services?',
      answer: 'To get started, you can reach out to us via our contact page, and our team will guide you through the onboarding process and discuss your specific needs.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-16">
      {/* FAQ Section */}
      <div className="max-w-7xl w-full">
        <h2 className="font-bold text-3xl mb-6 text-center text-brand">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 mt-10">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white pl-4 pt-2 border-b pb-4 transition-all duration-300 ${
                openIndex === index ? 'border-brand' : 'border-gray-300'
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`font-bold text-lg transition-all duration-300 ${
                    openIndex === index ? 'text-brand' : 'text-black'
                  }`}
                >
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <BiChevronUp className="text-brand text-2xl" />
                ) : (
                  <BiChevronDown className="text-brand text-2xl" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-700 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
