import React from 'react';
import { connect } from 'react-redux';
import {incomeCategories, expenseCategories, resetCategories} from './../Constants/categories';
const useTransactions = ({title, list}) => {
    resetCategories();
    const TransactionPerType = list.filter((trans)=> trans.Type === title);
    const total  = TransactionPerType.reduce((acc, currentVal)=> acc+= parseFloat(currentVal.Ammount), 0);
    const categories = title === 'income' ? incomeCategories : expenseCategories;
    console.log({TransactionPerType, total, categories});
    TransactionPerType.forEach((trans)=> {
        const CategorizedCategory = categories.find((categ)=> categ.Type === categ.Category)
        if(CategorizedCategory){
            CategorizedCategory.Ammount += parseFloat(trans.Ammount)
        } 
    });
    console.log(categories)
    const FilteredCategory = TransactionPerType.filter((categ)=> categ.Ammount > 0);
    console.log(FilteredCategory)
    const ChartData = {
        datasets: [{
            data: FilteredCategory.map((categ)=> categ.Ammount),
            backgroundColor:  FilteredCategory.map((categ)=> categ.color)
        }],
        labels: FilteredCategory.map((categ)=> categ.Category)

    }
    console.log(ChartData);
    return {FilteredCategory, total, ChartData};
    // console.log(title, list);

}



export default useTransactions;
