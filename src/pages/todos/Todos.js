import React from 'react';

import './style.css';
import deleteIcon from './deleteIcon.svg';
import { PageWrapper } from '../../components/PageWrapper';

const HARDCODED_TODO_LIST = [
  { id: 1, label: "Make a todo list" },
  { id: 2, label: "Check off first item" },
  { id: 3, label: "Realize you already did 2 things today" },
  { id: 4, label: "Reward yourself with a nice, long nap" }
];

export function Todos() {
  return (
    <PageWrapper>
      <p className="Todo-List">Todo List</p>

      <input type="text" className="Add-a-new-todo" placeholder="Add a new todo" />

      {
        HARDCODED_TODO_LIST.map((todoItem, index) =>
          <div className="Todo-item-container" key={index}>
            <div className="Todo-item">
              <input type="checkbox" className="Todo-item-checkbox" />
              <p className="Todo-item-text">{todoItem.label}</p>
            </div>

            <img src={deleteIcon} alt="delete icon" className="Todo-item-delete-button" title="Delete todo" />
          </div>
        )
      }

      <div className="Show-group">
        <p className="Show">Show:</p>
        <a href="/" className="Show-option">All</a>
        <a href="/" className="Show-option">Completed</a>
        <a href="/" className="Show-option">Incompleted</a>
      </div>
    </PageWrapper>
  );
}