import React from 'react';
import { Plugin } from '../types';
import { ArrowLeft, Calendar, HardDrive, LayoutGrid, Server, Download, User } from 'lucide-react';

interface PluginDetailProps {
  plugin: Plugin;
  onBack: () => void;
}

export const PluginDetail: React.FC<PluginDetailProps> = ({ plugin, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-950 absolute top-0 left-0 w-full min-h-screen z-20 pb-24">
      {/* Detail Header / Nav */}
      <div className="sticky top-0 z-30 flex items-center p-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900 dark:text-white" />
        </button>
        <h2 className="ml-2 text-lg font-bold truncate flex-1">{plugin.title}</h2>
      </div>

      <div className="p-5 max-w-2xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Images Carousel (Simple horizontal scroll) */}
        <div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 pb-2">
          {plugin.images.map((img, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
              <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Title & Author */}
        <div className="text-center">
          <h1 className="text-3xl font-black mb-2 uppercase tracking-tight">{plugin.title}</h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black">
            <User size={14} strokeWidth={3} />
            <span className="text-sm font-bold uppercase tracking-wider">{plugin.author}</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3">
          <InfoBox 
            icon={<HardDrive size={18} />} 
            label="Size" 
            value={`${(plugin.sizeKB / 1024).toFixed(2)} MB`} 
          />
          <InfoBox 
            icon={<LayoutGrid size={18} />} 
            label="In-Game" 
            value={plugin.inGameSize} 
          />
          <InfoBox 
            icon={<Calendar size={18} />} 
            label="Published" 
            value={plugin.publishDate} 
          />
          <InfoBox 
            icon={<Server size={18} />} 
            label="Platform" 
            value={plugin.platform} 
          />
        </div>

        {/* Description */}
        <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-zinc-800">
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white uppercase text-sm tracking-wide">About this plugin</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {plugin.description}
          </p>
        </div>

        {/* Main Action */}
        <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-3">
          <Download size={22} strokeWidth={3} />
          Download Plugin
        </button>

      </div>
    </div>
  );
};

const InfoBox: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center justify-center text-center gap-1.5">
    <div className="text-gray-400 dark:text-zinc-500 mb-1">{icon}</div>
    <span className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">{label}</span>
    <span className="text-sm font-bold text-gray-900 dark:text-white">{value}</span>
  </div>
);
