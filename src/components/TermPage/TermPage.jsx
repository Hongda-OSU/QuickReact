import TermHeader from "../TermHeader/TermHeader";
import CourseList from "../CourseList/CourseList";
import "./TermPage.less"

const TermPage = () => {
  return (
    <div className="term-page">
      <TermHeader />
      <CourseList />;
    </div>
  );
};

export default TermPage;
