<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct">
          <!-- Name field -->
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="newProduct.name" required>
          </div>
          <!-- Description field -->
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="newProduct.description" required></textarea>
          </div>
          <!-- Price field -->
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="text" id="price" v-model="newProduct.price" pattern="[0-9]*" title="Please enter numbers only" required>
          </div>
          <button type="submit">Add Product</button>
        </form>
        <!-- Error message -->
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: null
        },
        errorMessage: ''
      };
    },
    methods: {
      addProduct() {
        // Add product logic
        // Assuming there's an API call or some logic here to add the product
        // Once the product is successfully added, emit the event with the new product
        this.$emit('product-added', this.newProduct);
        this.resetForm();
      },
      resetForm() {
        this.newProduct = {
          name: '',
          description: '',
          price: null
        };
      },
      closeModal() {
        this.$emit('close-modal'); // Emit event to close the modal
      }
    }
  };
  </script>
  
  <style scoped>
  /* Modal styles */
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 70%; /* Adjust the width as needed */
    max-width: 400px; /* Set a maximum width to avoid it becoming too wide */
    text-align: center; /* Center align text */
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
  }
  
  /* Error message style */
  .error-message {
    color: red;
    margin-top: 10px; /* Add margin to separate from other content */
  }
  
  /* Form group style */
  .form-group {
    margin-bottom: 20px; /* Add margin between form elements */
    text-align: left; /* Align labels to the left */
  }
  
  label {
    display: block; /* Display labels as block elements */
    margin-bottom: 5px; /* Add margin below labels */
    text-align: left; /* Align labels to the left */
  }
  
  /* Input field styles */
  input[type="text"],
  textarea,
  input[type="number"] {
    width: 100%; /* Make inputs fill the container */
    padding: 8px;
    box-sizing: border-box; /* Include padding in width calculation */
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px; /* Adjust font size as needed */
    text-align: left; /* Align text to the left */
  }
  
  /* Transition effect */
  .product-transition-enter-active, .product-transition-leave-active {
    transition: opacity 0.5s;
  }
  
  .product-transition-enter, .product-transition-leave-to {
    opacity: 0;
  }
  </style>
  