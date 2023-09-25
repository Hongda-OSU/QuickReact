import TermHeader from "../TermHeader/TermHeader";
import CourseList from "../CourseList/CourseList";
import "./TermPage.less";

const TermPage = ({ termCourses, selectedCourses, conflictedCourses }) => {
  return (
    <div className="term-page">
      <TermHeader />
      <CourseList
        termCourses={termCourses}
        selectedCourses={selectedCourses}
        conflictedCourses={conflictedCourses}
      />
      ;
    </div>
  );
};

export default TermPage;
