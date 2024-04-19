import { useState } from 'react'
import iconError from "../images/icon-error.svg";

import '../styles/Formulario.css'

const FormularioPath = ({
  className,
  icon = iconError,
  placeholder,
  type,
}) => {
  const [value, setValue] = useState(false);

  const handleValueVerify = (event) => {
    const inputValue = event.target.value;
    const isValid = inputValue.trim() !== ""; 
    setValue(isValid);
  }

  return (
    <div className="container card">
      <div className="content info-card">
        <form action="#" method='GET'>
          <div className="input-box">
            <input
              type={type}
              className={className}
              placeholder={placeholder}
              onBlur={handleValueVerify}
            />
            {icon && !value && <img src={icon} alt="Error" />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioPath;
