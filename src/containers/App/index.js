// @flow
import * as React from 'react';
import { observer } from 'mobx-react'
import appStore from './store'
import ST from './styles.scss'

const l = console.log

type PropsType = {}
type StateType = {}

@observer
export default class App extends React.Component<PropsType, StateType>{

  state = {}

  componentDidMount(){
    const { generateNewRandomArr, setShow, getShow} = appStore
    setInterval(() => {
      generateNewRandomArr()
    }, 1000)

    setInterval(() => {
      setShow(!getShow())
    }, 2500)
  }

  render(): React.Node {

    const { show, randomArr, sum, style } = appStore

    return(
      <React.Fragment>
        <button onClick={appStore.toggleShow}> toggleShow </button>

        <div
          className={`${ST.square} ${ show ? ST['square-show']: ''}`}
          style={{...style}}
        >
          {randomArr.map( (num, ind) => <span key={ind}>{ num }</span> )}
        </div>

        Sum: <span>{sum}</span>

      </React.Fragment>
    )
  }
}
