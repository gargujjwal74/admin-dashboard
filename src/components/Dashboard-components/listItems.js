import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CategoryIcon from '@material-ui/icons/Category';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Badge from '@material-ui/core/Badge';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const cookies = new Cookies();


export const mainListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Dashboard" placement="right-start">
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/dashboard/products">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Products" placement="right-start">
          <ListItemIcon>
            {/* <Badge badgeContent={4} color="secondary"> */}
              <AddShoppingCartIcon style={{ color: "white" }} />
            {/* </Badge> */}
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Products" />
      </ListItem>
    </Link>
    <Link to="/dashboard/categories">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Categories" placement="right-start">
          <ListItemIcon>
            <CategoryIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Categories" />
      </ListItem>
    </Link>
    {/* <Link to="/dashboard/products">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Categories" placement="right-start">
          <ListItemIcon>
            <CategoryIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Products" />
      </ListItem>
    </Link> */}
    <Link to="/dashboard/reviews">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Reviews" placement="right-start">
          <ListItemIcon>
            <AssignmentIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Reviews" />
      </ListItem>
    </Link>
    <Link to="/dashboard/sellers">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Sellers" placement="right-start">
          <ListItemIcon>
            <PeopleIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Sellers" />
      </ListItem>
    </Link>
    <Link to="/dashboard/orders">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Orders" placement="right-start">
          <ListItemIcon>
            <ShoppingCartIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
    <Link to="/dashboard/outOfStock">
      <ListItem style={{ color: "white", fontWeight: "bold" }} button>
        <Tooltip title="Orders" placement="right-start">
          <ListItemIcon>
            <RemoveCircleOutlineIcon style={{ color: "white" }} />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Out Of Stock" />
      </ListItem>
    </Link>
  </div>

);

export const secondaryListItems = (
  <div>
    <ListItem style={{ color: "white", fontWeight: "bold" }} button >
      <Tooltip title="Logout" placement="right-start">
        <ListItemIcon>
          <ExitToAppIcon style={{ color: "white" }} />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
)
