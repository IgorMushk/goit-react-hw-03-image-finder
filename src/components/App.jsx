import React, { Component } from 'react'
import css from './App.module.css'
import Searchbar from './Searchbar/Searchbar'

export class App extends Component {
  render() {
    return (
     <div className={css.App}> 
     <Searchbar/>
    </div>
    )
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template!
//     </div>
//   );
// };
