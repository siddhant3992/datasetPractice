function getFiles(path) {
    let fileItems = [];
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            fileItems = JSON.parse(this.responseText);
        }
    };
    request.open("GET", path, false);
    request.send();
    return fileItems;
}

//----------------------matches per year----------------------//

function matchesPerYearGraph() {
    let matchData = getFiles("../jsonFile/matchPerYear.json");
    let chartType = "column";
    let chartTitle = "IPL Matches Per Year";
    let chartXaxis = {
        type: "category",
        labels: {
            rotation: -45,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    };

    let chartYaxis = {
        min: 0,
        title: {
            text: "Matches Per Year"
        }
    };

    let chartData = [{
        "colorByPoint": true,
        data: matchData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:1f}",
            y: 10,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    }];
    let chartLegend = {
        enabled: false
    };
    let plotOptions = {
        series: {
            stacking: 'normal'
        }
    };
    plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions);
}

//--------------Match winner per year--------------------//

function matchWinnerPerYearGraph() {
    let matchData = getFiles("../jsonFile/matchWinnerPerYear.json");
    let chartType = "bar";
    let chartTitle = "Matches win by teams per year";
    let years = [];
    for (let i = 2017; i > 2007; i--) {
        years.push(i);
    };

    let chartXaxis = {
        categories: years
    };

    let chartYaxis = {
        min: 0,
        title: {
            text: 'Number of matches win'
        }
    };
    let plotOptions = {
        series: {
            stacking: 'normal'
        }
    };
    let chartData = matchData;
    let chartLegend = {
        reversed: true
    };
    plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions);
}

//--------extra Runs Per Team----------//

function extraRunsPerTeamGraph() {
    let matchData = getFiles("../jsonFile/extraRunsPerTeam.json");
    let chartType = "column";
    let chartTitle = "Extra Runs of Team Per Year";
    let chartXaxis = {
        type: "category",
        labels: {
            rotation: -45,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    };

    let chartYaxis = {
        min: 0,
        title: {
            text: "Extra Runs of Team Per Year"
        }
    };

    let chartData = [{
        "colorByPoint": true,
        data: matchData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:1f}",
            y: 10,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    }];
    let chartLegend = {
        enabled: false
    };
    let plotOptions = {
        series: {
            stacking: 'normal'
        }
    };
    plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions);
}

//-----------------Top economic bowlers------------------//

function topEconomicalBowlersGraph() {
    let matchData = getFiles("../jsonFile/topEconomicalBowlers.json");
    let chartType = "column";
    let chartTitle = "Top Economical Bowlers";
    let chartXaxis = {
        categories: matchData["bowler"],
        crosshair: true
    };

    let chartYaxis = {
        min: 0,
        title: {
            text: "Top Economical Bowlers"
        }
    };

    let chartData = [{
        "colorByPoint": true,
        name: 'Teams Extra runs',
        data: matchData["economy"],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:1f}",
            y: 10,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }

    }];
    let chartLegend = {
        enabled: false
    };
    let plotOptions = {
        series: {
            stacking: 'normal'
        }
    };
    plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions);
}

//--------------top ten bowlers as per total wicket------------------//

function topTenBowlersGraph() {
    let matchData = getFiles("../jsonFile/topTenBowlers.json");
    let chartType = "column";
    let chartTitle = "Top Ten Wicket taking Bowlers";
    let chartXaxis = {
        type: "category",
        labels: {
            rotation: -45,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    };

    let chartYaxis = {
        min: 0,
        title: {
            text: "Top Ten Bowlers"
        }
    };

    let chartData = [{
        "colorByPoint": true,
        data: matchData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:1f}",
            y: 10,
            style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
            }
        }
    }];
    let chartLegend = {
        enabled: false
    };
    let plotOptions = {
        series: {
            stacking: 'normal'
        }
    };
    plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions);
}

//---------------ploting graph for all charts------------------//

function plotGraph(chartType, chartTitle, chartXaxis, chartYaxis, chartData, chartLegend, plotOptions) {
    let chart = Highcharts.chart("container", {
        chart: {
            type: chartType
        },
        title: {
            text: chartTitle
        },
        xAxis: chartXaxis,
        yAxis: chartYaxis,
        legend: chartLegend,
        plotOptions: plotOptions,
        series: chartData,

    });
}
window.onload(matchesPerYearGraph());