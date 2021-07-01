<template>
    <div>
        <h1>UntouchedClassComponentJavascriptPage</h1>
        <p>
            Counter's value is
            <span class="counter">{{ counter }}</span
            >.
        </p>
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class UntouchedClassComponentJavascriptPage extends Vue {
    counter = 0;

    incrementCounter() {
        this.counter += 1;
    }
}
</script>
