import { useRef, useState } from "react"
import '../style/fieldset.css'
import DatePicker from "react-datepicker"
function Education() {
    let school = useRef(null)
    let degree = useRef(null)
    let major = useRef(null)
    
    const[startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const education = {
            school: school.current.value,
            degree: degree.current.value,
            major: major.current.value,
            startDate: startDate,
            endDate: endDate,
        }
    }

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <div className="row">
                <div className="col-6">
                    <label>
                        <input type="text" placeholder="Degree" required ref={degree} />
                    </label>
                </div>
                <div className="col-6">
                    <label>
                        <input type="text" placeholder="Major" required ref={major} />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <label>
                        <input type="text" placeholder="School" required ref={school} />
                    </label>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-6">
                    <label className="w-100">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Start date"
                            dateFormat="dd-MM-yyyy"
                            className="form-control"
                            required
                        />
                    </label>
                </div>
                <div className="col-6">
                    <label className="justify-content-end w-100">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="End date"
                            dateFormat="dd-MM-yyyy"
                            className="form-control"
                        />
                    </label>
                </div>
            </div>
            <br />
            <input type="submit" value="Add Education" />
        </form>
    )
}

export default Education