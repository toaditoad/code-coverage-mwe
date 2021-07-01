<template>
    <div>
        <h1>UntouchedClassComponentTypescriptPage</h1>
        <p>
            Counter's value is
            <span class="counter">{{ counter }}</span
            >.
        </p>
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class UntouchedClassComponentTypescriptPage extends Vue {
    counter = 0;

    incrementCounter(): void {
        this.counter += 1;
    }
}
</script>
