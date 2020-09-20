<template>
  <div>
      <v-list subheader>
      <v-subheader>Messages</v-subheader>

      <v-list-item
        v-for="message in messages"
        :key="message"
        @click="$emit('show')"
      >
        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            messages: []
        }
    },
    async created() {
        this.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>

<style>

</style>