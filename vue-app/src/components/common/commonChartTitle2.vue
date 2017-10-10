<template>
    <div class="common-charttitle-container">
        <div :class="'title '+titleStyle">
            <span :class="icon"></span>
            <label>{{title}}</label>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            icon: String,
            title: String,
            titleStyle: {
                type: String,
                default: '',
                required: false
            }
        }
    }
</script>
<style lang="scss">
    @import "src/css/common.scss";
</style>