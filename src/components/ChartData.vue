<template>
    <div class="relative">
        <canvas :id="Id">

        </canvas>
    </div>
    
</template>

<script>

export default {
    name : 'ChartData',
    props : ['Id', 'bg1', 'stats'],
    data() {
        return {
            myChart : null
        }
    },
    mounted() {
        const ctx = document.getElementById(this.Id).getContext('2d')
        this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [this.Id],
                datasets: [{
                    label: this.Id,
                    data: [
                        this.stats
                        ],
                    backgroundColor: [
                        this.bg1
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
        // myChart.data.datasets[0].data[0] = this.stats
        // myChart.update()
        // console.log(myChart.data.datasets[0].data[0])
    } 
}
</script>