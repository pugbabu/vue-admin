<!-- 登录页面 -->
<template>
  <div class="login">
    <a-card
      style="width: 460px;"
      :body-style="{padding: '84px 64px'}"
    >
      <div class="logo-wrapper">
        <span class="title">众合科技有限公司</span>
      </div>
      <a-form
        :form="form"
        class="login-form"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'username',
              {
                rules: [
                  { required: true, message: '请输入用户名' }
                ],
                validateTrigger: 'change'
              }
            ]"
            size="large"
            placeholder="用户名"
          >
            <a-icon
              slot="prefix"
              type="user"
              :style="{ color: 'rgba(0,0,0,.25)' }"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: '请输入密码' },
                  { pattern: /^[a-zA-Z0-9]{4,16}$/g, message: '密码必须为4-16位的字母数字组合' }
                ],
                validateTrigger: 'blur'
              }
            ]"
            size="large"
            type="password"
            autocomplete="false"
            placeholder="密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              :style="{ color: 'rgba(0,0,0,.25)' }"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-col :span="10">
            <a-input
              v-decorator="[
                'verificateCode',
                {
                  rules: [
                    { required: true, message: '请输入验证码' },
                    { validator: validate }
                  ],
                  validateTrigger: 'blur',
                  validateFirst: true
                }
              ]"
              size="large"
              placeholder="验证码"
              @pressEnter="handleLogin"
            >
              <a-icon
                slot="prefix"
                type="safety"
                :style="{ color: 'rgba(0,0,0,.25)' }"
              />
            </a-input>
          </a-col>
          <a-col
            :span="12"
            :offset="2"
          >
            <validate-code
              ref="validate-code"
              @change="code => validateCode = code"
            />
          </a-col>
        </a-form-item>
        <a-form-item style="margin-top: 24px; margin-bottom: 0;">
          <a-button
            :loading="loading"
            :disabled="loading"
            size="large"
            type="primary"
            class="login-button"
            @click="handleLogin"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import ValidateCode from "@/components/validate-code";
import { timeFix } from '@/utils/time';

export default {
  components: {
    ValidateCode
  },
  data() {
    return {
      form: this.$form.createForm(this),
      validateCode: "",
      loading: false
    };
  },
  methods: {
     handleLogin () {
      this.loading = true;
      this.form.validateFields((err, { username, password }) => {
        if (err) {
          setTimeout(() => {
            this.loading = false;
          }, 600);
          return;
        }
        alert(323);
        // 调用登录接口
        this.$store.commit('setUser', '大头大头');
        this.$store.commit('setToken', '79faf82271944fe38c4f1d99be71bc9c');
        alert(3);
        this.loginSuccess();
      });
    },
    loginSuccess () {
      this.$nextTick(() => {
        alert(32);
        this.$router.push('/');
      });

      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        });
      }, 1000);
    },
    requestFailed (err) {
      this.$refs['validate-code'].draw();
      this.$notification.error({
        message: '错误',
        description: (err || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      });
    },
    validate (rule, value, callback) {
      if (value.toUpperCase() !== this.validateCode) {
        callback(new Error('验证码输入错误，请重新输入'));
      }
      callback();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5 url("../../assets/images/login_bg.png");
  background-size: cover;
  background-repeat: no-repeat;

  .logo-wrapper {
    margin-bottom: 38px;
    text-align: center;
    user-select: none;

    .logo {
      display: inline-block;
      width: 80px;
      margin-right: 16px;
    }

    .title {
      font-size: 32px;
      font-weight: bolder;
      font-family: "Ink Free";
    }
  }

  .login-form {
    margin: 0 auto;

    .login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }
  }

  .login-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 16px;
    margin: 48px 0 24px;
  }
}
</style>