import TermFilter from "../TermFilter/TermFiler";
import CourseList from "../CourseList/CourseList";
import "./TermPage.less"

const TermPage = () => {
  return (
    <div className="term-page">
      <TermFilter />
      <CourseList />;
    </div>
  );
};

export default TermPage;
