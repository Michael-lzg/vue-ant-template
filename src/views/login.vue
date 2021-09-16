<template>
  <div class="loginPage">
    <div class="box">
      <div class="top">后台管理系统</div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input size="large" type="text" placeholder="请输入用户名" v-decorator="['name', { rules: [{ required: true, message: '用户名不能为空!' }] }]">
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-input size="large" type="password" placeholder="请输入密码" v-decorator="['password', { rules: [{ required: true, message: '密码不能为空!' }] }]">
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" size="large" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      tsName: '',
      tsPassword: '',
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
        this.$router.push({
          path: '/admin'
        })
        sessionStorage.setItem('isLogin', true)
      })
    }
  }
}
</script>

<style scoped lang="less">
.loginPage {
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background: #f5f5f5 url('../assets/img/background.a568162c.svg') no-repeat 50%;
}
.box {
  width: 450px;
  margin: 0 auto;
  .top {
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
  }
}
.ant-btn {
  width: 450px !important;
}
</style>
