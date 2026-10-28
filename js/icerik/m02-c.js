// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.8 – 2.10: 3D Baskı, Hammadde Standartları, Maliyet Odaklı Tasarım)
// Modül 1 Standartlarında: Ayrıntılı Anlatım, Bilgi/Uyarı Kutuları, Formüller, Karar Tabloları, Özet ve Kendini Test Et Bölümleri

KITAP.bolum('m2', '2-8', `
<p class="giris">Eklemeli imalat (3D Baskı / Additive Manufacturing), artık sadece masaüstü bir oyuncak prototip aracı değildir. Modern otomasyon hatlarında robot uç tutucuları (EOAT), kablo yönlendirme braketleri, hafifletilmiş gripper çeneleri ve fikstür konumlayıcıları doğrudan metal veya karbon takviyeli endüstriyel 3D yazıcılarla basılmaktadır. Ancak geleneksel talaşlı imalattan çok farklı bir tasarım zihniyeti gerektirir: <strong>Katman katman üretim anizotropisi ve destek (support) geometrisi</strong>.</p>

<h2>Endüstriyel 3D Baskı Teknolojileri Karşılaştırması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Teknoloji</th>
    <th>Hammadde Formu</th>
    <th>Çözünürlük ve Tolerans</th>
    <th>Mekanik Dayanım (İzotropi)</th>
    <th>Yüzey Kalitesi</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>FDM / FFF (Filament)</strong><br><small>Ör. Markforged Karbonlu</small></td>
    <td>Termoplastik Tel (PLA, PETG, ABS, <strong>Onyx / Karbon Elyaf Takviyeli Naylon</strong>)</td>
    <td>Katman: 0.1 – 0.3 mm<br>Tolerans: ±0.15 – 0.3 mm</td>
    <td><strong>Anizotropik (Z ekseninde katmanlardan ayrılabilir!)</strong> Sürekli karbon elyaflı modeller alüminyum mukavemetine ulaşır.</td>
    <td>Çizgili (Katman izleri belirgin)</td>
    <td><strong>Robot gripper çeneleri</strong>, sensör tutucular, montaj aparatları, kablo klipsleri, prototipler.</td>
  </tr>
  <tr>
    <td><strong>SLS (Seçici Lazer Sinterleme)</strong><br><small>Toz Yataklı Polimer</small></td>
    <td>Poliamid Tozu (<strong>PA11, PA12</strong>, Alüminyum katkılı Alumide)</td>
    <td>Katman: 0.08 – 0.12 mm<br>Tolerans: <strong>±0.05 – 0.1 mm</strong></td>
    <td><strong>Neredeyse İzotropik!</strong> Katman ayrılması yaşanmaz. Çok tok ve mukavemetlidir.</td>
    <td>Hafif grenli (Kumlama ile pürüzsüzleşir)</td>
    <td><strong>Komple fonksiyonel gripperlar</strong>, hava üfleme nozulları, karmaşık manifoldlar. <strong>DESTEK YAPISINA İHTİYAÇ DUYMAZ!</strong></td>
  </tr>
  <tr>
    <td><strong>SLA / DLP (Reçine)</strong></td>
    <td>Fotopolimer Sıvı Reçine (UV ile kürlenir)</td>
    <td><strong>Çok Yüksek (±0.02 – 0.05 mm)</strong></td>
    <td>Gevrektir, zamanla UV ışıktan ve ısıdan sertleşip çatlayabilir.</td>
    <td><strong>Ayna gibi pürüzsüz</strong> (Kalıp benzeri)</td>
    <td>Optik lens yuvaları, diş hekimliği aparatları, yüksek detaylı görsel prototipler.</td>
  </tr>
  <tr>
    <td><strong>DMLS / SLM (Metal 3D Baskı)</strong><br><small>Doğrudan Metal Lazer Ergitme</small></td>
    <td>Metal Tozları (<strong>AlSi10Mg, 316L Paslanmaz, Ti6Al4V, Inconel</strong>)</td>
    <td>Tolerans: ±0.05 – 0.1 mm<br>Yoğunluk: &gt; %99.8</td>
    <td><strong>Dövme çelikle eşdeğer mukavemet!</strong> Mükemmel yorulma ömrü.</td>
    <td>Kaba metalik (Talaşlı işleme payı gerekir)</td>
    <td>Havacılık parçaları, enjeksiyon kalıpları için <strong>konformal (soğutma kanallı) maça ekleri</strong>, hafifletilmiş roket parçaları. Çok pahalıdır!</td>
  </tr>
</tbody>
</table>
</div>

<h2>3D Baskı İçin Tasarım (DFAM) Kuralları</h2>
<ol>
  <li><strong>45° Kuralı (Desteksiz Baskı):</strong> FDM ve Metal yazıcılarda 45°'den daha dik açılı yüzeyler altlarında destek (support) olmadan basılabilir. Açıyı 45°'nin üzerinde tutarsanız destek malzemesi gerekmez; hem malzeme tasarrufu sağlanır hem de temizlik işçiliği sıfırlanır.</li>
  <li><strong>Yük Yönü ve Baskı Yönelimi (Z-Ekseni Zayıflığı):</strong> FDM parçalarda katmanlar arası yapışma mukavemeti, filament eksenindeki çekme mukavemetinin sadece <strong>%40–60'ı</strong> kadardır. Bir parçaya çekme veya eğilme kuvveti gelecekse, parça tablaya katman çizgileri yüke dik değil, <strong>yük çizgisine paralel</strong> olacak şekilde yatırılarak basılmalıdır!</li>
  <li><strong>Diş Açma (Metal Diş Ekleme / Threaded Inserts):</strong> Plastik 3D parçalara asla doğrudan vida dişi basmayın veya kılavuz çekmeyin; iki sıkmada sıyrılır! Çözüm: Parçaya delik basıp içine havya ile ısıyla çakılan pirinç <strong>ısı-diş burçları (heat-set threaded inserts)</strong> yerleştirmektir.</li>
</ol>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Fonksiyonel robot gripperlarında en sağlam ve desteksiz teknoloji <strong>SLS (PA12 Toz)</strong> veya karbon takviyeli FDM'dir.</li>
  <li>FDM parçalarda Z eksenindeki katman yapışması zayıftır; parça baskı tablasına kuvvet yönüne göre yatırılmalıdır.</li>
  <li>Plastik baskı parçalara cıvata bağlamak için ısıyla çakılan <strong>pirinç diş burçları (insert)</strong> kullanılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>FDM yazıcıda dik olarak (Z ekseninde dikine uzayan) basılmış bir robot gripper parmağı neden ilk zorlanmada katmanından kırılır?</summary>
<div>FDM'de erimiş filament üst üste serilir; katmanlar arasındaki termal yapışma mukavemeti, katmanın kendi çekme mukavemetinin yarısından azdır. Dik basılan parçada çekme/eğilme yükü katmanları birbirinden ayıracak yönde etki eder. Parça tablaya yatay basılmalıdır.</div></details>
<details><summary>SLS (Seçici Lazer Sinterleme) teknolojisinde neden destek (support) yapısına ihtiyaç yoktur?</summary>
<div>SLS toz yataklı bir sistemdir. Lazer parçayı eritip sinterlerken, etrafta erimemiş halde kalan poliamid tozu parçanın altında doğal bir destek yatağı oluşturur. Bu sayede iç içe geçmiş mafsallar ve karmaşık kanallar tek seferde basılabilir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-9', `
<p class="giris">Tasarımcının en büyük gafletlerinden biri, piyasada bulunmayan ebatlarda hammadde çizip atölyeyi çıkmaza sokmaktır. Örneğin bir plakayı 31×82×153 mm olarak çizerseniz, atölye piyasadan 40×100×200 mm kütük satın alıp fazlalığın %50'sini tezgâhta talaş yaparak çöpe atmak zorunda kalır. Tasarıma başlamadan önce piyasadaki <strong>standart stok ölçülerini ve haddeleme toleranslarını</strong> bilmek gerekir.</p>

<h2>Piyasa Standart Stok Formları ve Toleransları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Hammadde Formu</th>
    <th>Piyasa İsimlendirmesi</th>
    <th>Yüzey Durumu</th>
    <th>Standart Dış Çap / Boyut Toleransı</th>
    <th>Tasarımcıya Tavsiye</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sıcak Haddelenmiş Lama / Sac (Çelik)</strong></td>
    <td>S235JR Siyah Sac / Lama</td>
    <td>Tufallı, siyah, pürüzlü oksit tabakalı</td>
    <td>Geniş tolerans (±0.5 – 1.5 mm). Düzlemsellik dalgalıdır.</td>
    <td>Temas yüzeyleri tezgâhta taranmalıdır (her yüzeyden min. 2–3 mm talaş payı bırak).</td>
  </tr>
  <tr>
    <td><strong>Soğuk Çekilmiş Mil (Transmisyon Mili)</strong></td>
    <td>C45K / S235 / 11SMn30 (+C)</td>
    <td>Parlak, pürüzsüz, tufalsız</td>
    <td><strong>h9 veya h11</strong> (Ör. Ø20 h9: 0 / -0.052 mm)</td>
    <td><strong>İşlemeden doğrudan mil olarak kullanılabilir!</strong> Rulman, kasnak ve burçlar doğrudan üzerine geçer.</td>
  </tr>
  <tr>
    <td><strong>Taşlanmış Hassas Mil (Lineer Mil)</strong></td>
    <td>Cf53 / 100Cr6 İndüksiyonlu Sertleştirilmiş</td>
    <td>Ayna parlaklığında (Ra &lt; 0.2 µm), 60 HRC</td>
    <td><strong>h6 veya g6</strong> (Ör. Ø20 h6: 0 / -0.013 mm)</td>
    <td>Lineer bilyalı burçlar için hazır satın alınır; torna tezgâhında dış çapı işlenmez.</td>
  </tr>
  <tr>
    <td><strong>Haddelenmiş Alüminyum Plaka</strong></td>
    <td>6082-T6 Levha</td>
    <td>Hafif mat, çizilmeye açık</td>
    <td>Kalınlık: ±0.3 – 0.8 mm. İç gerilmelidir!</td>
    <td>Derin cep frezelenirse plaka çarpılır. Gerilim gidermeli T651 isteyin.</td>
  </tr>
  <tr>
    <td><strong>Hassas Döküm Alüminyum Plaka</strong></td>
    <td>G.AL C250 / ACP 5080 / Alpase</td>
    <td><strong>İki yüzü çift taraflı hassas frezelenmiş ve folyolu</strong></td>
    <td><strong>Kalınlık: ±0.1 mm, Düzlemsellik: &lt; 0.1 mm/m</strong></td>
    <td><strong>Fikstür ve makine taban tablalarının vazgeçilmezidir!</strong> Üst yüzeyleri taranmaz, sadece delikler delinir. Sıfır iç gerilme.</td>
  </tr>
  <tr>
    <td><strong>Kutu Profil / Boru (Yapısal)</strong></td>
    <td>Kare / Dikdörtgen Kutu Profil (DIN EN 10219)</td>
    <td>Siyah veya dikişli parlak</td>
    <td>Köşeleri radyüslüdür (R ≈ 2–2.5×t). Et kalınlığı: ±%10</td>
    <td>Şaselerin omurgasıdır. Üzerine lineer ray bağlanacaksa profil üstüne lama kaynatılıp CNC'de işlenmelidir.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Tasarımcının Stok Kuralı: Standart Ölçüye Sığın!</span>
Eğer bir mil tasarlıyorsan standart çubuk çaplarını seç: <strong>Ø12, Ø16, Ø20, Ø25, Ø30, Ø40, Ø50 mm</strong>... Gidip ara ölçü (ör. Ø23.5 mm veya Ø37 mm) seçersen, bir üst stok çapı satın alınır ve saatlerce boşuna talaş kaldırılarak çap küçültülür. Plakalarda da standart kalınlıkları kullan: <strong>6, 8, 10, 12, 15, 20, 25, 30, 40 mm</strong>.</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Parçayı tasarlarken piyasadaki standart çubuk ve plaka ölçülerine sadık kal.</li>
  <li>Soğuk çekilmiş transmisyon milleri (h9/h11) torna işçiliği olmadan doğrudan kullanılabilir.</li>
  <li>Hassas makine taban plakalarında yüzey işlemeyi sıfırlamak için <strong>çift yüzü frezeli döküm alüminyum plaka</strong> (ACP 5080 vb.) tercih et.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Boyutları 500×300 mm olan düzlemsel bir fikstür tabanında neden haddelenmiş 6082-T6 yerine döküm alüminyum plaka seçilmelidir?</summary>
<div>Haddelenmiş 6082 levhaların kalınlık toleransı kabadır ve içinde yüksek haddeleme gerilmeleri vardır. Yüzeyden talaş alındığında plaka muz gibi eğrilir. Döküm plakalar ise fabrikasyon olarak çift taraflı taşlanmış/frezelenmiştir, sıfır iç gerilmeye sahiptir ve kesinlikle çarpılmaz.</div></details>
</div>
`);

KITAP.bolum('m2', '2-10', `
<p class="giris">Bir makinenin maliyeti; montaj hattında veya satın almada değil, <strong>tasarımcının CAD ekranındaki parmak uçlarında</strong> belirlenir. Tasarım aşamasında verilen kararlar, toplam ürün maliyetinin yaklaşık <strong>%70–80'ini</strong> kilitler. Gereksiz bir sıkı tolerans, standart dışı bir delik çapı veya erişilemeyen bir cıvata yuvası; şirketin kar marjını sıfırlayabilir. Bu bölümde İmalata Uygun Tasarımın (DFM - Design for Manufacturing) altın kurallarını özetliyoruz.</p>

<h2>Maliyet Katlayıcılar: Tasarımcının Kaçınması Gereken 7 Günah</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tasarım Detayı</th>
    <th>Maliyet Çarpanı</th>
    <th>Neden Maliyeti Patlatır?</th>
    <th>DFM Çözümü (Doğru Yaklaşım)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Gereksiz Sıkı Tolerans</strong><br><small>(Ör. Genel plakaya ±0.01 mm yazmak)</small></td>
    <td><strong>3× – 5× KAT</strong></td>
    <td>Parça standart frezeden çıkamaz; taşlama, klimalı oda ve CMM kalite kontrolü gerekir. Hurda oranı artar.</td>
    <td>Genel toleranslar için <strong>ISO 2768-m</strong> kullanın. Sadece rulman ve pim deliklerine tolerans verin!</td>
  </tr>
  <tr>
    <td><strong>Aşırı Yüzey Kalitesi</strong><br><small>(Her yere Ra 0.4 µm yazmak)</small></td>
    <td><strong>2× – 3× KAT</strong></td>
    <td>Frezenin ilerleme hızı düşer, polisaj veya taşlama gerekir.</td>
    <td>Fonksiyonel olmayan yüzeylerde <strong>Ra 3.2 – 6.3 µm</strong> bırakın. Conta yüzeyine Ra 1.6, rulmana Ra 0.8 yeterlidir.</td>
  </tr>
  <tr>
    <td><strong>Keskin İç Köşeler</strong></td>
    <td><strong>2× – 4× KAT</strong></td>
    <td>Freze giremez; tel erozyon veya özel broşlama tezgâhı gerekir.</td>
    <td>Köşelere <strong>R &gt; Takım Yarıçapı</strong> verin veya <strong>köpek kemiği (dog-bone)</strong> açın.</td>
  </tr>
  <tr>
    <td><strong>Çok Derin Kör Delikler</strong><br><small>(Derinlik &gt; 5× Çap)</small></td>
    <td><strong>2× KAT</strong></td>
    <td>Matkap talaş tahliye edemez, ısınır, kırılır. Özel derin delik delme (Gundrill) gerekir.</td>
    <td>Delik derinliğini <code>L ≤ 3–4 × d</code> ile sınırlandırın. Mümkünse boydan boya delik yapın.</td>
  </tr>
  <tr>
    <td><strong>Çok Sayıda Farklı Cıvata Ebadı</strong></td>
    <td>İşçilik ve Stok Maliyeti</td>
    <td>Montajcı tezgâhta 8 farklı alyan anahtarı değiştirmek zorunda kalır; montaj süresi uzar.</td>
    <td><strong>Standartlaşın!</strong> Tüm makinede mümkünse sadece M5 ve M8 cıvata kullanın.</td>
  </tr>
  <tr>
    <td><strong>Çok Yüzeyli Kurulum (Setup)</strong></td>
    <td><strong>1.5× – 2× KAT</strong></td>
    <td>Parça her yüzey için sökülüp tekrar bağlanır; işçilik süresi ve operatör maliyeti biner.</td>
    <td>Tüm delikleri ve cepleri <strong>tek bir üst yüzeyde</strong> toplayın.</td>
  </tr>
  <tr>
    <td><strong>Kör Dişlerin Dibine Kadar Kılavuz İstemek</strong></td>
    <td>Kılavuz Kırılması</td>
    <td>Kılavuz deliğin dibine çakılır ve kırılır; parçayı kurtarmak için saatler harcanır.</td>
    <td>Diş dibinde en az <strong>3–5 hatve talaş boşluğu</strong> bırakın.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mühendisin DFM Kontrol Listesi (Teknik Resmi Yayınlamadan Önce Sor!)</h2>
<ul>
  <li>[ ] <strong>Takım Erişimi:</strong> Freze veya matkap bu cebe/deliğe standart bir tutucuyla çarpışmadan girebiliyor mu?</li>
  <li>[ ] <strong>İç Köşeler:</strong> İç köşelerde dönen takım için yeterli radyüs (R &gt; D/2) var mı?</li>
  <li>[ ] <strong>Standart Ölçüler:</strong> Delik çapları ve diş boyutları piyasadaki standart matkap/kılavuz ölçülerine (M4, M5, M6, M8, M10, M12) uyuyor mu?</li>
  <li>[ ] <strong>Hammadde Stok Uyumu:</strong> Parçanın dış sınır ölçüleri (Bounding Box) piyasadaki standart lama ve plaka ebatlarından temiz çıkıyor mu?</li>
  <li>[ ] <strong>Montaj ve Alet Erişimi:</strong> Cıvatayı sıkacak olan montaj ustasının alyan anahtarı veya tork lokması oraya rahatça giriyor mu? Yoksa cıvata kafası profilin altında mı kalmış?</li>
  <li>[ ] <strong>Gereksiz Ağırlık vs. İşleme Dengesi:</strong> Parçayı 50 gram hafifleteceğim diye koca kütükten 3 saat boyunca boşaltma yapmak yerine, lazer kesim sac braket kullanabilir miyim?</li>
</ul>

<div class="ozet-kutu"><h3>Modül 2 Kapanış Özeti</h3>
<p>İyi bir tasarımcı sadece çalışan bir sistem değil, <strong>en ucuz tezgâhta en hızlı şekilde üretilebilen</strong> sistemi tasarlayan kişidir. Çizdiğiniz her çizginin atölyede bir talaş, bir işçilik dakikası ve bir maliyet karşılığı olduğunu asla unutmayın!</p></div>

<div class="test"><h3>Büyük Modül 2 Sınavı</h3>
<details><summary>Soru 1: Bir montaj plakasının dış boyutlarını teknik resimde 100 ± 0.01 mm olarak verdin. Parça sadece kapağın altına oturacak, hiçbir şeyle hassas geçmesi yok. Ne yaptın?</summary>
<div>Gereksiz sıkı tolerans verdin! Bu tolerans yüzünden parça frezeden sonra taşlamaya gitmek ve klimalı odada CMM ile ölçülmek zorunda kalır; parça maliyeti 4 katına çıkar. Fonksiyonel olmayan dış ölçüler için ISO 2768-mK genel toleransı yeterlidir.</div></details>
<details><summary>Soru 2: Kaynaklı bir şase üzerinde lineer ray oturma yüzeyi frezelenecek. Fırınlama (gerilim giderme) imkânı yok. Ne yapılabilir?</summary>
<div>Şaseyi kaynaklı çelikten yapmak yerine modüler alüminyum sigma profillerden cıvatalı olarak inşa etmek veya titreşimle gerilim giderme (VSR) uygulamak değerlendirilmelidir. Gerilimi alınmamış kaynaklı şase işlenirse kesinlikle çarpılır.</div></details>
</div>
`);
