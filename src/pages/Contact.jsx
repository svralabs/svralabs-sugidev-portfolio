import { useForm } from 'react-hook-form';
import FormField from '../components/FormField';
import { contactFormFields } from '../config/formFields';
import styles from './Contact.module.css';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <main className={`${styles.contactContainer} max-w-container-max mx-auto`}>
      <header className={styles.heroSection}>
        <div className="reveal-up">
          <span className="font-overline text-overline text-ember uppercase mb-stack-xs block">Availability: Q4 2024</span>
          <h1 className={`kanit-black ${styles.heroTitle} text-on-surface uppercase italic`}>
            Let's<br/>Talk
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <aside className="lg:col-span-5 space-y-16 reveal-up" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-stack-md">Direct Link</h3>
            <a className="group flex items-center text-[2rem] md:text-[2.5rem] font-kanit italic text-on-surface hover:text-ember transition-colors" href="mailto:hello@sugidev.tech">
              hello@sugidev.tech
              <span className="material-symbols-outlined ml-4 text-ember group-hover:translate-x-2 transition-transform duration-300">arrow_outward</span>
            </a>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">How can I help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={styles.serviceItem}>
                <input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
                <span className={`font-body-md text-on-surface ${styles.serviceText}`}>Frontend Architecture</span>
              </label>
              <label className={styles.serviceItem}>
                <input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
                <span className={`font-body-md text-on-surface ${styles.serviceText}`}>UI Design System</span>
              </label>
              <label className={styles.serviceItem}>
                <input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
                <span className={`font-body-md text-on-surface ${styles.serviceText}`}>Full-stack Dev</span>
              </label>
              <label className={styles.serviceItem}>
                <input className="custom-checkbox w-5 h-5 rounded border-surface-variant/50 bg-background text-ember focus:ring-ember" type="checkbox"/>
                <span className={`font-body-md text-on-surface ${styles.serviceText}`}>Technical Audit</span>
              </label>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-surface-variant/20 grayscale hover:grayscale-0 transition-all duration-700">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJW4ntn7cfq-NK6sXpOK-oljo0kpYwiqnmqHNP-pVkHHrhMRjEY7IaVUDdtyhboZF1Tosh1B4pQ7viLVlyz0CGSYynq5IcY4n_8d0TWhB3RooaWuy8j_pUZV4pOld2UrxEc4cyYM2eOfzUzEzgk7-HQaZCZxG6GpEJgVmvehATSOZYp3QbtcF0kP-ipxbvAxymPDhNa9QmlSxMq4xefBHR4mWUWhTBGHPRYL3QhKKsq9R8oUKowvI" alt="A moody, high-contrast black and white architectural photograph"/>
            <div className={`${styles.locationInfo} absolute bottom-6 left-6`}>
              <span className="material-symbols-outlined text-ember">location_on</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Berlin, DE / Remote</span>
            </div>
          </div>
        </aside>

        <div className={`lg:col-span-7 ${styles.formContainer} reveal-up`} style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactFormFields.slice(0, 2).map(field => (
                <FormField key={field.id} field={field} register={register} errors={errors} />
              ))}
            </div>

            {contactFormFields.slice(2).map(field => (
              <FormField key={field.id} field={field} register={register} errors={errors} />
            ))}

            <button
              type="submit"
              className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-nav-link text-nav-link uppercase inner-stroke hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
