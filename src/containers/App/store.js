// @flow
import { observable, action } from 'mobx'
import { generate } from 'rxjs';


class AppStore{
  @observable show = true
  @observable randomArr = []


  @action toggleMenu = () => {
    this.show = !this.show
  }

  @action generateNewRandomArr = () => {
    const randomLength = this.generateRandomNum()
    const arr = []

    for(var i = 0; i < randomLength; i++){
      arr.push( this.generateRandomNum() )
    }

    this.randomArr = arr
  }

  generateRandomNum = () => {
    return (Math.random() * 100).toFixed(0)
  }
}

export default new AppStore()
