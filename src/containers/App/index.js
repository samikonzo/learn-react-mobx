// @flow
import * as React from "react"
import { observer, Provider, inject } from "mobx-react"
import appStore from "./store"
import ST from "./styles.scss"

const l = console.log



type InsidePropsType={
  num?: number
}

type InsideStateType={}

@inject("num")
class Inside extends React.Component<InsidePropsType, InsideStateType> {
  state={}

  render(): React.Node {
    return (
      <div>
        Inside element
        <br />
        num :
        {this.props.num}
      </div>
    )
  }
}

type AppPropsType = {
  randomArr: number[]
}
type AppStateType = {|
  arr: number[]
|}


@observer
class App extends React.Component<AppPropsType, AppStateType>{
  static getDerivedStateFromProps(props: AppPropsType, state: AppStateType){
    console.log("gDSFP : ")
    console.log("props: ", props)
    console.log("state: ", state)
  }

  state = {
    arr: []
  }

  componentDidMount(){
    const { generateNewRandomArr } = appStore
    setInterval(() => {
      generateNewRandomArr()
    }, 1000)
  }

  componentWillReceiveProps(nextProps: PropsType){
    this.setState({
      arr: nextProps.randomArr
    })
  }


  render(): React.Node {

    const { show, randomArr, sum, style, padding } = appStore

    const {arr} = this.state

    return(
      <React.Fragment>
        <button onClick={appStore.togglePadding}>
          togglePadding
        </button>

        <div
          className={`${ST.square} ${ show ? ST["square-show"]: ""}`}
          style={{
            ...style,
            padding: padding
          }}
        >
          {arr.map( (num, ind) => (<span key={ind}>
            { num }
          </span>) )}
        </div>

        Sum:
        <span>
          {sum}
        </span>

        <br />
        <br />
        <br />
        <br />

        <Provider num={arr[0]}>
          <Inside />
        </Provider>
      </React.Fragment>
    )
  }
}







export default App
