import React from 'react';

import { Cards, Chart, CountryPicker, Header } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    //populate data from api, set to state
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //set data to state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
