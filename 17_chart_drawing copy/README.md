# bar-js

Lightweight, configurable and simple bar chart library in JavaScript

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()

## Description

bar.js is a Canvas based simple JavasScript Bar Chart Library to provide a configurable, lightweight and dependency-free experience.

![](https://github.com/seoulsaram/canvas-basic/blob/main/17_chart_drawing%20copy/bar.png?raw=true)

## Installation

Download the `bar.min.js` and include it in your project.

```html
<script src="bar.min.js"></script>
```

## Usage

To create the bar chart, you need a block level container like a div or p.

```html
<div id="chart">This will be bar chart!</div>
```

Then you can create the BarChart object in your JavaScript file.

```js
const barChart = new BarChart({ chartId, chartWidth, chartHeight, data });
```

### Parameters

- `chartId - containerId (String)`
  Defines the id of container like 'chart'
- `chartWidth (Integer)`
  Defines the width of the chart like 500
- `chartHeight (Integer)`
  Defines the height of the chart like 400
- `data (Object Array)`
  Defines the data objects. The objects should have 2 key-value pairs : label and value.
  Example data:
  ```js
  const data = [
    { label: 'Jan', value: 123 },
    { label: 'Feb', value: 200 },
    { label: 'March', value: 55 },
    { label: 'April', value: 0 },
    { label: 'May', value: 12 },
  ];
  ```

## Licence

[MIT](LICENCE.md) © [GaYeonKim](https://github.com/seoulsaram)
