<template>
    <div class="words">
        <div class="word" v-for="word in filtered" :key="word">{{word}}</div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { wordsFilter } from '@/libs'
import { exception } from '../databus'

export default {
    props:{
        data: {},
        mask: {},
    },
    setup(props){
        const {mask, data } = props
        const filtered = ref(data)

        watch(
            [exception, mask], 
            ([_exception, _mask]) => filtered.value = wordsFilter(data, _mask, _exception)
            )

        return {
            mask,
            filtered,
            exception
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';

.words {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 580px;
    margin: 0 auto;
}
.word {
    margin: 10px;
    padding: 7px 12px;
    border: 1px solid $border_color1;
    border-radius: 5px;
    color: $text_color1;
}
</style>



