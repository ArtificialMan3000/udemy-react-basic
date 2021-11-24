import './employees-list.css';
import { EmployeesListItem } from '../employees-list-item/employees-list-item';

export const EmployeesList = ({
  employeesData
}) => {
  const employeesListItems = employeesData.map(
    (employeeData) => {
      return (
        <EmployeesListItem
          key={employeeData.name}
          {...employeeData}
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
