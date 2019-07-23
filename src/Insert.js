import React from 'react';

class Insert extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTodoCreate = () => {
    const text = document.insert.textbox.value; // textboxからvalueをもらう(もっといいやり方あるのでは)
    console.log(text);
  }
  render() {
    return (
      <div className="todo-app__insert-margin">
        <form name="insert">
          <input type="text" name="textbox" placeholder="insert task..." />
          <input type="button" value="create" onClick={this.handleTodoCreate} />
        </form>
      </div>
    );
  }
}


export default Insert;