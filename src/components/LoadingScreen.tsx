import React from 'react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="absolute w-16 h-16 border-4 border-orange-200 rounded-full"></div>
          <div className="absolute w-16 h-16 border-4 border-orange-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium animate-pulse">
          Loading your comfort solutions...
        </p>
      </div>
    </div>
  );
}