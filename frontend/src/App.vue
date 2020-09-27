<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>
    <v-main>
      <NewMessages />
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import Messages from "./components/Messages.vue";
import NewMessages from "./components/NewMessages.vue";

export default {
  name: "App",
  components: {
    NewMessages,
    Messages,
  },
  data: () => ({
    //
  }),
};
</script>
