import { useState } from 'react';
import FormInput from '../components/FormInput';

export default function ProjectInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = ['Web App', 'Design System', 'UI Engineering', 'Performance'];
  const budgets = ['< $5k', '$5k - $10k', '$10k - $20k', '> $20k'];
  const timelines = ['< 1 month', '1-3 months', '3-6 months', '> 6 months'];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <main className="pt-32 pb-section-gap-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <header className="mb-16 md:mb-24 animate-reveal">
        <h1 className="font-kanit font-black text-[14vw] md:text-[10vw] leading-none tracking-tighter text-on-surface uppercase opacity-100">
          PROJECT<br/><span className="text-ember">INQUIRY</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <aside className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8 border-l border-mist/10 pl-8">
            <div className="group">
              <p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Location</p>
              <p className="font-body-lg text-xl font-medium group-hover:text-ember transition-glow flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span> Based in Jakarta
              </p>
            </div>
            <div className="group">
              <p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Current Availability</p>
              <p className="font-body-lg text-xl font-medium flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                Q4 2024
              </p>
            </div>
            <div className="group">
              <p className="font-caption text-caption uppercase text-on-surface-variant mb-2">Average Response</p>
              <p className="font-body-lg text-xl font-medium flex items-center gap-2">
                <span className="material-symbols-outlined">schedule</span> Within 24h
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-video w-full grayscale hover:grayscale-0 transition-all duration-700">
            <img className="w-full h-full object-cover" alt="Jakarta skyline" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0aiS3GG8fqD3FuQCcqOmmRi6VSK20tIKKz20eyAU233AirFin-bSFlM_phJu2Bbiv21sr6aM3Zg5lCOu8_UpA3kUkVrnRuEIgWZQf8lUF_s_DemJMqR-2RKA2-kBkKRX6MQ5H0_NxSjN_L1VDCJnNGCJnwsqrV6fVRjo_iaQjo8HiWtJ6Kw_XD4wz-KVGGEXtZsNlJLRsuEJeF9Fo_g5dkHbCjeSsBisX4khkLgh2PiljcnlrcgN"/>
          </div>
        </aside>

        <section className="lg:col-span-8 order-1 lg:order-2 animate-reveal" style={{ animationDelay: '0.1s' }}>
          {isSubmitted ? (
            <div className="bg-success/10 border border-success/20 p-8 rounded-lg text-center">
              <h2 className="font-h2 text-h2 text-success mb-4">Thank You!</h2>
              <p className="font-body-lg text-xl text-on-surface">Your inquiry has been submitted successfully. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormInput
                  label="Your Name"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <FormInput
                label="Company / Organization"
                id="company"
                type="text"
                placeholder="The Future Inc."
                value={formData.company}
                onChange={handleChange}
              />

              <div className="flex flex-col gap-6">
                <label className="font-nav-link text-nav-link uppercase text-on-surface-variant">Project Type</label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map(type => (
                    <label key={type} className="cursor-pointer">
                      <input
                        className="hidden peer"
                        name="projectType"
                        type="radio"
                        checked={formData.projectType === type}
                        onChange={() => setFormData(prev => ({ ...prev, projectType: type }))}
                      />
                      <span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="font-nav-link text-nav-link uppercase text-on-surface-variant">Budget</label>
                <div className="flex flex-wrap gap-3">
                  {budgets.map(budget => (
                    <label key={budget} className="cursor-pointer">
                      <input
                        className="hidden peer"
                        name="budget"
                        type="radio"
                        checked={formData.budget === budget}
                        onChange={() => setFormData(prev => ({ ...prev, budget: budget }))}
                      />
                      <span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">
                        {budget}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="font-nav-link text-nav-link uppercase text-on-surface-variant">Timeline</label>
                <div className="flex flex-wrap gap-3">
                  {timelines.map(timeline => (
                    <label key={timeline} className="cursor-pointer">
                      <input
                        className="hidden peer"
                        name="timeline"
                        type="radio"
                        checked={formData.timeline === timeline}
                        onChange={() => setFormData(prev => ({ ...prev, timeline: timeline }))}
                      />
                      <span className="px-6 py-3 rounded-full border border-mist/10 bg-ink-soft text-on-surface-variant hover:border-ember/50 peer-checked:bg-ember peer-checked:text-white peer-checked:border-ember transition-all duration-300 inline-block font-nav-link uppercase text-nav-link">
                        {timeline}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor="details">Project Details</label>
                <textarea
                  className="bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container min-h-[150px]"
                  id="details"
                  placeholder="Tell us about your project..."
                  value={formData.details}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="bg-ember text-white px-8 py-4 rounded-full font-nav-link text-nav-link uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,90,31,0.4)]"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
