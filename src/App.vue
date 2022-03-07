<template>
  <div id="app">
    <a-layout class="layout" style="min-height:100vh">
      <a-layout-header class="header">
        <a-row type="flex">
          <a-col flex="180px" class="margin">
            <router-link to="/">
              <div class="logo">
                <img :src="require('./assets/logo.jpg')" alt="老铁 - 表情包专业户"/>
                <span class="title">老铁</span>
              </div>
            </router-link>
          </a-col>
          <a-col flex="auto">
            <a-menu
                theme="dark"
                mode="horizontal"
                :selectedKeys="['/home']"
                :style="{ lineHeight: '64px' }"
            >
              <a-menu-item key="/home">
                <router-link to="/">首页</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="padding: 16px 50px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Emoji Buddy ©2022 Created by lyh
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less">
.logo {
  display: flex;
  align-items: center;
  height: 64px;
}

.logo > img {
  margin-right: 16px;
  height: 80%;
}

.title {
  font-size: 18px;
  color: #fff;
  margin-right: 16px;
  letter-spacing: 4px;
}
</style>
