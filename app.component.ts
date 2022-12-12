import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'list-jurnal';

  headers = ["ID", "TITLE", "ISBN", "AUTHOR"];

  rows = [
    {
      "ID" : "1",
      "TITLE" : "Based Design Mobile Learning Course on Android",
      "ISBN" : "1978-0524-2528-6374",
      "AUTHOR" : "LIRANTI RAHMELINA"
    },
    {
      "ID" : "2",
      "TITLE" : "Development Of Sales Application Using QR Code",
      "ISBN" : "1978-0524-2528-6374",
      "AUTHOR" : "RICKY AKBAR,HUSNIL KAMIL"
    },
    {
      "ID" : "3",
      "TITLE" : "Perancangan dan Implementasi Web Service pada Aplikasi Permainan",
      "ISBN" : "1978-0524-2528-6374",
      "AUTHOR" : "GILANG ARSYA PRIYATNA ZAMAN"
    },
    {
      "ID" : "4",
      "TITLE" : "Perancangan Augmented Reality Media Markerless Pol",
      "ISBN" : "1978-0524-2528-6374",
      "AUTHOR" : "ABRAHAM CHRISTOVER MANUPUTTY"
    },
    {
      "ID" : "5",
      "TITLE" : "Pengembangan SIG Berbasis Node.JS untuk Pemetaan Mesin dan Tracking",
      "ISBN" : "1978-0524-2528-6374",
      "AUTHOR" : "Rachmat Fajrin"
    }
  ]
}
