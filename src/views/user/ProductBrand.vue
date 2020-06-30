<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>数据列表</span>
    </el-card>
    <div class="table-container">
      <el-table ref="orderTable"
                :data="list"
                style="width: 100%;"
                @selection-change="handleSelectionChange"
                v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="80" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="品牌名称" width="180" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="品牌数量" width="180" align="center">
          <template slot-scope="scope">{{scope.row.productCount}}</template>
        </el-table-column>
        <el-table-column label="品牌描述" align="center">
          <template slot-scope="scope">{{scope.row.brandStory}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
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
  import {deleteBrand, getBrandListAll} from "../../api/Brand";

    export default {
      name: "ProductBrand",
      data() {
        return {
          list: null,
          listLoading: true
        }
      },
      created() {
        this.getListAll();
      },
      methods:{
        getListAll(){
          this.listLoading = false;
          getBrandListAll().then(response => {
            this.list = response.data;
            console.log(this.list);
          });
        },
        handleUpdate(index,row){

        },
        handleDelete(index,row){
          this.$confirm('是否要删除该品牌', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteBrand(row.id).then(response => {
              this.$message({
                message: '删除成功',
                type: 'success',
                duration: 1000
              });
              this.getBrandListAll();
            });
          });
        }
      }
    }
</script>

<style scoped>

</style>
