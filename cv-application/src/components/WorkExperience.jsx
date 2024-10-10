import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../style/fieldset.css';

function WorkExperience() {
    // Usando useRef para outros inputs
    let companyName = useRef(null);
    let position = useRef(null);
    let jobDescription = useRef(null);

    // Usando useState para os inputs de data
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Função para capturar os dados do formulário e armazená-los em um objeto
    const handleSubmit = (e) => {
        e.preventDefault();

        const experience = {
            companyName: companyName.current.value,
            position: position.current.value,
            startDate: startDate, // usa o estado do DatePicker
            endDate: endDate, // usa o estado do DatePicker
            jobDescription: jobDescription.current.value,
        };

        console.log(experience);
        // Aqui você pode enviar os dados para onde precisar
    };

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <div className="row">
                <div className="col-12">
                    <label>
                        <input type="text" placeholder="Position" required ref={position} />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <label>
                        <input type="text" placeholder="Company name" required ref={companyName} />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-6">
                    <label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Select a start date"
                            dateFormat="dd-MM-yyyy"
                            className="form-control"
                            required
                        />
                    </label>
                </div>
                <div className="col-6">
                    <label className="justify-content-end">
                        <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="Select an end date"
                        dateFormat="dd-MM-yyyy"
                        className="form-control"
                        />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <label>
                        <textarea
                            placeholder="Job description" ref={jobDescription}
                        ></textarea>
                    </label>
                </div>
            </div>
            <br />
            <input type="submit" value="Add Work Experience" />
        </form>
    );
}

export default WorkExperience;
