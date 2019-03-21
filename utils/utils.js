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

  //打开模态框
  // 1.第一个参数：当前作用域  
  // 2.第二个参数：布尔值控制模态框显示与隐藏
  // 3.第三个参数为模态框提示信息  可不传
const openShadow = (that, flag, text ="网络异常！请稍后重试")=>{
    
    if (flag){
      that.setData({
        shadowFlag: true,
        nodes: setnodes(text),
      })
    }else{
      that.setData({
        shadowFlag: false,
        nodes: [],
      })
    }
    
  }
//关闭模态框
const closeModal = (that)=>{
    that.setData({
      shadowFlag: false,
      nodes: [],
    })
}

  module.exports = {
    openShadow,
    closeModal,
  }