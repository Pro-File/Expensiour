import React from 'react';
import { connect } from 'react-redux';
import {incomeCategories, expenseCategories, resetCategories} from './../Constants/categories';
const useTransactions = ({title, list}) => {
    resetCategories();
    const TransactionsPerType = list.filter((trans) => trans.Type === title);
    const total = TransactionsPerType.reduce((acc, currVal) => acc += parseFloat(currVal.Ammount), 0);
    const categories = title === 'income' ? incomeCategories : expenseCategories;
    // console.log({TransactionsPerType, total, categories});
    
    TransactionsPerType.forEach(t => {
        const category = categories.find((c)=> c.Type === t.Category)

        if(category) {
            (category.Ammount) += parseInt(t.Ammount)
        };
    });

    const FilteredCategories = categories.filter((c) => parseFloat(c.Ammount) > 0);

    const ChartData = {
        datasets: [{
            data: FilteredCategories.map((c) => parseFloat(c.Ammount)),
            backgroundColor: FilteredCategories.map((c) => c.color)
        }],
        labels: FilteredCategories.map((c) => c.Type)
    }
    return {total, ChartData};
}



export default useTransactions;
