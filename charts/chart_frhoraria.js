function piePostHourRange() {
  const jsonObject = JSON.parse(json["influcard"]["post_moment_json"]);

  function createDivWithClass(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
  }

  function createChartValue(valueType) {
    const divValue = createDivWithClass("chart_value");
    divValue.textContent = valueType;
    return divValue;
  }

  function createChartMtnBar(value, color) {
    const newBar = createDivWithClass("chart_mtn_bar");
    newBar.style.width = value + "%";
    newBar.style.background = color;
    return newBar;
  }

  function createChartMtnIcon(color) {
    const newIcon = createDivWithClass("chart_mtn_icon");
    newIcon.style.background = color;
    return newIcon;
  }

  const reversedData = jsonObject.reverse(); 

  for (const key in reversedData) {
    if (reversedData.hasOwnProperty(key)) {
      const value = reversedData[key];

      const newDiv = createDivWithClass("chart_mtn");
      const chartValue = createChartValue(value.type);
      const chartMtnBar = createChartMtnBar(value.value, value.color);
      const chartMtnIcon = createChartMtnIcon(value.color);

      chartMtnBar.appendChild(chartMtnIcon);
      newDiv.appendChild(chartValue);
      newDiv.appendChild(chartMtnBar);
      console.log("working");

      document.querySelector("#pie_post_hour_range").appendChild(newDiv);

      console.log(key);
      console.log(value.color);
    }
  }
}

