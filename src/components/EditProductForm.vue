<template>
  <!-- Modal transition -->
  <transition name="bounce">
    <div class="modal">
      <div class="modal-content">
        <!-- Close button -->
        <span class="close" @click="closeModal">&times;</span>
        <!-- Modal title -->
        <h2>Edit Product</h2>
        <!-- Product form -->
        <form @submit.prevent="updateProduct">
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
    </div>
  </transition>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      editedProduct: { ...this.product }
    };
  },
  methods: {
    // Method to update the product
    updateProduct() {
      // Implement update functionality
      this.$emit('update', this.editedProduct);
      this.closeModal();
    },
    // Method to close the modal
    closeModal() {
      this.$emit('close-modal'); // Emit event to close the modal
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
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #888;
    max-width: 400px; /* Set a maximum width to avoid it becoming too wide */
    text-align: center; /* Center align text */
    border-radius: 8px;
  }
  
  .close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
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
    font-weight: bold; /* Make labels bold */
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
  
  button[type="submit"] {
    width: 100%; /* Make button fill the container */
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  
  /* Error message style */
  .error-message {
    color: red;
    margin-top: 10px; /* Add margin to separate from other content */
  }
</style>

  
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

/* Form group style */
.form-group {
  margin-bottom: 20px; /* Add margin between form elements */
}

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
</style>
