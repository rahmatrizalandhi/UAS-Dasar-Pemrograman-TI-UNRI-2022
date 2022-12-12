<template>
  <div id="app">
    <center> <h1> Database Jurnal dengan Vuetify </h1> </center>
      <v-form class="form">
          <v-text-field
          label="ID"
          v-model="id1"
          required
          ></v-text-field>

          <v-text-field
          label="TITLE"
          v-model="judul"
          required
          ></v-text-field>

          <v-text-field
          label="ISBN"
          v-model="isbn1"
          required
          ></v-text-field>

          <v-text-field
          label="AUTHOR"
          v-model="author1"
          required
          ></v-text-field>

          <v-btn @click="addTodo" color="white"> Buat Jurnal Baru </v-btn>
      </v-form>

       <v-data-table
          :headers="headers"
          :items="todos"
          hide-actions
          class="elevation-1"
        >
        <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.id1 }}</td>
            <td class="text-xs-left">{{ props.item.judul }}</td>
            <td class="text-xs-left">{{ props.item.isbn1}}</td>
            <td class="text-xs-left">{{ props.item.author1 }}</td>
         </template>
      </v-data-table>

  </div>
</template>

<script>
export default {
data: () => ({
  headers: [
    { text: "ID", value: "id1" },
    { text: "TITLE", value: "judul" },
    { text: "ISBN", value: "isbn1" },
    { text: "AUTHOR", value: "author1" }
  ],
  id1: 1,
  judul: "",
  isbn1: "",
  author1: "",
  todos: []
}),
methods: {
  addTodo() {
    if (this.id1.trim() === "" && this.judul.trim() === "" && this.isbn1.trim() === "" && this.author1.trim() === "") {
      alert("Data tidak boleh kosong!");
    } else {
      this.todos.push({
        id1: this.id1,
        judul: this.judul,
        isbn1: this.isbn1,
        author1: this.author1
      });
      this.id1 = "",
      this.judul = "",
      this.isbn1 = "",
      this.author1 = ""
    }
  },
  removeTodo(id) {
    this.todos.splice(id, 1);
  },
  clear() {
    this.id1 = "",
    this.judul = "",
    this.isbn1 = "",
    this.author1 = ""
  }
}
};
</script>

<style scoped>
#app {
margin-top: 30px;
}
.form {
margin-top: 20px;
margin-bottom: 50px;
}
</style>