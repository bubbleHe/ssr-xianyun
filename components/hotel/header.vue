<template>
    <div>
        <el-row class="title">
      <el-row>
        <h4>
          {{name}}
          <span title="[object object]星级">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
        </h4>
      </el-row>
      <el-row class="pinying">{{alias}}</el-row>
      <el-row class="dizhi">
        <i class="iconfont iconlocation"></i>{{address}}
      </el-row>
    </el-row>
    </div>
</template>
<script>
export default {
    data(){
      return{
        name:"",
        alias:"",
        address:"",
      }
    },
    mounted(){
      this.$axios({
        url:'/hotels'
      })
      .then( res =>{
        console.log(res.data.data[0]);
        const {data} = res.data
        this.name = data[0].name
        this.alias = data[0].alias
        this.address = data[0].address
      })
    }
}
</script>
<style lang="less" scoped>
.title {
    h4 {
      font-weight: 400;
      font-size: x-large;
      .iconhuangguan {
        color: #f90;
        margin-right: -6px;
      }
      .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
      }
    }
    .pinying {
      font-size: 14px;
      color: #66667d;
    }
    .dizhi {
      font-size: 14px;
      color: #66667d;
    }
  }
</style>
