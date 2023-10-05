import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button, CardActions } from "@mui/material";
import { useAppDispatch } from "../../store/hook";
import { setCourseSchedulerSelectedCourses } from "../../store/slices/courseSchedulerSlice";
import { useNavigate } from "react-router-dom";
import "./Course.less";

const Course = ({
  courseId,
  term,
  number,
  title,
  meets,
  isSelected,
  isConflicted,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCourseCardClicked = () => {
    if (!isConflicted) {
      const courseSelected = { term, number, title, meets };
      dispatch(setCourseSchedulerSelectedCourses(courseSelected));
    }
  };

  const onEditCourseButtonClicked = (e) => {
    e.stopPropagation();
    navigate(`/courses/${courseId}`);
  }

  return (
    <Card
      variant="outlined"
      className={`course ${isSelected ? "card-selected" : ""} ${
        isConflicted ? "card-disabled" : ""
      }`}
      onClick={onCourseCardClicked}
    >
      <CardContent className="course-card-content">
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
      <CardActions className="course-form-edit">
        <Button
          size="small"
          className="course-form-edit-button"
          disableRipple={true}
          onClick={onEditCourseButtonClicked}
        >
          Edit Course
        </Button>
      </CardActions>
    </Card>
  );
};

export default Course;
