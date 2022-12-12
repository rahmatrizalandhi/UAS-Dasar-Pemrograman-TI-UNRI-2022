<template>
  <div id="app">
  <v-simple-table>
    <template v-slot:default>
      <thead style="background-color: #46607b;">
        <tr>
          <th style="text-align: center; color: white;">id</th>
          <th style="text-align: center; color: white;">title</th>
          <th style="text-align: center; color: white;">isbn</th>
          <th style="text-align: center; color: white;">author</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(book, index) in books"
        > 
        <td>{{ index + 1 }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.isbn }}</td>
        <td>{{ book.author }}</td>
      </tr>
    </tbody>
  </template>
</v-simple-table>
<br/>
    <v-row>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            style="margin-left: 1cm;"
          >
            Buat Jurnal Baru
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                  label="Title"
                  id="addTitle"
                  v-model="addTitle"
                  :rules="[() => !!addTitle || 'This field is required']"
                  required
                  solo
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="ISBN"
                    id="addIsbn"
                    v-model="addIsbn"
                    :rules="[() => !!addIsbn || 'This field is required']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Author"
                    id="addAuth"
                    v-model="addAuth"
                    :rules="[() => !!addAuth || 'This field is required']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              flex
              @click="dialog = false"
            >
              Batal
            </v-btn>
            <v-btn
              type="submit"
              @click="addData(); dialog = false"
              
              color="green"
              flex
            >
              Tambah Jurnal
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>

  export default {
    name: 'DataBase',

    data: () => ({
      
      dialog: false,
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'index',
        },
        { text: 'title', value: 'title' },
        { text: 'author', value: 'author' },
        { text: 'isbn', value: 'isbn' },
      ],
      books: [
        {
          title: 'Based Design Mobile Learning Course on Android',
			    isbn: "1978-0524-2528-6374",
			    author: 'Liranti Rahmelina'
        },
        {
          title: 'Development of Sales Application Using QR Code',
			    isbn: "1978-0524-2528-6374",
			    author: 'Ricky Akbar, Husnil Kamil'
        },
        {
          title: 'Perancangan dan Implementasi Web Service pada Aplikasi Permainan ',
			    author: 'Gilang Arsya Priyatna Zaman',
			    isbn: "1978-0524-2528-6374"
        },
        {
          title: 'Perancangan Augmented Reality Media Markerless PoI',
			    isbn: "1978-0524-2528-6374",
			    author: 'Abraham Christover Manuputty'
        },
        {
          title: 'Pengembangan SIG Berbasis Node.JS untuk Pemetaan Mesin dan Tracking',
			    isbn: "1978-0524-2528-6374",
			    author:' Rachmat Fajrin'
        }
      ],
      addTitle: '',
      addIsbn: '',
      addAuth: '',
    }),
    methods: {
    addData(){
			this.books.push({
				'title': this.addTitle,
        'author': this.addAuth,
				'isbn' : this.addIsbn,
			});
			this.addTitle = '',
			this.addAuth = '';
			this.addIsbn = '';
		},
  }
  }
</script>

<style>
.v-data-table {
  text-transform: uppercase;
  text-align: center;
}
</style>