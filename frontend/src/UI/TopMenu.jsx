import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const TopMenu = ({ tabs, submenu }) => {
  const [activeIndex, setActiveIndex] = useState(
    tabs.findIndex(tab => tab.active) || 0
  );

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeTab = tabs[activeIndex];
  const subTabs = activeTab?.submenu || [];

  return (
    <div className="relative w-full">
      {/* Üst Menü (Tabs) */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <div className="relative bg-cyan-600" key={index}>
            {index === activeIndex && (
              <div
                className={classNames(
                  "absolute top-0 w-full h-1/2 bg-slate-100 z-0",
                  subTabs.length === 0 ? '!h-full' : ''
                )}
              ></div>
            )}
            <Link
              to={tab.url} 
              onClick={() => handleTabClick(index)}
              className={classNames(
                'relative z-10 py-3 block px-8 text-gray-700 rounded-none font-semibold',
                index === activeIndex ? 'bg-cyan-600 rounded-b-none rounded-t-2xl text-white' : 'bg-slate-100',
                subTabs.length === 0 && index === activeIndex ? '!rounded-2xl' : '',
                subTabs.length > 0 && index === activeIndex - 1 ? '! !rounded-br-2xl' : '',
                subTabs.length > 0 && index === activeIndex + 1 ? ' !rounded-bl-2xl' : ''
              )}
            >
              {tab.label}
            </Link>
          </div>
        ))}
        {submenu && (
          <div className="relative bg-cyan-600">
            <button
              className={classNames(
                'relative py-3 px-8 text-transparent bg-slate-100 rounded-bl-2xl font-semibold cursor-default',
                tabs.length - 1 !== activeIndex ? '!rounded-none' : '',
              )}
            >
              asd
            </button>
          </div>
        )}
      </div>

      {/* Alt Menü (SubTabs) */}
      {subTabs.length > 0 && (
        <div className="flex space-x-4 px-6 py-5 rounded-xl bg-cyan-600">
          {subTabs.map((subTab, index) => (
            <Link
              key={index}
              to={`${subTab.url}`}
              className={classNames(
                'py-2 px-6 rounded-lg text-white font-semibold',
                subTab.active ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-500'
              )}
            >
              {subTab.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopMenu;
