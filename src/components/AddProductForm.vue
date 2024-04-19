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
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 80%;
}

.close {
  color: #aaa;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
textarea,
input[type="number"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
  