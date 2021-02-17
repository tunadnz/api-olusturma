const express = require('express'); // Express Modülünü Tanımlayıp Uygulamamızı Tanımlıyoruz
const app = express();
const { port, port2 } = require('./database/data.json'); // Database Klasörünü Tanımlayıp Portlarımızı Tanımlıyoruz

// API Sitesinin Ayarları
app.get('/api/apiad', function(request , response) {
  // Örnek = https://proje-adi.com/api/apiad
   // JSON Olarak Siteye Yazdırmak İçin Verileri Tanımlıyoruz

   var veriler = {
     veri1: "Tuna",
     veri2: "Deniz"
   }
    // Artık Siteye Verileri JSON Formatında Yollayabiliriz.
    response.json(veriler)
});

  // Uygulamayı Başlatıyoruz
app.listen(port || port2) 
console.log(`http://localhost:${port || port2}`)
