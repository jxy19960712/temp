<template>
	<div>
		<div class="chart">
			<ul class="overview-statistics-wrapper">
				<li v-for="item in statistics" :style="{color:item.color}">
					<span>{{item.value}}</span>
					<label>{{item.title}}</label>
				</li>
			</ul>
			<IEcharts :option="mapOptions" :loading="loadingFlag" @ready="onReady" @click="chooseMap"></IEcharts>
			<commonOperationButton className="desc" icon="icon-magnifier" title="查看详情" transform="skewX(35deg)"></commonOperationButton>
			<commonOperationButton className="back" icon="icon-magnifier" title="返回" transform="skewX(-35deg)"></commonOperationButton>

		</div>

	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';

//    import echartsGl from 'echarts-gl';
    import chinaMapJson from '../../../../assets/map/mapdata/china.json'
    import bijieJson from '../../../../assets/map/mapdata/geometryCouties/522400.json'

    import commonOperationButton from '../../../common/commonOperationButton.vue'

    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                statistics: [{
                    title: '干部数量',
                    value: 2239
                }, {
                    title: '领导班子数',
                    value: 20
                }, {
                    title: '预警干部数',
                    value: 20,
	                color: 'yellow'
                }, {
                    title: '告警干部数',
                    value: 20,
                    color: '#fd5600'
                }],

                provinceProperty: {
                    name: '贵州省',
                    url: '../../src/assets/map/mapdata/geometryProvince/52.json'
                },
                mapName: '',
                loadingFlag: true,
                mapOptions: {
                    title: {
                        x: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return params.name + ' : ' + params.value[2];
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [{
                        type: 'map',
                        map: 'bijie',
//                        aspectScale: 1,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#04a5d6',
	                            borderWidth:1,
                                areaColor: '#01010d',
	                            shadowColor: 'rgba(4,265,214,0.3)',
	                            shadowBlur: 20
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        },
                        layoutCenter: ['50%', '50%'],
                        layoutSize: '700',
                        animation: false,
                    }]
                }
            }
        },
        components: {
            IEcharts,
            commonOperationButton
        },
        mounted() {
            IEcharts.registerMap('bijie', bijieJson)
        },
        methods: {
            onReady(instance) {
                this.loadingFlag = false;
            },
            chooseMap(event, instance, echarts) {
                let that = this;
                console.log(event)
//                if (event.name == this.provinceProperty.name) {
                if (true) {
                    $.getJSON(this.provinceProperty.url, function (mapJSON) {
                        echarts.registerMap(event.name, mapJSON)
                        console.log(mapJSON)
                        Object.assign(that.mapOptions.series[0], {
                            map: event.name
                        })
                        console.log(event.name)
                        echarts.registerMap(event.name, mapJSON);
                        instance.setOption(that.mapOptions)
                    })
                }
            }
        }
    }

</script>