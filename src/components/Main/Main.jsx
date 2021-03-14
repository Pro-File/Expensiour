import React from 'react'
import {Grid, Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import UseStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { connect } from 'react-redux';

const Main = ({list}) => {
    var Total = 0;
    list.forEach((value) => {
        if(value.Type === "income"){
            Total = Total + parseFloat(value.Ammount);
        }
        else{
            Total = Total - parseFloat(value.Ammount);
        }
    })
    const Classes = UseStyles();
    return (
        <Card className={Classes.root}>
            <Typography className={Classes.headSpace} align="center" variant="h4"> Expensiour </Typography>
            <CardHeader align="center" variant="h2"subheader="Developed by Muhammad Arbab"/>
            <CardContent>
                <Typography align="center" variant="h5" >
            Total Balance: {`${Total}`}$
                </Typography>
                {/* <Typography align="center" variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
            try saying: Add income for 100$ in Category Salary for Monday
                </Typography> */}
                <Divider/>
                {/* {Form} */}
                <Form/>
            </CardContent>

            <CardContent className={Classes.cartContent}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            {/* {List} */}
            <List/>
            </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}

var mapState = (state) => ({
    list: state.list,
})
export default connect(mapState, null)(Main)
