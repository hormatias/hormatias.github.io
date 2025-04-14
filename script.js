function switchLanguage() {
  const currentPath = window.location.pathname;
  if (currentPath.includes('index.htm')) {
    window.location.href = 'index_es.htm';
  } else {
    window.location.href = 'index.htm';
  }
} 