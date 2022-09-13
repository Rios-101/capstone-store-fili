import "./form-input.style.scss";


const FormInput = ({label, ...otherInput})=>{
    

    return (
        <div className="group"> 
            <input className="form-input" {...otherInput}/>
             {label && <label className={`${otherInput.value.length > 0 ? "shrink" : null} form-input-label`}>{label}</label>}
        </div>
    )
}

export default FormInput