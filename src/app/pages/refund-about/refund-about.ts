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
      title: 'Зв’яжіться з менеджером',
      desc: 'Зателефонуйте за номером (066) 648-13-18 або напишіть нам, повідомте номер замовлення та причину повернення.'
    },
    {
      step: '02',
      title: 'Перевірте стан деталі',
      desc: 'Переконайтеся, що на запчастині немає слідів монтажу, мастила, а оригінальна коробка та стікери не пошкоджені.'
    },
    {
      step: '03',
      title: 'Надішліть товар',
      desc: 'Відправте деталь Новою Поштою (без післяплати) або особисто привезіть до нашого магазину в Миколаєві.'
    },
    {
      step: '04',
      title: 'Отримайте кошти',
      desc: 'Після огляду деталі на складі ми повертаємо гроші на вашу банківську картку протягом 1–3 робочих днів.'
    }
  ];
}
