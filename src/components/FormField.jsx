import { useState } from 'react';

export default function FormField({ field, register, errors }) {
  const [isFocused, setIsFocused] = useState(false);

  const getFieldClassName = () => {
    let className = 'w-full bg-background border-b-2 border-surface-variant/30 text-on-surface px-0 py-4 focus:outline-none focus:ring-0 transition-all placeholder:text-surface-variant/40';

    if (isFocused) {
      className += ' focus:border-ember';
    }

    if (errors[field.name]) {
      className += ' border-error';
    }

    return className;
  };

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            className={getFieldClassName()}
            rows="5"
            {...register(field.name, field.validation)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
      case 'select':
        return (
          <select
            id={field.id}
            name={field.name}
            className={getFieldClassName()}
            {...register(field.name, field.validation)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {field.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className={getFieldClassName()}
            {...register(field.name, field.validation)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        );
    }
  };

  return (
    <div className="group">
      <label
        className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-3"
        htmlFor={field.id}
      >
        {field.label}
      </label>
      {renderField()}
      {errors[field.name] && (
        <p className="text-error text-sm mt-1">{errors[field.name].message}</p>
      )}
    </div>
  );
}
