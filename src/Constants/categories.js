const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { Type: 'Business', Ammount: 0, color: incomeColors[0] },
  { Type: 'Investments', Ammount: 0, color: incomeColors[1] },
  { Type: 'Extra income', Ammount: 0, color: incomeColors[2] },
  { Type: 'Deposits', Ammount: 0, color: incomeColors[3] },
  { Type: 'Lottery', Ammount: 0, color: incomeColors[4] },
  { Type: 'Gifts', Ammount: 0, color: incomeColors[5] },
  { Type: 'Salary', Ammount: 0, color: incomeColors[6] },
  { Type: 'Savings', Ammount: 0, color: incomeColors[7] },
  { Type: 'Rental income', Ammount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { Type: 'Bills', Ammount: 0, color: expenseColors[0] },
  { Type: 'Car', Ammount: 0, color: expenseColors[1] },
  { Type: 'Clothes', Ammount: 0, color: expenseColors[2] },
  { Type: 'Travel', Ammount: 0, color: expenseColors[3] },
  { Type: 'Food', Ammount: 0, color: expenseColors[4] },
  { Type: 'Shopping', Ammount: 0, color: expenseColors[5] },
  { Type: 'House', Ammount: 0, color: expenseColors[6] },
  { Type: 'Entertainment', Ammount: 0, color: expenseColors[7] },
  { Type: 'Phone', Ammount: 0, color: expenseColors[8] },
  { Type: 'Pets', Ammount: 0, color: expenseColors[9] },
  { Type: 'Other', Ammount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.Ammount = 0);
  expenseCategories.forEach((c) => c.Ammount = 0);
};