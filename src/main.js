// здесь я подключаю все компоненты, их стили и логику

//import '../node_modules/focus-visible/dist/focus-visible'; // перемещение по сайту с помощью клавиатуры

// файл со стилями
import './main.scss';

// файл с разметкой
import './index.pug';

// function getComponent() {
//     const element = document.createElement('div');
//     return import ('lodash')
//         .then(({
//             default: _
//         }) => {
//             const element = document.createElement('div');

//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             return element;
//         })
//         .catch((error) => 'An error occurred while loading the component');
// }
// getComponent().then((component) => {
//     document.body.appendChild(component);
// });