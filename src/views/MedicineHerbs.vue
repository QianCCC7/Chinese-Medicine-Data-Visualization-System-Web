<template>
  <div class="card-wrapper">
    <div class="card" v-for="(item, index) in medicineHerbsData" :key="index">
      <img class="card-img" :src="item.url" :alt="item.name">
      <div class="card-info">
        <p>
          <span class="card-info-title">药材名称: </span>
          <span class="card-info-text">{{ item.name }}</span>
        </p>
        <p class="card-info-benefits-limit">
          <span class="card-info-title">药材功用: </span>
          <span class="card-info-text">{{ item.benefits }}</span>
        </p>
        <p class="card-info-treat-limit">
          <span class="card-info-title">药材性状: </span>
          <span class="card-info-text">{{ item.nature }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllMedicineHerbs} from "@/api/medicine-herbs";

export default {
  name: "MedicineHerbs",
  data() {
    return {
      medicineHerbsData: [], // 所有的药材数据
    }
  },
  mounted() {
    // 初始化所有的药材数据
    getAllMedicineHerbs().then((res) => {
      // console.log(res.data.data)
      this.medicineHerbsData = res.data.data
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
  height: 410px;
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
    /* 药材名称加粗效果 */
    .card-info-title {
      font-weight: bold;
    }
    /* 药材文本设置 */
    .card-info-text {
      color: rgb(42, 42, 42);
    }
    /* 药材功用的高度限制 */
    .card-info-benefits-limit {
      max-width: 290px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 设置显示的最大行数 */
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* 药材主治的高度限制 */
    .card-info-treat-limit {
      max-width: 290px; /* 容器的最大宽度 */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3; /* 设置显示的最大行数 */
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.card:hover {
  /* offset-x, offset-y, 阴影的模糊半径，阴影半径，color */
  box-shadow: 1px 1px 3px 3px rgba(89, 89, 89, 0.37);
  cursor: pointer;
}
</style>