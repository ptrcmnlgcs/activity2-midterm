<template>
  <!-- Modal container -->
  <div class="modal">
    <!-- Transition for modal content -->
    <transition name="bounce">
      <div class="modal-content">
        <!-- Close button -->
        <span class="close" @click="closeModal">&times;</span>
        <!-- Modal title -->
        <h2>Edit Product</h2>
        <!-- Product edit form -->
        <form @submit.prevent="updateProduct" class="edit-product-form">
          <!-- Name field -->
          <div class="form-group">
            <label for="edit-name">Name:</label>
            <input type="text" id="edit-name" v-model="editedProduct.name" required>
          </div>
          <!-- Description field -->
          <div class="form-group">
            <label for="edit-description">Description:</label>
            <textarea id="edit-description" v-model="editedProduct.description" required></textarea>
          </div>
          <!-- Price field -->
          <div class="form-group">
            <label for="edit-price">Price:</label>
            <input type="text" id="edit-price" v-model="editedProduct.price" required>
          </div>
          <!-- Submit button -->
          <button type="submit">Update Product</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      // Clone the product prop to editedProduct for editing
      editedProduct: { ...this.product }
    };
  },
  methods: {
    // Method to update the product
    updateProduct() {
      // Implement update functionality
      this.$emit('update', this.editedProduct);
      // Close the modal after updating
      this.closeModal();
    },
    // Method to close the modal
    closeModal() {
      // Emit event to close the modal
      this.$emit('close-modal');
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

/* Modal content styles */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%; /* Adjust the width as needed */
  max-width: 400px; /* Set a maximum width to avoid it becoming too wide */
  text-align: center; /* Center align text */
}

/* Close button styles */
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

/* Form group styles */
.form-group {
  margin-bottom: 20px; /* Add margin between form elements */
}

/* Label styles */
label {
  display: block; /* Display labels as block elements */
  margin-bottom: 5px; /* Add margin below labels */
  text-align: left; /* Align labels to the left */
}

/* Input field styles */
input[type="text"],
textarea {
  width: 100%; /* Make inputs fill the container */
  padding: 8px;
  box-sizing: border-box; /* Include padding in width calculation */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* Adjust font size as needed */
  text-align: left; /* Align text to the left */
}

/* Bounce animation */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
