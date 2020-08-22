Page({
    data: {
        tabs: [
            {
                id: 1,
                name: "用户一",
                num: "4545466464646",
                url: "../../../images/banner.png"
            },
            {
                id: 2,
                name: "用户二",
                num: "1212313464646",
                url: "../../../images/banner.png"
            }
        ],
        activeTab: 0,
        arrowActive: true,
        activeSwiper: 0,
        itemArray: ['aaaaa', 'bbbbbbbb', 'vvvvvvvv', 'rrrrrrrr']
    },

    onLoad: function () {
        this.setData({
            slideButtons: [{
                text: '普通',
            }, {
                text: '普通',
                extClass: 'test',
            }, {
                type: 'warn',
                text: '警示',
                extClass: 'test',
            }],
        });
    },
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    },
    changePane: function (e) {
        let temp = 0;
        if (this.data.activeSwiper === 0) {
            temp = 1;
        } else {
            temp = 0;
        }
        this.setData({
            arrowActive: !this.data.arrowActive,
            activeSwiper: temp
        })
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    }

})