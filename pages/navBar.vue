<template>
    <nav id="navbar" class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a href="/" class="navbar-link">Home</a>
          </li>
          <li class="navbar-item">
            <a href="#about" class="navbar-link">About</a>
          </li>
          <li class="navbar-item">
            <a href="#studies" class="navbar-link">Studies</a>
          </li>
          <li class="navbar-item">
            <a href="#contacts" class="navbar-link">Contact</a>
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
    justify-content: center;
  }
  
  .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .navbar-menu {
    justify-content: center;
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
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