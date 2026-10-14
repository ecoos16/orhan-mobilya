# Orhan Mobilya — ayrı sayfa yapısı kontrolleri

## 14 Ekim 2026 — mobil ilk yükleme CLS düzeltmesi

- Yerel Edge/Chromium başsız tarayıcıda önbellek kapatılarak, 375 / 390 / 412 × 823 px mobil görünümde, 2× DPR, 4× CPU yavaşlatması, 150 ms ağ gecikmesi ve 200.000 bayt/sn indirme sınırıyla ölçüldü. İlk çizimi JavaScript başlangıcından ayırmak için test sunucusunda `script.js` yanıtına ayrıca 1.800 ms, fotoğraflara 900 ms gecikme uygulandı. Bunlar yerel ölçümlerdir; yeni bir PageSpeed raporu değildir.
- `PerformanceObserver` ile etkileşim dışı `layout-shift` olayları ve kareler boyunca header / main / galeri ölçüleri kaydedildi. Önceki sürümde üç genişlikte de **CLS 0,378693** oluştu: menü önce açık çiziliyor, ertelenmiş script düğmenin `hidden` niteliğini kaldırınca CSS menüyü kapatıyordu. Header **415 px → 73 px**, main başlangıcı **415 px → 73 px** değişiyordu. `main#main-content` tetikleyici değil, bu 342 px hareketten etkilenen öğeydi.
- Altı sayfanın head bölümünde, stil dosyasından önce senkron olarak `js` sınıfı belirleniyor. Mobil menünün kapalı başlangıcı ve 44 × 44 px düğmesi artık ilk çizimde CSS tarafından kuruluyor; ertelenmiş script başlangıç yerleşimini değiştirmiyor. JavaScript kapalıyken sınıf eklenmiyor ve menü bağlantıları açık kalıyor. Ana içerik veya fotoğraflar gizlenmedi / geciktirilmedi.
- Düzeltme sonrası aynı üç mobil soğuk yüklemede **CLS 0,000** ölçüldü; header ilk çizimden itibaren **73 px**, hero galeri **460 px** kaldı. İlk hero fotoğrafının HTML `width` / `height` değerleri ve CSS galeri ölçüleri zaten yükleme öncesinde alan ayırıyordu; bunların tasarımı değiştirilmedi. Harici web fontu veya font yüklenme olayı görülmedi; sistem fontları kullanılıyor.
- Diğer beş sayfada 375 px mobil soğuk yüklemede CLS **0,000** ölçüldü; menüyü açma ve Escape ile kapatma geçti. JavaScript kapalıyken bağlantıların görünür kaldığı doğrulandı. 375 ve 1440 px'de görseller engellenmiş / tamamen yüklenmiş durumların galeri ve kart ölçüleri birebir eşleşti; önceki sürümün yüklenmiş tasarım geometrisi de korundu. 320, 390, 768 ve 1440 px'de galeri okları, göstergeleri, 44 × 44 px dokunma alanları, klavye odağı ve gezinmesi; mobilde dokunarak kaydırma ve kategori fotoğrafı açma kontrolleri geçti.

## 13 Ekim 2026 kontrol kaydı

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
- Sitemap'te altı adres bulunur. Canonical ve robots sitemap bağlantısı `https://www.orhanmobilyabursa.com` adresini kullanır.
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
