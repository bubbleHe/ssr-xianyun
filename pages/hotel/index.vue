<template>
  <div class="hotel">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item>酒店</el-breadcrumb-item>
      <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 选择框 -->
    <div class="block">
      <el-input v-model="hotel" placeholder="目的地" class="input"></el-input>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="-"
        start-placeholder="入住日期"
        end-placeholder="离店日期"
      ></el-date-picker>
      <!-- 弹框 -->
      <el-popover placement="bottom-start" width="300" v-model="visible" :visible-arrow="false">
        <div style="text-align: right; margin: 0; border-bottom:1px solid #ccc; height:50px">
          <span style="float:left">每间</span>
          <el-select v-model="people" placeholder="请选择" size="mini" style="width:90px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="children" placeholder="请选择" size="mini" style="width:90px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div style="text-align: right; margin: 0; height:50px; line-height:50px">
          <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
        </div>
        <el-input
          style="width:217px"
          v-model="human"
          slot="reference"
          placeholder="人数未定"
          suffix-icon="el-icon-user"
        ></el-input>
      </el-popover>
      <el-button class="button" type="primary">查看价格</el-button>
    </div>
    <el-row>
      <el-col :span="6">
        <div class="slider">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="slider">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="slider">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="slider">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="slider">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      hotel: "",
      value1: "",
      human:"",
      people: "2 成人",
      children: "0 儿童",
      slider: "",
      options: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "7",
          label: "7"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.hotel {
  width: 1000px;
  margin: 0 auto;
  .breadcrumb {
    overflow: hidden;
    padding: 20px 0;
  }
  .block {
    margin-bottom: 50px;
    .input {
      width: 202px;
      height: 40px;
      margin-right: 10px;
    }
    .my-autocomplete {
      width: 217px;
      height: 40px;
    }
    .button {
      margin-left: 5px;
    }
  }
  .slider {
    border: 1px solid #ccc;
    height: 90px;
    .bottom {
      margin-top: 50px;
    }
  }
}
</style>

