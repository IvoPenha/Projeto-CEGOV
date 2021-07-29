import { React } from "react";
import "https://canvasjs.com/assets/script/canvasjs.min.js";

export default(props)=>
<>
{
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "My First Chart in CanvasJS"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();
}
}
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
</body>          
</>