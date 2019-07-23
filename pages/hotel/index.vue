<template>
<<<<<<< HEAD
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
=======
  <div style="padding: 50px">
    <div id="container" style="width:500px; height: 500px;"></div>
    <el-autocomplete
      popper-class="my-autocomplete"
      placeholder="请输入内容"
      style="height:200px"
    ></el-autocomplete>
>>>>>>> 099b232d4a81f28a6f931c719e48380dcbbf7dc2
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
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
=======
  mounted() {
    window.onLoad = function() {
      // 等待页面加载完成之后才执行
      // container是页面的div容器
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [118.8718107, 31.32846821], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker1 = new AMap.Marker({
        content: `<div style="width:20px; height:20px; background: red; text-align: center; line-height:20px">1</div>`,
        position: new AMap.LngLat(118.8618107, 31.33846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      var marker2 = new AMap.Marker({
        position: new AMap.LngLat(118.8718117, 31.32846811), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add([marker1, marker2]);
    };

    var key = "2c047e1737fe327f243ea9bd2d627c3c";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;

    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style>
>>>>>>> 099b232d4a81f28a6f931c719e48380dcbbf7dc2
</style>

