import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-marks-sector',
  imports: [CommonModule],
  templateUrl: './home-marks-sector.html',
  styleUrl: './home-marks-sector.css',
})
export class HomeMarksSector {
  isExpanded = false;

  car_marks = [
    {
      "path":"/marks_photos/mark0.png",
      "alt":"mazda_mark_photo",
      "name":"MAZDA"
    },
    {
      "path":"/marks_photos/mark1.png",
      "alt":"mitsubishi_mark_photo",
      "name":"MITSUBISHI"
    },
    {
      "path":"/marks_photos/mark2.png",
      "alt":"geely_mark_photo",
      "name":"GEELY"
    },
    {
      "path":"/marks_photos/mark3.png",
      "alt":"kia_mark_photo",
      "name":"KIA"
    },
    {
      "path":"/marks_photos/mark4.png",
      "alt":"byd_mark_photo",
      "name":"BYD"
    },
    {
      "path":"/marks_photos/mark5.png",
      "alt":"chery_mark_photo",
      "name":"CHERY"
    },
    {
      "path":"/marks_photos/mark6.png",
      "alt":"GWM_mark_photo",
      "name":"GREAT WALL"
    },
    {
      "path":"/marks_photos/mark7.png",
      "alt":"hyundai_mark_photo",
      "name":"HYUNDAI"
    },
    {
      "path":"/marks_photos/mark8.png",
      "alt":"daewoo_mark_photo",
      "name":"DAEWOO"
    }
  ];

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
