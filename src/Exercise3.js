import React from "react";
import "./Exercise.css";
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Hello, World!</h1>
        <p className="para">Enter your name</p>
        <a href="https://reactjs.org">React Documentation</a>
        <form>
          <input type="text" placeholder="Type something" />
          <button type="submit">Submit</button>
        </form>
        <img
          src="https://blogs.purecode.ai/blogs/wp-content/uploads/2024/01/23d807c8-692f-4f0f-ae13-83423dad1ee2.png"
          alt="placeholder"
        />
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
