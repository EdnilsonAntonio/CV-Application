import { useRef } from "react";
import '../style/fieldset.css'
function WorkExperience() {
    // Usando useRef para segurar os valores dos inputs
    let companyName = useRef(null)
    let position = useRef(null)
    let startDate = useRef(null)
    let endDate = useRef(null)
    let jobDescription = useRef(null)

    // Função para capturar os dados do formulário e armazená-los em um objeto
    const handleSubmit = (e) => {
        e.preventDefault()
        // Atualizando os valores dos inputs
        const experience = {
            companyName: companyName.current.value,
            position: position.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value,
            jobDescription: jobDescription.current.value,
        }
    }

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <legend>Work Experience</legend>
            <label>
                <input type="text" placeholder="Company Name" required ref={companyName} />
            </label>
            <br />
            <label>
                <input type="text" placeholder="Position" required ref={position} />
            </label>
            <br />
            <label>
                Start Date:
                <input type="date" placeholder="Starting date" required ref={startDate} />
            </label>
            <br />
            <label>
                End Date:
                <input type="date" ref={endDate} />
            </label>
            <br />
            <label>
                Description:
                <textarea ref={jobDescription} />
            </label>
            <br />
            <input type="submit" value="Add Experience" />
        </form>
    )
}

export default WorkExperience;