import React from 'react'
import {Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import UseStyles from './styles';
import useTransactions from '../../Utility/useTransactions';
import { connect } from 'react-redux';

const Details = ({title, list}) => {
    const Classes = UseStyles();
    const {total, ChartData} = useTransactions({title, list});
    return (
        <Card className={title === 'income'? Classes.income : Classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">
            {`${total}$`}
                </Typography>
                <Doughnut data={ChartData}/>
            </CardContent>
        </Card>
    )
}

var mapState = (state) => ({
    list: state.list,
})

export default connect(mapState, null)(Details)
