export function changeTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === null) {
    localStorage.setItem('theme', 'system');
  }

  if (storedTheme) {
    if (storedTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      applyTheme('light');
    }
  }

  return storedTheme
}

const applyTheme = (theme: string) => {
  const html = document.documentElement;
  const body = document.body;
  
  if (theme === 'dark') {
    html.classList.add('dark');
    body.classList.add('dark');
  } else if (theme === 'light') {
    html.classList.remove('dark');
    body.classList.remove('dark');
  }
}  
