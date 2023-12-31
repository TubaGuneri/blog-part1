import './Button.css'
function Button({type, disabled = false, onClick, variant, children}){

    return(
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={variant === 'primary'? 'button button-primary' : 'button button-invisible'}>
            {children}
        </button>
    );
}
export default Button;