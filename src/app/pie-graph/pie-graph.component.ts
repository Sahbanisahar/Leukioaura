import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent {
  chartOptions = {
	  animationEnabled: true,
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
    showInLegend: true,
		dataPoints: [
		  { y: 42, name: "in treatment" },
		  { y: 11, name: "relapse" },
		  { y: 40, name: "recoved" },
		  { y: 7, name: "death" }
		]
	  }]
	}	
}
