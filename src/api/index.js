/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
export const BASE_URL = '/api'

export const ERR_OK = 0

// 1、根据经纬度获取位置详情
export const getAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`) // return ajax xxx
