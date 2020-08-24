// pages/city/city.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        nbFrontColor: "#000000",
        nbBackgroundColor: "#ffffff",
        list: [
            {
                name: "表单",
                url: "../cityClient/cityForm/cityForm",
            },
            {
                name: "弹窗",
                url: "../cityClient/cityModal/cityModal",
            },
            {
                name: "知乎",
                url: "../cityClient/cityKnow/cityKnow",
            },
            {
                name: "哈哈哈",
                url: "pag",
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.setData({
            nbTitle: "新标题",
            nbLoading: false,
            nbFrontColor: "#ffffff",
            nbBackgroundColor: "#000000",
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
});
