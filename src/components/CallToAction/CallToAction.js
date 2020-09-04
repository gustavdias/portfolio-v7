import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import WaterWord from "../WaterWord/WaterWord";
import EmojiPeopleSharpIcon from "@material-ui/icons/EmojiPeopleSharp";
import SentimentVerySatisfiedSharpIcon from "@material-ui/icons/SentimentVerySatisfiedSharp";

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
    backgroundColor: "#a58800",
    padding: theme.spacing(8, 0, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  return (
    <div>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <WaterWord />
          <Spring
            from={{
              scale: 10,
              opacity: 0,
              transform: "scale(0.9)",
              freq: "0.0175, 0.0",
            }}
            to={{
              scale: 150,
              opacity: 1,
              transform: "scale(1)",
              freq: "0.0, 0.0",
            }}
            config={{ duration: 3000 }}
          >
            {(props) => (
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
                style={props}
              >
                & welcome{" "}
                <EmojiPeopleSharpIcon fontSize="large" color="secondary" /> I am
                a Full Stack Software Developer at your disposal. You can
                explore some of my projects below, and don&apos;t forget to
                check my cv and contact me <SentimentVerySatisfiedSharpIcon />
              </Typography>
            )}
          </Spring>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/11kDg6kOCOLxBYZUq6uK-8E2zeV5BXe1d/view?usp=sharing"
                >
                  Open resume
                </Button>
              </Grid>
              <Grid item>
                {/* <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  color="secondary"
                >
                  Contact Me
                </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallToAction;
