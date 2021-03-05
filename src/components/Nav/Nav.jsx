import React from 'react';
import { Link } from 'react-router-dom';

// MATERIAL UI
import {
  AppBar,
  makeStyles,
  MenuList,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';

function Nav() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Giphy Search
          </Typography>
          <MenuList>
            <MenuItem component={Link} to="/search">
              Search
            </MenuItem>
            <MenuItem component={Link} to="/favorites">
              Favorites
            </MenuItem>
          </MenuList>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
