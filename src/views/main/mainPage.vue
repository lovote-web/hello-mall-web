<template>
  <div>
    <h1>主页</h1>
    <router-link to="/cart"> 购物车</router-link>
    <div class="goodsList">
      <ul>
        <li v-for="(item,index) in allGoods">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div class="goodsName">{{item.name}}</div>
          <div class="goodsPrice">{{item.price}}</div>
          <el-button type="danger" @click="toCart(item.id,item.name,item.price)">加入购物车</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {getListAll} from "../../api/product";
    import {createCart} from "../../api/Cart";

    export default {
      name: "mainPage",
      data(){
        return {
          allGoods:[]
        }
      },
      created() {
        this.getProductList();
      },
      methods:{
        getProductList(){
          getListAll().then(request =>{
            this.allGoods = request.data;
            console.log(this.allGoods);
          })
        },
        toCart(id,name,price){
          const data={
            productId: id,
            memberId: 1,
            quantity: 1,
            price: price*1,
            productName: name,
            productPrice: price,
            createTime: new Date(),
            deleteStatus: 0
          }
          createCart(data).then(request =>{
            if(request.code == "200"){
              this.$message.success("添加成功");
            }else {
              this.$message.error("添加失败");
            }
          })
        }
      }
    }
</script>

<style scoped>
  .goodsList{
    width:800px;
    height:800px;
    margin:20px auto;
  }
  .goodsList ul li{
    width: 23%;
    height:auto;
    float:left;
    list-style: none;
    border:1px solid grey;
    margin-left: 1%;
    margin-top:10px;
    text-align: center;
  }
  .goodsList ul li img{
    width: 100%;
  }
</style>
