import { useRef } from "react";
import '../style/fieldset.css'
function PersonalDetails() {
    // Usando useRef para segurar os valores dos inputs
    let fullName = useRef(null);
    let lastName = useRef(null);;
    let email = useRef(null);;
    let phone = useRef(null);;
    let address = useRef(null);;

    // Função para capturar os dados do formulário e armazená-los em um objeto
    const handleSubmit = (e) => {
        e.preventDefault()
        // Atualizando os valores dos inputs
        const details = {
            fullName: fullName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
        }
    }

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <div className="row">
                <div className="col-12">
                    <label>
                    <input type="text" placeholder="Full name" required ref = {fullName} />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-9">
                    <label>
                    <input type="email" placeholder="E-mail" required ref = {email} />
                    </label>
                </div>
                <div className="col-3">
                    <label>
                    <input type="tel" placeholder="Phone number" ref = {phone} />
                    </label>
                </div>
            </div>
            <br />
            <label>
                <input type="text" placeholder="Address" ref = {address}></input>
            </label>
            <br />
            <input type="submit" value="Update" />
        </form>
    )
}

export default PersonalDetails;