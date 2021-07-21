import React, {Component} from 'react'
import 'materialize-css';

class App extends Component{

    constructor(props){
        super(props);

        this.state={
            name: "welt",
            counter: 0
        }

        this.plusEins = this.plusEins.bind(this);
      }

         plusEins(){      
         this.setState({
           counter : this.state.counter +1 
         })
        }

    render(){
        return(
        <div className="white">
        <div className="col s6 m6">
          <div className="card deep-orange lighten-3">
            <div className="card-content dark-text">
              <span className="card-title"> {this.props.titel }  </span> 
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <button onClick={this.plusEins} className="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></button>
                <span> {this.state.counter} </span>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default App;






/**
 ************************************************************ Als Funktion ************************************************************
 */



//  const Panel = (props) => {     
//     const [count, setCount] = useState(0);

//     return(
//         <div className="white">
//         <div className="col s6 m6">
//           <div className="card deep-orange lighten-3">
//             <div className="card-content dark-text">
//               <span className="card-title">  {props.titel}  </span> 
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div className="card-action">
//                 <button onClick={() => setCount(count + 1)} className="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></button>
//               <span> {count} </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Panel