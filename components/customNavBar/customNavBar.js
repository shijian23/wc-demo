// components/custom-nav-bar/custom-nav-bar.js
const App = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        backUrl: String,
        isFirstPage: Boolean,
    },

    /**
     * 组件的初始数据
     */
    data: {
        navH: App.globalData.navHeight,
        isFirstPage: false, // 是否为一级页面，默认否
    },

    /**
     * 组件的方法列表
     */
    methods: {
        goToBack: function (e) {
            console.log(this.properties.backUrl);
            this.triggerEvent('backSave', '');
            if (this.properties.backUrl) {
                wx.redirectTo({
                    url: this.properties.backUrl
                });
            } else {
                wx.navigateBack({})
            }
        }
    }
})