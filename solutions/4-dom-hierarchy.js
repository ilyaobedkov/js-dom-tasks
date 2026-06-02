// solutions/4-dom-hierarchy.js
const extractData = (rootElement) => {
  // Находим все параграфы в корневом элементе
  const paragraphs = rootElement.querySelectorAll('p');
  // Извлекаем текст из каждого параграфа, очищаем от пробелов и переводов строк
  const result = Array.from(paragraphs).map(p => p.textContent.trim());
  return result;
};
export default extractData;
