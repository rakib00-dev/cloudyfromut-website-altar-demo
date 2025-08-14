import React from 'react';
import { CiMail } from 'react-icons/ci';

const HomePriceCalculator = () => {
  return (
    <div className="w-full md:flex gap-4">
      <div className="w-full md:w-4/5 rounded-2xl shadow-2xl border border-gray-200 bg-white p-7">
        <div className="flex justify-around items-start">
          <span className="grid">
            complexicy
            <label htmlFor="primary">primary</label>
            <input type="radio" name="primary" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </span>
          <span className="grid">
            complexicy
            <label htmlFor="primary">primary</label>
            <input type="radio" name="primary" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </span>
          <span className="grid">
            complexicy
            <label htmlFor="primary">primary</label>
            <input type="radio" name="primary" id="" />
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </span>
        </div>
        <div className="flex gap-5">
          <span className="grid ">
            <span className="text-gray-400">FROM</span>
            <h3 className="font-extrabold text-5xl">$21k</h3>
          </span>
          <span className="grid ">
            <span className="text-gray-400">TO</span>
            <h3 className="font-extrabold text-5xl">$21k</h3>
          </span>
        </div>
        <span className="text-gray-400 text-lg ">
          This estimate considers Product, UX/UI and Software Development.
        </span>
      </div>

      <div className="w-full grid gap-3 md:w-72 h-[20rem] shadow-2xl rounded-2xl p-8 border-1 border-gray-200 bg-white">
        <h3 className="text-xl font-bold">
          Building a System Integration Project?
        </h3>
        <p className="text-gray-500">
          Then you should talk to me. I'm an expert in System Integration
          Projects and I'll be glad to discuss the project with you and also
          give you a correct estimation for it.
        </p>
        <a
          href="mailto:example@gamil.com"
          className="text-[var(--primary-color)] font-bold flex gap-2"
        >
          Email Claudio <CiMail className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default HomePriceCalculator;
