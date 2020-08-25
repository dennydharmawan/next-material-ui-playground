import clsx from "clsx";

import {
  Box,
  Chip,
  Container,
  Grid,
  makeStyles,
  Paper
} from "@material-ui/core";

import theme from "../../contants/theme";

//https://codepen.io/matchboxhero/pen/JELoxx
// build responsive holy grail layout with material ui is hard
// just use box with grid layout it's easier

const useStyles = makeStyles((theme) => ({
  header: {
    gridArea: 'header',
    backgroundColor: theme.palette.primary.main,
  },
  left: {
    gridArea: 'left-sidebar',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  right: {
    gridArea: 'right-sidebar',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  article: {
    gridArea: 'article',
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    gridArea: 'footer',
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  layout: {
    display: 'grid',
    minHeight: '100vh',
    height: '100vh',
    gridTemplateAreas: `
      'header'
      'article'
      'left-sidebar'
      'right-sidebar'
      'footer'
    `,
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',

    [theme.breakpoints.up('md')]: {
      gridTemplateAreas: `
        'header header'
        'left-sidebar article'
        'footer footer'
      `,
      gridTemplateColumns: '1fr 3fr',
    },

    [theme.breakpoints.up('lg')]: {
      gridTemplateAreas: `
        '. header header header header header header header header .'
        'left-sidebar article article article article article article article article right-sidebar'
        '. footer footer footer footer footer footer footer footer .'
      `,
      gridTemplateColumns: `
        [full-start] 
          minmax(6rem, 1fr) 
          [center-start] 
            repeat(8, [col-start] minmax(min-content, 10rem) [col-end]) 
          [center-end] 
          minmax(6rem, 1fr) 
        [full-end]`,

      gridTemplateRows:
        'minmax(min-content, max-content) auto minmax(min-content, max-content)',
    },
    // [theme.breakpoints.up('xl')]: {
    //   width: '1920px',
    // },
  },
  gridItem: {
    padding: '24px',
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      textAlign: 'left',
    },
  },
  flexItem: {
    flex: '1 0 auto',
    width: '100%',
    padding: '12px',

    [theme.breakpoints.up('md')]: {
      width: 'auto',

      // left
      '&:nth-child(1)': {
        order: '2',
        textAlign: 'center',
      },

      // center
      '&:nth-child(2)': {
        order: '3',
      },

      // right
      '&:nth-child(2),&:nth-child(3)': {
        flex: '0 0 auto',
      },
    },
  },
}));

// mobile first
// xs >= 0px
// sm >= 600px
// md >= 960px
// lg >= 1280px
// xl >= 1920px

// className={ clsx(classes.container, classes.spacious)}
const responsiveLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.layout}>
        <Box className={clsx(classes.header, classes.flexContainer)}>
          <header>This is header</header>
        </Box>
        <Box className={classes.left}>
          <nav>This is left sidebar</nav>
        </Box>
        <Box className={classes.article}>
          <main> This is article </main>
        </Box>
        <Box className={classes.right}> This is right sidebar </Box>
        <Box className={classes.footer}>
          <footer> This is footer </footer>
        </Box>
      </Box>
    </>
  );
};

export default responsiveLayout;
