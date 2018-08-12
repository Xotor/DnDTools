<template>
  <div id="distances">
    <h1>Distances</h1>
    <div class="inputDiv">
      <span class="inputSpan">
        <label for="calculateFrom">From</label>
        <input id="calculateFrom"
          v-model.number="calculateFrom"
          min="1"
          :max="calculateTo - 1"
          type="number"
          placeholder="1">
      </span>
    </div>
    <div class="inputDiv">
      <span class="inputSpan">
        <label for="calculateTo">To</label>
        <input id="calculateTo"
          v-model.number="calculateTo"
          :min="calculateFrom + 1"
          type="number"
          placeholder="1">
      </span>
    </div>
    <table id="distanceTable">
      <thead>
        <tr>
          <!-- eslint-disable-next-line -->
          <th v-for="key of distancesColumns">
            {{ key | capitalize }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input v-model.number="grid" type="number" placeholder="1">
          </td>
          <td>
            <input v-model.number="meter" type="number" placeholder="1.5">
          </td>
          <td>
            <input v-model.number="feet" type="number" placeholder="5">
          </td>
        </tr>
        <!-- eslint-disable-next-line -->
        <tr v-for="entry in distancesData">
          <!-- eslint-disable-next-line -->
          <td v-for="key in distancesColumns">
            {{entry[key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Distances',
  data () {
    return {
      calculateFrom: 1,
      calculateTo: 10,
      grid: 1,
      meter: 1.5,
      feet: 5,
      distancesColumns: ['grid', 'meter', 'feet'],
      distancesData: []
    }
  },
  created: function () {
    console.log('Distances.created')
    this.calculateDistances()
  },
  watch: {
    calculateFrom: function () {
      this.calculateDistances()
    },
    calculateTo: function () {
      this.calculateDistances()
    },
    grid: function (val) {
      console.log('watcher.grid')
      this.meter = this.grid * 1.5
      this.feet = this.grid * 5
    },
    meter: function (val) {
      console.log('watcher.meter')
      this.grid = this.meter / 1.5
      this.feet = this.grid * 5
    },
    feet: function (val) {
      console.log('watcher.feet')
      this.grid = this.feet / 5
      this.meter = this.grid * 1.5
    }
  },
  methods: {
    calculateDistances: function (event) {
      console.log('CalculateDistances')
      this.distancesData = []
      for (var i = this.calculateFrom; i <= this.calculateTo; i++) {
        this.distancesData.push({
          id: i,
          grid: i,
          meter: 1.5 * i,
          feet: 5 * i
        })
      }
      console.log('DistancesData: ' + this.distancesData.length)
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style scoped>
#distances > h1 {
  background-color: #00CCCC;
  color: #004488;
  text-align: center;
  margin-top: 0.80rem;
  margin-bottom: 0.80rem;
}
.inputDiv {
  padding: 0.75rem;
}
.inputSpan{
  padding: 0.5rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: 0.125rem solid #004488;
}
.inputSpan > label {
  display: inline-block;
  min-width: 4rem;
}
/* Distances */
#distanceTable {
  border: 0.125rem solid black;
  border-collapse: collapse;
  margin: 0.24rem;
}
#distanceTable th, td {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  text-align: left;
  border: 0.125rem solid #004488;
  border-collapse: collapse;
}

#distanceTable th{
  background-color: #004488;
  color: #00CCCC;
}

#distanceTable tr:nth-child(even) {
 background-color: #00CCCC;
  color: #004488;
}
#distanceTable tr:nth-child(odd) {
  background-color: #FFFFFF;
  color: #004488;
}
</style>
