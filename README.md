# Orhan Mobilya

HTML, CSS ve JavaScript ile hazırlanmış, altı gerçek HTML sayfasından oluşan statik site. Paket kurulumu veya derleme gerektirmez. Mevcut canlı adres: https://orhan-mobilya-bursa.netlify.app/

| Adres | Dosya |
| --- | --- |
| `/` | `index.html` |
| `/hizmetler/` | `hizmetler/index.html` |
| `/uygulamalar/` | `uygulamalar/index.html` |
| `/malzemeler/` | `malzemeler/index.html` |
| `/uretim-sureci/` | `uretim-sureci/index.html` |
| `/iletisim/` | `iletisim/index.html` |

Her sayfada navbar ve footer statik HTML olarak bulunur. Menü veya footer değiştiğinde altı HTML dosyasını birlikte güncelleyin. Sayfalarda özgün title, meta description, tek ana h1 ve kendisine işaret eden canonical vardır. Navbar bağlantıları gerçek sayfaları açar; aktif bağlantıda `aria-current="page"` kullanılır.

## Lokal çalıştırma

Bu klasörde terminal açın:

```powershell
py -m http.server 5500 --bind 127.0.0.1
```

`py` yoksa `python` kullanın. http://localhost:5500 adresini açın. Sunucuyu durdurmak için `Ctrl+C` kullanın.

## Netlify'de yayınlama

`netlify.toml` dosyasında yayın klasörü depo kökü (`.`), build komutu ise boş olarak tanımlıdır. Framework veya SPA fallback kullanılmaz: her adres kendi klasöründeki `index.html` dosyasından sunulur. Alt sayfalara doğrudan giriş ve yenileme için yönlendirme kuralı gerekmez. `/* /index.html 200` gibi tüm adresleri ana sayfaya çeviren bir kural eklemeyin.

Dosya ve bağlantı yolları `/assets/...`, `/style.css` ve `/script.js` biçiminde site köküne göre verilir. Yerel kontrolde proje kökünden HTTP sunucusu başlatın; dosyayı `file://` üzerinden açmayın. Bu yapı Netlify alan adının kökünde yayınlanır; GitHub Pages'in `/orhan-mobilya/` alt yoluna göre hazırlanmamıştır.

`main` dalına push, depo Netlify'de bu dala bağlıysa otomatik yayınlamayı başlatır. Push'ın başarılı olması tek başına Netlify yayınının tamamlandığını göstermez; canlı sayfaların yanıtlarını ayrıca kontrol edin.

Özel alan adı bağlanırsa altı sayfadaki canonical bağlantılarını, `sitemap.xml` ve `robots.txt` içindeki adresleri birlikte güncelleyin.

## Görseller ve etkileşimler

Açılış galerisinde mutfak, gardırop, TV ünitesi ve portmanto fotoğrafları bulunur. Otomatik oynatma yoktur. Telefonda doğal kaydırma, önceki/sonraki düğmeleri, konum göstergeleri ve galerinin odağı üzerindeyken sağ/sol ok, Home ve End tuşları kullanılabilir. Görseller `object-fit: contain` ile kırpılmadan, sabit yükseklikte gösterilir. Hareketi azaltma tercihine uyulur.

İlk açılış fotoğrafı `loading="eager"` ve `fetchpriority="high"` kullanır. Diğer galeri fotoğrafları gecikmeli yüklenir. WebP kaynakları 320, 480, 640, 900 ve orijinal genişlik seçeneklerinden oluşur; gereksiz büyütme yapılmaz. Orijinal JPG dosyaları korunur ve uygulamalar sayfasındaki fotoğraf büyütmede kullanılır. Görsellere `width` / `height`, kartlara `aspect-ratio` ile yer ayrılır.

Malzeme görsellerinin kaynak, izin, fotoğrafçı ve türev bilgileri [GORSEL-KAYNAKLARI.md](GORSEL-KAYNAKLARI.md) dosyasındadır. MDF fotoğrafı temsili olarak işaretlenmiştir; akrilik ve lake kartları uygun lisanslı fotoğraf doğrulanamadığı için tipografi kullanır.

## Dosyalar ve son kontrol

- `index.html` ve alt sayfa klasörleri: Sayfa içerikleri, ortak navbar ve footer.
- `style.css`: Tasarım ve mobil görünüm.
- `script.js`: Mobil menü, açılış galerisi ve fotoğraf büyütme.
- `assets/`: Orijinal fotoğraflar ve favicon; tamamını yükleyin.
- `sitemap.xml`, `robots.txt`: Altı sayfanın arama motoru adresleri.
- `netlify.toml`: Statik yayın klasörü; SPA fallback içermez.
- `.gitignore`: Yerel araç dosyalarını ve günlükleri dışarıda tutar.

Telefon ve WhatsApp hedefi: **+90 532 761 22 15**. Harita bağlantısı mevcut atölye adı ve adresini arar; URL biçimi [Google Maps belgelerine](https://developers.google.com/maps/documentation/urls/get-started) uygundur.

Tarayıcı kontrol sonuçları [DOGRULAMA.md](DOGRULAMA.md) dosyasındadır. Fiziksel telefonda WhatsApp / telefon uygulamasının açılmasını ve harita konumunu ayrıca kontrol edebilirsiniz; otomatik kontroller arama veya mesaj göndermez.
