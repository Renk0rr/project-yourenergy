import { getQuote } from './api.js';
import { LS_KEYS } from './constants.js';

async function loadQuote() {
  const today = new Date().toISOString().slice(0, 10);
  const cachedDate = localStorage.getItem(LS_KEYS.QUOTE_DATE);
  let quote;

  if (cachedDate === today) {
    try {
      quote = JSON.parse(localStorage.getItem(LS_KEYS.QUOTE));
    } catch {
      quote = null;
    }
  }

  if (!quote) {
    try {
      quote = await getQuote();
      localStorage.setItem(LS_KEYS.QUOTE, JSON.stringify(quote));
      localStorage.setItem(LS_KEYS.QUOTE_DATE, today);
    } catch {
      return;
    }
  }

  renderQuote(quote);
}

function renderQuote({ quote, author }) {
  document.querySelectorAll('.quote-text').forEach(el => {
    el.textContent = quote;
  });
  document.querySelectorAll('.quote-author').forEach(el => {
    el.textContent = author;
  });
}

loadQuote();
