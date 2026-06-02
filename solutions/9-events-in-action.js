export default () => {
  // Находим все элементы с атрибутом data-bs-toggle="tab"
  const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
  // Функция для активации таба
  const activateTab = (tab) => {
    // Получаем id целевого блока из data-bs-target
    const targetId = tab.dataset.bsTarget;
    if (!targetId) return;
    // Находим соответствующий блок с контентом
    const targetPane = document.querySelector(targetId);
    if (!targetPane) return;
    // Находим контейнер табов (родительский nav)
    const navContainer = tab.closest('.nav');
    if (!navContainer) return;
    // Находим все табы в этом контейнере
    const tabsInNav = navContainer.querySelectorAll('[data-bs-toggle="tab"]');
    // Находим контейнер контента (родительский для targetPane)
    const contentContainer = targetPane.parentElement;
    if (!contentContainer) return;
    // Находим все панели контента в этом контейнере
    const panes = contentContainer.querySelectorAll('.tab-pane');
    // Удаляем класс active у всех табов в текущей навигации
    tabsInNav.forEach(navTab => {
      navTab.classList.remove('active');
    });
    // Удаляем класс active у всех панелей контента
    panes.forEach(pane => {
      pane.classList.remove('active');
    });
    // Добавляем класс active кликнутому табу
    tab.classList.add('active');
    // Добавляем класс active соответствующей панели контента
    targetPane.classList.add('active');
  };
  // Добавляем обработчик клика для каждого таба
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      activateTab(tab);
    });
  });
};
