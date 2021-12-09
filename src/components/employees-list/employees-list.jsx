import React from 'react';
import './employees-list.css';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

export const EmployeesList = ({ employeesData, onDelete, onToggleProp }) => {
  const employeesListItems = employeesData.map(({ id, ...employeeData }) => {
    return (
      <EmployeesListItem
        key={id}
        {...employeeData}
        onDelete={() => onDelete(id)}
        onToggleProp={(evt) =>
          onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });
  return <ul className="app-list list-group">{employeesListItems}</ul>;
};
