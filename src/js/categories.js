// ============================================================
//  КАТЕГОРІЇ (список карток)
//  Відповідальні: [ПОСТАВ ІМЕНА (2 людини)]
//
//  Що реалізувати (ТЗ п.21-22, 25):
//  - Запит getFilters({ filter, page, limit }) з api.js
//  - За замовчуванням filter = 'Muscles'
//  - Рендер карток (картинка, назва, фільтр)
//  - Серверна пагінація (кнопки сторінок знизу)
//  - Якщо нема результатів — повідомлення
//  - Клік по картці:
//      1) сховати категорії
//      2) кинути EVENTS.CATEGORY_SELECTED
//
//  СЛУХАЄ: EVENTS.FILTER_CHANGED (від filters.js)
//  КИДАЄ:  EVENTS.CATEGORY_SELECTED (→ exercises.js)
//
//  Твоя розмітка: src/partials/categories.html
//  Твої стилі:    src/css/components/categories.css
// ============================================================

import { getFilters } from './api.js';
import { FILTERS, EVENTS, PAGINATION } from './constants.js';
import { showLoader, hideLoader } from './loader.js';

// TODO: при завантаженні → fetchCategories(FILTERS.MUSCLES, 1)
// TODO: слухати FILTER_CHANGED → fetchCategories(e.detail.filter, 1)
// TODO: рендер карток
// TODO: пагінація (можна взяти як окремий компонент)
// TODO: клік по картці → dispatchEvent CATEGORY_SELECTED
