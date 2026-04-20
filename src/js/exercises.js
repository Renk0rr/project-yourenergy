// ============================================================
//  ВПРАВИ (список + пошук + пагінація)
//  Відповідальні: [ПОСТАВ ІМЕНА (2 людини)]
//
//  Що реалізувати (ТЗ п.23-25):
//  - Блок прихований за замовчуванням, показується після CATEGORY_SELECTED
//  - Заголовок: "Exercises / <обрана категорія>"
//  - Пошукова строка для keyword
//  - Запит getExercises({ bodypart/muscles/equipment, keyword, page, limit })
//  - Картка вправи: назва, калорії за 3 хв, частина тіла, мета, рейтинг, Start
//  - Клік по Start → кинути EXERCISE_OPEN з exerciseId
//  - Серверна пагінація
//  - Якщо вправ нема — повідомлення
//
//  ⚠️ Параметр у запиті залежить від filter:
//     Muscles    → muscles=<назва>
//     Body parts → bodypart=<назва>
//     Equipment  → equipment=<назва>
//
//  СЛУХАЄ: EVENTS.CATEGORY_SELECTED
//  КИДАЄ:  EVENTS.EXERCISE_OPEN (→ exercise-modal.js)
//
//  Твоя розмітка: src/partials/exercises.html
//  Твої стилі:    src/css/components/exercises.css
// ============================================================

import { getExercises } from './api.js';
import { EVENTS, PAGINATION, FILTERS } from './constants.js';
import { showLoader, hideLoader } from './loader.js';

// TODO: слухати CATEGORY_SELECTED → зберегти { filter, category }
// TODO: форма пошуку → submit → keyword, повернутись на page=1
// TODO: fetchExercises() з поточним filter/category/keyword/page
// TODO: рендер карток
// TODO: клік по Start → dispatchEvent EXERCISE_OPEN з exerciseId
