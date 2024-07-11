<template>
  <div class="box">
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
    <div class="page-footer">
      <el-pagination
          v-model:current-page=pageNum
          v-model:page-size=pageSize
          :page-sizes=pageSizes
          layout="total, sizes, prev, pager, next, jumper"
          :total=total
          :background=background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import {getPrescriptionPage} from "@/api/prescription";
import {ref} from "vue";

export default {
  name: "prescription",
  data() {
    return {
      prescriptionData: [], // 所有的方剂数据
      pageNum: 1, // 当前页码
      pageSize: 20, // 每页显示条数
      pageSizes: [20, 40, 60, 80], // 页码选择器的选项
      total: 0, // 总记录数
      background: ref(true) // 页码框显示颜色
    }
  },
  mounted() {
    // 分页获取方剂数据
    this.pageNum = this.$route.query.pageNum ? parseInt(this.$route.query.pageNum) : 1
    this.pageSize = this.$route.query.pageSize ? parseInt(this.$route.query.pageSize) : 20
    this.getPrescriptionPage(this.pageNum, this.pageSize)
  },
  methods: {
    // 分页获取方剂数据
    getPrescriptionPage(pageNum, pageSize) {
      getPrescriptionPage(pageNum, pageSize).then((res) => {
        let data = res.data.data
        this.prescriptionData = data.rows
        this.total = data.totalRecords
      }).catch((error) => {
        console.log(error)
      })
    },
    // 修改每页展示条数
    handleSizeChange(newPageSize) {
      this.pageSize = newPageSize
      this.$router.push({
        path: `/prescription/page`,
        query: {
          pageNum: this.pageNum,
          pageSize: newPageSize
        }
      });
      this.getPrescriptionPage(this.pageNum, newPageSize)
    },
    // 修改当前页码
    handleCurrentChange(newPageNum) {
      this.pageNum = newPageNum
      this.$router.push({
        path: `/prescription/page`,
        query: {
          pageNum: newPageNum,
          pageSize: this.pageSize
        }
      })
      this.getPrescriptionPage(newPageNum, this.pageSize)
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-wrapper {
  display: flex;
  flex-direction: row;
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 设置显示的最大行数 */
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* 方剂主治的高度限制 */
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
@keyframes moveToTopLeft {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-.08rem, -.08rem);
  }
}
.card:hover {
  /* offset-x, offset-y, 阴影的模糊半径，阴影半径，color */
  box-shadow: 1px 1px 3px 3px rgba(90, 90, 90, 0.35);
  transform: translate(-2px, -2px); /* 向左上角移动 */
  animation: moveToTopLeft 0.1s ease-in-out;
}

/* 分页栏 */
.page-footer {
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>