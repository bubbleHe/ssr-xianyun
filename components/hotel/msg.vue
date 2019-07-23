<template>
  <div>
    <el-row class="msgage">
      <el-row class="msg" style="border-bottom:1px solid #eeeeee; height:50px; line-height:50px ">
        <el-col :span="4">
          <span class="title">基本信息</span>
        </el-col>
        <el-col :span="5">
          <span>入住时间: 14:00之后</span>
        </el-col>
        <el-col :span="5">
          <span>离店时间: 12:00之前</span>
        </el-col>
        <el-col :span="5">
          <span>2010年开业 / 2015年装修</span>
        </el-col>
        <el-col :span="5">
          <span>酒店规模: 148间客房</span>
        </el-col>
      </el-row>
      <el-row class="msg" style="border-bottom:1px solid #eeeeee; height:50px; line-height:50px ">
        <el-col :span="4">
          <span class="title">主要设施</span>
        </el-col>
        <el-col :span="20">
          <span>
            <el-tag type="info">外币兑换服务</el-tag>
          </span>
        </el-col>
      </el-row>
      <el-row class="msg" style="border-bottom:1px solid #eeeeee; height:50px; line-height:50px ">
        <el-col :span="4">
          <span class="title">停车服务</span>
        </el-col>
        <el-col :span="20">
          <span>-</span>
        </el-col>
      </el-row>
      <el-row class="msg" style="border-bottom:1px solid #eeeeee; height:50px; line-height:50px ">
        <el-col :span="4">
          <span class="title">品牌信息</span>
        </el-col>
        <el-col :span="20">
          <span>-</span>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.msgage {
  margin: 40px 0;
  .msg {
    .title {
      color: #000;
    }
    span {
      font-size: 14px;
      color: #666;
      font-weight: 400;
      margin-left: 10px;
    }
  }
}
</style>

