import React, { Component } from "react";
import { Row } from 'reactstrap';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
  };

  // Create a click function that sets the id of each card using id in friends.json
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // Create Increment function that calculates the score
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 10) {
      this.setState({ message: "Winner!" });
    }
    this.handleShuffle();
  };

  // Create a function to reset if a card is clicked twice
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Oh snap!",
      clicked: []
    });
    this.handleShuffle();
  };

  // Shuffle card function
  handleShuffle = () => {
    let shuffledCards = shuffleCards(friends);
    this.setState({ friends: shuffledCards });
  };

  // Render to the DOM
  render() {
    return (
      <Wrapper>

        <Row>
        <Nav
          title="Memory Feat. Tom and Jerry"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        </Row>

        <Row>
        <Title>
          Click on a tile, but make sure to click it just once! Score up to 10 to win!
        </Title>
        </Row>

        
        <Row>
          {this.state.friends.map(friend => (
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={friend.id}
                image={friend.image}
              />
          ))}
        </Row>
        
      </Wrapper>
    )};
};

// Shuffle all cards using math.random
function shuffleCards(array) {
  for (let x = array.length - 1; x > 0; x--) {
    let y = Math.floor(Math.random() * (x + 1));
    [array[x], array[y]] = [array[y], array[x]];
  }
  return array;
};

export default App;
