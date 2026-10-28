// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.5 – 2.7: Sac Metal, Kaynaklı İmalat, Döküm ve Dövme)
// Modül 1 Standartlarında: Ayrıntılı Anlatım, Bilgi/Uyarı Kutuları, Formüller, Karar Tabloları, Özet ve Kendini Test Et Bölümleri

KITAP.bolum('m2', '2-5', `
<p class="giris">Otomasyon makinelerinin gövde kapakları, şase braketleri, kablo kanalları ve sensör montaj ayaklarının %70'i sac metalden üretilir. Sac metal tasarımı, ekranda 2 mm kalınlığında bir levhayı 90° bükmekten ibaret değildir. Sac büküldüğünde dış lifler uzar, iç lifler basılır; parçanın toplam açınım boyu değişir. Eğer <strong>K-Faktörünü ve büküm payını (Bend Deduction)</strong> hesaba katmazsanız, abkanttan çıkan parçanın delik eksenleri şaseye asla denk gelmez.</p>

<h2>Nötr Eksen ve K-Faktörü Mekaniği</h2>
<p>Sac bükülürken:</p>
<ul>
  <li>İç yüzey basma gerilmesine uğrar ve kısalır.</li>
  <li>Dış yüzey çekme gerilmesine uğrar ve uzar.</li>
  <li>İki yüzey arasında ne uzayan ne de kısalan teorik bir hat vardır; buna <strong>Nötr Eksen (Neutral Axis)</strong> denir.</li>
</ul>

<div class="formul">
K = t' / T &nbsp;&nbsp; (K-Faktörü)
<small>t': Nötr eksenin sacın iç yüzeyine olan mesafesi [mm], T: Sac kalınlığı [mm].<br>
Düz plaka halinde K = 0.5'tir (tam ortada). Büküm başladığında basma gerilmesi nedeniyle nötr eksen içe doğru kayar ve K tipik olarak <strong>0.30 ila 0.45</strong> arasına iner!</small>
</div>

<h2>Büküm Açınımı Formülü (Bend Allowance - BA)</h2>
<p>90° veya herhangi bir açıda bükülen bir sacın düz sac halindeki yay boyu (BA):</p>
<div class="formul">
BA = ( π / 180 ) · θ · ( R<sub>i</sub> + K · T )
<small>θ: Büküm açısı [Derece], R<sub>i</sub>: Büküm iç radyüsü [mm], T: Sac kalınlığı [mm], K: K-faktörü</small>
</div>

<p><strong>Toplam Açınım Boyu (L<sub>toplam</sub>):</strong></p>
<div class="formul">
L<sub>toplam</sub> = Flanş<sub>1</sub> + Flanş<sub>2</sub> - BD &nbsp;&nbsp; (BD: Bend Deduction / Büküm Düşmesi)
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Cinsi</th>
    <th>Sac Kalınlığı T</th>
    <th>Hava Bükümü İç Radyüsü R<sub>i</sub></th>
    <th>Tipik K-Faktörü</th>
    <th>Alt Kalıp V Açıklığı (V-Die)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Yumuşak Çelik (DC01 / St12)</strong></td>
    <td>1.0 – 2.0 mm</td>
    <td>R<sub>i</sub> ≈ 1.0 · T</td>
    <td><strong>0.38 – 0.42</strong></td>
    <td>V = 6 ila 8 × T</td>
  </tr>
  <tr>
    <td><strong>Yapı Çeliği (S235JR)</strong></td>
    <td>3.0 – 6.0 mm</td>
    <td>R<sub>i</sub> ≈ 1.2 · T</td>
    <td><strong>0.40 – 0.45</strong></td>
    <td>V = 8 ila 10 × T</td>
  </tr>
  <tr>
    <td><strong>Paslanmaz Çelik (AISI 304)</strong></td>
    <td>1.5 – 3.0 mm</td>
    <td>R<sub>i</sub> ≈ 1.5 · T</td>
    <td><strong>0.42 – 0.45</strong></td>
    <td>V = 8 ila 10 × T (Geri esneme fazladır)</td>
  </tr>
  <tr>
    <td><strong>Alüminyum (5754 / 5083)</strong></td>
    <td>2.0 – 4.0 mm</td>
    <td>R<sub>i</sub> ≈ 1.5 · T</td>
    <td><strong>0.35 – 0.40</strong></td>
    <td>V = 6 ila 8 × T</td>
  </tr>
</tbody>
</table>
</div>

<h2>Abkant Büküm İçin Kritik Geometrik Kurallar</h2>

<h3>1. Minimum Flanş Boyu (b<sub>min</sub>)</h3>
<p>Sacın abkant pres alt kalıbının (V kanalının) içine düşmeden iki omzuna sağlam basabilmesi için bükülen flanşın minimum bir boyu olmalıdır:</p>
<div class="formul">
b<sub>min</sub> ≥ ( V / 2 ) + 2 mm &nbsp;&nbsp; (Pratikte: <strong>b<sub>min</sub> ≥ 4 · T</strong>)
</div>
<p><em>Örnek: 3 mm sac büküyorsan, büküm flanşı en az <code>4 × 3 = 12 mm</code> olmalıdır. 6 mm'lik bir flanş bükmeye çalışırsan parça V kanalının içine kayar ve açı tutmaz!</em></p>

<h3>2. Büküm Çizgisine Yakın Delikler (Delik Bozulması Kuralı)</h3>
<p>Büküm bölgesinde sac aşırı plastik deformasyona uğrar. Eğer büküm çizgisine çok yakın bir delik varsa, delik daireselliğini kaybederek yumurta gibi ovalleşir ve uzar.</p>
<div class="formul">
L<sub>delik-mesafe</sub> ≥ 2.5 · T + R<sub>i</sub> &nbsp;&nbsp; (Büküm tanjantından deliğin kenarına minimum mesafe)
</div>
<div class="kutu ipucu"><span class="kb">Eğer Delik Mecburen Büküme Yakın Olmak Zorundaysa?</span>
Delik ile büküm çizgisi arasına lazerle ince bir <strong>yırtma yarığı (relief slot)</strong> açılır. Büküm gerilmesi bu yarıkta son bulur ve deliğe ulaşamaz; delik dairesel kalır!</div>

<h3>3. Büküm Rahatlatma Çentiği (Bend Relief)</h3>
<p>Bir sacın sadece bir kısmı bükülüp yanındaki kısım düz kalacaksa, iki bölgenin kesiştiği köşede sac yırtılır (malzeme yırtılması). Çözüm: Büküm kenarına genişliği <code>b ≥ T</code> ve derinliği <code>h ≥ R<sub>i</sub> + T</code> olan dikdörtgensel veya dairesel bir <strong>rahatlatma çentiği (Relief Cut)</strong> eklemektir.</p>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Bükümde nötr eksen içeri kayar; açınım boyu K-faktörü ve büküm payı (BD) ile hesaplanır.</li>
  <li>Minimum büküm flanş boyu en az 4 kat sac kalınlığı olmalıdır (<code>b ≥ 4 · T</code>).</li>
  <li>Büküm çizgisine $2.5T + R_i$ mesafesinden daha yakın delikler ovalleşir; gerekirse lazerle rahatlatma yarığı açılmalıdır.</li>
  <li>Lokal bükümlerde sac yırtılmasını önlemek için büküm köşelerine <strong>bend relief</strong> çentikleri eklenmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>2 mm DKP sacdan bükülen bir U profilin tabanındaki montaj deliği büküm çizgisine 3 mm mesafede çizilmiş. İmalatta ne olur?</summary>
<div>Delik deforme olarak ovalleşir (büküm uzaması deliği çeker). Cıvata delikten geçmez veya cıvata başı tam oturmaz. Kurala göre mesafe en az 2.5×2 + 2 = 7 mm olmalıydı. Ya delik ötelenmeli ya da araya lazerle yırtma yarığı atılmalıdır.</div></details>
<details><summary>CAD programında sac büküm açınımı alırken K-faktörünü yanlışlıkla 0.5 (tam ortada) bırakırsan lazer kesim sacı ne olur?</summary>
<div>Gerçekte nötr eksen içe kaydığı için (K ≈ 0.38–0.42), K=0.5 seçilirse parça olduğundan daha uzun açılır. Parça büküldüğünde dış ölçüleri hedeflenenden büyük çıkar ve montaj delik merkezleri kayar.</div></details>
</div>
`);

KITAP.bolum('m2', '2-6', `
<p class="giris">Kaynak, iki veya daha fazla metal parçayı ergime sıcaklığına ulaştırarak tek bir monolitik gövde haline getirme sanatıdır. Ancak kaynak bölgesine giren binlerce joule ısı, soğuma sırasında malzemenin büzülmesine (çekmesine) ve yapının <strong>muz gibi çarpılmasına</strong> yol açar. Birçok genç mühendisin "nasılsa kaynakçı kaynatır" diyerek çizdiği şaseler, kaynak bittikten sonra tezgâha bağlandığında ray yuvalarının 5–10 mm çarpıldığı görülür. Bu bölümde kaynak dikiş geometrilerini ve distorsiyon yönetimini inceliyoruz.</p>

<h2>Kaynak Yöntemleri Karşılaştırması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yöntem Kodu / Adı</th>
    <th>Isı Girdisi</th>
    <th>Hız ve Verimlilik</th>
    <th>Deformasyon Seviyesi</th>
    <th>Cüruf Temizliği</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>MIG / MAG (GMAW - Gazaltı)</strong><br><small>Tel sürmeli, CO₂ veya Argon gazlı</small></td>
    <td>Orta</td>
    <td><strong>Çok Yüksek</strong></td>
    <td>Orta</td>
    <td>Minimum</td>
    <td><strong>Otomasyon şaselerinin %90'ı!</strong> Çelik profiller, kalın plakalar, seri imalat gövdeleri.</td>
  </tr>
  <tr>
    <td><strong>TIG (GTAW - Argon Kaynağı)</strong><br><small>Tungsten elektrotlu, hassas</small></td>
    <td>Yüksek (Yavaş ilerler)</td>
    <td>Düşük</td>
    <td>Yüksek (Isı çok yayılır)</td>
    <td><strong>SIFIR (Mükemmel temiz)</strong></td>
    <td><strong>Paslanmaz çelik gıda tankları, ince alüminyum borular</strong>, estetik görünür dikişler.</td>
  </tr>
  <tr>
    <td><strong>MMA / Elektrot (SMAW)</strong><br><small>Örtülü elektrot</small></td>
    <td>Değişken</td>
    <td>Düşük</td>
    <td>Orta – Yüksek</td>
    <td>Var (Cüruf çekiçle kırılır)</td>
    <td>Saha montajları, açık hava şantiyeleri, rüzgarlı ortamlar. Makine imalatında az kullanılır.</td>
  </tr>
  <tr>
    <td><strong>Lazer Kaynağı (Laser Welding)</strong></td>
    <td><strong>Çok Düşük (Noktasal)</strong></td>
    <td><strong>Aşırı Hızlı</strong></td>
    <td><strong>MİNİMUM (Neredeyse sıfır çarpılma!)</strong></td>
    <td>Sıfır</td>
    <td>Otomotiv gövde sacları, hassas sensör muhafazaları, batarya paketleri. Çok pahalı tezgâhtır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Kaynak Çarpılması (Distorsiyon) Türleri ve Önleme Taktikleri</h2>
<p>Ergimiş kaynak metali katılaşırken yaklaşık <strong>%3–5 oranında hacimsel küçülme (büzülme)</strong> yaşar. Bu çekme kuvveti parçayı bükmeye zorlar:</p>
<div class="iki-sutun">
  <div>
    <h4>1. Açısal Deformasyon (Angular Distortion)</h4>
    <p>V dikişinde üstteki kaynak hacmi alttan fazlaysa, flanş yukarı doğru bükülür (V kapanmaya çalışır).</p>
    <ul>
      <li><strong>Önlem:</strong> Mümkünse tek taraflı kalın V dikişi yerine <strong>çift taraflı X dikişi</strong> kullanın; çekme kuvvetleri birbirini dengelesin.</li>
      <li>Parçaya kaynaktan önce ters açı verin (Ön-deformasyon).</li>
    </ul>
  </div>
  <div>
    <h4>2. Boyuna ve Enine Büzülme</h4>
    <p>Uzun bir profilin sadece üst yüzeyine dikiş atarsanız profil muz gibi yukarı yaylanır.</p>
    <ul>
      <li><strong>Önlem:</strong> Nötr eksene göre simetrik dikiş atın.</li>
      <li>Sürekli boydan boya dikiş yerine <strong>kesikli (adım adım / zincir) kaynak</strong> uygulayın.</li>
      <li>Gereksiz aşırı kalın dikişten (over-welding) kaçının! (Dikiş kalınlığı a = 0.7 · t yeterlidir).</li>
    </ul>
  </div>
</div>

<h2>Hassas Makine Şaselerinde Kaynak Sonrası İşleme Sıralaması</h2>
<p>Bir otomasyon şasesinde lineer rayların ve rulman yataklarının işleneceği yüzeyler varsa, takip edilmesi gereken <strong>zorunlu mühendislik prosesi</strong> şöyledir:</p>
<div class="formul">
1. Kesim ve Çatma (Tack Welding) &nbsp;→&nbsp; 
2. Asıl Kaynak (Simetrik Dikiş Sırasıyla) &nbsp;→&nbsp; 
3. <strong>GERİLİM GİDERME TAVI (550–600 °C)</strong> &nbsp;→&nbsp; 
4. Kumlama ve Astar Boya &nbsp;→&nbsp; 
5. <strong>CNC BORWERK / PORTAL FREZEDE TEK BAĞLAMADA HASSAS İŞLEME</strong>
</div>
<div class="kutu tehlike"><span class="kb">Gerilim Giderme Yapılmazsa Ne Olur?</span>
Kaynaklı şase fırınlanmadan CNC'de işlenirse; aylar sonra fabrikada titreşim ve mevsimsel sıcaklık değişimleriyle şasedeki iç gerilmeler serbest kalır. Şase 0.2–0.5 mm çarpılır; lineer raylar kasılır, servo motorlar aşırı akım çekerek arızaya geçer!</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Otomasyon şaselerinde standart yöntem <strong>MIG/MAG (Gazaltı)</strong> kaynağıdır; paslanmaz ve alüminyumda <strong>TIG</strong> kullanılır.</li>
  <li>Kaynak metali soğurken büzülür; simetrik dikiş sırası ve kesikli kaynak distorsiyonu azaltır.</li>
  <li>Aşırı kalın dikiş atmak mukavemeti artırmaz, sadece ısı girdisini ve çarpılmayı katlar.</li>
  <li>Hassas ray oturma yüzeyi olan şaseler CNC işlemeden önce mutlaka <strong>gerilim giderme tavı</strong> görmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kaynaklı bir çelik şasede lineer ray montaj yüzeylerini doğrudan kaynaktan önce frezelesek, sonra şaseyi kaynatsak ne olur?</summary>
<div>Kaynak ısısı tüm şaseyi çarpıtır. Önceden mikron toleransında işlenen yüzeyler yamulur, düzlemsellik ve paralellik tamamen kaybolur. İşleme mutlaka kaynak ve gerilim giderme tavından SONRA yapılmalıdır.</div></details>
<details><summary>İki kalın plakayı birleştirirken neden tek taraflı V dikişi yerine çift taraflı X dikişi tercih edilir?</summary>
<div>V dikişinde parçanın üst tarafındaki kaynak hacmi alttan çok fazladır; soğurken parça V yönünde bükülür. X dikişinde ise her iki tarafta eşit miktarda kaynak büzülmesi olduğu için açısal çekme kuvvetleri birbirini nötrler ve çarpılma önlenir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-7', `
<p class="giris">Talaşlı imalatla devasa bir dolu çelik kütüğün %80'ini talaş olarak çöpe atmak veya onlarca sacı kaynakla birleştirmek bazı durumlarda ekonomik değildir. Karmaşık iç kanallara, organik geometrilere ve yüksek titreşim sönümüne ihtiyaç duyulduğunda <strong>Döküm</strong>; aşırı dinamik yüklere, tokluğa ve darbeye dayanıklı parçalarda ise <strong>Dövme</strong> teknolojisi tercih edilir.</p>

<h2>Döküm Yöntemleri Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Döküm Yöntemi</th>
    <th>Kalıp Türü</th>
    <th>Yüzey Kalitesi ve Tolerans</th>
    <th>Ekonomik Seri Üretim Adedi</th>
    <th>Uygulanabilir Malzemeler</th>
    <th>Tipik Parçalar</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kum Döküm (Sand Casting)</strong></td>
    <td>Tek kullanımlık kum kalıp (Ahşap/Araldit model)</td>
    <td>Kaba (Ra 6.3 – 12.5 µm)<br>Tolerans: ±1 – 3 mm</td>
    <td><strong>1 – 500 adet (Düşük adetler için ideal)</strong></td>
    <td>Gri Dökme Demir (GJL), Sfero (GJS), Alüminyum, Döküm Çelik</td>
    <td>Büyük takım tezgahı gövdeleri, redüktör kutuları, ağır pompa salyangozları.</td>
  </tr>
  <tr>
    <td><strong>Kokil Döküm (Yerçekimi / Permanent Mold)</strong></td>
    <td>Çelik metal kalıp</td>
    <td>İyi (Ra 3.2 – 6.3 µm)<br>Tolerans: ±0.3 – 0.8 mm</td>
    <td>1.000 – 10.000 adet</td>
    <td>Alüminyum, Pirinç, Bronz alaşımları</td>
    <td>Otomotiv fren kaliperleri, manifoldlar, hava kompresörü karterleri.</td>
  </tr>
  <tr>
    <td><strong>Basınçlı Döküm (High Pressure Die Casting)</strong></td>
    <td>Sıvı metal yüksek basınçla (300–1000 bar) çelik kalıba enjekte edilir</td>
    <td><strong>Çok İyi (Ra 0.8 – 1.6 µm)<br>Tolerans: ±0.05 – 0.1 mm</strong></td>
    <td><strong>&gt; 10.000+ adet (Devasa kalıp maliyeti!)</strong></td>
    <td>Alüminyum (AlSi9Cu3), Çinko (Zamak), Magnezyum</td>
    <td>Elektrik motor gövdeleri, elektronik kutular, dişli kutusu kapakları, el aleti gövdeleri.</td>
  </tr>
  <tr>
    <td><strong>Hassas Döküm (Investment / Mum Döküm)</strong></td>
    <td>Mum model üzeri seramik kaplama; mum eritilip dökülür</td>
    <td><strong>Mükemmel (Ra 1.6 – 3.2 µm)<br>Tolerans: ±0.1 – 0.2 mm</strong></td>
    <td>50 – 5.000 adet</td>
    <td>Paslanmaz Çelik, Titanyum, Nikel Süperalaşımları</td>
    <td>Türbin kanatçıkları, medikal implantlar, cerrahi tutucular, karmaşık paslanmaz vanalar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Döküm Parça Tasarımının 4 Altın Kuralı</h2>
<ol>
  <li><strong>Eşit Et Kalınlığı (Uniform Wall Thickness):</strong> Dökümün ince yerleri hızla katılaşırken kalın kısımları geç katılaşır. Kalın bölgelerde iç çekme boşlukları (Lunker / Porozite) oluşur. Kural: Et kalınlığı geçişleri ani olmamalı, konik federlerle yumuşatılmalıdır.</li>
  <li><strong>Kalıptan Çıkma Eğimleri (Draft Angle):</strong> Dikey duvarlar kalıptan çıkarken sürtünerek bozulmasın diye duvarlara <strong>en az 1° ila 2° çıkma açısı</strong> verilmelidir.</li>
  <li><strong>Keskin Köşelerden Kaçınma:</strong> Bütün iç ve dış köşelere geniş radyüsler (R ≥ T/2) verilmelidir. Keskin köşeler sıvı metalin türbülans yapmasına ve katılaşırken sıcak çatlaklara neden olur.</li>
  <li><strong>Maça (Core) Azaltımı:</strong> Parçanın içindeki boşlukları oluşturmak için kum maçalar gerekir; maça sayısı arttıkça kalıp ve temizlik maliyeti katlanır.</li>
</ol>

<h2>Dövme (Forging) Neden Dökümden Üstündür?</h2>
<p>Dökümde malzeme sıvı fazdan kristalleşir ve gözenekler barındırabilir. Dövmede ise ısıtılmış metal blok yüksek tonajlı presler altında ezilerek şekillendirilir:</p>
<ul>
  <li>Malzemenin içindeki gözenekler pres basıncıyla kapanır.</li>
  <li>Metalin mikro tanecik yapısı ve <strong>elyaf akış çizgileri (fiber flow lines)</strong> parçanın geometrisine paralel hizalanır.</li>
  <li><strong>Sonuç:</strong> Dövme parçaların yorulma ve darbe dayanımı, döküm veya talaşlı imalatla kesilmiş parçalara göre <strong>%30–50 daha yüksektir</strong>.</li>
  <li><strong>Kullanım Alanı:</strong> Krank milleri, biyel kolları, ağır redüktör pinyonları, kaldırma mapaları (DIN 580) ve yüksek güvenlikli flanşlar.</li>
</ul>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Düşük adetli büyük gövdeler için <strong>kum döküm</strong>; yüksek adetli hassas alüminyum gövdeler için <strong>basınçlı döküm</strong> seçilir.</li>
  <li>Dökümde et kalınlığı homojen olmalı, dikey duvarlara min. 1°–2° çıkma açısı verilmelidir.</li>
  <li>Dövme çelikler, kristal elyaf akış çizgilerinin kesilmemesi sayesinde darbeli ve dinamik yorulma yüklerine en dayanıklı malzemedir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Döküm bir parçada et kalınlığının aniden 10 mm'den 40 mm'ye çıktığı bir kavşak noktası tasarlarsan ne arızası yaşanır?</summary>
<div>Kalın kısım geç katılaşır; sıvı metal dıştan içe donarken ortadaki besleme kesilir ve kalın bölgenin merkezinde çekme boşluğu (lunker / porozite) oluşur. Parça yük altında bu boşluktan çatlar. Et kalınlığı geçişi konik radyüslerle kademeli yapılmalıdır.</div></details>
<details><summary>Ağır bir yük kaldırma kancası neden dökme demirden dökülmez de dövme çelikten yapılır?</summary>
<div>Dökme demir gevrektir; aşırı yük veya dinamik şok darbesi geldiğinde haber vermeden aniden cam gibi kırılır. Dövme çelik ise son derece toktur, elyaf akışı kesintisizdir ve aşırı yükte kırılmadan önce belirgin şekilde bükülerek alarm verir.</div></details>
</div>
`);
