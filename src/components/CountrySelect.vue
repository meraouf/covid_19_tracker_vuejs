<template>
    <select @change="getCountry" v-model="selected" 
            class="form-select border rounded block w-full mt-10 mb-10">
            <option value="0">Select country</option>
            <option v-for="country in countries" :value="country.ID" :key="country.ID">{{country.Country}}</option>
    </select>
</template>

<script>

export default {
    name : "CountrySelect",
    props : ['countries'],
    data() {
        return {
            selected : 0
        }
    },
    methods : {
        getCountry() {
            const country = this.countries.find(country => this.selected === country.ID )
            this.$emit('get-country', country)
        },
    }
}
</script>