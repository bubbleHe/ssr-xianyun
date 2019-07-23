<template>
  <div class="draft">
    <div>草稿箱({{$store.state.post.draftDox.length}})</div>
    <div class="draftList" v-for="(item,index) in draftDoxList" :key="index">
      <div class="title">
        <a href="javascricpp:viod(0)" @click="edit(index)">
            <span>{{item.title}}</span>
          
          <i class="el-icon-edit"></i>
        </a>
        <i class="el-icon-delete" @click="deleteDraft(index)"></i>
      </div>
      <div class="date">{{item.date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      draftDoxList: []
    };
  },
  methods:{
      //编辑点击的草稿
      edit(index){
        //   console.log(index)
            const info = this.draftDoxList[index];
            // console.log(info)
            this.$emit('getEdit',info)
      },
      //删除草稿
      deleteDraft(index){
        //   console.log(index)
        this.$store.commit('post/deleteDraft',index)
      }
  },
  mounted() {
    setTimeout(() => {
    //   console.log(this.$store.state.post.draftDox, "ooo");
      this.draftDoxList = this.$store.state.post.draftDox;
    }, 100);
  }
};
</script>


<style lang="less" scoped>
.draft {
  border: 1px solid #ccc;
  padding: 10px;
  a:hover {
    color: orange;
  }
  .title {
    display: flex;
    justify-content: space-between;
    .el-icon-delete:hover {
      color: orange;
      cursor: pointer;
    }
  }
  .date{
      color: #ccc;
      font-size: 14px;
  }
}
</style>
