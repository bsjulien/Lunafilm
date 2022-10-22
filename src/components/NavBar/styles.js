import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    // styles that shows up only on devices lower than the smaller
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    // styles that shows up only on devices higher than the smaller
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },

  LinkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
