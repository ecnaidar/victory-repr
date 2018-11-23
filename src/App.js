import React from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTooltip
} from "victory";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    });
  }

  render() {
    const { counter } = this.state;
    return <ScatterChart counter={counter} />;
  }
}

class ScatterChart extends React.Component {
  render() {
    const testData = [
      {
        one: 133,
        two: 142
      },
      {
        one: 41,
        two: 22
      },
      {
        one: 11,
        two: 60
      },
      {
        one: 50,
        two: 12
      }
    ];
    return (
      <VictoryChart domainPadding={30}>
        <VictoryAxis label="label" />
        <VictoryAxis dependentAxis label="labely" />
        <VictoryScatter
          data={testData}
          y="one"
          x="two"
          labelComponent={<VictoryTooltip />}
          labels={portfolio => `label`}
        />
      </VictoryChart>
    );
  }
}

export default App;
