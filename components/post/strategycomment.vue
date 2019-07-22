<template>
    <div class="strategycomment_content">
        <el-row
        v-for="(item,index) in commentlist"
        :key="index"
        >
        <div class="comment_content">
            <span>{{item.content}}</span>
        </div>
            
        </el-row>
    </div>
</template>

<script>
export default {
data () {
    return {
    post:4,
    _sort:"",
    _limit:6,
    _start:5 ,
    commentlist:[],
    content:''    
    }
},
mounted(){
    this.$axios({
        url:'/posts/comments',
        params:{
            post:this.post,
            _sort:this._sort,
            _limit:this._limit,
            _start:this._start
        }
    }).then(res=>{
        // console.log(res)
        this.commentlist=res.data.data
        // console.log(this.commentlist)
    })
}
}
</script>

<style lang="less" scoped>
.comment_content{
    width: 700px;
    padding: 50px;
    border: 1px solid olivedrab;
}
</style>

