import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-line bg-surface hover:border-accent text-text transition-all duration-300 shadow-sm flex items-center justify-center group"
      aria-label="Cambiar tema"
      title={theme === 'dark' ? 'Modo Claro: Earthy Warm' : 'Modo Oscuro: Night Studio'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}