import React from 'react';

function Filter() {
  return (
    <div className="todo-app__filter-margin">
      <form>
        <input type="radio" name="filter" value="ALL" />ALL
        <input type="radio" name="filter" value="Todo" />Todo
        <input type="radio" name="filter" value="Achieve" />Achieve
      </form>
    </div>
  );
}

export default Filter;