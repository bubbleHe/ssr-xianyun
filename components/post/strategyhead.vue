<template>
  <div class="contianer">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="strategy-tab">
      <el-breadcrumb-item :to="{ path: '/post' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      <div class="titile"></div>
    </el-breadcrumb>
    <div class="gonglue">
      <!-- 右侧攻略小标题 -->
      <div class="gonglue_xiao">
        <span>
          攻略：2019-07-21
          <i>阅读：888</i>
          <!-- 攻略内容 -->
        </span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  

  data () {
    return {
      text:'',
      photodialogVisible:false,
      disabled:false
    }
  }
};
</script>

<style lang="less" scoped>
.contianer{
  width: 700px;
  // margin:0 auto;
  .strategy-tab {
  width: 700px;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
.gonglue_xiao {
  width: 700px;
    text-align: right;
    span {
      color: #999;
      font-size: 13px;
    }
  }
}


.comment {
  // /deep/.el-input__inner {
  //   height: 100px;
  // }
  // /deep/.input{
  //   height: 200px;
  // }
}
</style>

