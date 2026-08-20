import { useState } from 'react';

export default function FormInput({ label, id, type, placeholder, value, onChange, error }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-nav-link text-nav-link uppercase text-on-surface-variant" htmlFor={id}>
        {label}
      </label>
      <input
        className={`bg-ink-soft border-b border-mist/20 py-4 px-1 text-xl font-light text-on-surface glow-focus transition-glow placeholder:text-mist/20 focus:bg-surface-container ${error ? 'border-error' : ''}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
