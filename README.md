# wx_modal
**微信小程序自定义Modal ， 使用rich-text生成**

**项目中开始使用微信提供的wx.Modal ，当从a页面跳转到b页面，由于a
页面有异步操作，会造成b页面无故弹出错误提示，本案例只是简单封装，方便使用**

![https://github.com/fancaixia/wx_modal/blob/master/pic/modal.png](https://github.com/fancaixia/wx_modal/blob/master/pic/modal.png)

###### 显示模态框：utils.openShadow(this,text)   
 - 第一个参数：当前作用域  
- 第二个参数：提示信息, 可不传默认为(" 网络异常！请稍后重试 "） 
###### 关闭模态框： utils.closeShadow(this);

###### wxml文件
```
 <rich-text nodes="{{nodes}}" wx:if="{{shadowFlag}}" bindtap="closeShadow">
</rich-text>
```
###### js 文件
```
let  utils = require('../../utils/utils.js')
Page({
  data: {

  },
  onLoad(){
    //定时器延迟  模拟查询数据库返回信息
    setTimeout(() => {
      utils.openShadow(this)
    }, 1000)
  },
  //点击模态框关闭
  closeShadow(){
    utils.closeShadow(this);
  },

})
```
###### utils.js
```
function setnodes(text){
  return [{
    name: 'div',
    attrs: {
      class: 'div_shadow',
      style: ''
    },
    children: [{
      name: "div",
      attrs: {
        style: "",
        class: "modal"
      },
      children: [{
        name: "p",
        attrs: {
          style: "",
          class: "title"
        },
        children: [{
          type: "text",
          text: text
        }]
      },
      {
        name: "div",
        attrs: {
          style: "",
          class: "btnbox"
        },
        children: [{
          name: "div",
          attrs: {
            style: "",
            class: "confirm-container"
          },
          children: [{
            type: "text",
            text: '确定'
          }]
        }],

      }]

    }]
  }]
}
//显示模态框
const openShadow = (that, text ="网络异常！请稍后重试")=>{
      that.setData({
        shadowFlag: true,
        nodes: setnodes(text),
      })
}
//关闭模态框
const closeShadow= (that)=>{
    that.setData({
      shadowFlag: false,
      nodes: [],
    })
}

  module.exports = {
    openShadow,
    closeShadow,
  }
```
