<!--
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-01-08 23:28:19
 * @LastEditTime: 2022-01-09 13:41:31
 * @LastEditors: Do not edit
 * @FilePath: \proxysite\src\components\Header.vue
 * @Description: 耶斯莫拉
-->
<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="../assets/logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item href="#">
                    <router-link to="./">Home</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="./proxylist">ProxyList</router-link>
                </b-navbar-item>
                <!-- <b-navbar-item href="#">
                    UseMethod
                </b-navbar-item> -->
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="#">
                        <router-link to="./about">About</router-link>
                    </b-navbar-item>
                    <b-navbar-item href="https://jkgblog.com">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
    
            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'Header'
    }
</script>