import { expenseTracker } from '../modules/expense.js';

export function getTotal() {
  return expenseTracker.getExpenses().reduce((sum, expense) => sum + expense.amount, 0);
}

export function getAverage() {
  const expenses = expenseTracker.getExpenses().length;
  const average = getTotal() / expenses;
  return formatAverage(average);
}

function formatAverage(average) {
  return average.toFixed(2);
}