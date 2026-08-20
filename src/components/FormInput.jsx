import { useState } from 'react';

export default function FormInput({ label, id, type, placeholder, required, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="group">
      <label
        className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`w-full bg-background border-b-2 ${
          isFocused ? 'border-ember' : 'border-surface-variant/30'
        } text-on-surface px-0 py-4 focus:outline-none focus:ring-0 transition-all placeholder:text-surface-variant/40`}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
