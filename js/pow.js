function powClickButton() {

  var x = '';
  do {
    x = prompt('Введите значение основания X (целое число): ', x);
  } while (x === null || x === '' || isNaN(x) );

  var y = '';
  do {
     y = prompt('Введите значение степени Y (целое, не отрицательное): ', y);
  } while (y === null || y === '' || y < 0 || Math.floor(y) != +y);

  console.log('Результат ('+ x + ' в степени ' + y + ') = ' + pow(x, y) );

  alert('Результат ('+ x + ' в степени ' + y + ') = ' + pow(x, y) + '\n\n--> Вызов консоли Ctrl + Shif + J');
}

function pow(x, y) {

  if (x != 0 && y == 0) {
    return 1;
  } else if (x == 0 && y == 0) {
    return 'Неопределенное значение';
  } else if (x == 0) {
    return 0;
  }

  var result = 1;
  for (var i = 1; i <= y; i++) {
    result *= x;
  }

  return result;
}
