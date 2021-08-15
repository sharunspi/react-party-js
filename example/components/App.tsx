import * as React from 'react';
import party from 'party-js'
import Celebrate from './Celebrate'

// Attach to window. Can be useful to debug
const config ={
    count: 'range(0, 100)',
	size: 'range(0.6, 1.4)',
}
class App extends React.Component {
    private myRef;
        constructor(props){
            super(props);
            this.myRef = React.createRef();
        }
  render() {
     
    const showCelebration =() =>{
            console.log(this.myRef.current)
            party.confetti(this.myRef.current,{
                count:party.variation.range(20,40),
            })
      }
    return (
      <main>
          <div>
              <button onClick={()=>showCelebration()}>
                    show celebration
              </button>
          </div>
          <Celebrate 
            template='confetti'
            config={config}
          >
              hau
          </Celebrate>
          <div ref={this.myRef}>

          </div>
      </main>
    );
  }
}

export { App };