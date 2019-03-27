const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', ()=>{
  it('存在',()=>{
      expect(Input).to.exist
  }) 
  it('可以接受value',()=>{
       const Constructor = Vue.extend(Input)
       const vm = new Constructor({
           propsData:{
               value:'zhangsan'
           }
       }).$mount()
       const inputElement = vm.$el.querySelector('input')
       expect(inputElement.value).to.eq('zhangsan')
       vm.$destroy()
  })
  it('可以接受disabled',()=>{
     const Constructor = Vue.extend(Input)
     const vm = new Constructor({
         propsData:{
             disabled:true
         }
     }).$mount()
     const inputElement = vm.$el.querySelector('input')
       expect(inputElement.disabled).to.eq(true)
       vm.$destroy()

  })
  it('可以接受error信息',()=>{
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
        propsData:{
            error:'你错了'
        }
    }).$mount()
      const useElement= vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#icon-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.eq('你错了')
      vm.$destroy()

 })
   it('支持change/input/focus/blur事件',()=>{
       ['input','change','focus','blur'].forEach((eventName)=>{
       const Constructor =Vue.extend(Input)
       const vm = new Constructor({}).$mount()
       const callback = sinon.fake()
       vm.$on(eventName,callback)
       let event = new Event(eventName)
       let inputElement = vm.$el.querySelector('input')
       inputElement.dispatchEvent(event)
       expect(callback).to.have.been.calledWith(event)
       })
       
   })





})