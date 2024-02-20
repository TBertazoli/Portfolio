"use client";

import React from "react";
import styles from "../page.module.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListSubheader from "@mui/material/ListSubheader";

function Skills() {
  const [open, setOpen] = React.useState(true);
  const [openFront, setOpenFront] = React.useState(true);

  const handleClickFront = () => {
    setOpenFront(!openFront);
  };

  const handleClickBack = () => {
    setOpen(!open);
  };

  return (
    <section>
      <div className={styles.title}>
        <h2>Skills</h2>
      </div>
      <div style={skillCss}>
        <Grid>
          <List
            sx={{ width: "100%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickFront}>
              <ListItemText primary="Front End Tech Stack" />
              {openFront ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openFront} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItemText primary="HTML" />
                <ListItemText primary="CSS" />
                <ListItemText primary="JavaScript" />
                <ListItemText primary="TypeScript" />
                <ListItemText primary="JQuery" />
                <ListItemText primary="React" />
                <ListItemText primary="Next.js" />
                <ListItemText primary="Bootstrap" />
                <ListItemText primary="Material-UI" />
              </List>
            </Collapse>
          </List>
        </Grid>

        <Grid>
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickBack}>
              <ListItemText primary="Back End Tech Stack" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItemText primary="Node.js" />
                <ListItemText primary="Express.js" />
                <ListItemText primary="MySQL" />
                <ListItemText primary="MongoDB" />
                <ListItemText primary="Sequelize" />
                <ListItemText primary="GraphQL" />
                <ListItemText primary="Next.js" />
                <ListItemText primary="Bootstrap" />
                <ListItemText primary="Material-UI" />
              </List>
            </Collapse>
          </List>
        </Grid>
      </div>
    </section>
  );
}

export default Skills;

const skillCss = {
  backgroundColor: "gray",
  fontSize: "20px",
  padding: "10px",
  margin: "10px",
  display: "flex",
};
