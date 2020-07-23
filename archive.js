/* dans le render à la place de </todolist/> sans les 2 fct
{
  this.state.todos.map((value, i) => (
    <div>
      <li className="todo" id="this.state.count" key={i}>
        {value}
        <button id="delete" onClick={this.handleClick}>
          x
        </button>
      </li>
    </div>
  ));
}*/
