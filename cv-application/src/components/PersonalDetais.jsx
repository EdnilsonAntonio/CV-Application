import { useRef } from "react";
import '../style/fieldset.css'
function PersonalDetails() {
    // Usando useRef para segurar os valores dos inputs
    let firstName = useRef(null);
    let lastName = useRef(null);;
    let email = useRef(null);;
    let phone = useRef(null);;
    let address = useRef(null);;

    // Função para capturar os dados do formulário e armazená-los em um objeto
    const handleSubmit = (e) => {
        e.preventDefault()
        // Atualizando os valores dos inputs
        const details = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
        }
    }

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <legend>Personal Details</legend>
            <label>
                <input type="text" placeholder="First Name" required ref = {firstName} />
            </label>
            <br />
            <label>
                <input type="text" placeholder="Last Name" required ref = {lastName} />
            </label>
            <br />
            <label>
                <input type="email" placeholder="E-mail" required ref = {email} />
            </label>
            <br />
            <label>
                <input type="tel" placeholder="Phone number" ref = {phone} />
            </label>
            <br />
            <label>
                <input type="text" placeholder="Endereço" ref = {address}></input>
            </label>
            <br />
            <input type="submit" value="Update" />
        </form>
    )
}

export default PersonalDetails;