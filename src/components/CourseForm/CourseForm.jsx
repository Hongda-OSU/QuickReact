import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { getCourseWithCourseId } from "../../store/slices/courseSchedulerSlice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./CourseForm.less";

const CourseForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const { courseId } = useParams();
  const { term, number, meets, title } = useAppSelector((state) =>
    getCourseWithCourseId(state, courseId)
  );

  const onCancelButtonClicked = () => {
    navigate(`/`);
  };

  return (
    <div className="course-form">
      <h2 className="course-form-title">
        Edit Course - {term} CS {number}
      </h2>
      <Box
        component="form"
        className="course-form-box"
        noValidate
        autoComplete="off"
      >
        <div className="course-form-content">
          <label className="course-form-content-label">Term:</label>
          <TextField
            fullWidth
            error={false}
            variant="standard"
            defaultValue={term}
            placeholder="Enter Course Term"
            helperText=""
            autoFocus={false}
            className="course-form-content-input"
          />
        </div>
        <div className="course-form-content">
          <label className="course-form-content-label">Number:</label>
          <TextField
            fullWidth
            error={false}
            variant="standard"
            defaultValue={number}
            placeholder="Enter Course Number"
            helperText=""
            autoFocus={false}
            className="course-form-content-input"
          />
        </div>
        <div className="course-form-content">
          <label className="course-form-content-label">Meets:</label>
          <TextField
            fullWidth
            error={false}
            variant="standard"
            defaultValue={meets}
            placeholder="Enter Course Meets"
            helperText=""
            autoFocus={false}
            className="course-form-content-input"
          />
        </div>
        <div className="course-form-content">
          <label className="course-form-content-label">Title:</label>
          <TextField
            fullWidth
            error={false}
            variant="standard"
            defaultValue={title}
            placeholder="Enter Course Title"
            helperText=""
            autoFocus={false}
            className="course-form-content-input"
          />
        </div>
      </Box>
      <div className="course-form-buttons">
        <Button
          className="course-form-cancel-button"
          onClick={onCancelButtonClicked}
        >
          Cancel
        </Button>
        <Button className="course-form-submit-button" onClick={() => {}}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CourseForm;
