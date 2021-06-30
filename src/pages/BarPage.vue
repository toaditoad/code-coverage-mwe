<template>
    <div>
        <h1>Bar Page</h1>
        <p>Random string is "{{ randomString }}".</p>
        <button @click="generateRandomString">Generate random string</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class BarPage extends Vue {
    randomString = 'default';

    generateRandomString(): void {
        this.randomString = Math.random().toString(36).substring(7);
    }
}
</script>
