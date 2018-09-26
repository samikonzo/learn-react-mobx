// @flow
import * as React from "react"

import { toJS } from "mobx"
import { observer, Provider, inject } from "mobx-react"
import appStore from "./store"
import ST from "./styles.scss"

import type { AppStoreType } from "./store"

const l = console.log


const arr = ['qwer', 'tewt', 'uert']
const b = arr[2]


type InsidePropsType={
  store?: AppStoreType
}

type InsideStateType={
  arr: number[]
}

@inject("store")
class Inside extends React.Component<InsidePropsType, InsideStateType> {
  state={
    arr: []
  }

  static getDerivedStateFromProps (props: InsidePropsType/* , state: InsideStateType  */){

    const { store } = props
    if( store ) return { arr : store.randomArr }

    return null
  }

  render (): React.Node {

    const arr = toJS(this.state.arr)
    const first = arr.length ? arr[0] : "no number"

    return (
      <div>
        Inside element
        <br />
        num :
        { first }
      </div>
    )
  }
}

type AppPropsType = {}
type AppStateType = {|
  arr: number[]
|}



@observer
class App extends React.Component<AppPropsType, AppStateType>{


  componentDidMount (){
    const { generateNewRandomArr } = appStore
    setInterval(() => {
      generateNewRandomArr()
    }, 1000)
  }

  render (): React.Node {

    const { show, /* sum, */ style, padding, randomArr: arr } = appStore

    return(
      <React.Fragment>
        <button onClick={appStore.togglePadding}>
          togglePadding
        </button>

        <div
          className={`${ST.square} ${ show ? ST["square-show"] : ""}`}
          style={{
            ...style,
            padding: padding
          }}
        >
          {arr.map( (num, ind) => ( <span key={ind}> { num } </span> ) ) }
        </div>

        Sum:
        <span>
          { arr.reduce( (a: number, b: string): number => +a + +b, 0 ) }
        </span>

        <br />
        <br />
        <br />
        <br />

        <Provider store={appStore} >
          <Inside />
        </Provider>
      </React.Fragment>
    )
  }
}







export default App
