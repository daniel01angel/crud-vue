<template>
    <div class="container">
      <h1>Crear Nueva Orden</h1>
      <form @submit.prevent="createOrder">
        <div class="form-group">
          <label for="customerId">Customer ID</label>
          <input id="customerId" v-model="order.customerId" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="shipName">Ship Name</label>
          <input id="shipName" v-model="order.shipName" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="freight">Freight</label>
          <input id="freight" v-model="order.freight" type="number" step="0.01" class="form-control" />
        </div>
        <!-- Agregar más campos según sea necesario -->
        <button type="submit" class="btn btn-primary mt-3">Crear Orden</button>
        <button @click="$router.push('/')" type="button" class="btn btn-secondary mt-3 ml-2">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        order: {
          customerId: '',
          shipName: '',
          freight: null,
        },
      };
    },
    methods: {
      createOrder() {
        api.post('/orders', this.order)
          .then(() => {
            alert('Orden creada exitosamente.');
            this.$router.push('/');
          })
          .catch((error) => {
            console.error('Error al crear la orden:', error);
          });
      },
    },
  };
  </script>
  