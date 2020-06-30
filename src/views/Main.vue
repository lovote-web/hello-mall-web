<template>
<!--<el-container style="height: 500px; border: 1px solid #eee">-->
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>商品</template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/user/productList" style=" text-decoration: none;">商品列表</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/user/addProduct" style=" text-decoration: none;">添加商品</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/user/productCategory" style=" text-decoration: none;">商品分类</router-link></el-menu-item>
              <el-menu-item index="1-4"><router-link to="/user/productBrand" style=" text-decoration: none;">商厂类型</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>订单</template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><router-link to="/order/listAll">订单管理</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>用户</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">用户管理</el-menu-item>
              <el-menu-item index="3-2">用户设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-user-solid" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item><router-link to="/login">退出</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Knight</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .container{
    margin-top: 0px;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
