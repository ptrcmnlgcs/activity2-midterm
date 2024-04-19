<template>
  <div>
    <div class="title-outline">
      <div class="table-title">Product List</div>
      <transition name="fade">
        <table class="product-table" v-if="!addingProduct">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>₱{{ product.price }}</td>
              <td>
                <button @click="editProduct(product)" class="edit-btn">Edit</button>
                <button @click="confirmDelete(product)" class="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </transition>
      <transition name="fade">
        <div class="product-table" v-if="addingProduct">
          <div class="placeholder"></div>
          <div class="loading">Adding product...</div>
        </div>
      </transition>
    </div>
    <!-- Modal for edit product form -->
    <edit-product-form v-if="showEditModal" :product="selectedProduct" @update="updateProduct" @close-modal="closeEditModal" />
  </div>
</template>

<script>
import EditProductForm from '@/components/EditProductForm.vue';

export default {
  props: ['products'],
  data() {
    return {
      showEditModal: false,
      selectedProduct: null,
      addingProduct: false // Track if a product is being added
    };
  },
  methods: {
    editProduct(product) {
      this.selectedProduct = product;
      this.showEditModal = true;
    },
    confirmDelete(product) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.deleteProduct(product);
      }
    },
    deleteProduct(product) {
      // Implement delete functionality
      console.log('Deleting Product:', product);
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
    updateProduct(updatedProduct) {
      // Implement update functionality
      console.log('Updated Product:', updatedProduct);
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct);
      }
    },
    closeEditModal() {
      this.showEditModal = false;
      this.selectedProduct = null;
    }
  },
  components: {
    EditProductForm
  }
};
</script>

<style scoped>
.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th,
.product-table td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.product-table th {
  background-color: #f2f2f2;
}

.title-outline {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.table-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.edit-btn, .delete-btn { /* Apply bouncy effect to both edit and delete buttons */
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease; /* Smooth transition for the bouncy effect */
  margin-right: 15px;
}

.edit-btn:hover, .delete-btn:hover { /* Adjust hover effect for both buttons */
  background-color: #45a049;
  transform: translateY(-5px); /* Move the button slightly up on hover */
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>