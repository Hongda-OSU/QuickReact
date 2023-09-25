import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../../store/hook";
import { getCourseSchedulerSelectedCourses } from "../../store/slices/courseSchedulerSlice";
import "./TermSchedule.less";

const TermSchedule = () => {
  const selectedCourses = useAppSelector(getCourseSchedulerSelectedCourses);
  const sortedSelectedCourses = selectedCourses?.slice().sort((a, b) => {
    const [mainA, subA = 0] = a.number
      .split("-")
      .map((num) => parseInt(num, 10));
    const [mainB, subB = 0] = b.number
      .split("-")
      .map((num) => parseInt(num, 10));

    if (mainA !== mainB) {
      return mainA - mainB;
    }
    return subA - subB;
  });

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className="term-schedule">
      <Button id="term-schedule-button" onClick={handleOpen}>
        Course Plan
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="term-schedule-box">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="term-schedule-box-title"
          >
            My Course Plan
          </Typography>
          <div className="term-schedule-item-container">
            {selectedCourses &&
              sortedSelectedCourses.map((course) => (
                <Typography key={course.number} className="term-schedule-item">
                  🔸 CS {course.number} {course.title} - {course.meets}
                </Typography>
              ))}
          </div>
          <Button className="term-schedule-box-close-button" onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TermSchedule;
