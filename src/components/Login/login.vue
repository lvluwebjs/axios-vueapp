<template>
  <div class="bg">
    <div class="login">
      <input type="text" v-model="obj.username" placeholder="用户名" />
      <input type="text" v-model="obj.password" placeholder="密码" />
      <button @click="userLogin()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      if (this.obj.username === "" || this.obj.password === "") {
        alert("用户名或者密码不能为空");
      } else {
        this.$store.dispatch("AJAX_LOGIN", this.obj);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.bg {
  height: 100%;
  width: 100%;
  position: fixed;
  background: url("../../assets/img/login.png");
  background-size: 100% 100%;
  div.login {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    padding: 80px 80px;
    box-sizing: border-box;
    input {
      width: 180px;
      height: 35px;
      outline: none;
    }
  }
}
</style>
