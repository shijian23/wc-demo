// components/custom-page/custom-page.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        backUrl: String,
        isFirstPage: Boolean,
        hasBackEvent: {
            type: Boolean,
            value: false
        }
    },
    externalClasses: ['my-class'],

    /**
     * 组件的初始数据
     */
    data: {
        navH: getApp().globalData.navHeight,
        isFirstPage: false,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        backSave() {
            if (this.properties.hasBackEvent) {
                this.triggerEvent('backSave', true);
            }
        }
    }
})
