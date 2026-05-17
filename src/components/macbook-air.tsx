"use client";

import React from 'react';

export function MacBookAir() {
  return (
    <div 
      className="relative size-full bg-white"
      data-node-id="7:55"
      data-name="MacBook Air - 1"
    >
      {/* MacBook Air Frame */}
      <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Screen Container */}
        <div className="relative">
          {/* MacBook Screen */}
          <div className="relative overflow-hidden rounded-lg border-[8px] border-gray-800 bg-black shadow-2xl">
            {/* Screen Content */}
            <div className="relative h-[600px] w-[900px] bg-white">
              {/* Desktop Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                {/* Wallpaper Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20" />
                </div>
              </div>
              
              {/* Menu Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
                <div className="flex h-full items-center justify-between px-4">
                  {/* Apple Logo and Menu Items */}
                  <div className="flex items-center space-x-4">
                    <div className="h-4 w-4 bg-black rounded-sm" />
                    <span className="text-xs font-medium text-gray-800">Finder</span>
                    <span className="text-xs text-gray-600">File</span>
                    <span className="text-xs text-gray-600">Edit</span>
                    <span className="text-xs text-gray-600">View</span>
                    <span className="text-xs text-gray-600">Window</span>
                    <span className="text-xs text-gray-600">Help</span>
                  </div>
                  
                  {/* System Tray */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <div className="h-3 w-3 bg-gray-800 rounded-sm" />
                      <div className="h-3 w-3 bg-gray-600 rounded-sm" />
                      <div className="h-3 w-3 bg-gray-400 rounded-sm" />
                    </div>
                    <span className="text-xs text-gray-600">100%</span>
                    <div className="h-4 w-4 bg-gray-800 rounded-sm" />
                    <span className="text-xs text-gray-600">Tue 9:41 AM</span>
                  </div>
                </div>
              </div>
              
              {/* Dock */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white/60 backdrop-blur-lg rounded-2xl px-4 py-2 shadow-lg">
                {/* Finder */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-blue-500 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Safari */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Messages */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Music */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Photos */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* VS Code */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Terminal */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-black rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer border border-gray-700" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Settings */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gray-600 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Trash */}
                <div className="relative group">
                  <div className="h-12 w-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-md group-hover:scale-110 transition-transform cursor-pointer" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              {/* Desktop Icons */}
              <div className="absolute top-20 left-8 space-y-4">
                {/* Macintosh HD */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="h-16 w-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-800 mt-1 text-center">Macintosh HD</span>
                </div>
                
                {/* Applications */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-800 mt-1 text-center">Applications</span>
                </div>
                
                {/* Documents */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="h-16 w-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-md group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-800 mt-1 text-center">Documents</span>
                </div>
              </div>
              
              {/* Window Sample */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-white rounded-lg shadow-2xl border border-gray-200">
                {/* Window Title Bar */}
                <div className="h-8 bg-gray-100 rounded-t-lg border-b border-gray-200 flex items-center justify-between px-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full" />
                    <div className="h-3 w-3 bg-yellow-500 rounded-full" />
                    <div className="h-3 w-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Untitled</span>
                  <div className="w-16" />
                </div>
                
                {/* Window Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                    <div className="h-4 bg-gray-200 rounded w-3/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* MacBook Bottom Case */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[950px] h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-xl">
            {/* Vent Grills */}
            <div className="absolute inset-x-0 top-1 h-4 flex justify-center space-x-8">
              <div className="w-32 h-full bg-gray-900/20 rounded-sm" />
              <div className="w-32 h-full bg-gray-900/20 rounded-sm" />
              <div className="w-32 h-full bg-gray-900/20 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
