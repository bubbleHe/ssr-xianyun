<template>
<el-row class="main" type="flex" justify="space-between">
   <div class="contianer">
    <!-- 攻略头部 -->
    <Strategyhead />
    <!-- 攻略内容 -->
    <Strategycontent/>
    <!-- 攻略上传文件 -->
    <Strategyupload/>
    <!-- 攻略评论 -->
    <Strategycomment/>
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  <div class="aside">
    <!-- 攻略旁推荐文章 -->
    <Strategyaside/>
  </div>
</el-row>
 
  
</template>

<script>
import Strategyhead from "@/components/post/strategyhead";
import Strategycontent from "@/components/post/strategycontent";
import Strategyupload from "@/components/post/strategyupload"
import Strategycomment from "@/components/post/strategycomment.vue"
import Strategyaside from '@/components/post/strategyaside.vue'
export default {
 
  data () {
    return {
      pageIndex:1,
      pageSize:5,
      total:0
    }
  },
  components: {
    Strategyhead,
    Strategycontent,
    Strategyupload,
    Strategycomment,
    Strategyaside
  },
  methods:{
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
}
.contianer{
  width: 700px;
}
.aside{
  width: 280px;
}
</style>

