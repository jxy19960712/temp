<template>
	<div>
		<div class="chart">
			<label>{{title}}</label>
			<IEcharts :option="pie" :loading="loadingFlag" @ready="onReady"></IEcharts>
		</div>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';


    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                pie: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c}"
                    },
                    series: [
                        {
                            radius: ['0%', this.chartData[0].value.toString() + '%'],
                            type: 'pie',
                            center: ['50%', '50%'],
                            itemStyle: {
                                normal: {
                                    color:'#a362e0',
                                    label: {
                                        show: true,
                                        position: 'inner',
//                                        verticalAlign:'middle',
//	                                    lineHeight:32320,
                                        padding: [0, 0, 70, 0],
                                        fontSize: 20,
                                        formatter: function (data) {
                                            return data.value + '%'
                                        }
                                    },
                                },
                                emphasis: {
                                    borderWidth: 3,
                                    zlevel: 0,
                                }
                            },
                            data: [this.chartData[0]]
                        }, {
                            radius: ['0%', this.chartData[1].value.toString() + '%'],
                            type: 'pie',
                            center: ['60%', '35%'],
                            itemStyle: {
                                normal: {
                                    color:'#00a3fe',
	                                shadowBlur:40,
	                                shadowColor:'#000',
                                    label: {
                                        show: true,
                                        position: 'inner',
                                        padding: [0, 0, 50, 0],
                                        fontSize: 20,
                                        formatter: function (data) {
                                            return data.value + '%'
                                        }
                                    },
                                },
                                emphasis: {
                                    borderWidth: 3,
                                    zlevel: 0,
                                }
                            },
                            data: [this.chartData[1]]
                        }
                    ],
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
                        padding: 0,
                        itemWidth: 20,
                        itemHeight: 20,
                        borderRadius: 50,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                }
            }
        },
        components: {
            IEcharts
        },
        mounted() {

        },
        methods: {
            onReady(instance) {
                this.loadingFlag = false;
                console.log(instance);
            },
            getLegendData() {
                let result = [];
                for (let item in this.chartData) {
                    result.push(this.chartData[item].name);
                }
                return result
            }
        }
    }
</script>