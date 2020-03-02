<template>
  <div id="app">
    <label>
      <input type="checkbox" v-model="disabled" />
      Disabled?
    </label>
    <h3>HTML inputs</h3>
    <div v-disabled:input-disabled="disabled">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        >
        <select disabled class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
          <label class="form-check-label" for="inlineCheckbox2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          >
          <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
        </div>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile">
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          >
          <label class="form-check-label" for="exampleRadios1">Default radio</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          >
          <label class="form-check-label" for="exampleRadios2">Second default radio</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            disabled
          >
          <label class="form-check-label" for="exampleRadios3">Disabled radio</label>
        </div>
        <select multiple class="form-control" id="exampleFormControlSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <input type="button" class="btn btn-secondary" value="Input button">
        <button type="button" class="btn btn-primary">Primary</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import disabled from './directives/disabled';

Vue.directive('disabled', disabled);

export default Vue.extend({
  name: 'App',
  data() {
    return {
      disabled: false,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
