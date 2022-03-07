<template>
  <div id="indexPage">
    <div class="margin-16">
      <a-input-search
          v-model:value="searchText"
          size="large"
          placeholder="搜索表情"
          enter-button
          @search="doSearchEmoji"
      />
    </div>
    <a-row>
      <a-col>
        <a-tabs type="card" v-model:active-key="activeTag" @tabClick="handleTabClick">
          <a-tab-pane v-for="(tag, index) in tagList" :key="index" :tab="tag.content"/>
        </a-tabs>
      </a-col>
    </a-row>
    <a-list :grid="{ gutter: 16, column: 6 }" :data-source="pictureList">
      <template slot="renderItem" slot-scope="item">
        <a-list-item>
          <a-skeleton active :loading="loading" :avatar="{shape: 'square', size: 200}">
            <img :title="item.title" :alt="item.title" :src="item.url" class="picture" />
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
    <a-pagination
        v-model:current="pageNum"
        :page-size="pageSize"
        :total="total"
        style="text-align: center"
        @change="doPageChange"
    />
    <a-back-top/>
  </div>
</template>

<script>
import {searchEmoji} from "@/service/emoji"
import {getHotTags} from "@/service/tag"

export default {
  name: "Index",
  data() {
    return {
      tagList: [],
      pictureList: [],
      activeTag: '',
      searchText: '',
      loading: true,
      tagsLoading: true,
      pageNum: 1,
      pageSize: 30,
      total: 0,
    }
  },
  methods: {
    async doGetHotTags() {
      this.tagsLoading = true
      const data = await getHotTags({
        n: 10
      })
      if (data) {
        this.tagList = data
      } else {
        this.$message.error('获取数据失败，请重试')
      }
      this.tagsLoading = false
    },
    async doSearchEmoji() {
      this.loading = true
      const data = await searchEmoji({
        keyword: this.searchText === '' ? '哈哈' : this.searchText,
        pageSize: this.pageSize,
        pageNum: this.pageNum
      })
      if (data) {
        this.pictureList = data.content
        this.total = data.totalElements
      } else {
        this.$message.error('获取表情失败，请重试')
        this.pageNum = 1
      }
      this.loading = false
    },
    handleTabClick(key) {
      if (key === this.activeTag) {
        this.activeTag = '';
      } else {
        const tag = this.tagList[key]
        this.searchText = tag.content
        this.pageNum = 1
        this.doSearchEmoji()
      }
    },
    doPageChange() {
      this.doSearchEmoji()
    }
  },
  created() {
    this.doGetHotTags()
    this.doSearchEmoji()
  }
}
</script>

<style scoped>
.picture {
  width: 188px;
  height: 200px;
}
</style>