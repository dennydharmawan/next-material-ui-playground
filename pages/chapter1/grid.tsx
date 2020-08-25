import { Chip, Grid, makeStyles, Paper } from "@material-ui/core";

import theme from "../../contants/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: 'center',
    //display: 'grid',
    //gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

// mobile first
// xs >= 0px
// sm >= 600px
// md >= 960px
// lg >= 1280px
// xl >= 1920px

const grid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="space-around">
                <Grid item>
                  <Chip label="xs=12" />
                </Grid>
                <Grid item>
                  <Chip label="sm=6" />
                </Grid>
                <Grid item>
                  <Chip label="md=3" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="space-between">
                <Grid item>
                  <Chip label="xs=12" />
                </Grid>
                <Grid item>
                  <Chip label="sm=6" />
                </Grid>
                <Grid item>
                  <Chip label="md=3" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="flex-start">
                <Grid item>
                  <Chip label="xs=12" />
                </Grid>
                <Grid item>
                  <Chip label="sm=6" />
                </Grid>
                <Grid item>
                  <Chip label="md=3" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Chip label="xs=12" />
                </Grid>
                <Grid item>
                  <Chip label="sm=6" />
                </Grid>
                <Grid item>
                  <Chip label="md=3" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default grid;

/* use auto if
<div className={classes.root}>
  <Grid container spacing={4}>
    <Grid item xs="auto" sm="auto" md="auto">
      <Paper className={classes.paper}>
        xs=auto sm=auto md=auto
      </Paper>
    </Grid>
    <Grid item xs="auto" sm="auto" md="auto">
      <Paper className={classes.paper}>
        xs=auto sm=auto md=auto
      </Paper>
    </Grid>
    <Grid item xs="auto" sm="auto" md="auto">
      <Paper className={classes.paper}>
        xs=auto sm=auto md=auto
      </Paper>
    </Grid>
    <Grid item xs="auto" sm="auto" md="auto">
      <Paper className={classes.paper}>
        xs=auto sm=auto md=auto
      </Paper>
    </Grid>
  </Grid>
</div>
*/
