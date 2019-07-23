<template>
    <div class="hDHeaderPic">
        <el-row>
          <el-col
            :span="16"
            class="picLeft"
          >
            <div> <img
                :src="showImgSrc"
                alt=""
              ></div>
          </el-col>
          <el-col
            :span="8"
            class="picRight"
          >
            <!-- 右侧图片遍历生成 -->
            <el-row
              v-for="(item,index) in src"
              :key="index"
            >
              <el-col
                :span="12"
                v-for="(item2,index2) in item.children"
                :key="index2"
              >
                <a
                  href="javascript:void(0)"
                  @click="changeImg(index,index2)"
                >
                  <img
                    :src="item2.title"
                    alt=""
                  >
                </a>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
      </div>
</template>
  <script>
export default {
  data() {
    return {
      src: [
        {
          children: [
            { title: require("../../static/1.jpeg") },
            { title: require("../../static/2.jpeg") }
          ]
        },
        {
          children: [
            { title: require("../../static/3.jpeg") },
            { title: require("../../static/4.jpeg") }
          ]
        },
        {
          children: [
            { title: require("../../static/5.jpeg") },
            { title: require("../../static/6.jpeg") }
          ]
        }
      ],
      showImgSrc: require("../../static/1.jpeg")
    };
  },
  methods: {
    changeImg(index, index2) {
      this.showImgSrc = this.src[index].children[index2].title;
      console.log(this.showImgSrc);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.hDHeaderPic {
      margin-top: 40px;
      .picLeft {
        div {
          width: 640px;
          height: 360px;
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
            top: 50%;
            position: absolute;
            transform: translate(0, -50%);
          }
        }
      }
      .picRight {
        img {
          width: 160px;
        }
        .el-col {
          &:nth-child(2) {
            padding-left: 10px;
          }
          margin-bottom: 10px;
        }
      }
    }
</style>

