// @flow
import * as React from 'react';
import { observer } from 'mobx-react'
import appStore from './store'


type PropsType = {}
type StateType = {}

@observer
export default class App extends React.Component<PropsType, StateType>{

  state = {}

  componentDidMount(){
    const { generateNewRandomArr } = appStore
    setInterval(() => {
      generateNewRandomArr()
    }, 1000)
  }

  render(): * {

    const { show, randomArr } = appStore

    return(
      <React.Fragment>
        <button onClick={appStore.toggleMenu}> toggle </button>
        <div style={{
          visibility: show ? 'visible' : 'hidden',
          width: 300,
          height: 300,
          outline: '1px dashed',
          display: 'flex',
          flexFlow:'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            flex: '1 0 100%',
            textAlign: 'center'
          }}>MENU</div>
          {randomArr.map( num => <span>{ num }</span> )}

        </div>
      </React.Fragment>
    )
  }
}
