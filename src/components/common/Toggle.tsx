import React, { useState } from 'react';

interface ToggleTypes {
  id: string;
  value?: number;
  isOn: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Toggle({
  value,
  id,
  isOn,
  setIsOn,
  onChange,
}: ToggleTypes) {
  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={onChange}
        className="sr-only"
        value={value}
      />
      <div
        className={`w-14 h-8  rounded-full transition-colors duration-300 ${
          isOn ? 'bg-[var(--primary-color)]' : 'bg-gray-100'
        }`}
      ></div>
      <div
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}
