import { Link } from "react-router-dom";


const Button = ({
    text,
    className = "",
    type = "",
    to = "/",
    onClick,    
    ...rest
}) => {

    const baseClass = 
    "px-5 md:px-8 py-3 min-w-[180px] w-fit uppercase font-barlow font-medium tracking-wide cursor-pointer inline-block text-center "
     
    if (type === "link") {
        return (
            <Link to={to} className= {`${baseClass} ${className}`} {...rest}>
               {text}
            </Link>
        )
    }
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...rest}
      >
      {text}
    </button>
  )
}

export default Button
