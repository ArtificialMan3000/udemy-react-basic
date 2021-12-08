import React from 'react';
import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployeesAddForm } from '../employees-add-form/employees-add-form';
import { EmployeesList } from '../employees-list/employees-list';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'John C.',
          salary: 800,
          increase: true,
        },
        {
          id: 2,
          name: 'Alex M.',
          salary: 1300,
          increase: false,
        },
        {
          id: 3,
          name: 'Carl W.',
          salary: 5000,
          increase: false,
        },
      ],
    };
    this.nextId = 4;
  }

  createId = () => {
    return ++this.nextId;
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(
          (item) => item.id !== id
        ),
      };
    });
  };

  createItem = (itemData) => {
    const newItemId = this.createId();
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          { id: newItemId, ...itemData },
        ],
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          employeesData={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm
          onCreate={this.createItem}
        />
      </div>
    );
  }
}
