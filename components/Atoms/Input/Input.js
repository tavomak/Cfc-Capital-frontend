import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Input = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  errors,
  register,
  rules,
  phone,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={phone ? 'flex items-center justify-stretch' : ''}>
      {phone && (
        <span
          className={`flex h-[42px] items-center rounded-l-md border-gray-200 bg-gray-100 px-2 ${errors ? 'border border-r-0 border-red-500' : ''}`}
        >
          +56
        </span>
      )}
      <label
        htmlFor={name}
        className={`${phone ? 'w-full rounded-r-md' : 'rounded-md'} ${errors ? 'border-red-500' : ''} relative my-4 block border border-gray-200 shadow-sm focus-within:border-dark-blue focus-within:ring-1 focus-within:dark-blue`}
      >
        {register ? (
          <input
            className="w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
            type={showPassword ? 'text' : type}
            id={name}
            placeholder={placeholder}
            {...register(name, { ...rules })}
            disabled={disabled}
          />
        ) : (
          <input
            className="w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
            type={showPassword ? 'text' : type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value?.trim()}
            onChange={onChange}
            disabled={disabled}
          />
        )}

        {type === 'password' && (
          <button
            className="absolute inset-y-0 grid w-10 cursor-pointer end-0 place-content-center"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}

        <span className="absolute start-2.5 top-0 -translate-y-1/2 peer-focus:bg-white peer-focus:text-dark-blue px-2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-full">
          {placeholder}
        </span>

        {errors && (
          <span className="absolute bottom-0 end-2.5 -translate-y-1/2 bg-white p-0.5 text-xs text-red-600 transition-all">
            {errors.message}
          </span>
        )}
      </label>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
  register: PropTypes.func,
  rules: PropTypes.shape({}),
  icon: PropTypes.element,
  phone: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
