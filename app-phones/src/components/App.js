import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchPhones } from '../api/Api';
import '../stylesheets/App.css';
import PhoneDetail from './PhoneDetail';
import PhonesList from './PhonesList';
import SpinnerVeil from './SpinnerVeil';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPhones: [],
      isLoading: false
    }
    this.renderSinglePhone = this.renderSinglePhone.bind(this);
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    });
    fetchPhones().then(phones => {
      this.setState({
        allPhones: phones,
        isLoading: false
      });
    })
  }

  renderSinglePhone(props) {
    const selectedId = parseInt(props.match.params.id);
    const selectedPhone = this.state.allPhones.find((phone) => phone.id === selectedId);
    return <PhoneDetail phone={selectedPhone}/>
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <PhonesList allPhones={this.state.allPhones}></PhonesList>
            <SpinnerVeil isVisible={this.state.isLoading} />
          </Route>
          <Route path="/:id/" render={this.renderSinglePhone}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
