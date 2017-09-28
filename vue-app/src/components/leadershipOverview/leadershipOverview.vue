<template>
	<div class="overview-main-container">
		<commonOverviewTitle title="大方县政府领导班子概览"></commonOverviewTitle>
		<div class="overview-leadershipoverview-container">
			<div class="left-wrapper">
				<div class="overview-leadershiplist-wrapper">
					<commonChartTitle title="大方县政府" titleStyle="triangle"></commonChartTitle>
					<ul>
						<li v-for="item in leadershipList">
							<img class="avatar" :src="item.avatar"/>
							<label>{{item.title}}</label>
						</li>
					</ul>
				</div>
				<div class="overview-teamevaluation-wrapper">
					<commonChartTitle title="班子考评" titleStyle="triangle"></commonChartTitle>
					<teamEvaluation :chartData="teamEvaluationData"></teamEvaluation>
				</div>
				<div class="overview-teamevaluation-wrapper">
					<commonChartTitle title="性格特点与气质特点" titleStyle="triangle"></commonChartTitle>
					<characterAndTemperament :chartData="characterAndTemperamentChartData"></characterAndTemperament>
				</div>
				<router-link class="common-navigatearrowleft-item iconfont icon-backward3" :to="{name:'overviewCity'}"></router-link>
			</div>
			<div class="right-wrapper overview-leadershipcharacteristic-container">
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="学历结构" titleStyle="underline"></commonChartTitle>
					<educationStructure title="学历结构" :chartData="educationStructureChartData"></educationStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="专业结构" titleStyle="underline"></commonChartTitle>
					<specialtyStructure title="专业结构" :chartData="specialtyChartData"></specialtyStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="工作经验情况" titleStyle="underline"></commonChartTitle>
					<workExperienceStructure title="工作经验情况" :chartData="workExperienceStructureChartData"></workExperienceStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="年龄结构" titleStyle="underline"></commonChartTitle>
					<ageStructure title="年龄结构" :chartData="ageStructureChartData"></ageStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="年龄结构" titleStyle="underline"></commonChartTitle>
					<nationStructure title="年龄结构" :chartData="ageStructureChartData"></nationStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="性别结构" titleStyle="underline"></commonChartTitle>
					<genderStructure title="性别结构" :chartData="genderStructureChartData"></genderStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="政治面貌结构" titleStyle="underline"></commonChartTitle>
					<politicalOutlookStructure title="政治面貌结构" :chartData="politicalOutlookStructureChartData"></politicalOutlookStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="职业类别情况" titleStyle="underline"></commonChartTitle>
					<occupationCategoryStructure title="职业类别情况" :chartData="workExperienceStructureChartData"></occupationCategoryStructure>
				</div>
				<div class="overview-leadershipcharacteristic-item">
					<commonChartTitle title="来源结构" titleStyle="underline"></commonChartTitle>
					<sourceStructure title="来源结构" :chartData="sourceStructureChartData"></sourceStructure>
				</div>
				<router-link class="common-navigatearrowright-item iconfont icon-forward3" :to="{name:'leadershipOverview'}"></router-link>
			</div>
		</div>
	</div>
</template>

<script>

    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import commonOverviewTitle from '../common/commonOverviewTitle.vue'
    import commonChartTitle from '../common/commonChartTitle.vue'
    import teamEvaluation from './charts/teamEvaluation.vue'
    import characterAndTemperament from './charts/characterAndTemperament.vue'


    import ageStructure from './charts/ageStructure.vue'
    import genderStructure from './charts/genderStructure.vue'
    import nationStructure from './charts/nationStructure.vue'
    import educationStructure from './charts/educationStructure.vue'
    import specialtyStructure from './charts/specialtyStructure.vue'
    import workExperienceStructure from './charts/workExperienceStructure.vue'
    import politicalOutlookStructure from './charts/politicalOutlookStructure.vue'
    import occupationCategoryStructure from './charts/occupationCategoryStructure.vue'
    import sourceStructure from './charts/sourceStructure.vue'

    export default {
        components: {
            IEcharts,
            commonOverviewTitle,
            commonChartTitle,
            teamEvaluation,
            characterAndTemperament,

            ageStructure,
            genderStructure,
            nationStructure,
            educationStructure,
            specialtyStructure,
            workExperienceStructure,
            politicalOutlookStructure,
            occupationCategoryStructure,
            sourceStructure
        },
        data() {
            return {
                name: 'view',
                leadershipList: [{
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }, {
                    title: '陈萍',
                    avatar: '../../../src/image/static/leadershipavatar_00000.jpg'
                }],

                teamEvaluationData: [
                    {
                        data: [{
                            value: 4
                        }]
                    }, {
                        data: [{
                            value: 6.8
                        }]
                    }, {
                        data: [{
                            value: 19.5
                        }]
                    }, {
                        data: [{
                            value: 22.1
                        }]
                    },
                ],
                ageStructureChartData: [
                    {value: 2, name: '30-40岁'},
                    {value: 5, name: '41-45岁'},
                ],
                genderStructureChartData: [
                    {value: 61, name: '男'},
                    {value: 39, name: '女'},
                ],
                characterAndTemperamentChartData:[{
                    name:'多血质',
					value:100
				},{
                    name:'胆汁质',
                    value:100
                },{
                    name:'抑郁质',
                    value:100
                },{
                    name:'粘液质',
                    value:100
                },{
                    name:'领袖型',
                    value:100
                }],
                nationStructureChartData: [
                    {value: 65, name: '汉族'},
                    {value: 35, name: '少数民族'},
                ],
                educationStructureChartData: [
                    {value: 1, name: '中专及以下'},
                    {value: 2, name: '大专'},
                    {value: 3, name: '本科'},
                    {value: 1, name: '研究生'}
                ],
                specialtyChartData:[
                    {value: 4, name: '行政学'},
                    {value: 6.8, name: '经贸'},
                    {value: 19.5, name: '语言'},
                    {value: 22.1, name: '行政管理'},
                    {value: 6, name: '工商管理'},
                    {value: 13.6, name: '信息管理'},
                    {value: 7.9, name: '科学工程'}
                ],
                workExperienceStructureChartData: [
                    {value: 10, name: '科员及以下'},
                    {value: 20, name: '副乡科级'},
                    {value: 30, name: '正乡科级'},
                    {value: 40, name: '副县处级'}
                ],
                politicalOutlookStructureChartData: [
                    {value: 1, name: '共产党员'},
                    {value: 6, name: '无党派人士'},
                ],
                sourceStructureChartData: [
                    {value: 1, name: '贵州遵义'},
                    {value: 2, name: '贵州黔西'},
                    {value: 4, name: '贵州大方'},
                ],
            }
        },
        created() {

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
                this.$autoHeight({
                    target: '.overview-main-container',
                    reference: 'body',
                    minHeight: 0
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

                console.log(instance);
            },
            onClick(event, instance, echarts) {
                console.log(arguments);
            }
        }
    }
</script>
<style lang="scss">
	@import "src/css/overview.scss";
</style>