import React from 'react';
import './styles.scss';

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="formRow">
      {label && (
        <label>
          {label}
        </label>
      )}

      <input 
        className="forinput" 
        onChange={handleChange} 
        {...otherProps} 
      />
    </div>
  );
};

export default FormInput;
