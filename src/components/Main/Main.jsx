import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  TextField,
} from "@material-ui/core";
import UseStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { connect } from "react-redux";
import useTransaction from "../../Services/transaction";
import formatDate from "../../Utility/formatDate";
import { SetTransactionsList } from "../../Redux/List/ListActions";

const Main = ({ list, SetTransactionsList }) => {
  var Total = 0;
  list.forEach((value) => {
    if (value.Type === "income") {
      Total = Total + parseFloat(value.Ammount);
    } else {
      Total = Total - parseFloat(value.Ammount);
    }
  });
  const Classes = UseStyles();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  });
  const {getAllTransactions} = useTransaction();

  const getAll = async(currentMonth) => {
      const transactions = await getAllTransactions(currentMonth);
      SetTransactionsList(transactions);
  }

  useEffect(() => {
      if(currentMonth) {
        getAll(currentMonth);
      }
  }, [currentMonth])
  return (
    <Card className={Classes.root}>
      <Typography className={Classes.headSpace} align="center" variant="h4">
        {" "}
        Expensiour{" "}
      </Typography>
      <CardHeader
        align="center"
        variant="h2"
        subheader={
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item sm={4}>
              <TextField
                type="month"
                label="Date"
                value={(currentMonth)}
                onChange={(e) => setCurrentMonth((e.target.value))}
                fullWidth
              />
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance: {`${Total}`} PKR
        </Typography>
        {/* <Typography align="center" variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
            try saying: Add income for 100$ in Category Salary for Monday
                </Typography> */}
        <Divider />
        {/* {Form} */}
        <Form />
      </CardContent>

      <CardContent className={Classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* {List} */}
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

var mapState = (state) => ({
  list: state.list,
});
var actions = ({
    SetTransactionsList
});
export default connect(mapState, actions)(Main);
