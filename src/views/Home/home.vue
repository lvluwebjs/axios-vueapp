<template>
  <div>
    <div>
      {{ user }}
    </div>
    <Quit />
    <!-- 分段器 -->
    <div class="tab_nav">
      <!-- 选项卡 -->
      <div class="tab_title">
        <div class="tab_item">
          <div
            v-for="(item, index) in titleList"
            :key="index"
            @click="changeList(index)"
            :class="index === current ? 'active' : ''"
          >
            {{ item }}
          </div>
        </div>
        <!-- 显示对应内容 -->
        <div class="tab_context">
          <Mt v-if="0 === current" />
          <Vd v-if="1 === current" />
          <Xw v-if="2 === current" />
          <Zy v-if="3 === current" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quit from "../../components/Quit/quit.vue";
import Mt from "./Mt/mt.vue";
import Vd from "./Vd/vd.vue";
import Xw from "./Xw/xw.vue";
import Zy from "./Zy/zy.vue";
//引用static下面的js文件
import indexList from "../../../static/list.js";

export default {
  data() {
    return {
      titleList: ["美图", "视频", "新闻", "主页"],
      current: 0,
      indexList: indexList.list,
    };
  },
  methods: {
    async changeList(index) {
      this.current = index;
      // console.log(this.indexList);
      // indexList.add();
      //全局引用
      this.$http.conData();
      const res = await this.$http.GetData();
      console.log(res);
    },
  },
  mounted() {
    this.$store.dispatch("Get_DATA");
    // console.log(this.$route);
  },
  computed: {
    user: function () {
      return sessionStorage.getItem("username");
    },
  },
  components: {
    Quit,
    Mt,
    Vd,
    Xw,
    Zy,
  },
};
</script>

<style lang="scss" scoped>
div.tab_nav {
  div.tab_title {
    div.tab_context {
      margin-top: 10px;
      transition: 0.2s;
    }
    .tab_item {
      display: flex;

      div {
        list-style: none;
        margin-left: 10px;
      }
    }
  }
}
.active {
  border-bottom: 2px solid red;
}
</style>
