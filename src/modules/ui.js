import { expenseTracker } from './expense.js';
import { saveExpenses, loadExpenses } from './storage.js';
import { getAverage, getTotal } from '../utils/calculate.js';
import { validateAmount, validateName } from '../utils/form-validation.js';

const element = {
  totalValue: document.querySelector('#totalValue'),
  averageValue: document.querySelector('#averageValue'),
  expenseForm: document.querySelector('#expenseForm'),
  expenseNameInput: document.querySelector('#expenseName'),
  expenseNameError: document.querySelector('#name-error'),
  expenseAmountInput: document.querySelector('#expenseAmount'),
  expenseAmountError: document.querySelector('#amount-error'),
  clearExpensesBtn: document.querySelector('#clearExpensesBtn'),
  expensePlaceholder: document.querySelector('#expensePlaceholder'),
  expenseList: document.querySelector('#expenseList')
};

export function initValidation() {
  element.expenseNameInput.addEventListener('input', validateName);
  element.expenseAmountInput.addEventListener('input', validateAmount);

  element.expenseForm.addEventListener('submit', (event) => {
    validateName();
    validateAmount();

    if (!element.expenseForm.checkValidity()) {
      event.preventDefault();
    }

    const inputValues = {name: element.expenseNameInput.value, amount: element.expenseAmountInput.value};
    expenseTracker.addExpense(inputValues);
    saveExpenses();
  });
}