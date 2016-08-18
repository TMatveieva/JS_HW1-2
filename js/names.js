function namesClickButton() {

  var names = ['', '', '', '', ''];

  for (var i = 0; i < 5; i++) {
    names[i] = prompt('Введите ' + (i + 1) + '-е имя:', '');
  }

  userName = prompt('Введите ВАШЕ имя:', 'Ваше имя...');

  for (var i = 0; i < 5; i++) {
    if (names[i] == userName) {
      alert(userName + ', Вы успешно вошли.');
      return;
    }
  }

  alert('ОШИБКА!!! \n\nИзвините, ' + userName + ', но Ваше имя отсутствует в списке!');
  return;
}
