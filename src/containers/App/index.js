// @flow
import * as React from 'react';
import { observer } from 'mobx-react'
import appStore from './store'


type PropsType = {}
type StateType = {}

@observer
export default class App extends React.Component<PropsType, StateType>{

  state = {}

  render(): * {

    const { show } = appStore

    return(
      <React.Fragment>
        <button onClick={appStore.toggleMenu}> toggle </button>
        <div style={{
          visibility: show ? 'visible' : 'hidden',
          width: 300,
          height: 300,
          lineHeight: '300px',
          textAlign: 'center',
          outline: '1px dashed',
        }}>
        MENU
        </div>
      </React.Fragment>
    )
  }
}
