import React from "react";

class MyList extends React.Component {
  render() {

    return (
      <div>
        <h1>My List</h1>
        <ul>
          {this.props.names.map((name, index) => <li key={name + index}>{name}</li>)}
        </ul>
      </div>
    )
  }
}

export default MyList;