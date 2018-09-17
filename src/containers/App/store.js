// @flow
import { observable, action } from 'mobx'


class AppStore{
  @observable show = false

  @action toggleMenu = () => {
    this.show = !this.show
  }
}

export default new AppStore()
