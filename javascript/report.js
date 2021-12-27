const hamburger = document.getElementById("hamburger");
const sideBar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
//   console.log("button clicked");
    sideBar.classList.toggle("active");
});


anychart.onDocumentReady(function() {
    // the data 
    var data = {
      header: ["Name", "Availability Report"],
      rows: [
        ["Sun", 70],
        ["Mon", 75],
        ["Tue", 80],
        ["Wed", 65],
        ["Thur", 60],
        ["Fri", 90],
        ["Sat", 85]
    ]};


      // create the chart
  var chart = anychart.column();

  // add data

  chart.data(data);

  // set the chart title
//   chart.title("The deadliest earthquakes in the XXth century");

  // draw
  chart.container("barchartone");
  chart.draw();

});


// api for chartone

const chartOne = document.getElementById("barchartone");


const getData =() => {
  axios.get("https://api.myhisa.com/api/disco-report/last7days/eko")
  .then(response =>{
    console.log(response);
  });
};

const sendData =() =>{
  axios.post("https://api.myhisa.com/api/disco-report/last7days/eko", 
  {
    // info here
  }
  )
  .then(response =>{
    console.log(response);
  })
  .catch (err =>{
    console.log(err, err.response);
  });
};

chartOne.addEventListener("click", getData);









  anychart.onDocumentReady(function () {
    // create variable for custom theme
    var customTheme = {
      // define settings for bar charts
      "column": {
        // set chart title
        "title": {
  "text": "Column Chart",
  // "enabled": true
        },
        // settings for default x axis
        "defaultXAxisSettings": {
  // set x axis title
  "title": {
    "text": "Days ",
    "enabled": true
  }
        },
        // settings for default y axis
        "defaultYAxisSettings": {
  // set axis name
  "title": {
    "text": "Availability",
    "enabled": true
  }
        }
      }
    };
  
    // data
    var data = [
      ["Sun", 80, 70],
      ["Mon", 75, 85],
      ["Tue", 70, 70],
      ["Wed", 85, 80],
      ["Thur", 90, 95],
      ["Fri", 55, 65],
      ["Sat", 80, 80]

 ];
  
    // apply custom theme
    anychart.theme(customTheme);
  
    // append a theme 
    anychart.appendTheme(additional_theme);
  
    // create chart
    var chart = anychart.column();
    // set data
    chart.data(data);
  
    // set container and draw chart
    chart.container("barchartwo");
    chart.draw();
  });
  
  additional_theme = {
    "column": {
      "title": {
        // "text": "Append a New Additional External Theme to a Column Chart",
        "fontSize": "14px",
        "fontColor": "#6a5d4d"        
      },
      "defaultXAxisSettings": {
        "title": {
  "fontSize": "14px",
  "fontColor": "#6a5d4d"        
        },        
        "labels": {
  "fontSize": "14px",
  "fontColor": "#6a5d4d"
        }
      },
      "defaultYAxisSettings": {
        "title": {
  "fontSize": "14px",
  "fontColor": "#6a5d4d"        
        },   
        "labels": {
  "fontSize": "14px",
  "fontColor": "#6a5d4d"
        }
      },
      "defaultFontSettings": {
        "fontSize": "14px",
        "fontColor": "#705335",
        "fontFamily": "Garamond"
      },
      "background":{
        "fill": "#999999 .1"
      },
      "palette": {
        "type": "distinct",
        // "items": ["#705335", "#8a9597"]
        "items": ["#F802B3", "#A101BB"]

      } 
    }
  };



