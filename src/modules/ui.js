import { expenseTracker } from './expense.js';
import { saveExpenses } from './storage.js';
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
  expenseList: document.querySelector('#expenseList'),
};

export function initValidation() {
  element.expenseNameInput.addEventListener('input', validateName);
  element.expenseAmountInput.addEventListener('input', validateAmount);

  element.clearExpensesBtn.addEventListener('click', () => {
    expenseTracker.clearAllExpenses();
    saveExpenses();
    renderExpenses();
  });

  element.expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validateAmount();

    if (!element.expenseForm.checkValidity()) {
      return;
    }

    const inputValues = {
      name: element.expenseNameInput.value,
      amount: Number(element.expenseAmountInput.value),
    };

    expenseTracker.addExpense(inputValues);
    saveExpenses();
    element.expenseForm.reset();
    renderExpenses();
  });
}

export function updateSummary() {
  element.totalValue.textContent = `$${getTotal()}`;
  element.averageValue.textContent = `$${getAverage()}`;

  element.expensePlaceholder.hidden = expenseTracker.getExpenses().length > 0;
}

export function renderExpenses() {
  element.expenseList.innerHTML = '';

  expenseTracker.getExpenses().forEach((expenseData) => {
    const expense = document.createElement('li');
    expense.classList.add('expense-item');

    const expenseInfo = document.createElement('span');
    expenseInfo.textContent = `${expenseData.name} - $${expenseData.amount}`;

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';

    delBtn.addEventListener('click', () => {
      expenseTracker.removeExpense(expenseData.id);
      saveExpenses();
      renderExpenses();
    });

    expense.append(expenseInfo, delBtn);
    element.expenseList.appendChild(expense);
  });

  updateSummary();
}
