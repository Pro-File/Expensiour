import React, { useEffect } from 'react'
import {Grid} from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import {PushToTalkButtonContainer, PushToTalkButton, ErrorPanel} from '@speechly/react-ui';
import useStyles from './styles';
import useTransaction from './Services/transaction';
import { connect } from 'react-redux';
import { SetTransactionsList } from './Redux/List/ListActions';
const App = ({SetTransactionsList}) => {
    const classes = useStyles();
    const {getAllTransactions} = useTransaction();

    const getAll = async() => {
        const transactions = await getAllTransactions();
        SetTransactionsList(transactions);
    }

    useEffect(() => {
        getAll();
    }, [])
    
    return (
        <div>
          <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
            <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title="income"/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.main}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="income"/>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last}>
                <Details title="expense"/>
            </Grid>
          </Grid>
          {/* <PushToTalkButtonContainer>
              <PushToTalkButton/>
              <ErrorPanel/>
          </PushToTalkButtonContainer> */}
        </div>
    )
}

var actions = {
    SetTransactionsList,
}
export default connect(null, actions)(App);