import axios from "axios"

/**
 * 获取热门搜索
 * @param params 参数
 * @returns Promise
 */
export const getHotTags = (params = {}) => {
    return axios.get('/keyword/hot', {
        params: params
    }).then(res => {
        if (res.code === 0) {
            return res.data
        } else {
            return null;
        }
    }).catch(err => {
        console.log(err)
        return null
    })
}