import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

class Counter extends React.Component {
  //need to pass prop to the base class component
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);

    this.state = {
      count: 0,
    };
  }

  handleAttack() {
    //alert("Attack clicked");
    //async call to state count

    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);

      return {
        count: newCount,
      };
    });
  }

  handleDefense() {
    //alert("Defend clicked");
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);

      return {
        count: newCount,
      };
    });
  }

  handleRandomPlay() {
    let playMode = Math.round(Math.random());

    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  }

  render() {
    return (
      <div className="row text-black text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>YOu win at +10 points and lost at -10 points!</p>
        <p>Last Play: </p>
        <h3>Game Status : </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              with: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              with: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefense}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlan}>Random Plan</button>
          <br />
          <button className="btn btn-warning w-100 mt-2">Restart</button>
        </div>
      </div>
    );
  }
}

export default Counter;
