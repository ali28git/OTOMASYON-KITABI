// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.1 – 2.4: Talaşlı İmalat, CNC, Taşlama, Erozyon)
// Modül 1 Standartlarında: Ayrıntılı Anlatım, Bilgi/Uyarı Kutuları, Formüller, Karar Tabloları, Özet ve Kendini Test Et Bölümleri

KITAP.bolum('m2', '2-1', `
<p class="giris">CATIA veya SolidWorks'te bir butona basıp "Pocket" (Cep) veya "Pad" (Katı) yapmak sadece 2 saniyenizi alır. Ancak o çizgileri atölyedeki ustanın tezgâhına gönderdiğinizde, ekrandaki kusursuz köşeler bir anda dönen silindirik freze çakılarına, mengenelerin sıkma çenelerine ve kesici takım titreşimlerine (chatter) toslar. Bir mekanik tasarımcının kalitesi, bilgisayar başında otururken <strong>talaşın nasıl kalktığını, parçanın tezgâha nasıl bağlandığını ve takımın nereye çarpabileceğini</strong> zihninde canlandırabilmesiyle ölçülür.</p>

<h2>Torna vs. Freze: Temel Kinematik Ayrım</h2>
<p>Talaşlı imalatın iki ana direği vardır. Tasarladığın parçanın geometrisi, onun hangi tezgâhta işleneceğini belirler:</p>

<div class="iki-sutun">
  <div>
    <h4>Torna (Turning / Lathe)</h4>
    <ul>
      <li><strong>Kinematik:</strong> İş parçası fener milinde yüksek hızla döner; tek ağızlı kesici takım (kater) doğrusal eksenlerde (Z boyuna, X çapa) hareket ederek talaş kaldırır.</li>
      <li><strong>Parça Geometrisi:</strong> <strong>Dönel simetriye (aksisimetrik)</strong> sahip parçalar: Miller, akslar, burçlar, flanşlar, kasnak göbekleri, dişli taslakları.</li>
      <li><strong>Özellik:</strong> Silindirik çaplar ve eş merkezlilik (konsantriklik) mükemmel çıkar. Yüzey pürüzlülüğü çok düşüktür.</li>
    </ul>
  </div>
  <div>
    <h4>Freze (Milling)</h4>
    <ul>
      <li><strong>Kinematik:</strong> İş parçası tezgâh tablasına sabitlenir (mengene, pabuç veya vakumla); çok ağızlı silindirik kesici takım (parmak freze, tarama kafası) yüksek devirle dönerek X, Y, Z eksenlerinde parçayı oyar.</li>
      <li><strong>Parça Geometrisi:</strong> Prizmatik, düzlemsel, cepli ve karmaşık 3D yüzeyli parçalar: Montaj plakaları, gövdeler, braketler, fikstür blokları.</li>
      <li><strong>Özellik:</strong> İç köşeler daima takımın yarıçapı kadar (R = D/2) kavisli kalmak zorundadır!</li>
    </ul>
  </div>
</div>

<h2>Kesme Parametreleri: Tasarımcı Neden Bilmeli?</h2>
<p>Tasarımcı talaş hesabı yapmayacak olsa bile, malzeme işleme sürelerini ve yüzey kalitesini yönetmek için üç temel parametrenin mantığını kavramalıdır:</p>
<div class="formul">
V<sub>c</sub> = ( π · d · n ) / 1000 &nbsp;&nbsp;[Kesme Hızı - m/dak]&nbsp;&nbsp;|&nbsp;&nbsp;
v<sub>f</sub> = n · z · f<sub>z</sub> &nbsp;&nbsp;[Tabla İlerleme Hızı - mm/dak]
<small>V<sub>c</sub>: Çevresel kesme hızı (Malzeme cinsine ve takıma bağlıdır), d: Takım/İş parçası çapı [mm], n: Devir hızı [d/dak], z: Takım ağız sayısı, f<sub>z</sub>: Diş başına düşen ilerleme miktarı [mm/diş]</small>
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>İşlenen Malzeme Grubu</th>
    <th>Tipik Kesme Hızı V<sub>c</sub> [m/dak] (Karbür Takımla)</th>
    <th>İşlenebilirlik İndeksi (AISI 1212 = %100)</th>
    <th>Talaş Kaldırma Hacmi (Q)</th>
    <th>Tasarımcıya Pratik Mesaj</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alüminyum (6082-T6)</strong></td>
    <td><strong>400 – 1200+ m/dak</strong></td>
    <td><strong>%300 – %400 (Mükemmel)</strong></td>
    <td>Çok Yüksek (Talaş fırlar)</td>
    <td>İşleme süresi çok kısadır. Kalın bloktan derin cepler boşaltmak ekonomiktir.</td>
  </tr>
  <tr>
    <td><strong>Otomat Çeliği (11SMnPb30)</strong></td>
    <td>150 – 250 m/dak</td>
    <td>%120 – %140 (Çok İyi)</td>
    <td>Yüksek (Kısa talaş)</td>
    <td>Talaş kırıcıya gerek kalmaz; seri torna parçalarında ilk tercih.</td>
  </tr>
  <tr>
    <td><strong>Yapı Çeliği (S235JR / St37)</strong></td>
    <td>120 – 180 m/dak</td>
    <td>%65 – %75 (Orta)</td>
    <td>Orta (Sünek talaş)</td>
    <td>Sünektir, takıma sarabilir (sakız gibi yapışır); yüzey kalitesi orta kalır.</td>
  </tr>
  <tr>
    <td><strong>Islah Çeliği (42CrMo4+QT)</strong></td>
    <td>80 – 140 m/dak</td>
    <td>%50 – %60 (Sert)</td>
    <td>Düşük – Orta</td>
    <td>Takım aşınması artar; kesme kuvvetleri yüksektir. İnce cidarlı parçalar esner.</td>
  </tr>
  <tr>
    <td><strong>Östenitik Paslanmaz (AISI 304)</strong></td>
    <td><strong>40 – 80 m/dak (Çok Düşük)</strong></td>
    <td><strong>%30 – %40 (Kötü)</strong></td>
    <td>Çok Düşük</td>
    <td>Pekleşir (Work hardening). Kesme ısısı takımı yakar. Talaşlı işçilik maliyeti çeliğin <strong>2–3 katıdır</strong>!</td>
  </tr>
  <tr>
    <td><strong>Titanyum (Ti6Al4V)</strong></td>
    <td>30 – 50 m/dak</td>
    <td>%15 – %20 (Aşırı Zor)</td>
    <td>Minimum</td>
    <td>Isıyı iletmez; özel takımlar ve yüksek basınçlı soğutma sıvısı şarttır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Parça Bağlama (Fixturing & Clamping) Gerçekleri</h2>
<p>Bir parçanın işlenebilmesi için tezgâha rijit şekilde bağlanması gerekir. Parça havada duramaz!</p>
<ul>
  <li><strong>Mengeneyle Bağlama:</strong> En ucuz ve yaygın yöntemdir. Ancak parçanın alt ve üst yüzeyinin birbirine paralel olması şarttır. Eğimli veya asimetrik parçaları mengene tutamaz.</li>
  <li><strong>Bağlama Pabucu (Kelepçe) Payı:</strong> Plakayı tezgâh tablasına üstten pabuçlarla basıyorsan, frezenin pabuçlara çarpmaması için çevrede <strong>en az 15–20 mm boş alan</strong> kalmalıdır.</li>
  <li><strong>Sıkma Kuvveti Deformasyonu:</strong> İnce cidarlı (örneğin 2–3 mm et kalınlığında) bir alüminyum kutuyu mengenede sıktığında, parça mengene çeneleri arasında esner. Tezgâhta işlenirken ölçü tam çıkar; mengeneden söktüğün an parça yaylanarak eski haline döner ve delikler ovalleşir! Çözüm: Yumuşak çene (soft jaw) kullanmak veya parçaya bağlama kulakları eklemektir.</li>
</ul>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Silindirik ve dönel parçalar <strong>torna</strong>; düzlemsel ve cepli parçalar <strong>freze</strong> tezgâhında işlenir.</li>
  <li>Alüminyum 6082, çeliğe göre 3–4 kat daha hızlı işlenir; talaşlı imalatta en ekonomik malzemedir.</li>
  <li>Paslanmaz çelik (304) pekleştiği ve ısıyı iletmediği için işleme maliyeti çeliğin 2–3 katıdır.</li>
  <li>İnce cidarlı parçalar mengene sıkma kuvvetiyle esner; montajda ölçü kaçıklığı yaşamamak için bağlama stratejisini önceden düşün.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Neden kare kesitli bir gövdenin ortasındaki hassas bir delik tornada değil de frezede veya borwerk tezgâhında delinir?</summary>
<div>Kare bir gövde tornanın aynasına bağlandığında yüksek devirde asimetrik kütle dağılımından dolayı devasa bir balanssızlık ve savrulma oluşturur. Ayrıca kare gövdenin köşeleri torna yatağına çarpabilir. Parçanın sabit kalıp takımın döndüğü frezeleme bu parçalar için doğrudur.</div></details>
<details><summary>AISI 304 paslanmaz çelikten karmaşık cepleri olan bir parça tasarladın. Talaşlı imalat atölyesi neden fiyata itiraz eder?</summary>
<div>304 paslanmaz çeliğin kesme hızı düşüktür (40–80 m/dak), işlenirken talaş takıma yapışır ve hızla sertleşir (pekleşir). Takım ömrü çok kısadır ve tezgâh süresi karbon çeliğine göre en az 2–3 kat daha uzundur. Mümkünse kolay işlenen 303 (1.4305) paslanmaz önerilmelidir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-2', `
<p class="giris">CNC (Computer Numerical Control) işleme için tasarım yapmak, "her çizdiğim parça tezgâhta çıkar" rahatlığına kapılmak değildir. Yanlış tasarlanmış tek bir iç köşe radyüsü veya gereksiz derin bir cep, parçanın işleme süresini 10 dakikadan 2 saate çıkarabilir ve maliyeti 5 katına fırlatabilir. Bu bölümde CNC işlemede maliyeti patlatan 6 kritik tasarım tuzağını ve çözümlerini inceliyoruz.</p>

<h2>1. İç Köşe Radyüsleri (İç Köşe Asla Keskin Olamaz!)</h2>
<p>Freze çakısı silindiriktir ve kendi ekseni etrafında döner. Dolayısıyla iki dikey duvarın birleştiği iç köşede <strong>en az takımın yarıçapı kadar (R = D/2) bir radyüs kalmak zorundadır</strong>.</p>

<div class="kutu tehlike"><span class="kb">Kritik Hata: R = Takım Yarıçapı Çizmek</span>
Eğer iç köşeye <code>R5 mm</code> radyüs verirseniz, CNC operatörü orayı işlemek için <strong>Ø10 mm freze</strong> kullanır. Takım köşeye girdiğinde takımın 90°'lik çevresi aynı anda malzemeye temas eder (Kavrama açısı aniden tavan yapar!). Takım tırlama (chatter) yapar, aşırı yükten kırılır veya yavaşlamak zorunda kalır.<br><br>
<strong>Altın DFM Kuralı:</strong> İç köşe radyüsünü daima standart takım yarıçapından <strong>en az 0.5 – 1.0 mm daha BÜYÜK</strong> yapın!
<ul>
  <li>Köşeye <code>R5</code> yerine <code>R6</code> veya <code>R6.5</code> verin.</li>
  <li>Operatör köşeyi Ø10 mm takımla dönerken takım köşede duraksamaz, yumuşak bir yay çizerek teğetsel akar. İşleme süresi yarı yarıya düşer, yüzey ayna gibi çıkar!</li>
</ul></div>

<h3>Köşeye Kare Parça Girecekse Ne Yapılır? (Köpek Kemiği / Dog-Bone Boşaltması)</h3>
<p>Eğer bir cebe kare veya dikdörtgen bir plaka (örneğin bir sensör veya rulman yatağı) sıfıra sıfır oturacaksa ve iç köşeler radyüslü kalırsa parça dibe oturmaz. Çözümler:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yöntem</th>
    <th>Geometri</th>
    <th>Uygulanabilirlik</th>
    <th>Maliyet Etkisi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Köpek Kemiği (Dog-Bone) Boşaltma</strong></td>
    <td>Takım köşe noktasını 45° açıyla çapı kadar dışarı deler geçer.</td>
    <td><strong>En pratik ve ucuz yöntem!</strong> Standart 3 eksen frezede aynı takımla yapılır.</td>
    <td>Sıfır ek maliyet.</td>
  </tr>
  <tr>
    <td><strong>T-Bone Boşaltma</strong></td>
    <td>Takım sadece bir duvara paralel dışarı taşar.</td>
    <td>Kenarlardan biri görünür ve pürüzsüz kalması istendiğinde tercih edilir.</td>
    <td>Sıfır ek maliyet.</td>
  </tr>
  <tr>
    <td><strong>Tel Erozyonla Köşeyi Boşaltma</strong></td>
    <td>İç köşe R0.1 mm tel ile kesilir.</td>
    <td>Hassas kalıplar ve takım çelikleri.</td>
    <td><strong>Çok Pahalı!</strong> İkinci bir tezgâha bağlama gerektirir.</td>
  </tr>
  <tr>
    <td><strong>Erkek Parçanın Köşesine Pah Kırmak</strong></td>
    <td>Cebe giren parçanın dış köşelerine C2 veya C3 pah kırılır.</td>
    <td>Eğer cebe giren parçayı işleme şansın varsa en temiz çözümdür.</td>
    <td>Çok Düşük.</td>
  </tr>
</tbody>
</table>
</div>

<h2>2. Cep Derinliği ve Takım Boy/Çap Oranı (L/D Limiti)</h2>
<p>Bir freze çakısı uzadıkça, konsol kiriş formülü uyarınca rijitliği boyunun küpüyle (L³) azalır:</p>
<div class="formul">
Sehim: &nbsp;&nbsp; δ = ( F · L³ ) / ( 3 · E · I ) &nbsp;&nbsp; (L/D oranı 2 katına çıkarsa takım 8 KAT FAZLA ESNER!)
</div>
<ul>
  <li><strong>L/D ≤ 3 (İdeal Tasarım):</strong> Takım çok rijittir; yüksek kesme hızıyla derin talaş kaldırılabilir.</li>
  <li><strong>L/D = 4 – 5 (Sınır Bölge):</strong> Takım hafif esner; ilerleme hızı %50 düşürülmelidir.</li>
  <li><strong>L/D &gt; 6 (Maliyet Patlaması):</strong> Takım tırlamaya başlar. Kaba talaş kaldırılamaz, paso paso (onda bir milimetre) talaş alınır. İşleme süresi 4–5 kat uzar!</li>
  <li><strong>Tasarım Kuralı:</strong> Bir cep tasarlarken cep derinliği (H), iç köşe radyüsünün <strong>en fazla 6 katı</strong> (<code>H ≤ 6 · R<sub>köşe</sub></code>) olmalıdır. Eğer cep derinliği 50 mm ise, köşedeki radyüs en az R8–R10 mm (Ø16–Ø20 takım için) olmalıdır! R2 radyüsle 50 mm derinlik çizmek imalatı felç eder.</li>
</ul>

<h2>3. İnce Cidarlar ve Duvar Kalınlığı Sınırları</h2>
<p>Parçayı hafifletmek için cepler arasındaki duvarları çok inceltirseniz, frezenin uyguladığı radyal kesme kuvveti duvarı yay gibi büker. Duvar geri esnediğinde parça incelir ve üzerinde dalgalı tırlama izleri kalır.</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme</th>
    <th>Önerilen Minimum Duvar Kalınlığı (t<sub>min</sub>)</th>
    <th>Yüksek Duvarlarda (H &gt; 50 mm) Minimum Kalınlık</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alüminyum Alaşımları (6082)</strong></td>
    <td><strong>0.8 – 1.0 mm</strong> (İdeal: ≥ 1.5 mm)</td>
    <td><strong>t ≥ H / 20</strong> (Ör. 60 mm duvar için min. 3.0 mm)</td>
  </tr>
  <tr>
    <td><strong>Çelikler (S235, C45, 42CrMo4)</strong></td>
    <td><strong>1.2 – 1.5 mm</strong> (İdeal: ≥ 2.0 mm)</td>
    <td><strong>t ≥ H / 15</strong> (Ör. 60 mm duvar için min. 4.0 mm)</td>
  </tr>
  <tr>
    <td><strong>Plastikler (POM, PA)</strong></td>
    <td><strong>1.5 – 2.0 mm</strong> (Isıdan ve gerilmeden deforme olur)</td>
    <td><strong>t ≥ H / 10</strong> (Rijitlik çok düşüktür)</td>
  </tr>
</tbody>
</table>
</div>

<h2>4. Kurulum ve Bağlama Sayısı (Setup Optimizasyonu)</h2>
<p>3 eksenli bir CNC frezede takım sadece tek bir yönden (üstten, +Z ekseninden) gelir. Eğer tasarladığın parçanın 6 yüzünde de delikler ve cepler varsa:</p>
<ol>
  <li>Operatör parçayı 6 kez mengeneden sökmek, ters çevirmek, her seferinde komparatörle veya probla sıfırlamak zorundadır (6 Farklı Kurulum / Setup).</li>
  <li>Her kurulum işçilik süresi ekler ve <strong>bağlama hataları üst üste binerek (tolerance stack-up) geometrik hassasiyeti bozar</strong>.</li>
  <li><strong>DFM Kuralı:</strong> Parçanın tüm kritik toleranslı deliklerini, rulman yuvalarını ve referans yüzeylerini <strong>TEK BİR BAĞLAMADA (Single Setup)</strong> işlenebilecek şekilde tasarlayın. Yan yüzeylerdeki deliklerden kaçının veya parçayı iki basit parçaya bölerek cıvatalayın!</li>
</ol>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>İç köşe radyüsünü daima standart takım yarıçapından büyük yap (<code>R > D/2 + 0.5 mm</code>).</li>
  <li>Kare parça oturacak ceplerde en ucuz ve hızlı çözüm <strong>köpek kemiği (dog-bone)</strong> boşaltmadır.</li>
  <li>Cep derinliği iç köşe radyüsünün en fazla 6 katı olmalıdır (<code>H ≤ 6 · R</code>).</li>
  <li>Alüminyumda duvar kalınlığını 1.5 mm'nin altına düşürmemeye çalış.</li>
  <li>Parçayı tek bir bağlamada (single setup) bitecek şekilde tasarla; çok yüzeyli işlemler maliyeti katlar.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir cep tabanına kare bir sensör gövdesi oturacak. İç köşeleri R0 (keskin köşe) olarak bırakırsan CNC operatörü ne yapar?</summary>
<div>3 eksenli standart bir freze keskin iç köşe çıkaramaz. Operatör ya parçayı tel erozyona göndermek zorunda kalır (büyük maliyet ve zaman kaybı) ya da parçayı iade eder. Tasarımcı köşelere dog-bone boşaltma eklemelidir.</div></details>
<details><summary>Derinliği 60 mm olan dar bir cepte iç köşe radyüsünü R2 mm olarak çizersen ne olur?</summary>
<div>R2 radyüs için maksimum Ø4 mm takım kullanılabilir. Boy/çap oranı L/D = 60 / 4 = 15 olur! 15 kat boyundaki bu kadar ince bir parmak freze ilk pasoda tırlayarak kırılır. Bu derinlik için radyüs en az R8–R10 mm yapılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m2', '2-3', `
<p class="giris">Freze ve torna tezgâhları standart olarak IT8–IT7 tolerans aralığında ve Ra 1.6–3.2 µm pürüzlülükte parçalar üretir. Ancak rulman oturma çapları (m5, k5), lineer ray yaslanma yüzeyleri, hidrolik silindir kovanları ve hassas kılavuz burçları mikron mertebesinde hassasiyet (IT6–IT4) ve ayna gibi parlaklık (Ra 0.1–0.4 µm) gerektirir. Bu yüzeyler <strong>Taşlama, Honlama ve Lepleme</strong> ile elde edilir.</p>

<h2>Hassas Talaşlı İşlem Yöntemleri Kıyaslama Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>İşlem Yöntemi</th>
    <th>Ulaşılabilir Boyut Toleransı</th>
    <th>Yüzey Pürüzlülüğü Ra [µm]</th>
    <th>Kaldırılan Talaş Payı</th>
    <th>Sertleştirilmiş Parçaya Uygulanabilir mi?</th>
    <th>Tipik Parçalar ve Kullanım</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Hassas CNC Freze / Torna</strong></td>
    <td>±0.010 – 0.020 mm (IT7)</td>
    <td>Ra 0.8 – 1.6 µm</td>
    <td>0.5 – 5.0 mm</td>
    <td>Zor (Sert tornalama max 55 HRC)</td>
    <td>Genel makine parçaları, montaj plakaları, braketler.</td>
  </tr>
  <tr>
    <td><strong>Düzlem Yüzey Taşlama (Surface Grinding)</strong></td>
    <td><strong>±0.002 – 0.005 mm (IT5)</strong></td>
    <td><strong>Ra 0.2 – 0.4 µm</strong></td>
    <td>0.05 – 0.3 mm (Çok az)</td>
    <td><strong>EVET (60+ HRC için standart)</strong></td>
    <td>Kalıp plakaları, mastarlar, kesme bıçakları, lineer ray oturma yüzeyleri. Manyetik tablaya bağlanır.</td>
  </tr>
  <tr>
    <td><strong>Silindirik Taşlama (Dış / İç)</strong></td>
    <td><strong>±0.001 – 0.003 mm (IT4–IT5)</strong></td>
    <td><strong>Ra 0.1 – 0.4 µm</strong></td>
    <td>0.05 – 0.2 mm</td>
    <td><strong>EVET (Sertleşmiş miller)</strong></td>
    <td>Hassas iş milleri, rulman oturma faturaları, hidrolik valf sürgüleri, lineer miller.</td>
  </tr>
  <tr>
    <td><strong>Puntasız Taşlama (Centerless)</strong></td>
    <td>±0.002 mm (Çapta)</td>
    <td>Ra 0.1 – 0.2 µm</td>
    <td>0.05 – 0.2 mm</td>
    <td>EVET</td>
    <td>Punta deliği olmayan uzun çubuklar, silindirik pimler (ISO 8734), iğneli rulman makaraları. Seri üretimdir.</td>
  </tr>
  <tr>
    <td><strong>Honlama (Honing)</strong></td>
    <td><strong>±0.001 mm (Mükemmel Dairesellik)</strong></td>
    <td><strong>Ra 0.05 – 0.2 µm (Çapraz desenli)</strong></td>
    <td>0.01 – 0.05 mm</td>
    <td>Evet</td>
    <td><strong>Pnömatik ve hidrolik silindir borularının iç çapı</strong>, motor silindir gömlekleri. Yağ filmini tutan çapraz honlama çizgileri oluşturur.</td>
  </tr>
  <tr>
    <td><strong>Lepleme (Lapping)</strong></td>
    <td><strong>±0.0005 mm (Sub-mikron / IT1)</strong></td>
    <td><strong>Ra 0.01 – 0.05 µm (Ayna parlaklığı)</strong></td>
    <td>&lt; 0.01 mm</td>
    <td>Evet</td>
    <td>Granit mastarlar, mekanik salmastra sızdırmazlık yüzeyleri, optik aynalar, seramik valf diskleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Taşlama İçin Tasarım Kuralları</h2>
<ol>
  <li><strong>Taşlama Payı Bırakma:</strong> Taşlama tezgâhı kaba talaş kaldıramaz (taş dolar veya yanar). Kaba tornalama/frezelemede parça son ölçüsünden <code>0.2 – 0.4 mm</code> büyük bırakılır; ısıl işlemde çarpılma payı bu payın içinde erir ve taşlamayla sıfır ölçüye inilir.</li>
  <li><strong>DIN 509 Boşaltma Kanalı:</strong> Taşlama taşı silindirik bir milin omzuna (faturasına) yanaşırken taşın köşesi aşınarak hafif yuvarlanır. Eğer faturanın dibine <strong>DIN 509 E veya F tipi taşlama kanalı</strong> açmazsanız, taş faturanın dibini temizleyemez ve köşe konik kalır! Rulman faturaya tam oturamaz.</li>
  <li><strong>Manyetik Tabla Bağlama Şartı:</strong> Düzlem taşlama tezgâhları parçayı mengene ile değil, elektromanyetik tablayla çeker. Dolayısıyla <strong>östenitik paslanmaz çelikler (304), alüminyum ve plastikler manyetik tablaya yapışmaz!</strong> Bu malzemeleri taşlamak için özel mekanik aparatlar veya vakumlu tablalar gerekir; maliyet 3 katına çıkar.</li>
</ol>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Taşlama, 60 HRC sertleştirilmiş çeliklerde mikron tolerans (IT5) ve Ra 0.2–0.4 µm yüzey elde etmenin standart yoludur.</li>
  <li>Mil omzuna rulman tam dayansın diye faturaya mutlaka <strong>DIN 509 taşlama boşaltma kanalı</strong> açılmalıdır.</li>
  <li>Honlama, silindir borularında yağ filmini tutan çapraz çizgiler ve mükemmel dairesellik oluşturur.</li>
  <li>Alüminyum ve 304 paslanmaz manyetik tablaya yapışmadığı için düzlem taşlaması zordur ve pahalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Sertleştirilmiş bir milin rulman faturası taşlanacak. Taşlama kanalı açılmazsa montajda ne problem yaşanır?</summary>
<div>Taşlama taşının köşesi keskin kalamaz, hafif yuvarlanır. Fatura dibinde minik bir koniklik/radyüs kalır. Rulmanın iç bileziği bu radyüsün üzerine biner ve faturaya eksenel olarak tam dayanamaz; eksen kaçıklığı ve salgı oluşur.</div></details>
<details><summary>Bir hidrolik silindir borusunun iç çapı neden sadece tornalanarak bırakılmaz, honlama yapılır?</summary>
<div>Torna yüzeyinde helisel mikro çizgiler kalır; hidrolik basınç altında yağ bu çizgilerden sızar ve piston keçesini hızla aşındırır. Honlama ise çapraz çizgilerle yağı hapseder ve mikron mertebesinde dairesellik sağlayarak sızdırmazlık ömrünü katlar.</div></details>
</div>
`);

KITAP.bolum('m2', '2-4', `
<p class="giris">Talaşlı imalatta kesici takım iş parçasından daima daha sert olmak zorundadır. Peki parça zaten 62 HRC sertliğinde bir takım çeliğiyse ya da iç köşesi sıfır radyüslü (R = 0.05 mm) derin ve dar bir kanal açmanız gerekiyorsa? Kesici takımların çaresiz kaldığı bu noktada elektrik kıvılcımlarıyla metali buharlaştıran <strong>EDM (Electrical Discharge Machining / Erozyon)</strong> teknolojisi devreye girer.</p>

<h2>EDM Çalışma Prensibi ve Malzeme Şartı</h2>
<p>Elektrot ile iş parçası arasında dielektrik bir sıvı (deiyonize su veya özel gazyağı) bulunur. İki kutup birbirine mikron seviyesinde yaklaştırıldığında kontrollü yüksek frekanslı elektrik arkları (kıvılcımlar) çakar. Her ark, temas noktasında <strong>8.000 – 12.000 °C</strong> anlık sıcaklık oluşturarak metal parçacığını mikro ölçekte eritip buharlaştırır.</p>

<div class="kutu tehlike"><span class="kb">Temel Kural: İletkenlik Şarttır!</span>
Erozyon mekanik kuvvetle değil, elektrik akımıyla çalışır. Bu nedenle parçanın sertliğinin (ister 20 HRC olsun ister 68 HRC sert metal karbür) <strong>KESİNLİKLE HİÇBİR ÖNEMİ YOKTUR!</strong> Tek şart: <strong>Malzeme elektrik akımını iletmelidir</strong>. Çelikler, titanyum, alüminyum, grafit, karbür kesilebilir; ancak plastikler, seramikler ve cam erozyonla İŞLENEMEZ!</div>

<h2>Tel Erozyon (Wire EDM) vs. Dalma Erozyon (Sinker EDM)</h2>
<div class="iki-sutun">
  <div>
    <h4>Tel Erozyon (Wire EDM)</h4>
    <ul>
      <li><strong>Takım:</strong> Sürekli makaradan akan Ø0.10 – Ø0.30 mm çapında pirinç veya kaplamalı tel.</li>
      <li><strong>Çalışma Biçimi:</strong> Bir dekupaj testeresi gibi davranır. Parçayı 2D profil boyunca (veya üst-alt bağımsız 4 eksen konik) keser.</li>
      <li><strong>Yetenekleri:</strong>
        <ul>
          <li>Köşe radyüsü tel çapına bağlıdır (R0.15 mm iç köşe elde edilir!).</li>
          <li>Kama kanalları, dişli profilleri, hassas zımba ve kesme matrisleri, minik yarıklar.</li>
          <li>Parça kalınlığı 300–400 mm olsa bile düz kesim yapabilir.</li>
        </ul>
      </li>
    </ul>
  </div>
  <div>
    <h4>Dalma Erozyon (Sinker / Die-Sinking EDM)</h4>
    <ul>
      <li><strong>Takım:</strong> CNC frezede negatif formu işlenmiş <strong>Bakır veya Grafit elektrot</strong>.</li>
      <li><strong>Çalışma Biçimi:</strong> Elektrot Z ekseninde parçanın içine doğru yavaşça dalar; kendi şeklinin birebir aynısını iş parçasına oyuk olarak çıkarır.</li>
      <li><strong>Yetenekleri:</strong>
        <ul>
          <li><strong>Kör cepler</strong>, iç altıgenler, kare yuvalar, plastik enjeksiyon kalıp cepleri, kabartma yazılar.</li>
          <li>Frezenin giremediği derin ve keskin kör delikleri açar.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Erozyon İçin Tasarım Kuralları ve Beyaz Tabaka (White Layer)</h2>
<ol>
  <li><strong>Başlangıç Deliği Zorunluluğu (Tel Erozyon İçin):</strong> Tel erozyon parçayı dış kenardan kesmeye başlayabilir. Ancak parçanın ortasında kapalı bir havuz veya kama kanalı kesecekse, telin parçanın içinden geçebilmesi için önceden <strong>hızlı delme erozyonuyla (Super Drill) bir başlangıç deliği (Ø1–2 mm)</strong> delinmesi şarttır!</li>
  <li><strong>Beyaz Tabaka (Yeniden Katılaşmış Tabaka - Recast Layer):</strong> Kıvılcımla eriyen metalin sıvı dielektrik tarafından aniden soğutulmasıyla yüzeyde 5–20 µm kalınlığında aşırı sert, aşırı gevrek ve mikro çatlaklar içeren bir tabaka oluşur. Dinamik yorulma yükü taşıyan kritik parçalarda bu tabaka kumlama, polisaj veya kimyasal dağlama ile temizlenmelidir.</li>
  <li><strong>Zaman ve Maliyet Faktörü:</strong> Erozyon talaş kaldırmaz, atom atom buharlaştırır. Bu yüzden <strong>frezeden 10–20 kat daha yavaştır!</strong> Hacimsel malzeme boşaltmak için erozyon kullanılmaz. Önce parça CNC frezede kaba olarak boşaltılır, ısıl işlemle sertleştirilir; sadece son hassas konturlar tel erozyonla kesilir.</li>
</ol>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Erozyon için tek şart malzemenin elektrik iletmesidir; malzemenin 60 HRC sertlikte olması kesme hızını değiştirmez.</li>
  <li>Tel erozyon 2D açık ve kapalı konturlar (keskin iç köşeler, kama kanalları); dalma erozyon ise kör cepler ve kalıp oyukları içindir.</li>
  <li>Kapalı ceplerde tel erozyon için mutlaka önceden <strong>başlangıç deliği</strong> planlanmalıdır.</li>
  <li>Erozyon yüzeyinde oluşan gevrek <strong>beyaz tabaka</strong> dinamik parçalarda yorulma çatlağı başlatabilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Sertleştirilmiş 60 HRC takım çeliğinden bir dişlinin göbeğine kör bir iç altıgen yuva açılacak. Hangi tezgâh seçilmelidir?</summary>
<div>Dalma Erozyon (Sinker EDM). Parça sertleştirilmiş olduğu için freze takımları çalışamaz; delik kör olduğu için tel erozyon tel geçiremez. Bakır veya grafitten işlenmiş altıgen bir elektrotla dalma erozyonda basılır.</div></details>
<details><summary>Plastik (POM) bir bloktan tel erozyonla çok ince bir kontur kesilebilir mi?</summary>
<div>HAYIR. Plastikler elektriği iletmez (yalıtkandır). Erozyonda ark oluşabilmesi için malzemenin elektriksel olarak iletken olması zorunludur.</div></details>
</div>
`);
