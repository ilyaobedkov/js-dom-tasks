import 'whatwg-fetch';
export default () => {
  // Находим все элементы input с атрибутом data-autocomplete
  const autocompleteInputs = document.querySelectorAll('[data-autocomplete]');
  // Для каждого такого input настраиваем автозаполнение
  autocompleteInputs.forEach(input => {
    const url = input.dataset.autocomplete;
    const listName = input.dataset.autocompleteName;
    // Находим соответствующий список ul
    const list = document.querySelector(`[data-autocomplete-name="${listName}"]`);
    if (!list) return;
    // Добавляем обработчик события input
    input.addEventListener('input', async (event) => {
      const searchTerm = event.target.value.trim();
      // Если строка поиска пустая, очищаем список и выходим
      if (!searchTerm) {
        list.innerHTML = '';
        return;
      }
      try {
        // Формируем URL с query-параметром search
        const baseUrl = window.location.origin;
        const requestUrl = new URL(url, baseUrl);
        requestUrl.searchParams.set('search', searchTerm);
        // Выполняем запрос к серверу
        const response = await fetch(requestUrl.toString());
        const countries = await response.json();
        // Очищаем список
        list.innerHTML = '';
        // Заполняем список в зависимости от результата
        if (countries.length === 0) {
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          list.appendChild(li);
        } else {
          countries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            list.appendChild(li);
          });
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        list.innerHTML = '<li>Error loading data</li>';
      }
    });
  });
};
