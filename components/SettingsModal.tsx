import React from 'react';
import { Moon, Sun, X } from 'lucide-react';
import { Theme } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  theme, 
  onToggleTheme 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-sm rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-zinc-800 transform transition-all scale-100 animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide">Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={onToggleTheme}
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-zinc-600 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-zinc-900 rounded-xl shadow-sm">
                {theme === 'light' ? <Sun size={20} className="text-orange-500" /> : <Moon size={20} className="text-indigo-400" />}
              </div>
              <span className="font-bold">Appearance</span>
            </div>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white">
              {theme}
            </span>
          </button>
          
          <div className="pt-6 border-t border-gray-100 dark:border-zinc-800 text-center">
            <p className="text-xs font-bold text-gray-300 dark:text-zinc-700 uppercase">App Version 1.0.0</p>
          </div>
        </div>

      </div>
    </div>
  );
};