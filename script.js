// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// const enterText = () => {
//     document.querySelector('span')
//     .innerText = document.querySelector('#from').value;
// }
// document.querySelector('#from')
// .addEventListener('input', enterText);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const btnEl = document.querySelector('.messageBtn');

// function addClass() {
//     this.classList.add('animate_animated');
//     this.classList.add('animate_fadeInLeftBig');
//     this.style.visibility = 'visible';
// }

// btnEl.addEventListener('click', addClass);


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// const formEl = document.querySelector('form');
// const inputEl = document.querySelector('#text');
// const selectEl = document.querySelector("select");

// formEl.addEventListener('submit', function(e) {
//     if (inputEl.value === '' || selectEl.value === '') {
//         e.preventDefault();
//         inputEl.style.borderColor = 'red';
//         selectEl.style.borderColor = 'red';
//         return;
//     }
//     const password = inputEl.value;
//     if (password !== '1234') {
//         alert('Вы ввели неправильный пароль!');
//         inputEl.style.borderColor = 'red';
//         e.preventDefault();
//         return;
//     }
//     alert('Успешно');
//     inputEl.style.borderColor = 'green';
//     selectEl.style.borderColor = 'green';
// });