import { expenseTracker } from '../modules/expense.js';

export function getTotal() {
  return expenseTracker.getExpenses().reduce((sum, expense) => sum + expense.amount, 0);
}

export function getAverage() {
  const expenses = expenseTracker.getExpenses().length;
  return expenses === 0 ? 0 : getTotal() / expenses;
}