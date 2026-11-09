import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delivery-payment-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './delivery-payment-about.html',
  styleUrl: './delivery-payment-about.css',
})
export class DeliveryPaymentAbout {
  paymentMethods = [
    {
      icon: '💵',
      title: 'Накладений платіж',
      desc: 'Оплата готівкою або карткою при отриманні товару у відділенні Нової Пошти після огляду.'
    },
    {
      icon: '💳',
      title: 'Онлайн-оплата на сайті',
      desc: 'Швидка та безпечна оплата картками Visa / Mastercard, через Apple Pay або Google Pay без переплат.'
    },
    {
      icon: '🏦',
      title: 'Оплата за реквізитами (IBAN)',
      desc: 'Безготівковий розрахунок для фізичних осіб та організацій/СТО. Надаємо повний пакет документів.'
    },
    {
      icon: '🤝',
      title: 'Готівкою або карткою при самовивозі',
      desc: 'Розрахунок у нашому магазині в Миколаєві через касу або банківський термінал.'
    }
  ];
}
