import React, { Component } from 'react';

function Output(props) {
  return (
    <div
      className="output-notification"
      id="output">
      {props.display} lb's
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      output: " ",
      planets: [
        { name: 'Pluto', value: 0.06 },
        { name: 'Neptune', value: 1.148 },
        { name: 'Uranus', value: 0.917 },
        { name: 'Saturn', value: 1.139 },
        { name: 'Jupiter', value: 2.640 },
        { name: 'Mars', value: 0.3895 },
        { name: 'Moon', value: 0.1655 },
        { name: 'Earth', value: 1 },
        { name: 'Venus', value: 0.9032 },
        { name: 'Mercury', value: 0.377 },
        { name: 'Sun', value: 27.9 },
        { name: "Choose one" }
      ]
    }

    this.handleUser = this.handleUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleUser(e) {
    this.setState({ userInput: e.target.value })
  };

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: (value) })
  };


  handleSubmit(e) {
    e.preventDefault();
    const total = this.calculate(this.state.userInput, this.state.planet)
    this.setState({ output: total });
  };

  calculate(userInput, planets, ) {
    const user = userInput;
    const planet = planets;
    const output = user * planet
    return output.toFixed(2);
  };

  render() {
    let optionTemplate = this.state.planets.map(p => (
      <option key={p.name} value={p.value}>{p.name}</option>
    ));
    return (

      <div id="universe">
        <div id="galaxy">

          <header className="title"> Astro Calculator  </header>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/2154/sky-lights-space-dark.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="Earth" />
            <div className="card-body">

              <label>
                Pick your favorite  :
        <select defaultValue={this.state.value} onChange={this.handleChange} name="planet">
                  {optionTemplate.reverse()}
                </select>
              </label>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-default">Pounds(lb's)</span>
                </div>
                <input type="number" name="userInput" className="form-control" aria-label="Default" placeholder="Enter Here" aria-describedby="inputGroup-sizing-default" onChange={this.handleUser} defaultValue={this.state.userInput} />
              </div>

              <p className="card-text">Please enter weight to find out how much it is on the chosen place.</p>
              <button id="submit" name="submit" type="button" className="btn btn-info" onClick={this.handleSubmit}>Calculate</button>
              <section className="section">
                <div className="content is-large has-text-centered">
                  <Output display={this.state.output} />
                </div>
              </section>
            </div>
          </div>

          {/* Mercury */}
          <div id="mercury-orbit">
            <div id="sun">
            </div>
            <div id="mercury">
            <span className="tooltiptext">Mercury</span>
            </div>
          </div>

          {/* Venus */}
          <div id="venus-orbit">
            <div id="venus"></div>
          </div>

          {/* earth */}
          <div id="earth-orbit">
            <div id="earth"></div>
            <div id="moon-orbit">
              <div id="moon"></div>
            </div>
          </div>

          {/* Mars */}
          <div id="mars-orbit">
            <div id="mars"></div>
          </div>

          {/* Jupiter */}
          <div id="jupiter-orbit">
            <div id="jupiter"></div>
          </div>

          {/* Saturn */}
          <div id="saturn-orbit">
            <div id="saturn"></div>
            <div id="rings"></div>
            <div id="rings2">
            </div>
          </div>

          {/* Uranus */}
          <div id="uranus-orbit">
            <div id="uranus"></div>
          </div>

          {/* Neptune */}
          <div id="neptune-orbit">
            <div id="neptune"></div>
          </div>

          {/* Pluto */}
          <div id="pluto-orbit">
            <div id="pluto"></div>
          </div>

        </div>
      </div>
    );
  }
}
export default App;
