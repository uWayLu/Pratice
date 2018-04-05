<template>
    <li>
        <label :style="labelStyle">
            <input type="checkbox" v-model="item.done" @change="$emit('done')">{{ item.label }}
        </label>
        <button @click="$emit('remove')">Del</button>
    </li>
</template>

<style scoped>
li {
  list-style: none;
}
label,
input,
button {
  vertical-align: middle;
}
button {
  cursor: pointer;
  background: none;
  border: none;
  appearance: none;
  color: red;
}
</style>

<script>
export default {
  props: ["item"],
  computed: {
    labelStyle() {
      return this.item.done ? { textDecoration: "line-through" } : {};
    }
  }
};
</script>