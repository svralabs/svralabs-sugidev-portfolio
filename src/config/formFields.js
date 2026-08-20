export const contactFormFields = [
  {
    id: 'name',
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
    validation: {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters'
      }
    }
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    }
  },
  {
    id: 'subject',
    name: 'subject',
    label: 'Subject / Project Title',
    type: 'text',
    placeholder: 'New Project Inquiry',
    required: true,
    validation: {
      required: 'Subject is required',
      minLength: {
        value: 5,
        message: 'Subject must be at least 5 characters'
      }
    }
  },
  {
    id: 'message',
    name: 'message',
    label: 'Your Message',
    type: 'textarea',
    placeholder: 'Tell me about your project...',
    required: true,
    validation: {
      required: 'Message is required',
      minLength: {
        value: 10,
        message: 'Message must be at least 10 characters'
      }
    }
  }
];

export const projectInquiryFormFields = [
  ...contactFormFields,
  {
    id: 'budget',
    name: 'budget',
    label: 'Project Budget',
    type: 'select',
    options: [
      { value: '', label: 'Select budget range' },
      { value: 'under-5k', label: 'Under $5,000' },
      { value: '5k-10k', label: '$5,000 - $10,000' },
      { value: '10k-20k', label: '$10,000 - $20,000' },
      { value: '20k-plus', label: '$20,000+' }
    ],
    required: true,
    validation: {
      required: 'Budget is required'
    }
  },
  {
    id: 'timeline',
    name: 'timeline',
    label: 'Project Timeline',
    type: 'select',
    options: [
      { value: '', label: 'Select timeline' },
      { value: '1-3-months', label: '1-3 months' },
      { value: '3-6-months', label: '3-6 months' },
      { value: '6-12-months', label: '6-12 months' },
      { value: '12-months-plus', label: '12+ months' }
    ],
    required: true,
    validation: {
      required: 'Timeline is required'
    }
  }
];
