<template>
  <div class="menu">
    <a-menu :default-selected-keys="['home']" :default-open-keys="openKey" mode="inline" theme="dark" :inline-collapsed="collapsed">
      <a-sub-menu v-for="(item,index) in list" :key="index">
        <span slot="title">
          <a-icon :type="item.icon" />
          <span>{{item.title}}</span>
        </span>
        <a-menu-item v-for="(v) in item.children" :key="v.key" @click="toUrl(item,v)">{{v.title}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { menu } from '../data/menu.js'
export default {
  data () {
    return {
      openKey: ['base'],
      collapsed: false,
      router: true,
      openList: [],
      list: menu,
      activeRouter: ''
    }
  },
  methods: {
    toUrl (item, v) {
      const breadcrumbList = [item.title, v.title]
      this.$store.commit('updateBreadcrumbList', breadcrumbList)
      this.$router.push({
        path: '/admin/' + v.key
      })
    },
    initRouter () {
      for (const val of this.list) {
        for (const val1 of val.children) {
          if (val1.key === this.activeRouter) {
            const breadcrumbList = [val.title, val1.title]
            this.$store.commit('updateBreadcrumbList', breadcrumbList)
          }
        }
      }
    }
  },
  mounted () {
    this.activeRouter = this.$route.path.split('/')[2]
    this.initRouter()
  }
}
</script>

<style lang="less">
.menu {
  // width: 200px;
  height: 100%;
  // height: calc(100% - 32px);
  overflow-y: auto;
  padding-bottom: 32px;
  // background-color: rgb(45, 58, 75);
  position: relative;
}
.menu::-webkit-scrollbar {
  display: none;
}
.iconfont {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  display: inline-block;
}
.ant-menu-dark,
.ant-menu-inline,
.ant-menu-sub,
.ant-menu-dark .ant-menu-inline.ant-menu-sub {
  // background-color: rgb(45, 58, 75) !important;
  box-shadow: none !important;
}
</style>
