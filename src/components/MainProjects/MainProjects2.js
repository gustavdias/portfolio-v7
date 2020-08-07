import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MainCard from "../3dCard/3dCard";
// import {Spring} from 'react-spring/renderprops';
import WordTransition from "../WordTransition/WordTransition";

import { Spring } from "react-spring/renderprops";

//card buttons style

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 4px",
    transform: "scale(1.2)",
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#eaded0",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: 1300,
    background: "#5f5b60",
  },
  mainCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "#f0f0f0",
  },
  card: {
    // maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    // background: '#dbb700'
    textAlign: "justify",
  },

  cardYellow: {
    background: "#dbb700",
  },
  cardBlue: {
    background: "#19a9bc",
  },

  cardBlack: {
    background: "#0f0a10",
  },
  cardWhite: {
    background: "#fff",
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function MainProjects() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      {/* <Box component="div" style={{ background: "#5f5b60", height: "100vh" }} */}
      <main style={{ background: "#5f5b60" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            {/* Place your cards */}
            <Grid item key={0} xs={12} sm={6} md={6}>
              <WordTransition />
            </Grid>

            <Grid item key={0} xs={12} sm={6} md={6}>
            </Grid>
            {/* Card 1 Yellow */}
            <Grid
              item
              key={0}
              xs={12}
              sm={6}
              md={6}
              style={{ position: "relative" }}
            >
              {/* <Card className={classes.mainCard}> */}

              <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dev-burger-builder-939a7.web.app/"
                >


                  <CardContent
                    className={`${classes.cardContent} ${classes.cardYellow}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      React {bull} Node.js {bull} Express {bull} Firebase Realtime Database
                    </Typography>
                    <MainCard />

                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Burger Builder - Menu
                  </Typography>
                  <Typography>
                  A <strong>React</strong> Burger Builder App with <strong>database</strong> and <strong>deployment</strong> on <strong>Firebase</strong>. You can build your own burger, with many pieces of salad, bacon, cheese, and meat, in <strong>any screen size</strong>.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/dev-burger-builder"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dev-burger-builder-939a7.web.app/"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              {/* </Card> */}
            </Grid>

            {/* Card 2 Blue */}
            <Grid item key={2} xs={12} sm={6} md={6}>
              <Spring
                delay={300}
                from={{ opacity: 0, y: "40px" }}
                //  onRest={() => this.setState({ end: true })}
                to={{
                  opacity: 1,
                  y: "0px",
                }}
              >
                {({ opacity, y }) => (
                  <Card
                    style={{
                      opacity,
                      transform: `translate3d(0, ${y}, 0)`,
                      //  transition: this.state.end
                      //    ? "0.3s all cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                      //    : "none",
                    }}
                    className={classes.card}
                  >
                    <CardActionArea
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://react-super-chat.netlify.app/"
                    >
                      <CardContent
                        className={`${classes.cardContent} ${classes.cardBlue}`}
                      >
                        <Typography
                          color="inherit"
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          React Super Chat
                        </Typography>
                         <MainCard />

                         <Typography gutterBottom variant="h5" component="h2">
                        React {bull} Socket.io {bull} Node.js {bull} Express
                      </Typography>
                      <Typography>
                        <strong>MERN</strong> Stack - A <strong>React</strong>{" "}
                        Exercise Tracker App with <strong>MongoDB</strong>,{" "}
                        <strong>Express</strong>, and <strong>Node.js</strong>{" "}
                        on the backend.
                        <br />
                        Extra dependencies: <strong>mongoose</strong>,{" "}
                        <strong>axios</strong>,{" "}
                        <strong>react-router-dom</strong>,{" "}
                        <strong>bootstrap</strong>,{" "}
                        <strong>react-datepicker</strong>, <strong>cors</strong>
                        .<strong>eT</strong> - your personal exercise tracker,{" "}
                        <strong>so good</strong>,{" "}
                        <strong>it is out of this planet</strong>! Give it a
                        try!
                      </Typography>

                      </CardContent>



                    </CardActionArea>
                   
                   
                    <CardContent className={classes.cardContent}>
                      
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/gustavdias/et-frontend"
                        startIcon={<CodeIcon />}
                      >
                        CODE
                      </Button>

                      <Button
                        color="secondary"
                        variant="contained"
                        className={classes.button}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://react-super-chat.netlify.app/"
                        startIcon={<VisibilityIcon />}
                      >
                        DEMO
                      </Button>
                    </CardActions>
                  </Card>
                )}
              </Spring>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export default MainProjects;
