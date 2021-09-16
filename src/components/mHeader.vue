<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="trigger" />

      <a-breadcrumb style="display:inline-block;margin-left:15px">
        <a-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{item}}</a-breadcrumb-item>
      </a-breadcrumb>

      <div class="fr" style="margin-left:15px">
        <img src="../assets/img/admin.jpg" width="30" style="border-radius:30px;">
      </div>
      <div class="name fr">
        <a-dropdown>
          <a>admin
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="https://github.com/Michael-lzg" target="_blank">github文档</a>
            </a-menu-item>
            <a-menu-item>
              <a href="https://juejin.cn/user/2330620381629070" target="_blank">掘金文章</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters(['breadcrumbList'])
  },
  methods: {
    trigger () {
      this.$emit('trigger')
    }
  }
}
</script>
