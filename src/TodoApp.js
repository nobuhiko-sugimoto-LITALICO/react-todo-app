import React from 'react';
import Insert from './Insert';
import Filter from './Filter';
import TaskItem from './TaskItem';
import './todo-app.scss';

function TodoApp() {
  return (
    <div className="todo-app">
      <div className="todo-app__body">
        <div>
          <div>Insert</div>
          <Insert />
          <div>Filter</div>
          <Filter />
        </div>
        <div>
          <div>Todo</div>
          <TaskItem />
        </div>
      </div>
    </div>
  );
}
export default TodoApp;