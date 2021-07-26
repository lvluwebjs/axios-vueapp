<template>
  <div>
    <button @click="Quit">退出登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
      Quit(){
          sessionStorage.removeItem('tokens');
          this.$router.replace('./login')
      }
  },
};
</script>

<style scoped></style>
