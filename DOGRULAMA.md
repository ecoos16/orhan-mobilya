# Orhan Mobilya — ayrı sayfa yapısı kontrolleri

Kontrol tarihi: 13 Ekim 2026. Bu kayıt yerel HTTP sunucusunda yapılan kontrolleri içerir. Canlı Netlify kontrolü push sonrasında yapılır ve teslim özetinde ayrıca bildirilir.

## Yerel tarayıcı kontrolleri

Chrome başsız tarayıcıda `/`, `/hizmetler/`, `/uygulamalar/`, `/malzemeler/`, `/uretim-sureci/` ve `/iletisim/` sayfaları **320, 375, 390, 768 ve 1440 px** genişliklerinde kontrol edildi: toplam 30 sayfa / genişlik birleşimi.

- Hiçbirinde yatay taşma görülmedi. Mobil ve masaüstü ekran görüntüleri incelendi; açılış galerisindeki fotoğraflar kırpılmadan gösterilir.
- Her sayfaya doğrudan giriş ve yenileme çalıştı. Menü bağlantıları gerçek ayrı HTML sayfalarına gider. Ana sayfadaki “İşlerimizi keşfedin” ve logo bağlantısı gerçek gezinme ile kontrol edildi; yeni sayfa üstten açıldı.
- Her sayfada tek h1, özgün title ve description, kendi adresine işaret eden canonical ve aktif menü bağlantısında `aria-current="page"` bulundu.
- Mobil menü Enter ile açıldı, Tab ile bağlantılara geçildi, Escape ile kapandı ve odağı menü düğmesine döndürdü. Bağlantıya tıklayınca kapanma ve `aria-expanded` güncellemesi kontrol edildi.
- Açılış galerisinin önceki/sonraki düğmeleri, dört göstergesi, sağ/sol ok ve Home tuşu, ilk/son fotoğraf arasında geçişi kontrol edildi. Emüle edilmiş dokunmatik kaydırma bir sonraki fotoğrafa geçti. Bekleme sırasında otomatik ilerleme olmadı.
- Uygulamalar sayfasındaki altı farklı fotoğrafın her biri orijinal JPG ile büyüdü; kapatma düğmesi ve Escape ile kapandı. Sayfanın kaydırma kilidi kaldırıldı.
- İlk açılış fotoğrafı öncelikli ve eager, diğer açılış fotoğrafları ve uygulamalar fotoğrafları lazy olarak tanımlı. WebP kaynakları tarayıcı tarafından seçildi.
- 375 ve 1440 px'de, 2× piksel yoğunluğuyla, görseller engellenmişken ve yüklenmişken açılış galerisi, uygulama kartları ve MDF görselinin boyutları / sayfa konumları karşılaştırıldı. Görsel yüklenmesi nedeniyle değişiklik görülmedi.
- Tarayıcıda JavaScript hatası ve yerel kaynak 404 yanıtı görülmedi.

## Dosyalar ve bağlantılar

- HTML'deki yerel bağlantılar, `src`, `srcset`, fotoğraf büyütme kaynakları, CSS / JavaScript, favicon, robots ve sitemap dâhil **56 benzersiz adres HTTP 200** döndürdü.
- Telefon (`tel:+905327612215`), WhatsApp (`https://wa.me/905327612215`) ve mevcut Bursa Yıldırım adresini içeren Google Maps bağlantısı korundu. Gerçek arama veya mesaj gönderilmedi.
- Önceden depoda bulunan **20 JPG dosyası** Git'teki sürümleriyle SHA-256 düzeyinde karşılaştırıldı ve değişmediği doğrulandı. Önceki WebP türevleri de korundu.
- Sitemap'te altı adres bulunur. Canonical ve robots sitemap bağlantısı `https://orhan-mobilya-bursa.netlify.app` adresini kullanır.
- Netlify yapılandırması depo kökünü yayınlar; SPA fallback veya tüm yolları ana sayfaya yönlendiren kural yoktur.

## Gerçek arka planda kontrast

Tarayıcıda hesaplanmış metin rengi ve saydam ataların altındaki gerçek arka plan rengi alınarak WCAG bağıl parlaklık formülüyle ölçüldü. Hedef metinlerin her biri beş genişlikte de en az 4,5:1 sağlayarak geçti.

| Metin | Metin rengi | Arka plan | Kontrast |
| --- | --- | --- | --- |
| Malzemeler açıklaması | `#59665b` | `#e8ece6` | 5,05467:1 |
| 01 / 02 / 03 numaraları | `#805d40` | `#e8ece6` | 4,93926:1 |
| ATÖLYEMİZ | `#805d40` | `#f5f3ee` | 5,32305:1 |

## Kontrol sınırları

PageSpeed / Lighthouse puanı yeniden ölçülmedi; önceki 97 / 100 / 95 değerlerinin değiştiği iddia edilmiyor. Dokunmatik davranış tarayıcı emülasyonuyla kontrol edildi; fiziksel iOS / Android cihazında veya WhatsApp / telefon uygulamasının içinde kontrol yapılmadı. Harita bağlantısının mevcut hedefi korundu; işletme konumu yerinde doğrulanmadı.

MDF fotoğrafının kullanım izni kaynak sayfasında doğrulandı. Akrilik ve lake için uygun lisanslı gerçek kapak fotoğrafı doğrulanamadı; fotoğraf yerine tipografi kullanıldı. Ayrıntılar [GORSEL-KAYNAKLARI.md](GORSEL-KAYNAKLARI.md) dosyasındadır.
