import { Component } from "react";

class ToDoApp extends Component {
  state = {
    list1: ["Lam bai tap", "Don dep nha cua"],
    item: "",
  };

  handleChange = (event) => {
    let item = event.target.value;
    this.setState({ item });
    // console.log(item);
  };

  addItem = () => {
    if (this.state.item) {
      this.state.list1.push(this.state.item);
      this.setState({ list1: this.state.list1, item:'' });
      // this.state.item = "";
      // console.log(this.state.list1);
    }
  };

  deleteFun = (e) =>{
    let index = e.target.value;
    this.state.list1.splice(index, 1);
    
    this.setState(this.state.list1);

    console.log(this.state.list1);
  }

  render() {
    const { item, list1 } = this.state;
    return (
      <>
        <div
          style={{
            margin: "auto",
            display: "block",
            textAlign: "center",
            width: 300,
          }}
        >
          <h1>Todo List</h1>
          <input value={item} onChange={this.handleChange}></input>
          <button onClick={this.addItem}>Add</button>
          <ul style={{ border:"1px solid black" }}>
            {list1.map((item1, index) => (
              <li 
              style={{listStyleType: 'none', margin:10}}
               key={index}>{item1} 
               
              <button  
              style={{marginLeft:30}}
              onClick={this.deleteFun}
              value={index}
              >Delete</button>

              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ToDoApp;
