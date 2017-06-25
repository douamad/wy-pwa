<template>
  <div id="wrapper">
  <app-nav></app-nav>
    <app-left-nav></app-left-nav>
    <app-page-wrapper :name="page"></app-page-wrapper>
</div>
</template>

<script>
import Vue from 'vue'
import AddressModal from './AddressModal.vue'
import Spinner from '@/components/common/Spinner'
import AppNav from '../layouts/AppNav.vue'
import AppLeftNav from '../layouts/AppLeftNav.vue'
import AppPageWrapper from '../layouts/AppPageWrapper.vue'
export default {

  components: { AddressModal, Spinner, AppNav, AppLeftNav, AppPageWrapper },

  data () {
    return {
      page: 'Tableau de board',
      addressInfo: {
        addressLine1: '',
        addressLine2: '',
        email: '',
        state: '',
        country: '',
        zipcode: ''
      },
      addressModalVisible: false,
      friends: '',
      isLoadingFriends: false,
      error: ''
    }
  },

  computed: {
    reversedSearchText: function () {
      console.log(Vue.options.store)
      return this.$store.state.appnav.searchText.split('').reverse().join('')
    }
  },

  mounted () {
    this.$store.watch((state) => {
      return state.appnav
    }, (appnav) => {
      // Add some behavior here
      alert('Now you need to make a component to display search results!')
    }, {
      deep: true
    })
  },

  methods: {
    getFriends () {
      this.isLoadingFriends = true

      this.$http
        .get('/api/resource')
        .then((response) => {
          this.isLoadingFriends = false
          this.friends = JSON.stringify(response.data.friends)
        })
        .catch((response) => {
          this.isLoadingFriends = false
          this.error = utils.getError(response)
        })
    }
  }
}
</script>

<style lang="scss">
.ev-dashboard {
  margin-top: 60px;
}

</style>
