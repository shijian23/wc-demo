Component({
    data: {
        tabList: [
            {
                id: 1,
                name: "全部",
            },
            {
                id: 2,
                name: "分类",
            },
            {
                id: 3,
                name: "密码",
            },
            {
                id: 4,
                name: "更多",
            },
        ],
    },
    pageLifetimes: {
        show: function () {
            console.log(this.properties.currentIndex);
            // 页面被展示
        },
        hide: function () {
            // 页面被隐藏
        },
        resize: function (size) {
            // 页面尺寸变化
        },
    },
    properties: {
        currentIndex: {
            type: Number,
            value: 0,
        },
    },
    methods: {
        clickTab(e) {
            console.log(this.properties.currentIndex);
            this.triggerEvent("myTab", e);
        },
    },
});
