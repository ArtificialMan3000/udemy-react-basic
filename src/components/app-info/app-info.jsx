import React from 'react';
import './app-info.css';

export const AppInfo = ({ employeesCount, increasedsCount }) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {increasedsCount}</h2>
    </div>
  );
};
