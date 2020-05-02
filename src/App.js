import React from 'react'
import Pie from './chart/Pie';

const App = (props) => {
  const dataset = [
    { legend:"React", value:40, color:"#e74c3c" },
    { legend:"Ember.js", value:10, color:"#f39c12" },
    { legend:"Knockout.js", value:15, color:"#16a085" },
    { legend:"Backbone.js", value:25, color:"#d35400" },
    { legend:"AngularJS", value:30, color:"#2c3e50" }
  ]
  return (
      <div className="App">
          <Pie dataset={dataset}/>
      </div>
  ) 
}

export default App;
