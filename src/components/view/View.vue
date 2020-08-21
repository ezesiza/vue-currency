<template>
<v-item-group mandatory>
    <v-container>
        <v-row>
            <v-col>
                <v-item>
                    <v-card class="d-flex align-center" light="" height="inherit">
                        <v-toolbar>Currency List</v-toolbar>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Code</th>
                                        <th>Currency</th>
                                        <th class="text-left">MId</th>
                                        <th class="text-left">
                                            Add to List

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in listView" :key="list.mid">
                                        <td>{{ list.code }}</td>
                                        <td>{{ list.currency }}</td>
                                        <td>{{list.mid}}</td>
                                        <td><button @click.prevent="onSubmit(list)">Click to add</button></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-item>
            </v-col>
            <v-col>
                <v-item>
                    <v-card class="d-flex align-center" light="" height="inherit">
                        <v-toolbar>Favourite List</v-toolbar>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Currency</th>
                                        <th class="text-left">Code</th>
                                        <th class="text-left">Mid</th>
                                        <th class="text-left">
                                            <v-btn class="ma-2 blue--text" outlined color="indigo" @click.prevent="deleteAllFavorites()">
                                                <v-row justify="center">
                                                    <v-btn color="primary" dark @click.stop="dialog = true">
                                                        Empty List
                                                    </v-btn>

                                                    <v-dialog v-model="dialog" max-width="290">
                                                        <v-card>
                                                            <v-card-title class="headline">Delete all List</v-card-title>

                                                            <v-card-text>
                                                                Are you sure you want to Empty Favorites List
                                                            </v-card-text>

                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>

                                                                <v-btn color="green darken-1" text @click="dialog = false">
                                                                    No
                                                                </v-btn>

                                                                <v-btn color="green darken-1" text @click.prevent="deleteAllFavorites()">
                                                                    Yes Delete
                                                                </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>
                                                </v-row>
                                            </v-btn>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in favoriteListView" :key="item.currency +index">
                                        <td>{{ item.currency}}</td>
                                        <td>{{ item.code  }}</td>
                                        <td>{{ item.mid}}</td>
                                        <td>
                                            <div class="my-2">
                                                <button color="error" @click.prevent="onRemove(item)">Remove From List</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-item>
            </v-col>
        </v-row>
    </v-container>
</v-item-group>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },

  methods: {
    getAllLists: function () {
      this.$store.dispatch('getAllLists')
    },
    getFavoriteList: function () {
      this.$store.dispatch('getFavoriteList')
    },
    onSubmit (currency) {
      //  console.log('vCmp', currency)
      this.$store.dispatch('addCurrencyToList', {
        currency
      })
      // this.getAllLists();
    },
    onRemove (currency) {
      this.$store.dispatch('removeCurrencyFromList', {
        currency
      })
    },
    deleteAllFavorites () {
      this.$store.dispatch('deleteAllFavorites')
      this.favoriteListView = []
      this.dialog = false
    }
  },

  mounted: function () {
    this.getAllLists()
  },

  computed: {
    listView () {
      return this.$store.getters.getAllLists
    },
    favoriteListView: {
      set (value) {
        this.value = value
      },
      get () {
        return this.$store.getters.getFavoriteList
      }
    }
  }
}
</script>
