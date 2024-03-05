/**
 * bar.js
 * simple, elegant bar chart library
 * {date} - version 1.0
 * {url} -
 *
 * Copyright 2024 Gayeon Kim
 * Released under the MIT License
 * {license url}
 *
 *
 */
function BarChart(_a) {
    var targetId = _a.targetId, width = _a.width, height = _a.height, data = _a.data;
    var chart = this;
    // Chart Specifications
    chart.configureChart({ targetId: targetId, width: width, height: height, data: data });
    // Pre Operations
    chart.performPreOperations();
    // Prepare data
    chart.prepareData();
    // Draw Chart
    chart.drawChart();
}
BarChart.prototype.configureChart = function (_a) {
    var targetId = _a.targetId, width = _a.width, height = _a.height, data = _a.data;
    var chart = this;
    // Canvas Specifications com from outside
    chart.setCanvasParameters({
        targetId: targetId,
        width: width,
        height: height,
        data: data,
    });
    chart.setChartParameters();
};
BarChart.prototype.setCanvasParameters = function (_a) {
    var targetId = _a.targetId, width = _a.width, height = _a.height, data = _a.data;
    var chart = this;
    // Canvas Specifications com from outside
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
};
BarChart.prototype.setChartParameters = function () {
    var chart = this;
    // Axis Configurations
    chart.axisRatio = 10; // in terms of percentage
    chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
    chart.axisColor = '#b1b1b1';
    chart.axisWidth = 0.75;
    // Label Configurations
    chart.fontRatio = 3; // in terms of percentage
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = 300;
    chart.fontColor = '#666666';
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;
    // Guideline Configurations
    chart.guidelineColor = '#e5e5e5';
    chart.guidelineWidth = 0.5;
};
BarChart.prototype.performPreOperations = function () {
    var chart = this;
    // Create Canvas
    chart.createCanvas();
    // Get Data
    chart.handleData();
};
BarChart.prototype.createCanvas = function () {
    var chart = this;
    // Create Canvas
    var canvas = document.createElement('canvas');
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;
    // Append Canvas to target container
    var targetDiv = document.getElementById(chart.id);
    if (!targetDiv)
        return;
    targetDiv.innerHTML = ''; // clean container
    targetDiv.appendChild(canvas);
    // Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');
};
BarChart.prototype.handleData = function () {
    var chart = this;
    // Data sets
    chart.labels = [];
    chart.values = [];
    // Handle Data
    chart.data.forEach(function (item) {
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });
};
BarChart.prototype.prepareData = function () {
    var chart = this;
    // Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);
    // Axis Specification
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin; // bottom and top margins
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin; // left and right margins
    // Label Specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
};
BarChart.prototype.drawChart = function () {
    var chart = this;
    // Vertical Axis
    chart.drawVerticalAxis();
    // Vertical Labels
    chart.drawVerticalLabels();
    // Horizontal Axis
    chart.drawHorizontalAxis();
    // Horizontal Labels
    chart.drawHorizontalLabels();
    // Horizontal Guidelines
    chart.drawHorizontalGuidelines();
    // Vertical Guidelines
    chart.drawVerticalGuidelines();
    // Bars
    chart.drawBars();
};
BarChart.prototype.drawVerticalAxis = function () {
    var chart = this;
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin);
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();
};
BarChart.prototype.drawHorizontalAxis = function () {
    var chart = this;
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();
};
BarChart.prototype.drawVerticalLabels = function () {
    var chart = this;
    // Text Specifications
    var labelFont = "".concat(chart.fontStyle, " ").concat(chart.fontWeight, " ").concat(chart.verticalFontSize, " ").concat(chart.fontFamily);
    chart.context.font = labelFont;
    chart.context.textAlign = 'right';
    chart.context.fillStyle = chart.fontColor;
    // Scale Values
    var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) *
        chart.verticalLabelFreq;
    // Draw Labels
    for (var i = 0; i <= chart.itemsNum; i++) {
        var labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
        var verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRatio;
        var verticalLabelY = chart.verticalMargin + i * scaledVerticalLabelFreq;
        chart.context.fillText(labelText, verticalLabelX, verticalLabelY);
    }
};
BarChart.prototype.drawHorizontalLabels = function () {
    var chart = this;
    // Text Specifications
    var labelFont = "".concat(chart.fontStyle, " ").concat(chart.fontWeight, " ").concat(chart.verticalFontSize, " ").concat(chart.fontFamily);
    chart.context.font = labelFont;
    chart.context.textAlign = 'center';
    chart.context.textBaseline = 'top';
    chart.context.fillStyle = chart.fontColor;
    // Draw Labels
    for (var i = 0; i < chart.itemsNum; i++) {
        var horizontalLabelX = chart.horizontalMargin +
            i * chart.horizontalLabelFreq +
            chart.horizontalLabelFreq / 2;
        var horizontalLabelY = chart.height -
            chart.verticalMargin +
            chart.verticalMargin / chart.axisRatio;
        chart.context.fillText(chart.labels[i], horizontalLabelX, horizontalLabelY);
    }
};
BarChart.prototype.drawHorizontalGuidelines = function () {
    var chart = this;
    // Specifications
    chart.context.strokeStyle = chart.guidelineColor;
    chart.context.lineWidth = chart.guidelineWidth;
    var scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) *
        chart.verticalLabelFreq;
    for (var i = 0; i <= chart.itemsNum; i++) {
        var horizontalGuidelineStartX = chart.horizontalMargin;
        var horizontalGuidelineStartY = chart.verticalMargin + i * scaledVerticalLabelFreq;
        var horizontalGuidelineEndX = chart.horizontalMargin + chart.horizontalAxisWidth;
        var horizontalGuidelineEndY = chart.verticalMargin + i * scaledVerticalLabelFreq;
        chart.context.beginPath();
        chart.context.moveTo(horizontalGuidelineStartX, horizontalGuidelineStartY);
        chart.context.lineTo(horizontalGuidelineEndX, horizontalGuidelineEndY);
        chart.context.stroke();
    }
};
BarChart.prototype.drawVerticalGuidelines = function () {
    var chart = this;
    // Specifications
    chart.context.strokeStyle = chart.guidelineColor;
    chart.context.lineWidth = chart.guidelineWidth;
    for (var i = 0; i <= chart.itemsNum; i++) {
        var verticalGuidelineStartX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        var verticalGuidelineStartY = chart.height -
            chart.verticalMargin +
            chart.verticalMargin / chart.axisRatio;
        var verticalGuidelineEndX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        var verticalGuidelineEndY = chart.verticalMargin;
        chart.context.beginPath();
        chart.context.moveTo(verticalGuidelineStartX, verticalGuidelineStartY);
        chart.context.lineTo(verticalGuidelineEndX, verticalGuidelineEndY);
        chart.context.stroke();
    }
};
BarChart.prototype.drawBars = function () {
    var chart = this;
    for (var i = 0; i < chart.itemsNum; i++) {
        var _a = chart.createRandomRGBColor(), r = _a.r, g = _a.g, b = _a.b;
        var fillOpacity = 0.3;
        var fillColor = "rgba(".concat(r, ", ").concat(g, ",").concat(b, ",").concat(fillOpacity, ")");
        var borderColor = "rgba(".concat(r, ", ").concat(g, ",").concat(b, ")");
        var barX = chart.horizontalMargin +
            i * chart.horizontalLabelFreq +
            chart.horizontalLabelFreq / chart.axisRatio;
        var barY = chart.height - chart.verticalMargin;
        var barWidth = chart.horizontalLabelFreq -
            (2 * chart.horizontalLabelFreq) / chart.axisRatio;
        var barHeight = (-1 * chart.verticalAxisWidth * chart.values[i]) / chart.maxValue;
        chart.context.beginPath();
        chart.context.fillStyle = fillColor;
        chart.context.strokeStyle = borderColor;
        chart.context.rect(barX, barY, barWidth, barHeight);
        chart.context.stroke();
        chart.context.fill();
    }
};
BarChart.prototype.createRandomRGBColor = function () {
    var red = getRandomNum(0, 257);
    var green = getRandomNum(0, 257);
    var blue = getRandomNum(0, 257);
    return { r: red, g: green, b: blue };
};
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
