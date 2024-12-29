import * as React from 'react';

export const Error: React.FC = () => {
  return (
    <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-100 border border-red-300 rounded-md px-4 py-2 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01"
        />
      </svg>
      <span className="text-sm font-semibold">Uru rubuga rurakenewe</span>
    </div>
  );
};
