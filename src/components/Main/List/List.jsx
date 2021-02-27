import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import {EliminateFromList} from './../../../Redux/List/ListActions'
import UseStyles from './styles';
import { connect } from 'react-redux';

const List = ({list, EliminateFromList}) => {
    const Classes = UseStyles();
    // const transactions = [];
    return (
      <MUIList dense={false} className={Classes.list}>
          {list.map((transaction) => (
              <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.ID}>
                  <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.Type === 'income' ? Classes.avatarIncome : Classes.avatarExpense}>
                         <MoneyOff/>   
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.Category} secondary={`$${transaction.Ammount} - ${transaction.Date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete"onClick={(e) => EliminateFromList(transaction.ID)}>
                        <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              </Slide>
          ))}
      </MUIList>
    )
}

var actions = ({
    EliminateFromList,
})
var mapState = (state) => ({
    list: state.list,
})

export default connect(mapState, actions)(List)
