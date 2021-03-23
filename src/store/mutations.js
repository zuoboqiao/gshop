/* 
直接更新state的多个方法的对象
*/
import {
  RECEICE_ADDRESS,
  RECEICE_CATEGORYS,
  RECEICE_SHOPS
}from './mutation-types'

export default {
  [RECEICE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEICE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEICE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}