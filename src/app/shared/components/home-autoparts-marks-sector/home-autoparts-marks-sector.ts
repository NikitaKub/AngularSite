import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-autoparts-marks-sector',
  imports: [CommonModule],
  templateUrl: './home-autoparts-marks-sector.html',
  styleUrl: './home-autoparts-marks-sector.css',
})
export class HomeAutopartsMarksSector {
  isExpanded = false;

  autoparts_marks = [
    {
      "name":"INA-FOR"
    }
  ];
  
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
