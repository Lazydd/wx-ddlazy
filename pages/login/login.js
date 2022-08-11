// pages/login/login.js

const {
    _post,
    _config
} = require("../../utils/request")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        password: '',
        device: 'APP',
        isLastingCookie: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    getUsername(e) {
        this.setData({
            username: e.detail.value
        })
    },
    getPassword(e) {
        this.setData({
            password: e.detail.value
        })
    },
    login() {
        let {
            device,
            isLastingCookie,
            password,
            username
        } = this.data
        _post(_config.requestUrl.replace("/system", "") + '/login/doLogin', {
            device,
            isLastingCookie,
            password,
            username
        }).then(res => {
            if (res.code == 200) {
                wx.navigateTo({
                    url: '/pages/index/index'
                });
            } else {
                wx.showToast({
                    title: res.error,
                    icon: "none",
                    duration: 2000,
                });
            }
        })
    }
})