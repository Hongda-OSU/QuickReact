import TermFilter from "../TermFilter/TermFiler";
import TermSchedule from "../TermSchedule/TermSchedule";
import "./TermHeader.less"

const TermHeader = () => {
  return (
    <div className="term-header">
      <TermFilter />
      <TermSchedule />
    </div>
  );
};

export default TermHeader;
