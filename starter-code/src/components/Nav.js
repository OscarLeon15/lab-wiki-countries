import React from 'react';
import countries from '../countries.json';

class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state={
        countries: countries,
        abbreviation: countries.cca2,
      }
    }


    showAllCountries = ()=>{

      return this.state.countries.map((eachCount, i)=>{
        return(
          <div key={i}>
            <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              <a className="list-group-item list-group-item-action" href={`/${eachCount.cca3}`}><img src={`https://www.countryflags.io/${eachCount.cca2}/flat/64.png`}></img>{eachCount.name.common} {eachCount.cca2}</a>
            </div>
          </div>







          
        <div className="col-7">
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

          </div>
        )
      })
    }



    render(){
        return(
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>



        {this.showAllCountries()}
      </div>
        )
    }
}



export default Nav;