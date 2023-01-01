<template>
    <div class="includes">
        <div v-for="letter in alphabet" :key="`i${letter}`">
            <input v-model="includes" :value="letter" :id="`i${letter}`" type="checkbox"/>
            <label :for="`i${letter}`">{{letter}} <i>&#10004;</i></label>
        </div>
    </div>
</template>

<script>
import { includes } from '../databus'

export default {
    setup(){   
        const alphabet = [
            'а', 'б', 'в', 'г', 
            'д', 'е', 'ж', 'з', 
            'и', 'й', 'к', 'л', 
            'м', 'н', 'о', 'п', 
            'р', 'с', 'т', 'у', 
            'ф', 'х', 'ц', 'ч', 
            'ш', 'щ', 'ъ', 'ы', 
            'ь', 'э', 'ю', 'я'
        ]

        return {
            alphabet,
            includes
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';

.includes {
    display: flex;
    width: 520px;
    margin: 0 auto;
    flex-wrap: wrap;

    div {
        position: relative;
        overflow: hidden;
        margin: 5px;
        border: 1px solid $border_color1;
        border-radius: 5px;
        cursor: pointer;
    }

    input:checked + label{
        box-shadow: inset 0 0 5px rgba(0, 202, 30, 0.4);
        i {
            visibility: visible;
        }
    }

    input {
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    label {
        display: inline-block;
        width: 35px;
        padding: 0 0 5px;
        user-select: none;
        vertical-align: middle;
        text-align: center;
        font-size: 25px;
    }

    i {
        visibility: hidden;
        display: inline-block;
        position: absolute;
        top: -5px;
        right: 0;
        text-align: center;
        color: rgb(0, 202, 30);
        opacity: 0.6;
        font-size: 12px;
        font-style: normal;
        font-weight: bold;
    }
}
</style>