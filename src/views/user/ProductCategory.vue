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
        <el-table-column label="类型名称"  align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="类型数量"  align="center">
          <template slot-scope="scope">{{scope.row.productCount}}</template>
        </el-table-column>
        <el-table-column label="关键字" align="center">
          <template slot-scope="scope">{{scope.row.keywords}}</template>
        </el-table-column>
        <el-table-column label="类型描述" align="center">
          <template slot-scope="scope">{{scope.row.description}}</template>
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
  import {deleteCategory, getCategoryListAll} from "../../api/Category";

    export default {
      name: "ProductCategory",
      data() {
        return{
          list: '',
          listLoading: true
        }
      },
      created() {
        this.getCategoryAll();
      },
      methods:{
        getCategoryAll(){
          this.listLoading=false;
          getCategoryListAll().then(request =>{
            this.listLoading = false;
            this.list = request.data;
          })
        },
        handleUpdate(index, row){

        },

        handleDelete(index,row){
          this.$confirm('是否要删除该品牌', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteCategory(row.id).then(response => {
              this.$message({
                message: '删除成功',
                type: 'success',
                duration: 1000
              });
              this.getCategoryListAll();
            });
          });
        }
      }
    }
</script>

<style scoped>

</style>
