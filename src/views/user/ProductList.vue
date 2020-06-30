<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <div class="table-container">
      <el-table ref="brandTable"
                :data="list"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                v-loading="listLoading"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="品牌名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="销量" width="100" align="center">
          <template slot-scope="scope">{{scope.row.sale}}</template>
        </el-table-column>
        <el-table-column label="价格" width="100" align="center">
          <template slot-scope="scope">{{scope.row.price}}</template>
        </el-table-column>
        <el-table-column label="库存" width="100" align="center">
          <template slot-scope="scope">{{scope.row.stock}}</template>
        </el-table-column>
        <el-table-column label="单位" width="100" align="center">
          <template slot-scope="scope">{{scope.row.unit}}</template>
        </el-table-column>
        <el-table-column label="商品重量" width="100" align="center">
          <template slot-scope="scope">{{scope.row.weight}}</template>
        </el-table-column>
        <el-table-column label="删除状态" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleFactoryStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.delete_status">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleShowStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.showStatus">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {
    deleteProduct,
    getListAll
  } from "../../api/product";

  export default {
    name: "ProductList",
    data(){
      return {
        listLoading: false,
        list: null,
        total: null
      }
    },
    created() {
      this.getListAll();
    },
    methods: {
      getListAll(){
        getListAll().then(response =>{
          this.list = response.data;
          console.log(response.data)
        })
      },
      handleUpdate(index, row) {

      },
      handleDelete(index, row) {
        this.$confirm('是否要删除该品牌', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteProduct(row.id).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 1000
            });
            this.getListAll();
          });
        });
        console.log(index, row);
      },
      handleFactoryStatusChange(index,row){
        console.log(index,row);
      },
      handleShowStatusChange(index, row){
        console.log(index,row);
      },
      handleSelectionChange(val) {
        console.log(val);
      }
    }
  }

</script>

<style scoped>
</style>
