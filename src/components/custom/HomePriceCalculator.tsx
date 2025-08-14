import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import Toggle from '../common/Toggle';

const HomePriceCalculator = () => {
  const [initialCost, setInitialCost] = useState({ from: 18, to: 65 });
  const [value, setValue] = useState({ com: 1, project: 1, speed: 0.85 });

  const [isCompleLowOn, setIsCompleLowOn] = useState(true);
  const [isCompleMidOn, setIsCompleMidOn] = useState(false);
  const [isCompleHighOn, setIsCompleHighOn] = useState(false);

  const [isSmallOn, setIsSmallOn] = useState(true);
  const [isMediumOn, setIsMediumOn] = useState(false);
  const [isBigOn, setIsBigOn] = useState(false);

  const [isSixMonthsOn, setIsSixMonthsOn] = useState(true);
  const [isFiveMonthsOn, setIsFiveMonthsOn] = useState(false);
  const [isTwoMonthsOn, setIsTwoMonthsOn] = useState(false);

  return (
    <div className="w-full h-auto grid md:flex gap-4">
      <div className="w-full mb-5 md:mb-0 h-auto md:w-4/5 rounded-2xl grid shadow-2xl border border-gray-200 bg-white px-4 md:px-7 py-7">
        <div className="flex flex-col md:flex-row justify-around items-center py-10 w-full">
          <div className="flex flex-col items-start justify-center gap-7 ">
            <span className=" text-gray-400">COMPLEXITY</span>
            <div className="flex flex-col items-start justify-center gap-2">
              <label
                htmlFor="com-low"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="com-low"
                  value={1}
                  isOn={isCompleLowOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      com: Number(e.target.value),
                    }));
                    setIsCompleLowOn(true);
                    setIsCompleMidOn(false);
                    setIsCompleHighOn(false);
                  }}
                />{' '}
                Low
              </label>
              <label
                htmlFor="com-mid"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="com-mid"
                  value={1.75}
                  isOn={isCompleMidOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      com: Number(e.target.value),
                    }));

                    setIsCompleLowOn(false);
                    setIsCompleMidOn(true);
                    setIsCompleHighOn(false);
                  }}
                />
                Mid
              </label>
              <label
                htmlFor="com-high"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="com-high"
                  value={2.95}
                  isOn={isCompleHighOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      com: Number(e.target.value),
                    }));

                    setIsCompleLowOn(false);
                    setIsCompleMidOn(false);
                    setIsCompleHighOn(true);
                  }}
                />
                High
              </label>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-7 ">
            <span className=" text-gray-400 uppercase">Project size</span>
            <div className="flex flex-col items-start justify-center gap-2">
              <label
                htmlFor="small"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="small"
                  value={2.5}
                  isOn={isSmallOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      project: Number(e.target.value),
                    }));
                    setIsSmallOn(true);
                    setIsMediumOn(false);
                    setIsBigOn(false);
                  }}
                />{' '}
                small
              </label>
              <label
                htmlFor="medium"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="medium"
                  value={4}
                  isOn={isMediumOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      project: Number(e.target.value),
                    }));
                    setIsSmallOn(false);
                    setIsMediumOn(true);
                    setIsBigOn(false);
                  }}
                />
                Medium
              </label>
              <label
                htmlFor="big"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="big"
                  value={2.95}
                  isOn={isBigOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      project: Number(e.target.value),
                    }));
                    setIsSmallOn(false);
                    setIsMediumOn(false);
                    setIsBigOn(true);
                  }}
                />
                Big
              </label>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-7">
            <span className=" text-gray-400 uppercase">speed</span>
            <div className="flex flex-col items-start justify-center gap-2">
              <label
                htmlFor="6-months"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="6-months"
                  value={0.85}
                  isOn={isSixMonthsOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      speed: Number(e.target.value),
                    }));
                    setIsSixMonthsOn(true);
                    setIsFiveMonthsOn(false);
                    setIsTwoMonthsOn(false);
                  }}
                />
                {' > 6 months'}
              </label>
              <label
                htmlFor="2-5Months"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="2-5Months"
                  value={1}
                  isOn={isFiveMonthsOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      speed: Number(e.target.value),
                    }));
                    setIsSixMonthsOn(false);
                    setIsFiveMonthsOn(true);
                    setIsTwoMonthsOn(false);
                  }}
                />
                {`2 > 5 Months`}
              </label>
              <label
                htmlFor="2-Months"
                className="flex justify-center items-center gap-2"
              >
                <Toggle
                  id="2-Months"
                  value={1.75}
                  isOn={isTwoMonthsOn}
                  onChange={(e) => {
                    setValue((prev) => ({
                      ...prev,
                      speed: Number(e.target.value),
                    }));
                    setIsSixMonthsOn(false);
                    setIsFiveMonthsOn(false);
                    setIsTwoMonthsOn(true);
                  }}
                />
                {'< 2 Months'}
              </label>
            </div>
          </div>
        </div>
        <div className="grid md:flex gap-10 md:gap-15 px-4 md:px-15 py-10 border-t border-gray-200 border-b ">
          <span className="grid ">
            <span className="text-gray-400">FROM</span>
            <h3 className="font-extrabold text-5xl">
              $
              {Math.floor(
                initialCost.from * value.com * value.project * value.speed
              )}
              k
            </h3>
          </span>
          <span className="grid ">
            <span className="text-gray-400">TO</span>
            <h3 className="font-extrabold text-5xl">
              $
              {Math.floor(
                initialCost.to * value.com * value.project * value.speed
              )}
              k
            </h3>
          </span>
        </div>
        <div className="text-gray-400 text-lg pt-4 px-3 md:px-7">
          This estimate considers Product, UX/UI and Software Development.
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-3 md:w-72 h-[20rem] shadow-2xl rounded-2xl p-4 md:p-8 border-1 border-gray-200 bg-white">
        <h3 className="text-lg md:text-xl font-bold">
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
