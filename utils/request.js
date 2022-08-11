const _get = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            method: 'GET',
            header: {
                "Content-Type": "application/json;charset=UTF-8",
                // Authorization: "lucheng " + userInfo || "",
            },
            success: (res) => {
                console.log(res);
                if (res.data.code == '401') {
                    //未登录，去登录页面
                    wx.clearStorage()
                    if (getCurrentPages()[0].route != 'pages/login/login') {
                        return wx.navigateTo({
                            url: '/pages/login/login',
                        })
                    }
                } else if (res.data.code !== 1) {
                    wx.showToast({
                        title: res.data.error,
                        icon: "none",
                        duration: 2000
                    })
                }
                resolve(res.data)
            },
            fail: (res) => {
                reject(res)
            }
        })
    })
}

const _post = (url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method: 'POST',
            header: {
                "content-type": "application/x-www-form-urlencoded",
                // Authorization: "lucheng " + userInfo || "",
            },
            data,
            success: (res) => {
                console.log(res);
                if (res.data.code == '401') {
                    //未登录，去登录页面
                    wx.clearStorage()
                    if (getCurrentPages()[0].route != 'pages/login/login') {
                        return wx.navigateTo({
                            url: '/pages/login/login',
                        })
                    }
                } else if (res.data.code !== 1) {
                    wx.showToast({
                        title: res.data.msg,
                        icon: "none",
                        duration: 2000
                    })
                }
                resolve(res.data)
            },
            fail: (res) => {
                console.log(res);
                reject(res)
            }
        })
    })
}

let requestHost = "http://192.168.2.36:8888"; // 测试环境
const _config = {
    requestHost,
    requestUrl: requestHost + '/system',
};

module.exports = {
    _get,
    _post,
    _config
}