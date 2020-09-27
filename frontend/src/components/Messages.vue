<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Messages</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-item
              v-for="message in $store.state.messages"
              :key="message"
              @click="$emit('show')"
            >
              <v-list-item-content>
                <v-list-item-title v-text="message"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  async created() {
    this.$store.dispatch('getMessages');
  },
};
</script>

<style></style>
