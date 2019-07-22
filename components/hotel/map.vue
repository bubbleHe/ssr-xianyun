<template>
  <div class="map">
    <el-row>
      <el-col :span="16">
        <div id="container" style="width:650px; height: 360px;"></div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="风景" name="first">
                <ul>
                    <li><span>123</span></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="交通" name="second">
                <ul>
                    <li><span>321</span></li>
                </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
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
<style lang="less" scoped>
</style>
