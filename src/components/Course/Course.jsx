
const Course = ({term, number, title}) => {
    return (
        <div>{term + " CS " + number + ": " + title}</div>
    );
}

export default Course;