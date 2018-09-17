// @flow
import * as React from 'react';
import appStore from './store'


type PropsType = {}
type StateType = {}

export default class App extends React.Component<PropsType, StateType>{

  state = {}

  render(): * {

    const { show } = appStore

    return(
      <React.Fragment>
        <button onClick={appStore.toggleMenu()}> toggle </button>
        <div style={{
          visibility: show ? 'visible' : 'hidden'
        }}>
          MENU
        </div>
      </React.Fragment>
    )
  }
}
