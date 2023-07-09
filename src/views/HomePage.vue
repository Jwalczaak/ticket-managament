<template>
  <div class="home">
    <TicketsDataTable :tickets="tickets"></TicketsDataTable>
  </div>
</template>

<script>
import { getTickets } from "@/services/ticketsService";
import TicketsDataTable from "../components/TicketsDataTable.vue";

export default {
  components: {
    TicketsDataTable: TicketsDataTable,
  },
  data() {
    return {
      tickets: getTickets(),
    };
  },
};
</script>
