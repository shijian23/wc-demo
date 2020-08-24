//index.js
const app = getApp();
import Request from "../../utils/request.js";
import { verification } from "../../utils/util.js";
const request = new Request();

Component({
    properties: {
        tips: {
            type: String,
            value: "",
        },
        title: {
            type: String,
            value: "",
        },
        labelName: {
            type: String,
            value: "",
        },
        requestUrl: {
            type: Object,
            value: {
                path: "",
                name: "",
            },
        },
        defalutVal: {
            type: String,
            value: "",
        },
        required: {
            type: Boolean,
            value: true,
        },
        maxlength: {
            type: Number,
            value: 1000,
        },
        type: {
            type: String,
            value: "text",
        },
        showTitle: {
            type: Boolean,
            value: true,
        },
        isTextArea: {
            type: Boolean,
            value: false,
        },
        verificName: {
            type: String,
            value: "",
        },
    },
    externalClasses: ["my-class"],
    data: {
        val: "",
        loading: false,
        showTips: "",
    },
    ready() {
        this.setData({
            val: this.properties.defalutVal,
        });
    },
    methods: {
        _changeIpt(e) {
            console.log(e);

            this.setData({ val: e.detail.value });
            if (!e.detail.value) {
                this.setData({
                    showTips: "",
                });
            }
        },
        toSubmit() {
            this.setData({
                loading: true
            })
            let val = this.data.val.trim();
            let { requestUrl, required, verificName } = this.properties;
            let { path, name } = requestUrl,
                isTest = false;
            if (verification[verificName]) {
                // 正则验证
                if (verificName === "noEmoji") {
                    isTest =
                        !val.match(verification.noEmoji) && val.length > 0
                            ? true
                            : false;
                } else {
                    isTest = verification[verificName].test(val);
                }
                isTest
                    ? this.toSend(path, name, val)
                    : this.setData({ showTips: this.properties.tips });
            } else if (required) {
                // 必填
                val.length
                    ? this.toSend(path, name, val)
                    : this.setData({ showTips: this.properties.tips });
            } else {
                this.toSend(path, name, val);
            }
        },
        toSend(path, name, val) {
            var _this = this;
            this.setData({ showTips: "", loading: true });
            request
                .get(path, { [name]: val }, {}, true)
                .then((res) => {
                    setTimeout(() => {
                        console.log(1111);
                        wx.navigateBack({});
                    }, 2000);
                })
                .catch((err) => {
                    this.setData({ showTips: err.message });
                })
                .finally(() => {
                    _this.setData({
                        loading: false,
                    });
                });
        },
    },
});
