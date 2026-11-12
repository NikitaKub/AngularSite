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
      desc: 'Зателефонуйте за номером (066) 648-13-18 або напишіть у Viber і вкажіть номер замовлення.'
    },
    {
      step: '02',
      title: 'Перевірте деталь',
      desc: 'Переконайтеся у збереженні заводської коробки, стікерів та відсутності слідів установки чи мастила.'
    },
    {
      step: '03',
      title: 'Надішліть товар',
      desc: 'Відправте посилку Новою Поштою (без післяплати) або привезіть особисто до магазину в Миколаєві.'
    },
    {
      step: '04',
      title: 'Отримайте кошти',
      desc: 'Після огляду деталі повертаємо кошти на вашу картку протягом 1–3 робочих днів.'
    }
  ];

  returnConditions = [
    {
      icon: '📦',
      title: 'Збережено пакування',
      desc: 'Коробка виробника (INA-FOR, Bosch, CTR тощо) ціла, є всі заводські пломби й стікери.'
    },
    {
      icon: '✨',
      title: 'Без слідів монтажу',
      desc: 'Деталь не ставилася на авто, немає слідів затискання болтів, подряпин та бруду.'
    },
    {
      icon: '🧾',
      title: 'Повна комплектація',
      desc: 'Усі шайби, сальники, кріплення та інструкції збережені в повному обсязі.'
    }
  ];
}
