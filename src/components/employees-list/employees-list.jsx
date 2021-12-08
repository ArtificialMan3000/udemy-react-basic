import React from 'react';
import './employees-list.css';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

export const EmployeesList = ({
  employeesData,
  onDelete,
}) => {
  const employeesListItems = employeesData.map(
    ({ id, ...employeeData }) => {
      return (
        <EmployeesListItem
          key={id}
          {...employeeData}
          onDelete={() => onDelete(id)}
        />
      );
    }
  );
  return (
    <ul className="app-list list-group">
      {employeesListItems}
    </ul>
  );
};
