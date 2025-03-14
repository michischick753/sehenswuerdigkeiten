<template>
    <div class="slideshow-container">
      <button class="slideshow-button prev" @click="prevImage">&lt; Prev</button>
      <div class="slideshow-image-container">
        <img :src="images[currentIndex]" :alt="'Slideshow ' + (currentIndex + 1)" class="slideshow-image" />
      </div>
      <button class="slideshow-button next" @click="nextImage">Next &gt;</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .slideshow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 800px;
    margin: 20px auto;
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .slideshow-image-container {
    max-width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .slideshow-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .slideshow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    z-index: 1;
    border-radius: 4px;
  }
  
  .slideshow-button.prev {
    left: 10px;
  }
  
  .slideshow-button.next {
    right: 10px;
  }
  
  .slideshow-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  