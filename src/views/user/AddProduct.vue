<template>
  <div>
    <el-form ref="productForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title"></h3>
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" placeholder="请输入账号" v-model="form.name"/>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input type="text" placeholder="请输入价格" v-model="form.price"/>
      </el-form-item>
      <el-form-item label="库存" prop="stock">
        <el-input type="text" placeholder="请输入库存" v-model="form.stock"></el-input>
      </el-form-item>
      <el-form-item label="单位" prop="unit">
        <el-input type="unit" placeholder="请输入单位" v-model="form.unit"></el-input>
      </el-form-item>
      <el-form-item label="商品重量" prop="weight">
        <el-input type="weight" placeholder="请输入商品重量" v-model="form.weight"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="description">
        <el-input type="text" placeholder="请输入商品描述" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('productForm')">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {createProduct, updateProduct} from "../../api/product";

    export default {
      name: "ProductAdd",
      props: {
        isEdit: {
          type: Boolean,
          default: false
        }
      },
      data(){
          return{
            form: {
              brandId: 0,
              deleteStatus: 0,
              description: '',
              keywords: "string",
              lowStock: 0,
              name: '',
              newStatus: 0,
              picture: '',
              price: 0,
              productCategoryId: 0,
              publishStatus: 0,
              recommandStatus: 0,
              sale: 0,
              serviceIds: "string",
              stock: 0,
              unit: "",
              verifyStatus: 0,
              weight: 0
          }
        }
      },
      methods:{
        onSubmit(formName){
          this.$confirm('是否要提交该产品', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              createProduct(this.form).then(response=>{
                this.$message({
                  type: 'success',
                  message: '提交成功',
                  duration:1000
                });
                location.reload();
              });
          })
        }
      }
    }
</script>

<style scoped>

</style>
