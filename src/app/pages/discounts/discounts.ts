import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-discounts',
  imports: [CommonModule, RouterLink],
  templateUrl: './discounts.html',
  styleUrl: './discounts.css',
})
export class Discounts {
  mainPrograms = [
    {
      title: 'Знижка для військовослужбовців',
      percent: '-5%',
      desc: 'Надаємо спеціальні знижки для захисників України та ветеранів.',
      howToGet: 'Знижку можна отримати при фізичній покупці в магазині, для того щоб отримати знижку слід підтвердити свій статус ветерана чи військовослужбовця.'
    },
    {
      title: 'Накопичувальна знижка для постійних клієнтів',
      percent: 'до -5%',
      desc: 'Купуйте запчастини за своїм номером телефону. Знижка закріплюється за вами назавжди після досягнення суми замовлень.',
      howToGet: 'Номер телефону автоматично є вашим номером у базі. Знижка враховується менеджером при кожному наступному замовленні.'
    }
  ];
}
