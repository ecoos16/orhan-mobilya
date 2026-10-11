# Orhan Mobilya

HTML, CSS ve JavaScript ile hazırlanmış statik site. Paket kurulumu veya derleme gerektirmez. Gerçek ürün fotoğrafları `assets/` klasöründedir.

## Lokal çalıştırma

Bu klasörde terminal açın:

```powershell
py -m http.server 5500 --bind 127.0.0.1
```

`py` yoksa `python` kullanın. http://localhost:5500 adresini açın. Sunucuyu durdurmak için `Ctrl+C` kullanın.

## GitHub'a yükleme (yayınlamadan)

GitHub'da boş bir `orhan-mobilya` deposu oluşturun; README eklemeyin. Git kurulu bilgisayarınızda bu klasörde aşağıdaki komutları çalıştırın. `KULLANICI` yerine GitHub kullanıcı adınızı yazın.

```powershell
git init
git add index.html style.css script.js assets README.md .gitignore .nojekyll
git commit -m "Orhan Mobilya sitesini hazırla"
git branch -M main
git remote add origin https://github.com/KULLANICI/orhan-mobilya.git
git push -u origin main
```

İlk commit sırasında Git kimlik isterse `git config user.name "Adınız"` ve `git config user.email "E-postanız"` komutlarıyla bu depo için kimliğinizi ayarlayıp commit'i tekrarlayın. Bu talimatlar yeni ve boş depo içindir. Pages etkinleştirilmeden dosyaları yüklemek siteyi yayınlamaz.

## Hazır olduğunuzda GitHub Pages ile yayınlama

**Bu adımlar siteyi canlıya çıkarır; yayınlama kararı verdiğinizde uygulayın.**

1. Depoda **Settings → Pages** bölümünü açın.
2. **Build and deployment → Source: Deploy from a branch** seçin.
3. **Branch: main**, **Folder: /(root)** seçip **Save** düğmesine basın.
4. Yayın tamamlanınca Pages bölümündeki adresi açın. Beklenen adres: `https://KULLANICI.github.io/orhan-mobilya/`.

GitHub Free için herkese açık depo kullanın. `.nojekyll`, Jekyll işlemini atlar. Göreli dosya yolları depo alt yolunda da çalışır. Pages etkinleştirildikten sonra `main` dalına gönderilen değişiklikler yeniden yayınlanır.

Resmî kılavuz: [GitHub Pages yayın kaynağını yapılandırma](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Dosyalar ve son kontrol

- `index.html`: İçerik, menü ve iletişim bağlantıları.
- `style.css`: Tasarım ve mobil görünüm.
- `script.js`: Mobil menü ve fotoğraf büyütme.
- `assets/`: Orijinal fotoğraflar ve favicon; tamamını yükleyin.
- `.nojekyll`: GitHub Pages statik yayın işareti.
- `.gitignore`: Yerel araç dosyalarını ve günlükleri dışarıda tutar.

Telefon ve WhatsApp hedefi: **+90 532 761 22 15**. Harita bağlantısı mevcut atölye adı ve adresini arar; URL biçimi [Google Maps belgelerine](https://developers.google.com/maps/documentation/urls/get-started) uygundur.

Yayın öncesi kendi telefonunuzda menüyü, fotoğraf büyütmeyi, WhatsApp açılışını, arama ekranını ve haritada atölyenin doğru konumda olduğunu kontrol edin. Mesaj göndermeniz veya arama yapmanız gerekmez.
