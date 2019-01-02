// pages/login/login.js
var app=getApp();
Page({
  usernameInput:function(event)
  {
    var username=event.detail.value;
    this.setData({
      username:username
    });
  },
  passwordInput: function (event) {
    var password = event.detail.value;
    this.setData({
      password: password
    });
  },
  login:function()
  {
    var username=this.data.username;
    var password=this.data.password;
    var serverIp=app.globalData.serverIP;
    var url = serverIp +"/user/login.html?username="+username+"&password="+password;
    wx.request({
      url: url,
      success:function(response){
var serverReturnData=response.data;
if (serverReturnData.status==200)
{
  wx.navigateTo({
    url: '../storeIndex/storeIndex',
  })
}else{
  wx.showToast({
    title: '登录失败',
  })
}
      },
      fail:function(e)
      {
        console.log(e);
      }
    })

  },
  register:function(){
    wx.navigateTo({
      url: '../register/register',
    })
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