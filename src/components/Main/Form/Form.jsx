import React,{useState} from 'react'
import {TextField, Grid, Card, Button, FormControl, InputLabel, Select, MenuItem ,CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import UseStyles from './styles';
import { v4 as uuid } from 'uuid';
import {SetToList} from './../../../Redux/List/ListActions';
import { connect } from 'react-redux';
import formatDate from '../../../Utility/formatDate';
import {incomeCategories, expenseCategories} from './../../../Constants/categories';
import {useSpeechContext} from '@speechly/react-client';
import SnackBar from '../../SnackBar/SnackBar';
const Form = ({SetToList}) => {
    var [Type,setType] = useState("");
    var [Category,setCategory] = useState("");
    var [Ammount,setAmmount] = useState("");
    var [Dated,setDate] = useState(formatDate(new Date()));
    const {segment} = useSpeechContext();
    const [ open ,setOpen] = useState(false);


    const SelectedCategory = Type === "expense" ? expenseCategories :  incomeCategories;
   
    
    var HandleSubmit = (e) =>{
        e.preventDefault();

        var Info = {
            ID : uuid(),
            Type,
            Category,
            Ammount,
            Dated,
        }
        SetToList(Info);
        setOpen(true);
        // console.log(Info);
    }
    const Classes = UseStyles();
    return (
        <Grid container spacing={2}>
            <SnackBar open={open} setOpen = {setOpen}/>
            <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
                  {segment && segment.words.map((w)=> w.value).join(" ")}
            </Typography>
            </Grid>
    
            <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel >Type</InputLabel>
            <Select value={Type} 
            onChange={(e) => setType(e.target.value)}>
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
            </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                <InputLabel>Caterogry</InputLabel>
                <Select  value={Category} 
            onChange={(e) => setCategory(e.target.value)}>
                {SelectedCategory.map((cat) => <MenuItem key={cat.Type} value={cat.Type}>{cat.Type}</MenuItem>)}
                </Select> 
                </FormControl>
            </Grid>

            <Grid item xs={6}>
            <TextField type="number" label="Ammount"  value={Ammount} 
            onChange={(e) => setAmmount(e.target.value)} fullWidth/>
            </Grid>

            <Grid item xs={6}>
            <TextField type="date" label="Date"  value={formatDate(Dated)} 
            onChange={(e) => setDate(formatDate(e.target.value))} fullWidth/>
            </Grid>
            
            <Button fullWidth className={Classes.button} variant="outlined" type="submit" 
             onClick={(e) => HandleSubmit(e)} color="primary">
                Create
            </Button>
           
        </Grid>
    )
}

var actions = ({
    SetToList,
})
export default connect(null,actions)(Form)
