/* 
通过mutations间接更新state的多个方法的对象
*/
import {
  RECEICE_ADDRESS,
  RECEICE_CATEGORYS,
  RECEICE_SHOPS
}from './mutation-types'
import {reqAddress, 
  reqCategorys, 
  reqShops
} from '../api'

export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if(result.code === 0) {
      const address = result.data
      commit(RECEICE_ADDRESS, {address})
    }
  },
  // 异步获取食品分类列表
  async getCategorys({commit}) {
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    if(result.code === 0) {
      const categorys = result.data
      commit(RECEICE_CATEGORYS, {categorys})
    }
  },
  // 异步获取商家列表
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if(result.code === 0) {
      const shops = result.data
      commit(RECEICE_SHOPS, {shops})
    }
  }
}