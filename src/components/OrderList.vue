<template>
  <div class="container">
    <h1>Lista de Órdenes</h1>
    <button @click="$router.push('/create-order')" class="btn btn-primary">Crear Nueva Orden</button>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer ID</th>
          <th>Ship Name</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.orderId">
          <td>{{ order.orderId }}</td>
          <td>{{ order.customerId }}</td>
          <td>{{ order.shipName }}</td>
          <td>
            <button @click="editOrder(order.orderId)" class="btn btn-warning btn-sm">Editar</button>
            <button @click="deleteOrder(order.orderId)" class="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    fetchOrders() {
      api.get('/orders')
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.error('Error al obtener las órdenes:', error);
        });
    },
    editOrder(id) {
      this.$router.push(`/edit-order/${id}`);
    },
    deleteOrder(id) {
      if (confirm('¿Estás seguro de eliminar esta orden?')) {
        api.delete(`/orders/${id}`)
          .then(() => {
            alert('Orden eliminada exitosamente.');
            this.fetchOrders();
          })
          .catch((error) => {
            console.error('Error al eliminar la orden:', error);
          });
      }
    },
  },
  created() {
    this.fetchOrders();
  },
};
</script>
