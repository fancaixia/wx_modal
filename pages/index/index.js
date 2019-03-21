
let  utils = require('../../utils/utils.js')

Page({
  data: {

  },
  onLoad(){

    //定时器延迟  模拟查询数据库返回信息
    setTimeout(() => {
      utils.openShadow(this, true)
    }, 1000)

  },
  //点击模态框关闭
  closeModal(){
    utils.closeModal(this);
  },

})