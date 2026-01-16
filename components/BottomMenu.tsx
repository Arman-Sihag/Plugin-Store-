import React from 'react';
import { Search, Settings, X } from 'lucide-react';

interface BottomMenuProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenSettings: () => void;
}

export const BottomMenu: React.FC<BottomMenuProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onOpenSettings 
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-40 pointer-events-none">
      <div className="max-w-2xl mx-auto flex gap-3 pointer-events-auto">
        
        {/* Search Bar */}
        <div className="flex-1 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
            <Search size={20} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search plugins..."
            className="w-full h-14 pl-12 pr-10 rounded-2xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white placeholder-gray-400 border border-gray-200 dark:border-zinc-800 shadow-lg shadow-gray-200/50 dark:shadow-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium text-lg"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <div className="bg-gray-200 dark:bg-zinc-700 rounded-full p-1">
                 <X size={14} />
              </div>
            </button>
          )}
        </div>

        {/* Settings Button */}
        <button
          onClick={onOpenSettings}
          className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-800 shadow-lg shadow-gray-200/50 dark:shadow-black/50 hover:scale-105 active:scale-95 transition-all"
          aria-label="Settings"
        >
          <Settings size={24} strokeWidth={2} />
        </button>

      </div>
    </div>
  );
};