<template>
  <div class="mainpage clearfix">
    <div class="inner">
      <div class="top-info-block">
        <div class="left-top-block">
          <div class="img">
            <img src="../../assets/img/admin.jpg" alt="" width="120">
          </div>
          <div class="info">
            <div class="name c8">早安，admin！</div>
            <div class="job">天道酬勤，自强不息</div>
            <div class="tag">
              <a-tag color="blue"> 很有想法的 </a-tag>
              <a-tag color="blue"> 专注前端 </a-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="right-block fl">
        <div class="right-top-block">
          <div class="title">常用网站</div>
          <div class="right-top-block-item" v-for="(item,index) in netList" :key="index" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            <div class="name"><img :src="item.icon" alt="" width="30">{{item.name}}</div>
            <div class="desc">哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
          </div>
        </div>
      </div>
      <div class="left-block fl">
        <div class="left-mid-block">
          <div class="title">技术技能</div>
          javaScript
          <a-progress :percent="90" />
          vue
          <a-progress :percent="85" strokeColor="#42b983" />
          webpack
          <a-progress :percent="85" strokeColor="#75AFCC" />
          微信小程序
          <a-progress :percent="75" strokeColor="#FAAD14" />
          react
          <a-progress :percent="70" strokeColor="#F5223C" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      netList: [
        { name: '掘金', icon: require('../../assets/icon/juejin.png') },
        { name: '知乎', icon: require('../../assets/icon/zhihu.png') },
        { name: 'github', icon: require('../../assets/icon/github.png') },
        { name: 'segmentfault', icon: require('../../assets/icon/segmentfault.png') },
        { name: 'CSDN', icon: require('../../assets/icon/CSDN.png') },
        { name: 'webpack', icon: require('../../assets/icon/webpack.png') }
      ]
    }
  },
  methods: {
    changeActive ($event) {
      if ($event.target.className === 'right-top-block-item') {
        $event.target.classList.add('active')
      }
    },
    removeActive ($event) {
      if ($event.target.className === 'right-top-block-item active') {
        $event.target.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="less">
.mainpage {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f6f6f6;
  padding: 0 !important;
}
.inner {
  height: 100%;
  width: 100%;
}
.top-info-block {
  margin-bottom: 10px;
}
.left-block {
  width: 30%;
  padding-left: 15px;
}
.left-top-block {
  background-color: white;
  padding: 20px;
  position: relative;
  padding-left: 140px;
  .img {
    position: absolute;
    left: 20px;
    img {
      border-radius: 120px;
    }
  }
  .info {
    font-size: 18px;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 15px;
    .name {
      font-size: 16px;
    }
    .job {
      font-size: 16px;
    }
  }
}
.left-mid-block {
  background-color: #fff;
  padding: 15px;
}
.left-bot-block {
  margin: 15px 0;
  background-color: #fff;
  padding: 15px;
  .title {
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 5px;
  }
  .item {
    width: 50%;
    padding-bottom: 12px;
    > img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.right-block {
  width: 70%;
  .right-top-block {
    background-color: #fff;
    padding: 15px;
    padding-bottom: 38px;
    .right-top-block-item {
      width: 31%;
      display: inline-block;
      height: 90px;
      // background-color: #eee;
      margin-right: 2%;
      margin-top: 2%;
      padding: 10px;
      cursor: pointer;
      border: 1px solid #e4ecf3;
      border-radius: 4px;
      .name {
        font-weight: 700;
        color: #30333c;
        margin-bottom: 10px;
        > img {
          margin-right: 8px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
