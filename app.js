//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getExpressInfo: function (nu, cb) { //nu为快递单号
    wx.request({
      // url: 'http://allexp.market.alicloudapi.com/expQuery?com=auto&no=' + nu,
      url: 'http://v.juhe.cn/exp/index?key=8317bb14716ab386a0204250d2100310&com=auto&no=' + nu, //聚合api
      data: {
        x: '',
        y: ''
      },
      header: {
        // 'AppCode': 'bb0122bca63540e59a026faf25df28ba' //AppCode
      },
      success: function (res) {
        // console.log(res.data.result.list);
        // console.log(res.data)
        cb(res.data.result.list) //将数据返回
      }
    })
  }
})