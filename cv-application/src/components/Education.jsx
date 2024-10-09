import { useRef } from "react"
function Education() {
    let school = useRef(null)
    let degree = useRef(null)
    let course = useRef(null)
    let startDate = useRef(null)
    let endDate = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const education = {
            school: school.current.value,
            degree: degree.current.value,
            course: course.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value,
        }
    }

    return (
        <form onSubmit={handleSubmit} className="fieldset">
            <legend>Education</legend>
            <label>
                <input type="text" placeholder="School" required ref={school} />
            </label>
            <br />
            <label>
                Degree:
                <select id="degree" required ref={degree}>
                    <option value="">Select Degree</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PhD">PhD</option>
                </select>
            </label>
            <br />
            <label>
                Course:
                <input type="text" placeholder="Course" required ref={course} />
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
            <input type="submit" value="Add Education" />
        </form>
    )
}

export default Education