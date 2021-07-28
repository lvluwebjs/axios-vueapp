<template>
  <div>
    <div>
     {{user}}---
    </div>
    <Quit />
  </div>
</template>

<script>
import Quit from "../../components/Quit/quit.vue";
export default {
  data() {
    return {};
  },
  mounted(){
   this.$store.dispatch('Get_DATA')
  },
  computed:{
   user:function(){
    return sessionStorage.getItem('username')
   }
  },
  components: {
    Quit,
  },
  methods: {},
};
</script>

<style scoped></style>

