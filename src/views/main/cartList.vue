<template>
  <div>
    购物车界面
    <el-table :data="tableData" style="width: 100%" show-summary>
      <el-table-column label="商品图片"  align="center">
        <template slot-scope="scope">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" width="40" height="40"/>
        </template>
      </el-table-column>
      <el-table-column   prop="productName" label="商品名称" align="center"></el-table-column>
      <el-table-column   label="商品价格" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.productPrice}}</span>
        </template>
      </el-table-column>
      <el-table-column  prop="productNum" label="购买数量" align="center">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.quantity" :min="1" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column  label="总价" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.quantity * scope.row.productPrice}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <i class="el-icon-delete" @click="delGoods(scope.row.id)"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="danger" @click="creGoods()">立即支付</el-button>
  </div>
</template>

<script>
  import {deleteCart, getAllCart} from "../../api/Cart";
  import {crOrder} from "../../api/Cart";

  export default {
      name: "cartList",
      data(){
        return {
          tableData: []
        }
      },
      created() {
        this.getCartAll();
      },
      methods:{
        getSummaries(data){
          let sum = 0;
          for (let d of data){
            sum = sum + d.quantity * d.productPrice;
          }
          return sum;
        },
        getCartAll(){
          getAllCart().then(request =>{
            this.tableData = request.data;
          })
        },
        delGoods(id){
          deleteCart(id).then(request =>{
            if(request.code==200){
              this.$message.success("删除成功");
              location.reload();
            }else {
              this.$message.error("删除失败");
            }
          })
        },
        creGoods(){
          const data = {
            confirmStatus: 0,
            createTime: new Date(),
            deleteStatus: 0,
            deliveryTime: new Date(),
            memberId: 1,
            memberUsername: "admin",
            note: "helloWorld",
            orderSn: "huya",
            orderType: 0,
            payType: 0,
            paymentTime: new Date(),
            receiverCity: "长沙",
            receiverName: "admin",
            receiverPhone: "123456789",
            status: 0,
            totalAmount: 0
          }
          crOrder(data).then(request =>{
            if(request.code == '200'){
              this.$message.success("成功");
              this.$router.push({path: '/'});
            }else {
              this.$message.error("失败");
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
