<template>
	<div class="overview-main-container">
		<div class="main-wrapper">
			<span></span>
			<router-link class="entrancelogo" :to="{name:'overviewCity'}"><img src="/src/image/entrancelogo_00000.png"/>
			</router-link>
		</div>
	</div>
</template>

<script>
    //
    export default {
        components: {},
        data() {
            return {}
        },
        mounted() {
            this.$autoHeight({
                target: '.overview-main-container'
            })
            this.calculateHeight();

        },
        methods: {
            calculateHeight() {
                setTimeout(() => {
                    $('.overview-main-container .entrancelogo img').height();
                }, 500)
                this.$align({
                    target: '.overview-main-container .entrancelogo',
                    container: '.overview-main-container'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
	@import "src/css/overview.scss";
	@import "src/css/entrance.scss";

</style>