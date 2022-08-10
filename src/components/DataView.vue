<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 gep-4">
        <chart-data Id="New Confirmed" 
                    bg1="rgba(234, 179, 8)"
                    :stats="stats.NewConfirmed">
        </chart-data>
        <chart-data Id="New Deaths" 
                    bg1="rgb(236, 72, 153)"
                    :stats="stats.NewDeaths">
        </chart-data>
        <chart-data Id="Total Confirmed" 
                    bg1="rgb(234, 88, 12)"
                    :stats="stats.TotalConfirmed">
        </chart-data>
        <chart-data Id="Total Deaths" 
                    bg1="rgb(185, 28, 28)"
                    :stats="stats.TotalDeaths">
        </chart-data>
    </div>

</template>

<script>

import ChartData from '@/components/ChartData.vue'

export default {
    name : 'DataView',
    props : ['stats'],
    components : {
        ChartData
    },
}

</script>