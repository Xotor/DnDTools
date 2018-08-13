<template>
  <div id="speeds">
    <h1>Map Travel Pace</h1>
    <table id="speedTable">
      <tr>
        <th>Mapsize</th>
        <th colspan="3">Scale</th>
        <th>Slow</th>
        <th>Normal</th>
        <th>Fast</th>
      </tr>
      <tr>
        <td>Dungeon</td>
        <td>1 hex</td>
        <td>3 m</td>
        <td>10 ft</td>
        <td>20 hex/min</td>
        <td>30 hex/min</td>
        <td>40 hex/min</td>
      </tr>
      <tr>
        <td>City</td>
        <td>1 hex</td>
        <td>30 m</td>
        <td>100 ft</td>
        <td>02 hex/min</td>
        <td>03 hex/min</td>
        <td>04 hex/min</td>
      </tr>
      <tr>
        <td rowspan="2">Province</td>
        <td rowspan="2">1 hex</td>
        <td rowspan="2">2 km</td>
        <td rowspan="2">1 mi</td>
        <td>
          <div>02 hex/hr</div>
        </td>
        <td>
          <div>03 hex/hr</div>
        </td>
        <td>
          <div>04 hex/hr</div>
        </td>
      </tr>
      <tr>
        <td>
          <div>18 hex/day</div>
        </td>
        <td>
          <div>24 hex/day</div>
        </td>
        <td>
          <div>30 hex/day</div>
        </td>
      </tr>
      <tr>
        <td rowspan="2">Kingdom</td>
        <td rowspan="2">1 hex</td>
        <td rowspan="2">10 km</td>
        <td rowspan="2">6 mi</td>
        <td>
          <div>1/3 hex/hr</div>
        </td>
        <td>
          <div>1/2 hex/hr</div>
        </td>
        <td>
          <div>2/3 hex/hr</div>
        </td>
      </tr>
      <tr>
        <td>
          <div>3 hex/day</div>
        </td>
        <td>
          <div>4 hex/day</div>
        </td>
        <td>
          <div>5 hex/day</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Speeds',
  data () {
    return {
      mapsize: [ {
        name: 'Dungeon',
        game: { value: 1, name: 'Square', unit: 'sq' },
        metric: { value: 3, name: 'Meter', unit: 'm' },
        imperial: { value: 10, name: 'Feet', unit: 'ft' },
        speed: {
          slow: 20,
          normal: 30,
          fast: 40,
          name: 'Minute',
          unit: 'min'
        }
      }, {
        name: 'City',
        game: { value: 1, name: 'Square', unit: 'sq' },
        metric: { value: 30, name: 'Meter', unit: 'm' },
        imperial: { value: 100, name: 'Feet', unit: 'ft' },
        speed: {
          slow: 2,
          normal: 3,
          fast: 4,
          name: 'Minute',
          unit: 'min'
        }
      }, {
        name: 'Province',
        game: { value: 1, name: 'Hexagon', unit: 'hex' },
        metric: { value: 2, name: 'Kilometer', unit: 'km' },
        imperial: { value: 1, name: 'Mile', unit: 'mi' },
        speed: {
          slow: 2,
          normal: 3,
          fast: 4,
          name: 'Hour',
          unit: 'hr'
        },
        day_speed: {
          slow: 18,
          normal: 24,
          fast: 30,
          name: 'Day',
          unit: 'day'
        }
      }]
    }
  }
}
</script>

<style scoped>
#speeds > h1 {
  background-color: #00CCCC;
  color: #004488;
  text-align: center;
  margin-top: 0.80rem;
  margin-bottom: 0.80rem;
}
#speedTable {
  border: 0.125rem solid black;
  border-collapse: collapse;
  margin: 0.24rem;
}
#speedTable th, td {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border: 0.125rem solid #004488;
  border-collapse: collapse;
}
#speedTable th {
  text-align: center;
  background-color: #004488;
  color: #00CCCC;
}
#speedTable td {
  text-align: left;
}
#speedTable tr:nth-child(even) {
  background-color: #00CCCC;
  color: #004488;
}
#speedTable tr:nth-child(odd) {
  background-color: #FFFFFF;
  color: #004488;
}
</style>
