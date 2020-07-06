import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, 'Loading..', 'Loading..', 'Loading..', 'Loading..', "Loading.."),
  // createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  // createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  // createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  // createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function setDate(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let _date = date.slice(8, 10);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return (parseInt(_date) + " " + monthNames[parseInt(month) - 1].slice(0, 3) + " , " + year);
}
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Orders(props) {
  // console.log(props.orders) ;

  const classes = useStyles();
  const [orders, setOrders] = useState({
    orders: "Loading..."
  })
  // console.log(lastDates) ;
  useEffect(() => {
    if (props.orders && orders.orders === "Loading...") {
      setOrders({
        orders: props.orders
      })
    }
  }, [props.orders])
  let data = rows;
  if (orders.orders !== "Loading...") {
    data = orders.orders.map((order, index) => {
      return createData(index, setDate(order.date.split("T")[0]), order.product.name, order.userId, order.quantity, order.product.price)
    })
    data.reverse() ;
  }
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow style={{ textAlign: "center" }}>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Customer Id</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}