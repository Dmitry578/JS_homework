// "2.10"

// let company = prompt('What s the "официальное название JavaScript" ');

// if (company == 'ECMAScript'){
//     alert('Верно!');
//     } else if(company != 'ECMAScript') {
//     alert('You do not? ECMAScript')
// };


// let value = prompt('Введите число', 0);

// if (value > 0) {
//     alert(1);
// }   else if (value < 0) {
//     alert(-1);
// }   else {
//     alert(0);
// }

// let result ;

// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

// result = (a + b < 4) ? alert('Мало') : alert('Много');


// let message;

// if (login == 'Сотрудник') {
//     message = 'Привет';
// }   else if (login == 'Директор') {
//     message = 'Здравствуйте';
// }   else if (login == '') {
//     message = 'Нет логина';
// }   else {
//     message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' :
//     '';


// switch (browser) {
//     case 'Edge' :
//         alert( "You've got the Edge!" );
//         break;

//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari' :
//         case 'Opera' :
//         alert( 'Okay we support these browsers too' );  
//     break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   let browser = prompt('Enter name browser');

//   if (browser == 'Edge') {
//       alert( "You've got the Edge!" );
//   } else if (browser == 'Chrome',
//              browser == 'Firefox',
//              browser == 'Safari',
//              browser == 'Opera') {
//       alert( 'Okay we support these browsers too' ); 
//     } else {
//       alert( 'We hope that this page looks ok!' );
//     }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case 0 :
        alert('Вы ввели число 0');
        break;

     case 1 :
        alert('Вы ввели число 1');
        break; 

        case 2 :
        case 3 :
        alert('Вы ввели число 2, а может и 3');
        break;

        default:
            alert('Не то');
    }