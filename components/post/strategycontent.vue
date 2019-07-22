<template>
  <div class="strategy_content">
    <!-- 文章内容 -->
    <div class="article" v-html="datalist" style="max-width:700px;">
        <!-- <h1>{{article_title}}</h1>
        <p>{{article_summary}}</p> -->
        
    </div>
    <!-- <el-row v-html="datalist" class="article_content" ></el-row> -->
    <!-- 4个图标 -->

    <el-row class="icon-box" justify="center">
      <el-col :span="6" class="icon">
        <i class="el-icon-edit"></i>
        <p>评论</p>
      </el-col>
      <el-col :span="6" class="icon">
        <i class="el-icon-star-off"></i>
        <p>收藏</p>
      </el-col>
      <el-col :span="6" class="icon">
        <i class="el-icon-share"></i>
        <p>分享</p>
      </el-col>
      <el-col :span="6" class="icon">
        <i class="el-icon-magic-stick"></i>
        <p>点赞</p>
      </el-col>
    </el-row>
    <!-- 评论 -->

    <div class="comment">
      <h2>评论</h2>
      <!-- <el-input placeholder="说点什么好呢?" class="el-input__inner" v-model="text" 
      style="resize: none; min-height: 33px;" clearable></el-input>-->
      <textarea
        autocomplete="off"
        placeholder="说点什么吧..."
        class="el-textarea__inner"
        style="resize: none; min-height: 33px; margin-bottom:10px;"
      ></textarea>
    </div>
    
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      
      id: 6,
      article_summary:'',
      article_title:'',
      datalist:''

    };
  },
  mounted() {
      //文章详情
    this.$axios({
      url: "/posts",
      params: {
        id:this.id
      }
    }).then(res => {
      // console.log(res.data);
    //   this.article_summary=res.data.data[0].summary;
    //   this.article_title=res.data.data[0].title;
    this.datalist=res.data.data[0].content;
    //   console.log(this.article_summary)
    });
  },
};
</script>

<style lang="less" scoped>
.article{
    width: 700px;
    img{
        width: 100%;
    }
}
.strategy_content {
  max-width: 700px;
  // margin: 0 auto;
}
// .article{
//     width: 700px;
//     img{
//         width: 100%;
//     }
// }
.article_content{
    width: 700px;
    margin: 0 auto;
    .post-content{
        max-width: 700px!important;
    }
    // p{
    //     display: block;
    //     max-width: 700px!important; 
    // }
    img{
        width: 100%;
    }
}
.gonglue {
  width: 700px;
}
.icon-box {
  padding: 10px 200px;
}
.icon {
  text-align: center;
  i {
    display: block;
    font-size: 28px;
    color: orange;
  }
}
</style>
<style lang="less">
.article{
    width: 700px;
    img{
        width: 100%;
    }
}
</style>


