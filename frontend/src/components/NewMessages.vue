<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <v-form>
            <v-text-field
              label="Message"
              v-model="messageBody"
              required
            ></v-text-field>
            <v-btn class="mr-4" @click.prevent="submit">
              submit
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      messageBody: "",
    };
  },
  methods: {
    async submit() {
      this.$store.dispatch('newMessage', this.messageBody);
    },
  },
};
</script>
