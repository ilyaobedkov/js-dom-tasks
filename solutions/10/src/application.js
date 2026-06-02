import escapeHtml from 'escape-html';
export default () => {
  // Находим форму
  const form = document.querySelector('form');
  // Добавляем обработчик события submit
  form.addEventListener('submit', (event) => {
    // Предотвращаем стандартную отправку формы
    event.preventDefault();
    // Получаем данные из формы
    const formData = new FormData(form);
    const email = formData.get('email');
    const name = formData.get('name');
    const comment = formData.get('comment');
    // Экранируем данные
    const escapedEmail = escapeHtml(email);
    const escapedName = escapeHtml(name);
    const escapedComment = escapeHtml(comment);
    // Создаем новый элемент с результатом
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${escapedEmail}</div>
      <div>Name: ${escapedName}</div>
      <div>Comment: ${escapedComment}</div>
    `;
    // Заменяем форму на результат
    form.replaceWith(resultDiv);
  });
};
