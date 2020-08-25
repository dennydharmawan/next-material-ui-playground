import { Button, ListItem, ListItemText } from "@material-ui/core";

//https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/Link.js
import Link from "../../components/Link";

const link = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <Button
        variant="contained"
        color="primary"
        component={Link as React.ElementType}
        href="/about"
      >
        About
      </Button>
      <ListItem button component={Link} href="/about">
        <ListItemText primary="About" />
      </ListItem>
    </div>
  );
};

export default link;
