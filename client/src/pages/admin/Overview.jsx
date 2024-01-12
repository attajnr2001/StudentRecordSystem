import "../../styles/adminOverview.scss";
import TopStudent from "../../components/TopStudent";
import React, { useState } from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  PersonOutlined,
} from "@mui/icons-material";
import "../../styles/adminOverview.scss";

const AdminDashboard = () => {
  const [showWidgets, setShowWidgets] = useState(true);
  const [showTeachersList, setShowTeachersList] = useState(true);
  const [showStudentsList, setshowStudentsList] = useState(true);

  const toggleWidgets = () => {
    setShowWidgets(!showWidgets);
  };

  const toggleTeachersList = (value) => {
    setShowTeachersList(value);
  };

  const toggleStudentsList = (value) => {
    setshowStudentsList(value);
  };

  return (
    <Container maxWidth="lg">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" sx={{ color: "#bdbcbb", my: 2 }}>
          Top Students{" "}
        </Typography>
        {showWidgets ? (
          <KeyboardArrowUp onClick={toggleWidgets} />
        ) : (
          <KeyboardArrowDown onClick={toggleWidgets} />
        )}
      </div>

      <div className={`widget-container ${showWidgets ? "visible" : "hidden"}`}>
        <Stack direction="row" useFlexGap flexWrap="wrap" sx={{justifyContent:{xs:"center", md: "normal"}}}>
          <TopStudent
            title="SCIENCE"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
          <TopStudent
            title="GEN. ARTS"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
          <TopStudent
            title="HOME ECONS"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
          <TopStudent
            title="VISUAL ARTS"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
          <TopStudent
            title="BUSINESS"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
          <TopStudent
            title="AGRIC"
            isMoney={false}
            link="See all"
            icon={
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            }
            amount={12}
            diff="+4"
          />
        </Stack>
      </div>
    </Container>
  );
};

export default AdminDashboard;
