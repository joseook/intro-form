import '../styles/Button.css';

const Button = ({text, className, backgroundColor}) => {
  return (
    <button className={`btn-box ${className}`} style={{background: backgroundColor}}>
        {text}
    </button>
  )
}

export default Button