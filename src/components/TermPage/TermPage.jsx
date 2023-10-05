import TermHeader from "../TermHeader/TermHeader";
import CourseList from "../CourseList/CourseList";
import "./TermPage.less";

const TermPage = ({ termCourses, selectedCourses, conflictedCourses, isAdmin }) => {
  return (
    <div className="term-page">
      <TermHeader />
      <CourseList
        termCourses={termCourses}
        selectedCourses={selectedCourses}
        conflictedCourses={conflictedCourses}
        isAdmin={isAdmin}
      />
      ;
    </div>
  );
};

export default TermPage;
