
<template>
  <div class="share">
    <div class="main">
      <h2>发表新攻略</h2>
      <div class="inst">分享你的个人游记，让更多人看到哦！</div>
      <!-- 标题输入框 -->
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <!-- 富文本框 -->
      <div id="app">
        <VueEditor :config="config" ref="vueEditor" />
      </div>

      <!-- 选择城市下拉列表框 -->
      <div class="select">
        选择城市
        <el-autocomplete
          v-model="cityName"
          :fetch-suggestions="querySearchAsync"
          placeholder="请搜索游玩城市"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <el-button type="primary" @click="getContent">发布</el-button>或者
      <el-button type="primary" @click="saveDraft">保存草稿</el-button>
    </div>
    <div class="aside">
      <Draft @getEdit="getEdit" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Draft from "@/components/post/draft.vue";
// import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
let VueEditor;
if (process.browser) {
  VueEditor = require("vue-word-editor").default;
}
export default {
  components: {
    VueEditor,
    Draft
  },
  name: "app",
  data() {
    return {
      title: "",
      cityId: "",
      cityName: "",
      date: "",
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            console.log(file, 11);
            if (file) {
              if (file.type.indexOf("image/") === -1) {
                console.log(file, 123123);

                // this.$message({
                //   type: "warning",
                //   message: "请选择图片格式的文件"
                // });
                return false;
              }
              return true;
            }

            return false;
          },
          uploadProgress(res) {
            console.log(res, 22);
          },
          uploadSuccess(res, insert) {
            console.log(res, 33);
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError(err) {
            console.log(err, 44);
          },
          showProgress: true
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            console.log(file)
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      }
    };
  },
  methods: {
    getEdit(info) {
      console.log(info);
      this.title = info.title;
      this.$refs.vueEditor.editor.root.innerHTML = info.content;
      this.cityId = info.cityId;
      this.cityName = info.cityName;
    },
    //保存到草稿
    saveDraft() {
      if (!this.title.trim()) {
        this.$message({
          type: "warning",
          message: "请填写标题"
        });
        return;
      }
      //获取当前日期
      // const myDate = new Date();
      // console.log(moment(new Date()).format("YYYY-MM-DD"))
      this.date = moment(new Date()).format("YYYY-MM-DD");
      const data = {
        title: this.title,
        content: this.$refs.vueEditor.editor.root.innerHTML,
        cityName: this.cityName,
        cityId: this.cityId,
        date: this.date
      };
      // console.log(data)
      this.$store.commit("post/setDraftDox", data);
      // console.log(this.$store.state.post.draftDox, 'yyyssss')
    },
    //发布游记
    getContent() {
      console.log(this.title);
      console.log(this.$refs.vueEditor.editor.root.innerHTML);
      console.log(this.cityId);
      console.log(this.cityName);

      //   this.$axios({
      //     url: "/posts",
      //     method: "POST",
      //     headers: {
      //       // token规范来自于JWT
      //       Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
      //     },
      //     data: {
      //       content: this.$refs.vueEditor.editor.root.innerHTML,
      //       title: this.title,
      //       city: this.cityId
      //     }
      //   }).then(res=>{
      //       console.log(res)
      //       this.$message.success(res.data.message);
      //   })
    },
    // 目标城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    querySearchAsync(value, cb) {
      if (!value) {
        cb([]);
        return;
      }
      value = value.trim();
      this.$axios({
        url: "/cities",
        params: { name: value }
      }).then(res => {
        const { data } = res.data;
        // console.log(data);
        const cityList = data.map(v => {
          v.value = v.name;
          return v;
        });
        this.cityId = cityList[0].id;
        this.cityName = cityList[0].name;
        cb(cityList);
      });
    },
    // 城市选择下拉框时触发，获取选中城市的id
    handleSelect(item) {
      //   console.log(item);
      this.cityId = item.id;
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.share {
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .main {
    width: 750px;
    h2 {
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 10px;
    }
    .inst {
      font-size: 12px;
      margin-bottom: 10px;
      color: #999;
    }
    #app {
      margin-top: 22px;
      /deep/ #editor {
        height: 400px;
      }
    }
    .select {
      margin: 22px 0;
    }
  }
  .aside {
    width: 200px;
  }
}
</style>
