<template>
  <el-row class="msgage">
    <el-row class="border">
      <el-col :span="4">
        <span class="title">价格来源</span>
      </el-col>
      <el-col :span="16" style="text-align: center">
        <span>低价房型</span>
      </el-col>
      <el-col :span="4">
        <span>最低价格/每晚</span>
      </el-col>
    </el-row>
    <div class="hover">
      <el-row v-for="(item,index) in products" :key="index" class="border">
        <a href="https://hotels.ctrip.com/hotel/694679.html" target="_blank">
          <el-col :span="4">
            <span class="left">{{item.name}}</span>
          </el-col>
          <el-col :span="16" style="text-align: center">
            <span >{{item.bestType}}</span>
          </el-col>
          <el-col :span="4">
            <span style="font-size:16px; color:#ff9900">￥{{item.price}}<span style="font-weight: 400; color:#000;">起</span>&nbsp;<i class="el-icon-arrow-right"></i></span>
          </el-col>
        </a>
      </el-row>
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      products:[{
        name:'',
        price:'',
        bestType:'',
      }],
      tableData: [
        {
          from: "携程",
          type: "高级大床房A",
          deep: "￥110"
        },
        {
          from: "艺龙",
          type: "高级大床房A",
          deep: "￥122"
        },
        {
          from: "Hotels.com",
          type: "高级大床房A",
          deep: "￥65"
        }
      ]
    };
  },
  mounted() {
    this.$axios({
      url:'/hotels'
    })
    .then(res => {
      const { data } = res.data
      this.products = data[0].products
    })
  },
};
</script>
<style  scoped>
.msgage{
  margin: 40px 0;
}
.border {
  border-bottom: 1px solid #cccedc;
  height: 60px;
  line-height: 60px;
}
.hover :hover {
  background-color: #f5f7fa;
}
span{
  color: #909399;
   font-size: 14px;
}
.title,
.left {
  margin-left: 10px;
}
</style>
