import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './api/index'
import Image1 from './Images/image.png'

export default class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})   
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });  
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={Image1} alt=""/>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}
