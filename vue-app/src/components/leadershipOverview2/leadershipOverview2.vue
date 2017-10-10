<template>
    <div class="overview-main-container">
        <commonOverviewTitle title="大方县政府领导班子运转情况"></commonOverviewTitle>
        <commonOverviewTitle2 title="扶贫工作情况" icon="rectangle"></commonOverviewTitle2>
    </div>
</template>
<script>
    import commonOverviewTitle from '../common/commonOverviewTitle.vue'
    import commonOverviewTitle2 from '../common/commonChartTitle2.vue'
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    export default {
        components:{
            commonOverviewTitle,
            commonOverviewTitle2,
            IEcharts
        },
    }
</script>
<style lang="scss">
    @import "src/css/overview.scss";
</style>

