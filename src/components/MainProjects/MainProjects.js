import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardActionArea, Zoom } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MainCard from "../3dCard/3dCard";
import WordTransition from "../WordTransition/WordTransition";
import Typed from "react-typed";


//card buttons style

const useStyles = makeStyles((theme) => ({

  portBox:{
alignSelf: "center",
color: "#0f0a10",
// fontWeight: "bold"
  },
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
    background: "#eaded0",
  },
  centerClass: {
    margin: "0 auto",
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MainProjects() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      {/* <Box component="div" style={{ background: "#5f5b60", height: "100vh" }} */}
      <main style={{ background: "#5f5b60" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Zoom in>
            <Grid container spacing={4}>
              {/* {cards.map((card) => ( */}
              {/* Place your cards */}

              <Grid
                style={{ textAlign: "center" }}
                item
                key={0}
                xs={12}
                sm={6}
                md={6}
              >
                <WordTransition className={classes.centerClass} />
              </Grid>
              <Grid
                // style={{ textAlign: "left" }}
                className={classes.portBox}

                item
                key={0}
                xs={12}
                sm={6}
                md={6}
              >
                <Typography
                // className={classes.portfolio}
                  gutterBottom
                  variant="h3"
                  component="h2"
                  color="textSecondary"
                >
                   <Typed
                strings={["check my PORTFOLIO main projects..."]}
                startDelay={10000}
                showCursor={false}
                typeSpeed={80}
              />

                </Typography>
              </Grid>



               {/* Card 0 chat */}
               <Grid item key={0} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youburger.netlify.app/"
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
                        rChat App - PWA Realtime Chat
                      </Typography>
                      <MainCard card="card2" divided="4" />
                    </CardContent>
                  </CardActionArea>
                  <CardContent
                    className={`${classes.cardContent} ${classes.cardYellow}`}
                  >
                    <Typography gutterBottom variant="h6" component="h2">
                      React {bull} Node.js {bull} Express {bull} Socket.IO{" "}
                      {bull} React-Spring {bull} Material-UI
                    </Typography>
                    <Typography>
                      A <strong>React</strong> Burger Builder App with{" "}
                      <strong>database</strong> and <strong>deployment</strong>{" "}
                      on <strong>Firebase</strong>. You can build your own
                      burger, with many pieces of salad, bacon, cheese, and
                      meat, in <strong>any screen size</strong>.
                    </Typography>
                  </CardContent>
                  <CardActions
                    className={`${classes.cardContent} ${classes.cardBlack}`}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/gustavdias/burger"
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
                      href="https://youburger.netlify.app/"
                      startIcon={<VisibilityIcon />}
                    >
                      DEMO
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Card 1 chat */}
              <Grid item key={0} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://rchat-app.netlify.app/"
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
                        rChat App - PWA Realtime Chat
                      </Typography>
                      <MainCard card="card2" divided="4" />
                    </CardContent>
                  </CardActionArea>
                  <CardContent
                    className={`${classes.cardContent} ${classes.cardBlue}`}
                  >
                    <Typography gutterBottom variant="h6" component="h2">
                      React {bull} Node.js {bull} Express {bull} Socket.IO{" "}
                      {bull} React-Spring {bull} Material-UI
                    </Typography>
                    <Typography>
                      A <strong>React</strong> Burger Builder App with{" "}
                      <strong>database</strong> and <strong>deployment</strong>{" "}
                      on <strong>Firebase</strong>. You can build your own
                      burger, with many pieces of salad, bacon, cheese, and
                      meat, in <strong>any screen size</strong>.
                    </Typography>
                  </CardContent>
                  <CardActions
                    className={`${classes.cardContent} ${classes.cardBlack}`}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/gustavdias/rchat"
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
                      href="https://rchat-app.netlify.app/"
                      startIcon={<VisibilityIcon />}
                    >
                      DEMO
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Card 2 AI Blue */}
              <Grid item key={0} xs={12} sm={6} md={6}>
                <Card className={classes.cardWhite}>
                  <CardActionArea
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://intelligent-news.netlify.app/"
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
                        Intelligent News App - The News provided and read by AI
                      </Typography>
                      <MainCard card="card1" divided="1.35" />
                    </CardContent>
                  </CardActionArea>
                  <CardContent
                    className={`${classes.cardContent} ${classes.cardBlue}`}
                  >
                    <Typography gutterBottom variant="h6" component="h2">
                      React {bull} Alan API {bull} News API {bull} Material-UI{" "}
                      {bull} React-Spring {bull} Material-UI
                    </Typography>
                    <Typography>
                      Let the AI do all the work. It will find and read for you
                      the latest news, by categories, terms, and sources..
                    </Typography>
                  </CardContent>
                  <CardActions
                    className={`${classes.cardContent} ${classes.cardBlack}`}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/gustavdias/ai-news"
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
                      href="https://intelligent-news.netlify.app/"
                      startIcon={<VisibilityIcon />}
                    >
                      DEMO
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Card 3 ecommerce */}
              <Grid item key={0} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://amazonias.herokuapp.com/"
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
                        Amazonas App - eCommerce Store
                      </Typography>
                      <MainCard card="card3" divided="4" />
                    </CardContent>
                  </CardActionArea>
                  <CardContent
                    className={`${classes.cardContent} ${classes.cardYellow}`}
                  >
                    <Typography gutterBottom variant="h6" component="h2">
                      React {bull} Redux {bull} Node.js {bull} Express {bull}{" "}
                      MongoDB {bull} React-Spring {bull} Material-UI
                    </Typography>
                    <Typography>
                      Fully featured Amazon-like eCommerce MERN (+ Redux) stack
                      app - (MongoDB, Express, React, Node, and Redux). User
                      authentication and authorization for customers and
                      administrators. An admin side to manage products and
                      orders. Paypal and card payment integration. All that is
                      needed for a modern eCommerce business to be successful.
                    </Typography>
                  </CardContent>
                  <CardActions
                    className={`${classes.cardContent} ${classes.cardBlack}`}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/gustavdias/amazonias"
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
                      href="https://amazonias.herokuapp.com/"
                      startIcon={<VisibilityIcon />}
                    >
                      DEMO
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Card 2 Blue */}
              {/* <Grid item key={2} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cdice.netlify.app/"
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
                      cDice - A customizable dice
                    </Typography>
                    <MainCard card="card3" divided="1.35" />
                  </CardContent>
                </CardActionArea>

                <CardContent
                  className={`${classes.cardContent} ${classes.cardYellow}`}
                >
                  <Typography gutterBottom variant="h6" component="h2">
                    React {bull} React-Spring {bull} PWA
                  </Typography>
                  <Typography>
                    <strong>MERN</strong> Stack - A <strong>React</strong>{" "}
                    Exercise Tracker App with <strong>MongoDB</strong>,{" "}
                    <strong>Express</strong>, and <strong>Node.js</strong> on
                    the backend.
                    <br />
                    Extra dependencies: <strong>mongoose</strong>,{" "}
                    <strong>axios</strong>, <strong>react-router-dom</strong>,{" "}
                    <strong>bootstrap</strong>,{" "}
                    <strong>react-datepicker</strong>, <strong>cors</strong>.
                    Dice is a Progressive Web App (PWA) built with React.js. A
                    customizable dice where you can pick how many sides it has
                    and write down words or numbers on each front. You can
                    install it on your smartphone or computer.
                  </Typography>
                </CardContent>
                <CardActions
                  className={`${classes.cardContent} ${classes.cardBlack}`}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/cdice-pwa"
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
                    href="https://cdice.netlify.app/"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid> */}
            </Grid>
          </Zoom>
        </Container>
      </main>
    </React.Fragment>
  );
}
