import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }

})

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

//单元测试
  {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
          propsData:{
              icon:"shezhi"
          }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      expect (useElement.getAttribute('xlink:href')).to.eq('#icon-shezhi')
      vm.$el.remove()
      vm.$destroy()
  }
  {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
          propsData:{
              icon:'shezhi',
              loading: true
          }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
      vm.$el.remove()
      vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'shezhi',
            iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).eq('2')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        icon:'shezhi'
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click',spy)

    vm.$el.click()
    expect(spy).to.have.been.called()

  }