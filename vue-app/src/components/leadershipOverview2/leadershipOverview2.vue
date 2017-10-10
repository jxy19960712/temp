<template>
    <div class="overview-main-container">
        <commonOverviewTitle title="大方县政府领导班子概览"></commonOverviewTitle>
        <div class="overview-leadershipoverview2-container">
            <div class="column-wrapper">
                <commonChartTitle title="扶贫工作情况" titleStyle="rectangle"></commonChartTitle>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
            </div>
            <div class="column-wrapper">
                <commonChartTitle title="扶贫工作情况" titleStyle="rectangle"></commonChartTitle>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
            </div>
            <div class="column-wrapper">
                <commonChartTitle title="扶贫工作情况" titleStyle="rectangle"></commonChartTitle>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
            </div>
            <div class="column-wrapper">
                <commonChartTitle title="扶贫工作情况" titleStyle="rectangle"></commonChartTitle>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
                <div class="overview-helppoor-wrapper">
                    <commonChartTitle title="脱贫人数、贫困村与乡镇出列情况" titleStyle="underline"></commonChartTitle>
                    <farmerincome :chartData="workExperienceStructureChartData"></farmerincome>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import commonOverviewTitle from '../common/commonOverviewTitle.vue'
    import commonChartTitle from '../common/commonChartTitle.vue'


    import farmerincome from './charts/farmerincome.vue'

    export default {
        components: {
            IEcharts,
            commonOverviewTitle,
            commonChartTitle,


            farmerincome,
        },
        created(){
            console.log(document.body.clientWidth);
        },
        data() {
            return {
                workExperienceStructureChartData: [
                    {value: 10, name: '科员及以下'},
                    {value: 20, name: '副乡科级'},
                    {value: 30, name: '正乡科级'},
                    {value: 40, name: '副县处级'}
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import "src/css/overview2.scss";

</style>