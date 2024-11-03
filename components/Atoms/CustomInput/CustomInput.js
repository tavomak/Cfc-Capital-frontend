import { forwardRef, useState, useEffect } from 'react';
import { BiCalendar } from 'react-icons/bi';
import PropTypes from 'prop-types';

const CustomInput = forwardRef(({ value, onClick, txt }, ref) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div className="flex flex-nowrap border border-gray-200 rounded-md px-10 py-2">
      <span className="mt-1 mx-2">
        <span className="text-xl">
          <BiCalendar />
        </span>
      </span>
      <button
        type="button"
        style={{ borderColor: '#5a377f' }}
        className="form-control dropdown-toggle text-capitalize rounded-0"
        onClick={onClick}
        ref={ref}
      >
        {currentValue || txt}
      </button>
    </div>
  );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  value: PropTypes.string,
  txt: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomInput;
