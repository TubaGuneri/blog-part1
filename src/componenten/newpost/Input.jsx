import './Input.css'
function Input ({labelText, name, type, required, formStateValue, handleChange}) {
    const labelInputLink= `post- ${name}`;
     return(
         <>
         <label htmlFor={labelInputLink}>{labelText}</label>
             <input
                 type={type}
                 id={labelInputLink}
                 name={name}
                 required={required}
                 value={formStateValue}
                 onChange={handleChange}
                 />

         </>

     )
}
export default Input;