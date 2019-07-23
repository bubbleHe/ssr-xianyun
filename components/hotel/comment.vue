<template>
  <div class="comment">
    <!-- 评论分数 -->
    <div class="comment-row">
      <h4>10条真实用户评论</h4>
      <el-row class="scores-row">
        <el-col :span="4">
          <p>总评数：82</p>
          <p>好评数：14</p>
          <p>差评数：6</p>
        </el-col>
        <el-col :span="5"
                class="recomment-score">
          <div class="comment-star">
            <el-rate v-model="value"
                     disabled
                     show-score
                     text-color="#ff9900"
                     score-template="3.5">
            </el-rate>
          </div>
          <div class="stamp"
               style="font-size: x-large;color: #f90;">推荐</div>
        </el-col>
        <el-col :span="3">
          <div class="circle-rate">
            <el-progress type="circle"
                         color="orange"
                         :width="70"
                         :stroke-width=2
                         :show-text="false"
                         :percentage="73">
            </el-progress>
            <span class="text"
                  style="color: rgb(255, 153, 0);">
              <p>环境</p>
              <span>7.3</span>
            </span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="circle-rate">
            <el-progress type="circle"
                         color="orange"
                         :width="70"
                         :stroke-width=2
                         :show-text="false"
                         :percentage="75">
            </el-progress>
            <span class="text"
                  style="color: rgb(255, 153, 0);">
              <p>产品</p>
              <span>7.5</span>
            </span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="circle-rate">
            <el-progress type="circle"
                         color="orange"
                         :width=70
                         :stroke-width=2
                         :show-text="false"
                         :percentage="73">
            </el-progress>
            <span class="text"
                  style="color: rgb(255, 153, 0);">
              <p>服务</p>
              <span>7.3</span>
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 评论区 -->
    <div class="comment-list">
      <div>
        <el-row class="comment-item">
            
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 3.5
    }
  }
}
</script>

<style lang="less" scoped>
.scores-row {
  color: #666;
  padding: 20px 0;
  .recomment-score {
    position: relative;
    display: flex;
    align-content: center;
    .comment-star {
      margin-top: 20px;
      .el-rate {
        height: 20px;
        line-height: 1;
      }
    }
    .stamp {
      position: absolute;
      left: 20px;
      border: 2px solid #fa3;
      text-align: center;
      line-height: 70px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      opacity: 0.25;
      -webkit-transform: rotate(-30deg);
      transform: rotate(-30deg);
    }
  }
}
.circle-rate {
  position: relative;
  .text {
    position: absolute;
    top: 49%;
    left: 29%;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>

