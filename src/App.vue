<template>
    <div id="app">
      <nav>
        <router-link to="/">Lista de Órdenes</router-link>
        <router-link to="/create-order">Crear Orden</router-link>
      </nav>
      <router-view /> <!-- Renderiza los componentes según la ruta -->
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  nav {
    margin-bottom: 20px;
  }
  
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  
  nav a.router-link-active {
    font-weight: bold;
    color: darkblue;
  }
  </style>
  