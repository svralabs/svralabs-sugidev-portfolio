import { useState } from 'react';
import FormInput from '../components/FormInput';

export default function ProjectInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style={{ animationDelay: '0.4s' }}>
        <div className="text-center py-12">
          <h2 className="font-h2 text-h2 text-on-surface mb-4">Thank You!</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Your project inquiry has been submitted successfully. We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 bg-ink-soft p-margin-mobile md:p-12 rounded-lg border border-surface-variant/10 reveal-up" style={{ animationDelay: '0.4s' }}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="Full Name"
            id="name"
            type="text"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <FormInput
          label="Subject / Project Title"
          id="subject"
          type="text"
          placeholder="New Project Inquiry"
          required
          value={formData.subject}
          onChange={handleChange}
        />
        <div className="group">
          <label className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3" htmlFor="message">Project Details</label>
          <textarea
            className="w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:border-ember focus:ring-0 transition-all placeholder:text-surface-variant/40 min-h-[12rem]"
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
