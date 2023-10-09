import React, { useState } from 'react'

const AccountVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('pending') // Possible values: 'pending', 'approved', 'rejected'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    documentType: 'passport',
    documentNumber: '',
    documentFile: null
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setFormData({ ...formData, documentFile: file })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Simulate KYC verification process (replace with actual implementation)
    setTimeout(() => {
      // Simulate success for demonstration
      setVerificationStatus('approved')
    }, 2000)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Account Verification</h1>

      {verificationStatus === 'pending' && (
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <p className='text-gray-400 mb-4'>
            To comply with regulatory requirements, please complete the KYC
            verification process.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='firstName' className='block text-gray-400'>
                First Name:
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                className='w-full px-4 py-2 mt-2 border rounded-md'
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='lastName' className='block text-gray-400'>
                Last Name:
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                className='w-full px-4 py-2 mt-2 border rounded-md'
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='dateOfBirth' className='block text-gray-400'>
                Date of Birth:
              </label>
              <input
                type='date'
                id='dateOfBirth'
                name='dateOfBirth'
                className='w-full px-4 py-2 mt-2 border rounded-md'
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='documentType' className='block text-gray-400'>
                Document Type:
              </label>
              <select
                id='documentType'
                name='documentType'
                className='w-full px-4 py-2 mt-2 border rounded-md'
                value={formData.documentType}
                onChange={handleInputChange}
                required
              >
                <option value='passport'>Passport</option>
                <option value='driverLicense'>Driver's License</option>
                {/* Add more document types */}
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='documentNumber' className='block text-gray-400'>
                Document Number:
              </label>
              <input
                type='text'
                id='documentNumber'
                name='documentNumber'
                className='w-full px-4 py-2 mt-2 border rounded-md'
                value={formData.documentNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='documentFile' className='block text-gray-400'>
                Upload Document (PDF or image):
              </label>
              <input
                type='file'
                id='documentFile'
                name='documentFile'
                accept='.pdf, .jpg, .jpeg, .png'
                className='w-full mt-2'
                onChange={handleFileChange}
                required
              />
            </div>
            <button
              type='submit'
              className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
            >
              Submit for Verification
            </button>
          </form>
        </div>
      )}

      {verificationStatus === 'approved' && (
        <div>
          <p className='text-green-500 font-semibold mb-4'>
            Verification Approved!
          </p>
          <p className='text-gray-400 mb-4'>
            Your KYC verification has been approved. You can now access your
            account.
          </p>
          {/* You can display additional information or actions here */}
        </div>
      )}

      {verificationStatus === 'rejected' && (
        <div>
          <p className='text-red-500 font-semibold mb-4'>
            Verification Rejected
          </p>
          <p className='text-gray-400 mb-4'>
            Unfortunately, your KYC verification has been rejected. Please
            review your information and try again.
          </p>
          {/* You can provide guidance on what to do next */}
        </div>
      )}
    </div>
  )
}

export default AccountVerification
