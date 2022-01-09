/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-01-08 23:37:41
 * @LastEditTime: 2022-01-08 23:41:04
 * @LastEditors: Do not edit
 * @FilePath: \proxysite\src\utils\request.js
 * @Description: 耶斯莫拉
 */
import axios from 'axios'
import Vue from 'vue'


axios.defaults.baseURL = 'https://proxyapi.jsproxy.cyou'
axios.interceptors.request.use()
Vue.prototype.$http = axios