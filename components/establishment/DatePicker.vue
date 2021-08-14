<template lang="">
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="arrival"
          label="Arrival"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>

      <v-date-picker
        v-model="arrival"
        no-title
        scrollable
        @input="menu = false"
      >
        <v-spacer></v-spacer>
      </v-date-picker>
    </v-menu>
    <v-menu
      ref="menu"
      v-model="menu2"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="depature"
          label="Depature"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>

      <v-date-picker
        v-model="depature"
        no-title
        scrollable
        @input="menu2 = false"
      >
        <v-spacer></v-spacer>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "DatePicker",

  data() {
    return {
      menu: false,
      menu2: false,
      // Adding date and checking timezones
      arrival: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      depature: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    };
  }
};
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
