class Expense {
  constructor(name, amount, id) {
    this.name = name;
    this.amount = amount;
    this.id = id || crypto.randomUUID();
  }
}

class ExpenseTracker {
  constructor() {
    this.expenses = [];
  }

  addExpense({ name, amount, id = null }) {
    const newExpense = new Expense(name, amount, id);
    this.expenses.push(newExpense);

    return newExpense;
  }

  removeExpense(id) {
    if (!id) return false;

    const expenseID = this.expenses.findIndex((expense) => expense.id === id);

    if (expenseID !== -1) {
      this.expenses.splice(expenseID, 1);
      return true;
    }

    return false;
  }

  editExpense(id, { name, amount }) {
    const expense = this.expenses.find((expense) => expense.id === id);

    if (expense) {
      expense.name = name || expense.name;
      expense.amount = amount || expense.amount;
      return true;
    }

    return false;
  }

  getExpenses() {
    return [...this.expenses];
  }

  getTotalAmount() {
    return this.expenses.reduce((sum, amount) => sum + amount, 0);
  }
}

export const expenseTracker = new ExpenseTracker();