import React from 'react'

const SupportAndHelp = () => {
  // Sample FAQs data (replace with actual data)
  const faqs = [
    {
      id: 1,
      question: 'How do I create an account?',
      answer:
        'To create an account, click on the "Sign Up" button and follow the registration process.'
    },
    {
      id: 2,
      question: 'What are the trading hours?',
      answer:
        'Trading hours vary by asset. You can find detailed trading hours in the knowledge base.'
    }
    // Add more FAQs here
  ]

  // Sample knowledge base categories (replace with actual data)
  const knowledgeBaseCategories = [
    {
      id: 1,
      name: 'Getting Started',
      articles: [
        {
          id: 101,
          title: 'How to Verify Your Account',
          link: '/knowledge-base/101'
        },
        { id: 102, title: 'Funding Your Account', link: '/knowledge-base/102' }
      ]
    },
    {
      id: 2,
      name: 'Trading Strategies',
      articles: [
        {
          id: 201,
          title: 'Introduction to Day Trading',
          link: '/knowledge-base/201'
        },
        {
          id: 202,
          title: 'Risk Management in Trading',
          link: '/knowledge-base/202'
        }
      ]
    }
    // Add more knowledge base categories and articles here
  ]

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Support and Help</h1>

      {/* Customer Support */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Customer Support</h2>
        <p className='text-gray-400'>
          Contact our support team for assistance:
        </p>
        <ul className='list-disc ml-6'>
          <li>Email: support@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
        </ul>
        {/* Include a contact form here if needed */}
      </div>

      {/* FAQs */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Frequently Asked Questions
        </h2>
        <ul className='space-y-2'>
          {faqs.map(faq => (
            <li key={faq.id} className='bg-gray-700 p-4 rounded-lg'>
              <p className='text-white font-semibold'>{faq.question}</p>
              <p className='text-gray-400'>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Knowledge Base */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Knowledge Base</h2>
        <ul className='space-y-2'>
          {knowledgeBaseCategories.map(category => (
            <li key={category.id} className='mb-4'>
              <p className='text-white font-semibold'>{category.name}</p>
              <ul className='list-disc ml-6'>
                {category.articles.map(article => (
                  <li key={article.id}>
                    <a
                      href={article.link}
                      className='text-blue-500 hover:underline'
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Request Assistance */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Request Assistance</h2>
        <p className='text-gray-400'>
          If you need further assistance, you can request support by opening a
          ticket:
        </p>
        <a href='/support/ticket' className='text-blue-500 hover:underline'>
          Open Support Ticket
        </a>
      </div>

      {/* Educational Resources */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Educational Resources</h2>
        <p className='text-gray-400'>
          Explore our educational resources to improve your trading skills:
        </p>
        <ul className='list-disc ml-6'>
          <li>
            <a href='/webinars' className='text-blue-500 hover:underline'>
              Webinars
            </a>
          </li>
          <li>
            <a href='/tutorials' className='text-blue-500 hover:underline'>
              Video Tutorials
            </a>
          </li>
          {/* Add more educational resource links here */}
        </ul>
      </div>
    </div>
  )
}

export default SupportAndHelp
