export default function solution(url) {
  // Получаем полную строку user-agent
  const fullUserAgent = navigator.userAgent;
  // Извлекаем только "Mozilla/5.0" (или аналогичное)
  // Берем всё до первого пробела после номера версии
  const browserVersion = fullUserAgent.match(/^[\w\/\.]+/)[0];
  // Выполняем переход на новую страницу
  location.href = url;
  // Возвращаем строку в нужном формате
  return `${browserVersion} ${url}`;
}
