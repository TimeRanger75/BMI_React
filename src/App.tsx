import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State{
  i_kg:number;
  i_height:number;
  bmi:number;
}


class App extends Component<{}, State>{
  constructor(props:{}) {
    super(props);

    this.state = {
     i_kg:0,
     i_height:0,
     bmi:0
    };

  }

  calc=()=>{
    let { i_kg, i_height } = this.state;
    let kg=i_kg
    let height=i_height;
    this.setState({
      bmi:kg/(height/100)**2
      
    });

  }

  render() {
    return <div>
    <header>
    <p>Írja be cm-ben számított testmagasságát (cipő nélkül mérve):
      <input type="number" value={this.state.i_height} onChange={(e)=>{this.setState({i_height:parseInt(e.currentTarget.value)})}}/></p>
      <p>Írja be kg-ban számított testsúlyát (cipő nélkül mérve):
      <input type="number " value={this.state.i_kg} onChange={(e)=>{this.setState({i_kg:parseInt(e.currentTarget.value)})}}/>
      </p>
      <button onClick={this.calc}>Számol</button>
      </header>  
      <section>
      <p>Az ön bmi értéke {this.state.bmi.toFixed(2)} </p>
        <div id='center'>
            <p className={this.state.bmi > 18.5 ? '' : this.state.bmi>0 ? 'bmi_ertek': ''}><b>18,5 vagy kevesebb</b> SOVÁNY</p>
            <hr/>
            <p className={this.state.bmi > 25 ? '' : this.state.bmi>18.5 ? 'bmi_ertek': ''}><b>18,5 - 24,9</b> NORMÁL</p>
            <hr/>
            <p className={this.state.bmi > 30 ? '' : this.state.bmi>25 ? 'bmi_ertek': ''}><b>25-29,9</b> TÚLSÚLYOS</p>
            <hr/>
            <p className={this.state.bmi > 35 ? '' :this.state.bmi>30 ? 'bmi_ertek': ''}><b>30-34.9</b> I. FOKÚ ELHÍZÁS</p>
            <hr/>
            <p className={this.state.bmi > 40 ? '' : this.state.bmi>35 ? 'bmi_ertek': ''}><b>35-39,9</b> II. FOKÚ ELHÍZÁS</p>
            <hr/>
            <p className={this.state.bmi > 40 ? 'bmi_ertek' : ''}><b>40 vagy több</b> III. FOKÚ ELHÍZÁS</p>
            <hr/>
        </div>
      </section>


    </div>
    
  
  
  }
}

export default App;
