<template>
  <div class="product-list-container">
    <div class="product-list-header">
      <h2>Product List</h2>
      <router-link to="/add-product">Add New Product</router-link>
    </div>
    <div class="product-list-content">
      <product-list :products="products" @edit-product="editProduct" @delete-product="deleteProduct" />
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    editProduct(product) {
      // Navigate to EditProductView.vue with the selected product's ID
      this.$router.push({ name: 'EditProduct', params: { id: product.id } });
    },
    deleteProduct(product) {
      // Implement delete functionality (You can dispatch an action to delete the product)
      console.log('Deleting Product:', product);
    }
  }
}
</script>