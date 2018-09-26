// @flow
import { observable, action, computed, autorun, when, toJS, configure, values } from "mobx"

configure({ enforceActions: "observed" })

class AppStore{
  @observable show = true
  @observable randomArr = []
  @observable padding = ""
  @computed get style(){
    return {
      padding: this.padding
    }
  }

  @observable testArray = []

  constructor(){
    autorun(() => {
      //console.log( values(this.randomArr) )
    })
  }



  get sum(){
    return this.randomArr.reduce( ( a, b ) => +a + +b, 0)
  }

    @action.bound togglePadding() {
    console.log("togglePadding")
    this.padding = this.padding === "" ? "40px 49px" : ""
    console.log("this.padding: ", this.padding)
  }

   @action generateNewRandomArr = () => {
     const arr = []

     for(var i = 0; i < 10; i++){
       arr.push( this.generateRandomNum() )
     }

     this.randomArr = arr
   }

  generateRandomNum = () => {
    return (Math.random() * 100).toFixed(0)
  }

  setShow = (/* show: boolean */) => {
    //console.log('setShow : ', show)
    this.padding = Math.random() > .5 ? "0px 49px" : ""
    console.log("this.padding: ", this.padding)
  }

  getShow = () => this.show
}

export type AppStoreType = AppStore
export default new AppStore()
