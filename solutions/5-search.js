export default (document) => {
  // Находим контейнер с классом content
  const content = document.querySelector('.content');
  if (!content) return null;
  // Извлекаем заголовок категории из тега h1
  const titleElement = content.querySelector('h1');
  const title = titleElement ? titleElement.textContent.trim() : '';
  // Извлекаем описание категории
  const descriptionElement = content.querySelector('.description');
  const description = descriptionElement ? descriptionElement.textContent.trim() : '';
  // Находим все блоки со статьями
  const articleBlocks = content.querySelectorAll('.links > div');
  // Формируем массив статей
  const items = Array.from(articleBlocks).map(block => {
    // Находим ссылку с названием статьи
    const link = block.querySelector('h2 a');
    const articleTitle = link ? link.textContent.trim() : '';
    // Находим описание статьи
    const articleDescriptionElement = block.querySelector('p');
    const articleDescription = articleDescriptionElement ? articleDescriptionElement.textContent.trim() : '';
    return {
      title: articleTitle,
      description: articleDescription
    };
  });
  // Возвращаем объект с нужной структурой
  return {
    title,
    description,
    items
  };
};
