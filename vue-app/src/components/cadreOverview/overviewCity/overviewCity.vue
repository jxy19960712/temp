<template>
	<div class="overview-main-container">
		<commonOverviewTitle title="毕节市干部队伍概览"></commonOverviewTitle>
		<div class="overview-layout-container">
			<div class="overview-chartbar-wrapper">
				<ul>
					<li class="agestructure">
						<ageStructure title="年龄结构" :chartData="ageStructureChartData"></ageStructure>
					</li>
					<li class="genderstructure">
						<genderStructure title="性别结构" :chartData="genderStructureChartData"></genderStructure>
					</li>
					<li class="nationStructureChartData">
						<nationStructure title="民族结构" :chartData="nationStructureChartData"></nationStructure>
					</li>
				</ul>
				<router-link class="common-navigatearrowleft-item iconfont icon-backward3" :to="{name:'entrance'}"></router-link>
			</div>
			<div class="overview-maincontent-wrapper">
				<cityMap title="dsdsds" :chartMap="educationStructureChartData"></cityMap>
				<ul class="overview-mainmenu-wrapper">
					<li v-for="item in overviewMenu">
						<router-link :to="{name:'item.routeName'}">{{item.title}}</router-link>
					</li>
				</ul>
			</div>
			<div class="overview-chartbar-wrapper">
				<ul>
					<li>
						<educationStructure title="学历结构" :chartData="educationStructureChartData"></educationStructure>
					</li>
					<li>
						<rankStructure title="职级结构" :chartData="rankStructureChartData"></rankStructure>
					</li>
					<li>
						<politicalOutlookStructure title="政治面貌结构" :chartData="politicalOutlookStructureChartData"></politicalOutlookStructure>
					</li>
				</ul>
				<router-link class="common-navigatearrowright-item iconfont icon-forward3" :to="{name:'leadershipOverview'}"></router-link>
			</div>
		</div>
	</div>
</template>

<script>
//
    import IEcharts from 'vue-echarts-v3/src/full.vue';
	import commonOverviewTitle from '../../common/commonOverviewTitle.vue'
    import ageStructure from './charts/ageStructure.vue'
    import genderStructure from './charts/genderStructure.vue'
    import nationStructure from './charts/nationStructure.vue'
    import educationStructure from './charts/educationStructure.vue'
    import rankStructure from './charts/rankStructure.vue'
    import politicalOutlookStructure from './charts/politicalOutlookStructure.vue'

    import cityMap from './charts/cityMap.vue'


    export default {
        components: {
            commonOverviewTitle,
            IEcharts,
            ageStructure,
            genderStructure,
            nationStructure,
            educationStructure,
            rankStructure,
            politicalOutlookStructure,
            cityMap
        },
        data() {
            return {
                name: 'view',
                overviewMenu:[{
                    title:'七星关区',
                    routeName:'/'
                },{
                    title:'大方县',
                    routeName:'/'
                },{
                    title:'黔西县',
                    routeName:'/'
                },{
                    title:'金沙县',
                    routeName:'/'
                },{
                    title:'织金县',
                    routeName:'/'
                },{
                    title:'纳雍县',
                    routeName:'/'
                },{
                    title:'威宁县',
                    routeName:'/'
                },{
                    title:'赫章县',
                    routeName:'/'
                },{
                    title:'百里杜鹃',
                    routeName:'/'
                },{
                    title:'金海湖新区',
                    routeName:'/'
                }],
                ageStructureChartData: [
                    {value: 4, name: '30岁及以下'},
                    {value: 6.8, name: '31-35岁'},
                    {value: 19.5, name: '36-40岁'},
                    {value: 22.1, name: '41-45岁'},
                    {value: 6, name: '50-51岁'},
                    {value: 13.6, name: '51-55岁'},
                    {value: 7.9, name: '55-60岁'},
                    {value: 20.7, name: '60岁及以上'}
                ],
                genderStructureChartData: [
                    {value: 61, name: '男'},
                    {value: 39, name: '女'},
                ],
                nationStructureChartData: [
                    {value: 65, name: '汉族'},
                    {value: 35, name: '少数民族'},
                ],
                educationStructureChartData:[
                    {value: 4, name: '中专及以下'},
                    {value: 30, name: '大专'},
                    {value: 60, name: '本科'},
                    {value: 6, name: '研究生'}
                ],
                rankStructureChartData:[
                    {value: 10, name: '科员及以下'},
                    {value: 20, name: '副乡科级'},
                    {value: 30, name: '正乡科级'},
                    {value: 40, name: '副县处级'}
                ],
                politicalOutlookStructureChartData:[
                    {value: 10, name: '中国共产党'},
                    {value: 20, name: '民盟'},
                    {value: 30, name: '致公党'},
                    {value: 40, name: '无党派人士'},
                    {value: 40, name: '民进'},
                    {value: 40, name: '民建'}
                ]
            }
        },
	    created(){

	    },
        mounted() {
            this.calculateHeight();
        },
        updated() {

        },
        methods: {
            calculateHeight() {
                setTimeout(() => {
                    $('.overview-main-container .entrancelogo img').height();
                }, 500)
//                debugger
                this.$autoHeight({
                    target: '.overview-main-container',
                    reference: 'body',
                    minHeight: 0
                })
                this.$align({
                    target: '.overview-main-container .entrancelogo',
                    container: '.overview-main-container'
                })

            },
            doRandom() {
                const that = this;
                let data = [];
                for (let i = 0, min = 5, max = 99; i < 6; i++) {
                    data.push(Math.floor(Math.random() * (max + 1 - min) + min));
                }
                that.loading = !that.loading;
                that.bar.series[0].data = data;
            },
            onReady(instance) {
                this.loadingFlag = false;


            },
            onClick(event, instance, echarts) {
                console.log(arguments);
            }
        }
    }
</script>