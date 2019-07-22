<template>
  <div class="strategyaside_content">
    <h2>相关攻略</h2>
    <el-row
      class="aside_content"
      type="flex"
      justify="space-between"
      v-for="(item,index) in wenzhangdata"
      :key="index"
    >
      <el-col>
        <div class="img">
          <img :src="`${item.images}`" alt />
        </div>
      </el-col>
      <el-col>
        <p>{{item.title}}</p>
        <span>{{item.cityName}} 阅读:{{item.watch}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 6,
      wenzhangdata: {}
    };
  },
  mounted() {
    //推荐文章
    this.$axios({
      url: "/posts/recommend",
      params: {
        id: this.id
      }
    }).then(res => {
      // console.log(res)
      this.wenzhangdata = res.data.data;
      // console.log(this.wenzhangdata)
    });
  }
};
</script>

<style lang="less" scoped>
h2 {
  color: orangered;
  padding: 21px 0;
  border-bottom: 1px solid #ccc;
}
.aside_content {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  .img {
    width: 100px;
    height: 100px;
    img{
        width: 100%;
    }
  }
  p {
    margin-bottom: 50px;
  }
}
</style>

