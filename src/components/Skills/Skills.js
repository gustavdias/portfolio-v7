import React from "react";
// import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
// import HoverState from "../HoverState/HoverState";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: "#353236",
    // backgroundColor:theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    color: "#dbb700",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Frontend",
    // price: '0',
    description: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS"],
    // buttonText: 'Sign up for free',
    // buttonVariant: 'outlined',
  },
  {
    title: "Frameworks and Libraries",
    // price: '15',
    description: [
      "React.js",
      "Redux.js",
      "Next.js",
      "Gatsby",
      "Material UI",
      "react-spring",
      "BootStrap",
      "jQuery",
    ],
    // buttonText: 'Get started',
    // buttonVariant: 'contained',
  },
  {
    title: "Backend",
    // price: '30',
    description: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "socket.io",
      "Ajax",
      "REST",
      "GraphQL"
    ],
    // buttonText: 'Contact us',
    // buttonVariant: 'outlined',
  },
  {
    title: "Others",
    // price: '30',
    description: [
      "Version Control - Git & Github",
      "Deployment",
      "OOP",
      "Linux",
      "Conversion Rate Optimization",
      "SEO",
      "CMS",
      "WordPress",
    ],
    // buttonText: 'Contact us',
    // buttonVariant: 'contained',
  },
];

export default function Skills() {
  const classes = useStyles();

  return (
    <div style={{ background: "#a58800" }}>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Skills
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="h5"
        >
          A Full Stack Developer with several skills to contribute to your
          company and team. I also bring to the table my experience in SEO and
          Conversion Rate Optimization.{" "}
        </Typography>
      </Container>
      {/* End hero unit */}

      {/* ------------------------------The Containers holding the skill cards start here------------------------------ */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // This creates a unique(one unique key -title of the card - for each Grid) responsive Grid for each Card
            <Grid
              item
              key={tier.title}
              xs={12}
              // Others card is full width at sm breakpoint
              // sm={tier.title === "Others" ? 12 : 6}
              md={3}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent style={{ background: "#62dbee" }}>
                  <div className={classes.cardPricing}></div>
                  <ul>
                    {tier.description.map((line) => (
                      //Hover effect over description
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly"></Grid>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
}
