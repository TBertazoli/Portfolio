import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Container, Col, Row } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col>
            <Grid style={{ width: "inherit" }}>
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
                    <ListItemText primary="Next" />
                    <ListItemText primary="Bootstrap" />
                    <ListItemText primary="MaterialUI" />
                    <ListItemText primary="Ejs" />
                    <ListItemText primary="Handlebars" />
                    <ListItemText primary="Sass" />
                    <ListItemText primary="AEM" />
                  </List>
                </Collapse>
              </List>
            </Grid>
          </Col>
          <Col>
            <Grid style={{ width: "inherit" }}>
              <List
                sx={{ width: "100%" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClickBack}>
                  <ListItemText primary="Back End Tech Stack" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                    <ListItemText primary="Node" />
                    <ListItemText primary="Express" />
                    <ListItemText primary="MySQL" />
                    <ListItemText primary="MongoDB" />
                    <ListItemText primary="Sequelize" />
                    <ListItemText primary="GraphQL" />
                    <ListItemText primary="Python" />
                    <ListItemText primary="Django" />
                  </List>
                </Collapse>
              </List>
            </Grid>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
