import PersonalDetails from "./PersonalDetais";
import WorkExperience from "./WorkExperience";
import '../style/formpanel.css'
import Education from "./Education";

function FormPanel() {
    return (
        <div className="formpanel">
            <PersonalDetails/>
            <WorkExperience/>
            <Education/>
        </div>
    )
}

export default FormPanel;