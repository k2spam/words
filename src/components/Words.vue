<template>
    <div class="words">
        {{exception}}<br>
        <div class="word" v-for="word in filtered" :key="word">{{word}}</div>
    </div>
</template>

<script>
import { ref, watch, isRef } from 'vue'
import { wordsFilter } from '@/libs'

export default {
    props:{
        data: {},
        mask: {},
        exception: {}
    },
    setup(props){
        const {mask, data, exception } = props
        const filtered = ref(data)

        watch(
            [exception, props.mask], 
            ([_exception, _mask]) => filtered.value = wordsFilter(data, _mask, _exception)
            )

        return {
            mask,
            filtered
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';

.words {
    display: flex;
    flex-wrap: wrap;
}
.word {
    margin: 10px;
    padding: 7px 12px;
    border: 1px solid $border_color1;
    border-radius: 5px;
    color: $text_color1;
}
</style>



