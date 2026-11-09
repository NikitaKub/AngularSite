import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contacts } from './pages/contacts/contacts';
import { Privacy } from './pages/privacy/privacy';
import { DeliveryPaymentAbout } from './pages/delivery-payment-about/delivery-payment-about';
import { RefundAbout } from './pages/refund-about/refund-about';
import { Discounts } from './pages/discounts/discounts';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contacts', component: Contacts},
    {path: 'privacy', component: Privacy},
    {path: 'delivery-payment-about', component: DeliveryPaymentAbout},
    {path: 'refund-about', component: RefundAbout},
    {path: 'discounts', component: Discounts}
];
