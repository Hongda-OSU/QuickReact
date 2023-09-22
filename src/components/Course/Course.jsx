import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./Course.css";

const Course = ({ term, number, title, meets }) => {
  return (
    <Card variant="outlined" className="course">
      <CardContent>
        <Typography variant="h5" component="div" className="course-title">
          {term + " CS " + number}
        </Typography>
        <Typography variant="body1" className="course-content">
          {title}
        </Typography>
        <Divider light />
        <Typography variant="body2" className="course-time">
          {meets}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Course;
