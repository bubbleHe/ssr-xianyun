<template>
  <div class="detail">
    <!-- 面包屑 -->
    <el-row class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <!-- 头部 -->
    <Header/>
    <!-- 图片 -->
    <Photo/>
    <!-- 链接 -->
    <List/>
    <!-- 地图 --> 
    <Map/>
    <!-- 基本信息 -->
    <Msg/>
    <!-- 评论 -->
    <Comments/>
  </div>
</template>
<script>
import Map from "@/components/hotel/Map";
import Comments from "@/components/hotel/comment";
import Photo from "@/components/hotel/photo"
import Header from "@/components/hotel/header"
import List from "@/components/hotel/list"
import Msg from "@/components/hotel/msg"
export default {
  data(){
    return{
      name:"",
    }
  },
  components: {
    Map,
    Comments,
    Photo,
    Header,
    List,
    Msg
  },
  mounted(){
    this.$axios({
      url:'/hotels?id=1'
    })
    .then( res=>{
      
      const {data} = res.data
      this.name = data[0].name
      console.log(this.name)
    })
  }
};
</script>
<style lang="less" scoped>
.detail {
  width: 1000px;
  margin: 0 auto;
  //   border: 1px solid #000;
  .crumbs {
    margin: 20px 0;
  }
}
</style>
