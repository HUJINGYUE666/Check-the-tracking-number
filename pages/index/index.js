//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    expressNu: null, //订单号
    expressInfo: null //订单信息
  },
  //事件处理函数
  //输入框输入订单号后赋值
  input: function (e) {
    this.setData({
      expressNu: e.detail.value
    })
  },
  //点击查询按钮后获取信息并赋值
  btnClick: function () {
    var thispage = this;
    // console.log(this.data)
    app.getExpressInfo(this.data.expressNu, function (data) {
      // console.log(data)
      thispage.setData({expressInfo: data})
    });
  }
})
