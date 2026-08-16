import './styles/style.css';
import { initValidation, renderExpenses } from './modules/ui.js';
import { loadExpenses } from './modules/storage.js';

loadExpenses();
initValidation();
renderExpenses();