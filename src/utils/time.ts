//获取结果 上午|下午|晚上
export const getTime = () => {
    let message = '';
    //内置构造函数Date
    let hours = new Date().getHours()
    if (hours <= 9) {
        message = '早上'
    } else if (hours <= 12) {
        message = '下午'
    } else {
        message = '晚上'
    }
    return message

}
