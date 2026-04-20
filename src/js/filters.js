// ============================================================
//  ФІЛЬТРИ (кнопки Muscles / Body parts / Equipment)
//  Відповідальний: [ПОСТАВ СВОЄ ІМ'Я]
//
//  Що реалізувати (ТЗ п.19):
//  - 3 кнопки-фільтри
//  - Клік по кнопці → активний стиль + кинути EVENTS.FILTER_CHANGED
//  - За замовчуванням активна "Muscles"
//
//  ⚠️ ВАЖЛИВО: тільки цей файл кидає FILTER_CHANGED.
//  Файл categories.js його СЛУХАЄ і перемальовує себе.
//
//  Твоя розмітка: src/partials/filters.html
//  Твої стилі:    src/css/components/filters.css
// ============================================================

import { FILTERS, EVENTS } from './constants.js';

// TODO: знайти кнопки за селектором
// TODO: додати click listener, на кліку:
//   1) зняти active з усіх, додати на поточну
//   2) window.dispatchEvent(new CustomEvent(EVENTS.FILTER_CHANGED, {
//        detail: { filter: FILTERS.MUSCLES } // або BODY_PARTS, EQUIPMENT
//      }));
// TODO: при завантаженні — зробити Muscles активною і кинути event
