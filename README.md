## 微信小程序的目录结构的设计
```
components              //小程序自定义组件
    |- ec-canvas        //小程序的底层图表组件
    |- ...
custom-tab-bar          //小程序自定义tabBar(目前暂不使用自定义，测试只能放在根目录才会生效~)
images                  //小程序图片库
pages                   //小程序页面
    |- index            //小程序页面文件夹
        |- index.js     //页面脚本
        |- index.json   //页面配置
        |- index.wxml   //页面结构
        |- index.wxss   //页面样式
        |- secondPage            //该页面的二级页面文件夹
            |- secondPage.js     //页面脚本
            |- secondPage.json   //页面配置
            |- secondPage.wxml   //页面结构
            |- secondPage.wxss   //页面样式
    |- ...
        |- ...
utils                   //小程序工具包
app.js                  //小程序入口
app.json                //小程序全局配置
app.wxss                //小程序全局样式
project.config.json     //开发工具配置
README.md               //项目说明

