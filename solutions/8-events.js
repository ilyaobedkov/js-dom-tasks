export default () => {
  // Находим кнопку по id
  const button = document.getElementById('alert-generator');
  // Находим контейнер для алертов
  const alertsContainer = document.querySelector('.alerts');
  // Счетчик для нумерации алертов
  let alertCounter = 1;
  // Добавляем обработчик события click на кнопку
  button.addEventListener('click', () => {
    // Создаем новый div для алерта
    const alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = `Alert ${alertCounter}`;
    // Добавляем алерт в начало контейнера
    alertsContainer.prepend(alert);
    // Увеличиваем счетчик
    alertCounter++;
  });
};
