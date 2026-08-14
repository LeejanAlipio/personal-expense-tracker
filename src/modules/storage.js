import { expenseTracker } from './expense';

const STORAGE_KEY = 'expenses';

export const saveExpenses = () => {
  const data = expenseTracker.getExpenses().map((expense) => ({
    name: expense.name,
    amount: expense.amount,
    id: expense.id,
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadExpenses = () => {
  const raw = localStorage.getItem(STORAGE_KEY);

  try {
    const data = JSON.parse(raw);

    if (!Array.isArray(data) || data.length === 0) {
      return false;
    }

    data.forEach(expense => {
      expenseTracker.addExpense(expense);
    });
  } catch {
    return false;
  }
};