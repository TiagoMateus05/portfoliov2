<template>
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="navbar-logo">MyLogo</a>
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a href="/" class="navbar-link">Home</a>
          </li>
          <li class="navbar-item">
            <a href="/about" class="navbar-link">About</a>
          </li>
          <li class="navbar-item">
            <a href="/portfolio" class="navbar-link">Portfolio</a>
          </li>
          <li class="navbar-item">
            <a href="/contact" class="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    color: white;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  
  .navbar-item {
  }
  
  .navbar-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .navbar-link:hover {
    text-decoration: underline;
  }
  </style>