import React from 'react';
import { Plugin, SortBy } from '../types';
import { ChevronRight } from 'lucide-react';

interface PluginShelfProps {
  plugins: Plugin[];
  onSelectPlugin: (plugin: Plugin) => void;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
}

export const PluginShelf: React.FC<PluginShelfProps> = ({ 
  plugins, 
  onSelectPlugin, 
  sortBy, 
  onSortChange 
}) => {
  if (plugins.length === 0 && sortBy) { // Check sortBy to ensure controls don't show when there are no results from search
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <p>No plugins found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-4 pb-28 gap-4 max-w-2xl mx-auto">
      {/* Sort controls */}
      <div className="flex items-center justify-end gap-2 mb-2 px-1">
        <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Sort by:</span>
        <button
          onClick={() => onSortChange('date')}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
            sortBy === 'date'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
          }`}
        >
          Date
        </button>
        <button
          onClick={() => onSortChange('size')}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
            sortBy === 'size'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
          }`}
        >
          Size
        </button>
      </div>

      {plugins.length === 0 && (
         <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <p>No plugins found for your search.</p>
        </div>
      )}

      {plugins.map((plugin) => (
        <button
          key={plugin.id}
          onClick={() => onSelectPlugin(plugin)}
          className="group relative flex items-center p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-left"
        >
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 flex-shrink-0">
            <img 
              src={plugin.logo} 
              alt={plugin.title} 
              className="w-full h-full object-contain p-1"
            />
          </div>
          
          <div className="ml-5 flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {plugin.title}
            </h3>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full mt-1 inline-block">
              {plugin.category}
            </span>
          </div>

          <div className="ml-4 text-gray-300 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors">
            <ChevronRight size={24} strokeWidth={2.5} />
          </div>
        </button>
      ))}
    </div>
  );
};
