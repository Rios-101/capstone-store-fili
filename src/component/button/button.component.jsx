import "./button.style.scss"

const buttonTypeStyle = {
    google: "google-sign-in",
    inverted: "inverted"
}



const Button = ({value, buttonType, ...otherProp}) =>{
    return (
        <button className={`button-container ${buttonTypeStyle[buttonType]}`} {...otherProp}>{value}</button>
    )
}

export default Button