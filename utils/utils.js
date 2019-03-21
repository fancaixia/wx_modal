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
const closeShadow = (that)=>{
    that.setData({
      shadowFlag: false,
      nodes: [],
    })
}

  module.exports = {
    openShadow,
    closeShadow,
  }