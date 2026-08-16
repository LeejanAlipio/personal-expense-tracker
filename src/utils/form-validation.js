const expenseNameInput = document.querySelector('#expenseName');
const expenseNameError = document.querySelector('#name-error');
const expenseAmountInput = document.querySelector('#expenseAmount');
const expenseAmountError = document.querySelector('#amount-error');

export function validateName() {
  if (expenseNameInput.validity.valid) {
    expenseNameError.textContent = '';
  } else if (expenseNameInput.validity.valueMissing) {
    expenseNameError.textContent = 'Expense name must not be blank';
  }
}

export function validateAmount() {
  const amount = Number(expenseAmountInput.value);

  if (amount <= 0) {
    expenseAmountError.textContent = 'Amount must not be equal or less than 0';
  } else {
    expenseAmountError.textContent = '';
  }
}