const loadInflucard = () => {
    return new Promise((resolve, reject) => {
        const setValue = (value) => {
            document.querySelector("#" + value).textContent += json["influcard"][value];
        };

        const setPic = (value) => {
            document.querySelector("#" + value).style.backgroundImage = "url(" + json["influcard"][value] + ")";
        };

        const setIcon = (value) => {
            const classes = json["influcard"][value].split(" ");
            const elements = document.querySelectorAll("." + value);
            elements.forEach(element => {
                classes.forEach(className => {
                    element.classList.add(className);
                });
            });
        };

        const setGender = (value) => {
            let gender;
            if (json["influcard"][value] == 0) {
                gender = "Hombre";
            }
            if (json["influcard"][value] == 1) {
                gender = "Mujer";
            }
            document.querySelector("#" + value).textContent = gender;
        };

        const setDonut = (value, color) => {
            const percent = parseInt(json["influcard"][value]);
            const pieChartElement = document.querySelector(`#${value} .pie-chart`);
            const gradientDegrees = percent * 3.6;
            const gradientColors = `${color} 0deg, ${color} ${gradientDegrees}deg, white ${gradientDegrees}deg`;
            const conicGradient = `conic-gradient(${gradientColors})`;
            const pieChartValue = document.querySelector(`#${value} .pie-chart__value`);
            pieChartValue.textContent = percent + "%";
            pieChartElement.style.background = conicGradient;
            const titleElement = document.querySelector(`#${value} h5`);
            titleElement.textContent = value;
            titleElement.style.color = color;
        };

        setDonut("reach", "orange");
        setDonut("relevance", "green");
        setDonut("resonance", "blue");

        setPic("account_picture");
        setIcon("rrss_icon");
        setValue("name");
        setValue("username");
        setValue("age");
        setGender("gender");
        setValue("country");
        setValue("lastupdate");

        document.querySelector("#audience_tab").innerHTML = json["audience_tab"];
        document.querySelector("#posts_tab").innerHTML = json["posts_tab"];
        document.querySelector("#performance_tab").innerHTML = json["performance_tab"];

        am5.ready(genderChartDoughnut);
        am5.ready(categoriesChartDoughtnut);
        piePostHourRange();
        barEngagementHourRate();
        setFlags();

        resolve();
    });
};
