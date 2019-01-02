// pages/register/register.js
//加载app.js
var app = getApp();
Page({
  usernameInput: function (event) {
    var username = event.detail.value;
    this.setData({
      username: username
    });
  },
  passwordInput: function (event) {
    var password = event.detail.value;
    this.setData({
      password: password
    });
  },
  confirmPasswordInput: function (event) {
    var confirmPassword = event.detail.value;
    this.setData({
      confirmPassword: confirmPassword
    });
  },
  emailInput: function (event) {
    var email = event.detail.value;
    this.setData({
      email: email
    });
  },
  phoneInput: function (event) {
    var phone = event.detail.value;
    this.setData({
      phone: phone
    });
  },
  login: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  register: function () {
    var username = this.data.username;
    var password = this.data.password;
    var confirmPassword = this.data.confirmPassword;
    var email = this.data.email;
    var phone = this.data.phone;
    if (password == confirmPassword) {
      var url = app.globalData.serverIP + "/user/register.html?username=" + username + "&password=" + password + "&email=" + email + "&phone=" + phone;
      wx.request({
        url: url,
        success: function (response) {
          console.log(response);
          var serverReturnData=response.data;
          if (serverReturnData.status==200)
          {
            wx.showToast({
              title: '注册成功',
            })
          }else{
            wx.showToast({
              title: '注册失败',
            })
          }
        },
        fail: function (e) {
          console.log(e);
        }
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var serverIp = app.globalData.serverIP;
    console.log("serverIP=" + serverIp);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})