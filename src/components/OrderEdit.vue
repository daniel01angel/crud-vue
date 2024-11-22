<template>
    <div class="container">
      <h1>Editar Orden</h1>
      <form @submit.prevent="updateOrder">
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
        <button type="submit" class="btn btn-primary mt-3">Actualizar Orden</button>
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
      fetchOrder(id) {
        api.get(`/orders/${id}`)
          .then((response) => {
            this.order = response.data;
          })
          .catch((error) => {
            console.error('Error al obtener la orden:', error);
          });
      },
      updateOrder() {
        api.put(`/orders/${this.$route.params.id}`, this.order)
          .then(() => {
            alert('Orden actualizada exitosamente.');
            this.$router.push('/');
          })
          .catch((error) => {
            console.error('Error al actualizar la orden:', error);
          });
      },
    },
    created() {
      this.fetchOrder(this.$route.params.id);
    },
  };
  </script>
  