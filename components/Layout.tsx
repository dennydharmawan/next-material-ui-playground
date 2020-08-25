import { Grid, GridSpacing, useTheme } from "@material-ui/core";

import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <header>
          <Header />
        </header>
      </Grid>
      <Grid item xs={12}>
        <main>{children}</main>
      </Grid>
    </Grid>
  );
};

export default Layout;
