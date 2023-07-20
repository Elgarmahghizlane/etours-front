<template>
  <div class="pagination flex justify-center items-center">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      :class="{ disabled: currentPage === 1 }"
      class="w-10 rounded-full"
    >
      <img :src="left" class="w-full" alt="" />
    </button>
    <button
      v-for="pageNumber in pageCount"
      :key="pageNumber"
      :class="{ active: currentPage === pageNumber }"
      @click="goToPage(pageNumber)"
      class="rounded-full"
    >
      {{ pageNumber }}
    </button>
    <button
      @click="nextPage"
      :disabled="currentPage === pageCount"
      :class="{ disabled: currentPage === pageCount }"
      class="w-10 rounded-full"
    >
      <img :src="right" class="w-full" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  name: "VuePaginationComponent",
  data() {
    return {
      currentPage: 1,
      left: require("../../static/icons/chevron-left.svg"),
      right: require("../../static/icons/chevron-right.svg"),
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 3,
    },
    prevClass: {
      type: String,
      default: "",
    },
    nextClass: {
      type: String,
      default: "",
    },
    activeClass: {
      type: String,
      default: "active",
    },
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.items.length / this.perPage);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
      this.$emit("page-changed", this.currentPage);
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
        this.$emit("page-changed", this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit("page-changed", this.currentPage);
      }
    },
  },
};
</script>
<style scoped>
.pagination button {
  font-size: 16px;
  padding: 6px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
}

.pagination button.active {
  background-color: #235a61;
  color: #fff;
  border-radius: 50%;
  padding: 8px 15px;
}

.pagination button.disabled {
  background-color: white;
  color: black;
  border-radius: 50%;
}
</style>
