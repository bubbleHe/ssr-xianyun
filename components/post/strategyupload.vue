<template>
  <div class="Strategyupload">
    <!-- 上传 -->
    <!-- <el-upload
      action="http://localhost:3000/"
      name='files'
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-success="handlesuccess"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>-->

    <!-- <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>-->

    <!-- <el-upload
  class="avatar-uploader"
  action="http://127.0.0.1:1337"
  name="files"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    <el-button type="success" @click="sumbit">提交</el-button>-->

    <el-upload
      action="http://127.0.0.1:1337/upload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      name="files"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
    <el-button type="success" @click="sumbit">提交</el-button>

    <!-- 上传 -->
  </div>
</template>

<script>
import { add } from "@/components/post/upload.js";
export default {
  data() {
    return {
      photodialogVisible: false,
      disabled: false,
      files: "",
      dialogImageUrl: "",
      dialogVisible: false,
      content: "",
      pics: [],
      imageUrl: ""
    };
  },

  methods: {
    //提交图片
    sumbit() {
      this.$axios({
        url: "/comments",
        method: "POST",
        data:{
          content:this.content,
          pics:this.pics
        },
        // data: [this.content, this.pics],
        headers: {
          // token规范来自于JWT
          Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res => {
        console.log(res);
      });
    },
    handleRemove() {},
    handlePictureCardPreview() {},
    //  上传文件
    //成功上传
    // handlesuccess(response, file, fileList) {},
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // }

    //2
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
  
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
