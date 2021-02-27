import React from 'react'
import {Grid} from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import UseStyles from './styles';
const App = () => {
    const Classes = UseStyles();
    return (
        <div>
          <Grid className={Classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
            <Grid item xs={12} sm={3}>
                <Details title="income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Details title="expense"/>
            </Grid>
          </Grid>
        </div>
    )
}

export default App
