

const FormInput = ({label, ...otherInput})=>{
    

    return (
        <div className="group"> 
             <label className={`${otherInput.value.length > 0 ? "shrink" : null}`}>{label}</label>
            <input {...otherInput}/>
        </div>
    )
}

export default FormInput