import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-about-sector',
  imports: [CommonModule],
  templateUrl: './home-about-sector.html',
  styleUrl: './home-about-sector.css',
})
export class HomeAboutSector {
  mapUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    const rawUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.8086466547489!2d32.03054307393948!3d46.95742396945003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5cb3248539091%3A0xf7b591f55bc2d378!2z0IbQvdGC0LXRgCDQkNC30ZbRjw!5e0!3m2!1suk!2sua!4v1789065920077!5m2!1suk!2sua";
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}