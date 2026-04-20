// ============================================================
//  FOOTER + ФОРМА ПІДПИСКИ — відповідальний: [ПОСТАВ ІМ'Я]
//
//  Що реалізувати (ТЗ п.36, 40-42):
//  - Логотип (клік → на головну)
//  - Соц-мережі (ті самі URL що в header)
//  - Слоган
//  - Форма підписки: input email + Send
//  - Валідація за EMAIL_PATTERN з constants.js
//  - На submit → subscribe(email) з api.js
//  - Успіх → iziToast.success
//  - Помилка → iziToast.error (текст з err.response?.data?.message)
//
//  Твоя розмітка: src/partials/footer.html
//  Твої стилі:    src/css/components/footer.css
// ============================================================

import { subscribe } from './api.js';
import { EMAIL_PATTERN } from './constants.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// TODO: знайти форму, додати submit listener
// TODO: перевірити EMAIL_PATTERN.test(email) перед запитом
// TODO: await subscribe(email) → iziToast.success
// TODO: catch → iziToast.error
