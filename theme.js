(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'roriz-theme';
  let preference = null;
  let button;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'dark' || saved === 'light') preference = saved;
  } catch { /* A escolha continua funcionando quando o armazenamento é bloqueado. */ }
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#101b22' : '#eef3f5';
    if (!button) return;
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    button.title = dark ? 'Ativar tema claro' : 'Ativar tema escuro';
    button.querySelector('.theme-label').textContent = dark ? 'Claro' : 'Escuro';
    button.querySelector('.theme-icon').innerHTML = dark
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>'
      : '<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>';
  }
  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    applyTheme(root.dataset.theme);
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(storageKey, preference); } catch { /* Sem persistência neste navegador. */ }
      applyTheme(preference);
    });
  });
  systemTheme.addEventListener('change', event => {
    if (!preference) applyTheme(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    preference = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  });
})();
