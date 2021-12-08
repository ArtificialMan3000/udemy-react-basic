import React from 'react';
import classnames from 'classnames';
import './employees-list-item.css';

export class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => {
      return { increase: !increase };
    });
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase } = this.state;

    return (
      <li
        className={classnames(
          'list-group-item d-flex justify-content-between',
          {
            increase,
            like: increase,
          }
        )}
      >
        <span className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
          >
            <i
              className="fas fa-trash"
              onClick={onDelete}
            ></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
