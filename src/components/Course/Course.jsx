import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useAppDispatch } from "../../store/hook";
import { setCourseSchedulerSelectedCourses } from "../../store/slices/courseSchedulerSlice";
import "./Course.less";

const Course = ({ term, number, title, meets, isSelected, isConflicted }) => {
  const dispatch = useAppDispatch();

  const onCourseCardClicked = () => {
    if (!isConflicted) {
      const courseSelected = { term, number, title, meets };
      dispatch(setCourseSchedulerSelectedCourses(courseSelected));
    }
  };

  return (
    <Card
      variant="outlined"
      className={`course ${isSelected ? "card-selected" : ""} ${
        isConflicted ? "card-disabled" : ""
      }`}
      onClick={onCourseCardClicked}
    >
      <CardContent className="test">
        <Typography variant="h5" component="div" className="course-title">
          {term + " CS " + number}
        </Typography>
        <Typography variant="body1" className="course-content">
          {title}
        </Typography>
        <Divider
          light
          className={`divider ${isSelected ? "divider-selected" : ""}`}
        />
        <Typography variant="body2" className="course-time">
          {meets}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Course;
