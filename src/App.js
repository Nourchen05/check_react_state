import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Nourchen Noamen",
      imgSrc: "nourchen.jpg",
      profession: "Etudiante",
      show: true,
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
            height: "650px",
          }}
        >
          <button
            onClick={() =>
              this.setState({
                fullName: "Nourchen Noamen",
                imgSrc: "nourchen.jpg",
                profession: "Etudiante",
                show: !this.state.show,
              })
            }
          >
            show
          </button>
          {this.state.show && (
            <div>
              <h2>{this.state.fullName}</h2>
              <h4>{this.state.profession}</h4>
              <img src={this.state.imgSrc} alt="image" />
              <h2> {this.state.timer} </h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
