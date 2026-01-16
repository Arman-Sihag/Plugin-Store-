import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { PluginShelf } from './components/PluginShelf';
import { BottomMenu } from './components/BottomMenu';
import { PluginDetail } from './components/PluginDetail';
import { SettingsModal } from './components/SettingsModal';
import { MOCK_PLUGINS } from './constants';
import { Plugin, Theme, ViewState, SortBy } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('shelf');
  const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const [sortBy, setSortBy] = useState<SortBy>('date');

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSelectPlugin = (plugin: Plugin) => {
    setSelectedPlugin(plugin);
    setView('detail');
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setView('shelf');
    setSelectedPlugin(null);
  };

  // Filter and sort plugins
  const displayedPlugins = useMemo(() => {
    // 1. Filter
    const filtered = searchQuery.trim()
      ? MOCK_PLUGINS.filter(p => 
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [...MOCK_PLUGINS]; // Create a mutable copy

    // 2. Sort
    if (sortBy === 'date') {
      // Newest first
      filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else if (sortBy === 'size') {
      // Smallest first
      filtered.sort((a, b) => a.sizeKB - b.sizeKB);
    }

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-100 to-transparent dark:from-zinc-900 dark:to-transparent -z-10 pointer-events-none opacity-50" />

      {/* Main Content Area */}
      {view === 'shelf' && (
        <>
          <Header />
          <main>
            <PluginShelf 
              plugins={displayedPlugins} 
              onSelectPlugin={handleSelectPlugin}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </main>
          
          <BottomMenu 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        </>
      )}

      {/* Detail View Overlay */}
      {view === 'detail' && selectedPlugin && (
        <PluginDetail 
          plugin={selectedPlugin} 
          onBack={handleBack} 
        />
      )}

      {/* Modals */}
      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

    </div>
  );
};

export default App;
