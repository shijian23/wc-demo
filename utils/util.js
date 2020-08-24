/**
 * date 时间戳
 * separate 是否需要时期和时间分开
 * needTime 是否需要时间
 */
const formatTime = (date, separate, needTime) => {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let result =
        [year, month, day].map(formatNumber).join("-") +
        " " +
        [hour, minute, second].map(formatNumber).join(":");
    if (separate) {
        return {
            date: [year, month, day].map(formatNumber).join("-"),
            time: [hour, minute].map(formatNumber).join(":"),
        };
    }
    if (needTime) {
        return [year, month, day].map(formatNumber).join("-");
    }
    return result;
};

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : "0" + n;
};

/**
 * 获取对应类型的值
 * type: 0 最高值, 1 平均数, 2 中位数, 3 最低值
 */
function getTheValue(data, type = 0, num = 2) {
    let value = "-";
    if (!Array.isArray(data) || !data.length) return value;
    data = data.filter((d) => d !== "-");
    if (type === 0) {
        // 最高值
        value = Math.max(...data);
    }
    if (type === 1) {
        // 平均数
        let sum = 0;
        data.forEach((d) => (sum += +d));
        value = sum / data.length;
    }
    if (type === 2) {
        // 中位数
        let len = data.length;
        if (len % 2) value = data[(len - 1) / 2];
        else if (len) value = (+data[len / 2] + +data[len / 2 - 1]) / 2;
    }
    if (type === 3) {
        // 最低值
        value = Math.min(...data);
    }
    if (!isFinite(value)) return "-";
    return value === 0
        ? Number(0).toFixed(num)
        : isNaN((+value).toFixed(num))
        ? "-"
        : (+value).toFixed(num);
}
const verification = {
    cardNumber: /^([0-9xX]{15}|[0-9xX]{18})$/,
    userName: /^[\u4e00-\u9fa5a-zA-Z]{1,20}$/,
    mobilePhone: /^[0-9]{11}$/,
    noEmoji: /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
};

module.exports = {
    formatTime,
    formatNumber,
    getTheValue,
    verification,
};
