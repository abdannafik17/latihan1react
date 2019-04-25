import React, { Component } from 'react'

const coba = 'Belajar React'

const friends = [
  { id : 1, name : 'Robert'},
  { id : 2, name : 'Budi'},
  { id : 3, name : 'Arum'},
  { id : 4, name : 'Roger'}
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      name : 'pln corpu',
      bestFriends : [
        { id : 1, name : 'Lola'},
        { id : 2, name : 'Tomo'},
        { id : 3, name : 'Brudin'},
        { id : 4,name : 'Joko'}
      ]
    }
  }

  fiterFriends () {
    return friends.map(f => {
      if(f.id %2 === 0) {
        return (
          <p> {f.id} - {f.name} </p>
        )
      }
    })
  }

  render () {
    return (
        <div>
          <h1> Hello { coba } { (this.state.name) }</h1>
          <button 
            onClick={ () => this.setState({
                bestFriends:[]
              })
            }>
          Click Me
          </button>
          {
            this.fiterFriends()
          }

          {
            //cara akses data dari constructor
            this.state.bestFriends.map(f => {
              return (
                <p> Best Friends - {f.id} - {f.name} </p>
              )
            })
          }

        </div>
    )
  }

}


export default App;
