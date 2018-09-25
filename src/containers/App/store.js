// @flow
import { observable, action, computed, autorun, when } from 'mobx'
import { generate } from 'rxjs';


class AppStore{
  @observable show = true
  @observable randomArr = []
  @observable padding = ''
  @observable style = {
    @computed get padding(){return this.padding}
  }

  isAvtorunRunned = false


  constructor(){
    autorun(when(
      () => this.sum > 500,
      () => console.log(' > 500!')
    ))
  }



  get sum(){
    return this.randomArr.reduce( ( a, b ) => +a + +b , 0)
  }

  @action toggleShow = () => {
    console.log('toggleShow');

    this.show = !this.show
  }

  @action generateNewRandomArr = () => {
    if(!this.isAvtorunRunned){
      autorun(() => {console.log(this.randomArr.slice())})
      this.isAvtorunRunned = true
    }

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
    //console.log('setShow : ', show)
    this.padding = Math.random() > .5 ? '0px 49px' : ''
    console.log('this.padding: ', this.padding);
  }

  getShow = () => this.show
}


export default new AppStore()
