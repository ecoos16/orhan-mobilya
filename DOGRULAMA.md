# Orhan Mobilya — ayrı sayfa yapısı kontrolleri

Kontrol tarihi: 13 Ekim 2026. Eski görünümün geri getirilmesinden sonraki kontrollerdir. Yakınlaştırma ölçeği 1 (%100) olarak ayarlandı; beş genişliğin ekran görüntüleri incelendi. Canlı kontrol push sonrasında yapılır ve teslim özetinde bildirilir.

## Yerel tarayıcı kontrolleri

Chrome başsız tarayıcıda `/`, `/hizmetler/`, `/uygulamalar/`, `/malzemeler/`, `/uretim-sureci/` ve `/iletisim/` sayfaları **320, 375, 390, 768 ve 1440 px** genişliklerinde kontrol edildi: toplam 30 sayfa / genişlik birleşimi.

- Hiçbirinde yatay taşma görülmedi. Açılış fotoğrafları eski büyük fotoğraf alanında dengeli kırpılır; geçişte alanın boyutu değişmedi. Ana sayfanın beş tam bölümü eski sırasıyla bulundu. Kartlar üç / iki / tek sütun ve ortak çerçeve oranı kullanır.
- Her sayfaya doğrudan giriş ve yenileme çalıştı. Menü bağlantıları gerçek ayrı HTML sayfalarına gider. Ana sayfadaki “İşlerimizi keşfedin” ve logo bağlantısı gerçek gezinme ile kontrol edildi; yeni sayfa üstten açıldı.
- Her sayfada tek h1, özgün title ve description, kendi adresine işaret eden canonical ve aktif menü bağlantısında `aria-current="page"` bulundu.
- Mobil menü Enter ile açıldı, Tab ile bağlantılara geçildi, Escape ile kapandı ve odağı menü düğmesine döndürdü. Bağlantıya tıklayınca kapanma ve `aria-expanded` güncellemesi kontrol edildi.
- Açılış galerisinin önceki/sonraki düğmeleri, dört göstergesi, sağ/sol ok ve Home tuşu, ilk/son fotoğraf arasında geçişi kontrol edildi. Emüle edilmiş dokunmatik kaydırma bir sonraki fotoğrafa geçti. Bekleme sırasında otomatik ilerleme olmadı.
- Ana sayfa ve uygulamalar sayfasındaki altı fotoğrafın her biri orijinal JPG ile büyüdü; düğme ve Escape ile kapandı. Kaydırma kilidi kaldırıldı.
- İlk açılış fotoğrafı öncelikli ve eager, diğer açılış fotoğrafları ve uygulamalar fotoğrafları lazy olarak tanımlı. WebP kaynakları tarayıcı tarafından seçildi.
- 375 ve 1440 px'de, 2× piksel yoğunluğuyla, görseller engellenmişken ve yüklenmişken açılış galerisi ve uygulama kartlarının boyutları / konumları karşılaştırıldı. Yüklenme nedeniyle değişiklik görülmedi.
- Tarayıcıda JavaScript hatası ve yerel kaynak 404 yanıtı görülmedi.

## Dosyalar ve bağlantılar

- HTML'deki yerel bağlantılar, `src`, `srcset`, fotoğraf büyütme kaynakları, CSS / JavaScript, favicon, robots ve sitemap dâhil **52 benzersiz adres HTTP 200** döndürdü.
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

MDF fotoğrafı ve türevleri kaldırıldı. Malzemeler iki yerde de fotoğrafsız üç kart düzenini kullanır. Önceki araştırmanın tarihçesi [GORSEL-KAYNAKLARI.md](GORSEL-KAYNAKLARI.md) dosyasındadır.
