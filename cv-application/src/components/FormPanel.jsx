import PersonalDetails from "./PersonalDetais";
import WorkExperience from "./WorkExperience";
import '../style/formpanel.css'
import Education from "./Education";

function FormPanel() {
    return (
        <div className="formpanel">
            <h1>Your Info</h1>
            {/*Accordion*/}
            <div className="accordion" id="accordionExample">
                {/*Informação pessoal*/}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Personal Details
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <PersonalDetails />
                        </div>
                    </div>
                </div>
                <br />
                {/*Experiência profissional*/}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Work Experience
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <WorkExperience />
                        </div>
                    </div>
                </div>
                <br />
                {/*Formação acadêmica*/}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Education
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Education />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPanel;