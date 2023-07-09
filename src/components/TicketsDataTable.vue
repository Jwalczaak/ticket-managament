<template>
  <div class="card">
    <DataTable :value="tickets" tableStyle="min-width: 50rem">
      <Column field="number" header="number" sortable></Column>
      <Column field="clientAddress" header="Client Address" sortable></Column>
      <Column field="agentAddress" header="Agent Address" sortable></Column>
      <Column field="creationDate" header="Creation Date" sortable></Column>
      <Column
        field="modificationDate"
        header="Modification Date"
        sortable
      ></Column>
      <Column field="priority" header="Priority" sortable></Column>
      <Column field="subject" header="Subject" sortable></Column>
      <Column field="assigned" header="Assigned" sortable></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "TicketsDataTable",
  props: {
    tickets: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    console.log(this.tickets);
  },
};
</script>

<style scoped>
/* Add any styles you want for your table here */
.data-table table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.data-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
