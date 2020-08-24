//index.js
const app = getApp();
const navList = [
    {
        id: 1,
        title: "一",
        url: "/pages/other/testOne/testOne"
    },
    {
        id: 2,
        title: "二",
        url: "/pages/other/testTwo/testTwo"
    },
    {
        id: 3,
        title: "三",
        url: "/pages/other/testThree/testThree"
    },
]

Page({
    data: {
        allScore: 66.98, // 综合得分,
        navList: navList
    },

    onLoad() {
    },

    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
