Component({
    data: {
        showPayPwdInput: true, //是否展示密码输入层
        pwdVal: "", //输入的密码
        payFocus: true, //文本框焦点
    },
    lifetimes: {
        // 在组件实例进入页面节点树时执行
        attached: function () {},
    },
    properties: {
        // true为重置密码按钮 false为初始化密码文本
        forgetPassword: {
            type: Boolean,
            value: true,
        },
        // 操作提示文字
        optTitle: {
            type: String,
            value: "",
        },
        // 跳转到下一步
        nextStep: {
            type: String,
            value: "",
        },
    },
    methods: {
        /**
         * 取消操作
         */
        cancelOpt: function () {
            wx.navigateBack({
                delta: 1,
            });
        },
        /**
         * 获取焦点
         */
        getFocus: function () {
            console.log(111);
            this.setData({ payFocus: true });
        },
        /**
         * 输入密码监听
         */
        inputPwd: function (e) {
            console.log(e.detail.value);
            this.setData({ pwdVal: e.detail.value });
            if (e.detail.value.length >= 6) {
                // 跳转到下一步
                wx.navigateTo({
                    url: this.properties.nextStep,
                    success: (result) => {},
                    fail: () => {},
                    complete: () => {},
                });
            }
        },
        /**
         * 重置密码跳转页
         */
        resetPassword: function () {
            wx.redirectTo({
                url: "",
                success: (result) => {},
                fail: () => {},
                complete: () => {},
            });
        },
        /**
         * 校验密码
         */
        formInputChange(e) {
			const { field } = e.currentTarget.dataset;
			console.log(1111);
            console.log(field);
            this.setData({
                [`formData.${field}`]: e.detail.value,
            });
        },
    },
});
