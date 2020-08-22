const baseURL = 'http://192.168.93.41:9060/api/v1.0'

class Request {
    constructor(business) { // business: 微服务简称,如: '/workflow'
        business = business || ''
        this.baseURL = baseURL + business;
        this.requestTask = null; // 需要使用abort时，请重新new
    }

    get(url, data, options) {
        return this.request('GET', url, data, options);
    }

    post(url, data, options) {
        return this.request('POST', url, data, options);
    }

    put(url, data, options) {
        return this.request('PUT', url, data, options);
    }

    request(method, url, data, options) {
        const _this = this;
        return new Promise((resolve, reject) => {
            this.requestTask = wx.request({
                dataType: 'json',
                responseType: 'text',
                url: _this.baseURL + url,
                data,
                method,
                success(res) {
                    const { statusCode, data} = res
                    if ((statusCode === 200 || statusCode === 304) && data.success) resolve(data.data);
                    else reject(data)
                },
                fail(e) {
                    reject({
                        message: '请求失败',
                        path: _this.baseURL + url,
                    });
                },
                ...options
            });
        }).catch(e => console.log(e) || null);
    }

    abort() {
        if (this.requestTask) {
            this.requestTask.abort();
            this.requestTask = null
        }
    }
}

module.exports = Request;