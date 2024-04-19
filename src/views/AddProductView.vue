<template>
    <div>
      <button @click="showAddProductModal = true">Add New Product</button>
      <transition name="bounce">
        <add-product-form v-show="showAddProductModal" @product-added="addNewProduct" @close-modal="closeModal" />
      </transition>
      <product-list :products="products" />
      <transition name="success-fade" mode="out-in">
        <div v-if="showSuccess" class="success-message">Product added successfully!</div>
      </transition>
    </div>
  </template>
  
  <script>
  import AddProductForm from '@/components/AddProductForm.vue';
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    components: {
      AddProductForm,
      ProductList
    },
    data() {
      return {
        products: [],
        showAddProductModal: false,
        showSuccess: false // Added property to control the success message
      };
    },
    methods: {
      addNewProduct(newProduct) {
        this.products.push(newProduct);
        this.showAddProductModal = false;
        this.showSuccess = true; // Display success message
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      },
      closeModal() {
        this.showAddProductModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Bounce transition */
  .bounce-enter-active, .bounce-leave-active {
    animation: bounce-in 0.5s;
  }
  
  .bounce-enter, .bounce-leave-to /* .bounce-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  /* Success message fade transition */
  .success-fade-enter-active, .success-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .success-fade-enter, .success-fade-leave-to /* .success-fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  /* Other styles */
  .success-message {
    color: green;
    margin-top: 10px; /* Add margin to separate from other content */
  }
  </style>
  