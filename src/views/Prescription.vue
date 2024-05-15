<template>
  <div class="card-wrapper">
    <div class="card" v-for="(item, index) in prescriptionData" :key="index">
      <img class="card-img" :src="item.url" :alt="item.name">
      <div class="card-info">
        <p>
          <span class="card-info-title">方剂名称: </span>
          <span class="card-info-text">{{ item.name }}</span>
        </p>
        <p class="card-info-benefits-limit">
          <span class="card-info-title">方剂功用: </span>
          <span class="card-info-text">{{ item.benefits }}</span>
        </p>
        <p class="card-info-treat-limit">
          <span class="card-info-title">方剂主治: </span>
          <span class="card-info-text">{{ item.treat }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllPrescription} from "@/api/prescription";

export default {
  name: "prescription",
  data() {
    return {
      prescriptionData: [], // 所有的方剂数据
    }
  },
  mounted() {
    // 初始化所有的方剂数据
    getAllPrescription().then((res) => {
      console.log(res.data)
      this.prescriptionData = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.card-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 400px;
  border: 2px solid #bebebe;
  border-radius: 4%;
  margin-top: 10px;
  margin-left: 10px;

  .card-img {
    width: 300px;
    height: 200px;
    border-top-left-radius: 6%;
    border-top-right-radius: 6%
  }

  .card-info {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* 方剂名称加粗效果 */
    .card-info-title {
      font-weight: bold;
    }
    /* 方剂文本设置 */
    .card-info-text {
      color: rgb(42, 42, 42);
    }
    /* 方剂功用的高度限制 */
    .card-info-benefits-limit {
      max-width: 290px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* 方剂主治的高度限制 */
    .card-info-treat-limit {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* 设置显示的最大行数 */
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 290px; /* 容器的最大宽度 */
    }
  }
}

.card:hover {
  /* offset-x, offset-y, 阴影的模糊半径，阴影半径，color */
  box-shadow: 1px 1px 3px 3px rgba(89, 89, 89, 0.37);
}
</style>