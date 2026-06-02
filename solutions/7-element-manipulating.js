import camelCase from 'lodash/camelCase';
const normalize = (document) => {
  // Получаем все элементы на странице
  const allElements = document.body.getElementsByTagName('*');
  // Проходим по каждому элементу
  for (const element of allElements) {
    // Получаем список классов элемента
    const classList = element.classList;
    // Сохраняем текущие классы в массив, так как мы будем изменять classList
    const currentClasses = Array.from(classList);
    // Проходим по каждому классу элемента
    for (const className of currentClasses) {
      // Преобразуем имя класса в camelCase с помощью lodash
      const camelCaseName = camelCase(className);
      // Если имя класса изменилось
      if (className !== camelCaseName) {
        // Заменяем старый класс на новый
        classList.replace(className, camelCaseName);
      }
    }
  }
};
export default normalize;
