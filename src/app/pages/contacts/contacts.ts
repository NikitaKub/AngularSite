import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contacts',
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  phoneNumbers = [
    { number: '+38 (066) 648-13-18', operator: 'Vodafone (Основний)', link: 'tel:0666481318' },
    { number: '+38 (093) 609-16-02', operator: 'Lifecell (Додатковий)', link: 'tel:0936091602' }
  ];

  schedule = [
    { day: 'Пн – Пт', time: '08:00 – 17:00', isWorking: true },
    { day: 'Субота', time: '08:00 – 15:00', isWorking: true },
    { day: 'Неділя', time: 'Вихідний', isWorking: false }
  ];
}
