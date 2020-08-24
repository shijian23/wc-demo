//Page Object
Page({
    data: {
        showModal: false, // 显示modal弹窗
        single: false, // false 只显示一个按钮，如果想显示两个改为true即可
        ready: "",
        time: 5,
        timeClose: true,
    },
    toastTest() {
        wx.showToast({
            title: "成功",
            icon: "success",
            duration: 2000,
        });
    },
    actionSheetTest() {
        wx.showActionSheet({
            itemList: ["A", "B", "C"],
            success(res) {
                console.log(res.tapIndex);
            },
            fail(res) {
                console.log(res.errMsg);
            },
        });
    },

    onModalTap() {
        wx.showModal({
            title: "提示",
            content: "这是一个模态弹窗",
            success(res) {
                if (res.confirm) {
                    console.log("用户点击确定");
                } else if (res.cancel) {
                    console.log("用户点击取消");
                }
            },
        });
    },
    alertModal() {
        this.setData({
            ready: false,
            timeClose: true,
        });
        // 设置计时器
        let that = this;
        let myTime = setInterval(function () {
            console.log(that.data.time);
            that.setData({
                time: that.data.time - 1,
            });
            if (that.data.time === 0) {
                clearInterval(myTime);
                that.setData({
                    ready: true,
                    time: 5,
                    timeClose: false,
                });
            }
        }, 1000);

        this.setData({
            showModal: true,
        });
    },
    // 点击取消按钮的回调函数
    modalCancel(e) {
        // 这里面处理点击取消按钮业务逻辑
        console.log("点击了取消");
        this.setData({
            showModal: false,
        });
    },
    // 点击确定按钮的回调函数
    modalConfirm(e) {
        // 这里面处理点击确定按钮业务逻辑
        console.log("点击了确定");
        this.setData({
            showModal: false,
        });
    },
    //options(Object)
    onLoad: function (options) {},
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    onShareAppMessage: function () {},
    onPageScroll: function () {},
    //item(index,pagePath,text)
    onTabItemTap: function (item) {},
});
