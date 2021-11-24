import React from 'react';
import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import { EmployeesList } from '../employees-list/employees-list';

export function App() {
  const data = [
    {
      name: 'John C.',
      salary: 800,
      increase: true
    },
    {
      name: 'Alex M.',
      salary: 1300,
      increase: false
    },
    {
      name: 'Carl W.',
      salary: 5000,
      increase: false
    }
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employeesData={data} />
      <EmployeesAddForm />
    </div>
  );
}
