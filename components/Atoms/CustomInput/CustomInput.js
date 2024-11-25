import { forwardRef, useState, useEffect } from 'react';
import { BiCalendar } from 'react-icons/bi';
import PropTypes from 'prop-types';

const CustomInput = forwardRef(({ value, onClick, txt }, ref) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div className="flex px-10 py-2 border border-gray-200 rounded-md flex-nowrap">
      <span className="mx-2 mt-1">
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
