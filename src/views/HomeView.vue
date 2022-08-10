<template>
  <main class="container" v-if="!loading">
    <data-title :title="title" :dataDate="dataDate"></data-title>
  
    <data-view :stats="stats"></data-view>
    
    <country-select :countries="countries"
                    @get-country="getCountry">
    </country-select>

    <button v-if="stats.Country"
            @click="clearData"
            class="bg-green-700 text-white rounded focus:out-line-none hover:bg-green-600 p-3 mb-10">
      Clear countries
    </button>
  </main>

  <main class="container flex justify-center align-center flex-col text-center" v-else>
    <div class="text-gray-3000 text-3xl mt-10 mb-6">
      Fetching data ...
    </div>
    <loading-spinner></loading-spinner>
  </main>
</template>

<script>

import LoadingSpinner from '@/components/LoadingSpinner.vue'
import DataTitle from '@/components/DataTitle.vue'
import DataView from '@/components/DataView.vue'
import CountrySelect from '@/components/CountrySelect.vue'

export default {
  components : {
    LoadingSpinner,
    DataTitle,
    DataView,
    CountrySelect
  },
  data() {
    return {
      loading : true,
      title : 'Global',
      dataDate : '',
      stats : {},
      countries : [],
    }
  },
  methods : {
    async fetchCovidData () {
      try {
        const response = await fetch("http://api.covid19api.com/summary")
        const data = await response.json()
        return data
      } catch (error) {
        throw error
      }
    },
    getCountry(country) {
      this.loading = true
      this.stats = country
      this.title = country.Country
      this.loading = false
    },
    async clearData() {
      try {
        this.loading = true
        const data = await this.fetchCovidData()
        this.title = "Global"
        this.stats = data.Global
        this.countries = data.Countries
        this.loading = false
      } catch (error) {
        throw error
      }
    }
  },
  async created() {
    try {
      const data = await this.fetchCovidData()
      this.dataDate = new Date(data.Date).toLocaleString()
      this.stats = data.Global
      this.countries = data.Countries
      this.loading = false
    } catch (error) {
      throw error
    }
  }
}
</script>