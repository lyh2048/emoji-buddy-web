import axios from "axios"

/**
 *  搜索表情包
 * @param params
 * @returns Promise
 */
export const searchEmoji = (params = {}) => {
    return axios.get('/emoji/search', {
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