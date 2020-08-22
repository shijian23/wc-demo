import * as echarts from '../components/ec-canvas/echarts.min';

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const initChart = option =>
    (canvas, width, height, dpr) => {
        let chart = echarts.init(canvas, null, {
            width: width,
            height: height,
            devicePixelRatio: dpr // new
        });
        canvas.setChart(chart);

        chart.setOption(option);
        return chart;
    }

/**
 * 获取对应类型的值
 * type: 0 最高值, 1 平均数, 2 中位数, 3 最低值
*/
function getTheValue(data, type = 0, num = 2) {
    let value = '-'
    if (!Array.isArray(data) || !data.length) return value
    data = data.filter(d=>d!=='-')
    if (type === 0) { // 最高值
        value = Math.max(...data)
    }
    if (type === 1) { // 平均数
        let sum = 0
        data.forEach(d=>sum+=+d)
        value = sum / data.length
    }
    if (type === 2) { // 中位数
        let len = data.length
        if (len % 2) value = data[(len - 1) / 2]
        else if (len) value = (+data[len / 2] + +data[len / 2 - 1]) / 2
    }
    if (type === 3) { // 最低值
        value = Math.min(...data)
    }
    if(!isFinite(value)) return '-';
    return value === 0 ? Number(0).toFixed(num) : isNaN((+value).toFixed(num)) ? '-' : (+value).toFixed(num)
}


module.exports = {
    formatTime: formatTime,
    initChart,
    getTheValue
}