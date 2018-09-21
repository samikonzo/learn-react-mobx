// @flow
import { observable, action } from 'mobx'
import { generate } from 'rxjs';


class AppStore{
  @observable show = true
  @observable randomArr = []
  @observable padding = ''
  @observable style = {
    background: 'red',
    get padding() {return this.padding},
  }

  get sum(){
    return this.randomArr.reduce( ( a, b ) => +a + +b , 0)
  }

  @action toggleShow = () => {
    this.padding = Math.random() > .5 ? '49px' : ''
    console.log('this.padding: ', this.padding);

    this.show = !this.show
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

  setShow = (show) => {
    this.show = show
  }

  getShow = () => this.show
}


export default new AppStore()
