import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-refund-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './refund-about.html',
  styleUrl: './refund-about.css',
})
export class RefundAbout {
  returnSteps = [
    {
      step: '01',
      title: 'Перевірте деталь',
      desc: 'Переконайтеся що товар підходить за умовами повернення.'
    },
    {
      step: '02',
      title: 'Зв’яжіться з менеджером',
      desc: 'Зателефонуйте за номером (066) 648-13-18 або напишіть у Viber і вкажіть номер замовлення.'
    },
    {
      step: '03',
      title: 'Надішліть товар',
      desc: 'Відправте посилку Новою Поштою або привезіть особисто до магазину в Миколаєві.'
    },
    {
      step: '04',
      title: 'Отримайте кошти',
      desc: 'Після огляду деталі повертаємо кошти на вашу картку протягом 1-3 робочих днів.'
    }
  ];
}
