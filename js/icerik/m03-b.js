// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.5 – 3.7: GD&T Temeller, Datum ve Konum Toleransı MMC/Bonus, Yüzey Pürüzlülüğü)
// Mekatronik & Makine Tasarımı: Geometrik Boyutlandırma ve Toleranslandırma (GD&T) Uzmanlık Kılavuzu

KITAP.bolum('m3', '3-5', `
<p class="giris">Geleneksel artı-eksi (±) ölçü toleransları sadece parçanın iki noktası arasındaki mesafeyi kontrol eder; ancak parçanın düz mü, eğri mi, konik mi yoksa paralel mi olduğunu kontrol edemez. Kalınlığı 10 ±0.1 mm olan bir plaka muz gibi eğri çıksa bile artı-eksi toleransa göre geçerlidir ama montajda diğer plakaya asla oturmaz! Bu eksikliği gideren mühendislik standardı <strong>Geometrik Boyutlandırma ve Toleranslandırma (GD&T - ISO 1101 / ASME Y14.5)</strong>'dır.</p>

<h2>GD&T Tolerans Çerçevesi (Feature Control Frame) Anatomisi</h2>
<p>Teknik resimde geometrik kontroller dikdörtgen bir çerçeve içinde okunur:</p>
<div class="kutu not" style="font-family: monospace; font-size: 1.1em; letter-spacing: 1px;">
[ ⟂ | Ø 0.05 Ⓜ | A | B ]
</div>
<ul>
  <li><strong>1. Bölme (Geometrik Karakter Sembolü):</strong> Yapılacak kontrolün türü (Örn: <code>⟂</code> Diklik, <code>⌖</code> Konum, <code>⏢</code> Düzlemsellik).</li>
  <li><strong>2. Bölme (Tolerans Bölgesi ve Değeri):</strong> İzin verilen sapma alanı. Başında <code>Ø</code> varsa tolerans bölgesi silindiriktir (3 boyutlu hacim). Yanındaki <code>Ⓜ</code> veya <code>Ⓛ</code> malzeme koşulunu gösterir.</li>
  <li><strong>3., 4., 5. Bölmeler (Datum Öncelik Sırası):</strong> Hangi referans yüzeylere göre kontrol edileceği (Önce Birincil Datum <strong>A</strong>, sonra İkincil Datum <strong>B</strong>).</li>
</ul>

<h2>14 Temel Geometrik Toleransın Karşılaştırmalı Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kategori</th>
    <th>Tolerans Türü ve Sembolü</th>
    <th>Datum İster mi?</th>
    <th>Tolerans Bölgesi Geometrisi</th>
    <th>Saha / Montaj Fonksiyonu</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="4"><strong>Form Toleransları<br><small>(Şekil Kontrolü)</small></strong></td>
    <td><strong>Düzlemsellik (Flatness - ⏢)</strong></td>
    <td><strong>HAYIR (Asla datum almaz!)</strong></td>
    <td>Birbirine paralel iki teorik düzlem arasındaki mesafe (t)</td>
    <td>Makine tablası, sızdırmazlık flanşı, lineer araba oturma yüzeyi. Komparatörle taranarak ölçülür.</td>
  </tr>
  <tr>
    <td><strong>Doğrusallık (Straightness - ⎯)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>İki paralel doğru veya silindirik tüp</td>
    <td>Piston kolları, uzun miller, lineer kılavuz raylarının kenarları.</td>
  </tr>
  <tr>
    <td><strong>Yuvarlaklık (Circularity - ○)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>Aynı düzlemde eşmerkezli iki daire arasındaki radyal aralık</td>
    <td>Rulman oturma milleri, hidrolik segman yuvaları (ovallik kontrolü).</td>
  </tr>
  <tr>
    <td><strong>Silindiriklik (Cylindricity - ⌭)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>Eşmerkezli iki silindir arasındaki radyal aralık</td>
    <td>Hem yuvarlaklığı, hem doğrusallığı hem de konikliği aynı anda kilitler (En pahalı form kontrolü).</td>
  </tr>
  <tr>
    <td rowspan="3"><strong>Yönelim Toleransları<br><small>(Orientation)</small></strong></td>
    <td><strong>Diklik (Perpendicularity - ⟂)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma tam 90° dik iki paralel düzlem veya silindir</td>
    <td>Mil faturası (rulmanın dayandığı omuz), kolon montaj flanşı, kılavuz pim delikleri.</td>
  </tr>
  <tr>
    <td><strong>Paralellik (Parallelism - ∥)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma paralel iki düzlem</td>
    <td>Çift lineer ray montaj yüzeyleri (iki rayın birbirine paralelliği).</td>
  </tr>
  <tr>
    <td><strong>Açısallık (Angularity - ∠)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma belli bir temel açıyla (örn. 45°) duran iki düzlem</td>
    <td>Kırlangıç kuyruğu kızaklar, konik pim yuvaları.</td>
  </tr>
  <tr>
    <td rowspan="3"><strong>Konum Toleransları<br><small>(Location)</small></strong></td>
    <td><strong>Konum (Position - ⌖)</strong></td>
    <td><strong>EVET (Kural olarak)</strong></td>
    <td>Teorik eksen etrafında <strong>Øt çapında silindirik hacim</strong></td>
    <td>Cıvata delikleri, pim delikleri, montaj yuvaları (En çok kullanılan tolerans!).</td>
  </tr>
  <tr>
    <td><strong>Eşmerkezlilik (Concentricity - ◎)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Datum eksenine göre simetri ekseni</td>
    <td>Yüksek devirli balans milleri (Yerini artık Salgı veya Konum toleransına bırakmıştır).</td>
  </tr>
  <tr>
    <td><strong>Simetri (Symmetry - ⌯)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Datum merkez düzlemine göre iki paralel düzlem</td>
    <td>Mil üzerindeki kama kanallarının eksene göre ortalanması.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Salgı Toleransları<br><small>(Runout)</small></strong></td>
    <td><strong>Dairesel Salgı (Circular Runout - ↗)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Mil bir tur dönerken sabit kalan komparatör ibresinin sapması</td>
    <td>Dönen kasnak yanakları, fren diskleri, kaplin oturma faturaları.</td>
  </tr>
  <tr>
    <td><strong>Toplam Salgı (Total Runout - ⌿↗)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Mil dönerken komparatör boyuna kaydırılır; tüm yüzey taranır</td>
    <td>Spindle iş milleri, yüksek hızlı balanslı silindirler.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Düzlemsellik (Flatness) vs. Paralellik (Parallelism) Ayrımı</h2>
<div class="kutu uyari"><span class="kb">En Sık Karıştırılan Hata!</span>
Bir plakanın iki yüzü birbirine mükemmel paralel olabilir (kalınlık her yerde 20.00 mm), ama plaka muz gibi bükükse <strong>paralellik kusursuzken düzlemsellik felakettir!</strong><br>
Tersine, plakanın üst yüzeyi granit pleyt gibi ayna gibi dümdüz olabilir (Düzlemsellik 0.01 mm); ama alt yüzey eğik kesilmişse <strong>düzlemsellik mükemmelken paralellik bozuktur</strong>.<br>
<strong>Kural:</strong> Tek bir yüzeyin kendi içindeki dalgalanmasını kontrol etmek istiyorsan <strong>Düzlemsellik (⏢)</strong>; iki yüzeyin birbirine göre duruşunu kontrol edeceksen birini datum seçip diğerine <strong>Paralellik (∥)</strong> verirsin.</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Geleneksel ± toleranslar form hatalarını (eğrilik, ovallik, koniklik) yakalayamaz; bu yüzden GD&T (ISO 1101) zorunludur.</li>
  <li><strong>Form toleransları (Düzlemsellik, Doğrusallık, Yuvarlaklık, Silindiriklik) asla datum almaz</strong>; kendi kendini kontrol eder.</li>
  <li>Yönelim ve konum toleransları (Diklik, Paralellik, Konum, Salgı) <strong>mutlaka bir datum referansına</strong> ihtiyaç duyar.</li>
  <li>Döner millerde balans ve salgıyı kontrol etmenin en pratik atölye yolu <strong>Dairesel Salgı (↗)</strong> kontrolüdür (Komparatör ucu parçaya basarken mil 360° çevrilir).</li>
  <li>Kama kanallarının mil eksenine tam simetrik açıldığını garanti etmek için <strong>Simetri (⌯)</strong> toleransı kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Teknik resimde bir plakanın üst yüzeyine <code>[ ⏢ 0.05 | A ]</code> yazılmış. Kalite kontrol mühendisi bu resmi görünce neden güler ve resmi reddeder?</summary>
<div>Düzlemsellik (Flatness - ⏢) bir <strong>form toleransıdır</strong>. Form toleransları parçanın kendi yüzeyinin kusursuz bir düzlemden ne kadar saptığını kontrol eder ve tanım gereği başka hiçbir yüzeye göre değerlendirilemez. Dolayısıyla düzlemsellik tolerans çerçevesine datum (A) yazılamaz! Doğrusu sadece <code>[ ⏢ 0.05 ]</code> olmalıdır. Eğer A yüzeyine göre paralel olması isteniyorsa sembol <strong>Paralellik (∥)</strong> olarak değiştirilmelidir: <code>[ ∥ 0.05 | A ]</code>.</div></details>
<details><summary>CNC frezede işlenen 500x500 mm boyutundaki bir alüminyum plakanın her köşesinden mikrometreyle ölçüm yapıyorsun; kalınlık her yerde 15.00 ±0.01 mm çıkıyor. Ancak plakayı granit masaya koyup elinle bastırdığında beşik gibi sallanıyor. Hata nedir?</summary>
<div>Plakanın iki yüzeyi birbirine mükemmel paraleldir (bu yüzden her noktada kalınlık aynıdır); fakat parça vakumlu veya mengenede sıkılarak işlenirken serbest kaldığında iç gerilmelerle muz gibi yaylanmıştır. Yani parçanın <strong>paralelliği iyi fakat düzlemselliği (flatness) bozuktur</strong>. İmalat sonrasında gerilme giderme yapılmalı ve teknik resme <code>[ ⏢ 0.05 ]</code> düzlemsellik şartı eklenmelidir.</div></details>
<details><summary>Bir elektrik motoru miline takılacak V-kasnağın oturacağı fatura yüzeyine neden Diklik (⟂) veya Salgı (↗) toleransı vermek zorundasın?</summary>
<div>Eğer kasnağın dayandığı mil faturası mil eksenine tam dik değilse (örneğin 0.1 mm eğikse), kasnağı cıvatayla faturaya sıktığınız an kasnak eksene göre açı yapar. Kasnak 3000 d/dak hızla dönerken fırıldak gibi yalpalar (aksiyal salgı). Bu yalpalama kayışın kasnaktan fırlamasına, rulmanların dinamik vuruntudan 100 saatte dağılmasına sebep olur. Faturaya mil eksenine göre <code>[ ⟂ 0.02 | A ]</code> diklik verilmelidir.</div></details>
</div>
`);

KITAP.bolum('m3', '3-6', `
<p class="giris">Geleneksel koordinat toleranslandırmasında (X ±0.1, Y ±0.1), delik merkezi kare şeklinde bir tolerans alanına sıkışır. Bu mantık hem cıvatanın yuvarlak geometrisine aykırıdır hem de imalatçıya gereksiz kısıtlama getirir. Modern tasarımda deliklerin, pimlerin ve millerin yerleşimi <strong>Datum Referans Çerçevesi (DRF)</strong> ve <strong>Konum Toleransı (True Position)</strong> ile yönetilir.</p>

<h2>Datum Referans Çerçevesi ve 3-2-1 Kuralı</h2>
<p>Uzayda serbest duran bir rijit cismin <strong>6 serbestlik derecesi (DoF)</strong> vardır: 3 öteleme (X, Y, Z) ve 3 dönme (Rx, Ry, Rz). Bir parçayı fikstüre veya tezgâha bağlarken bu 6 serbestliği adım adım sıfırlarız:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Datum Sırası</th>
    <th>Temas Noktası Sayısı</th>
    <th>Kilitlenen Serbestlik Dereceleri</th>
    <th>Tipik Parça Geometrisi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Birincil Datum (Primary - A)</strong></td>
    <td><strong>3 Nokta (Düzlem)</strong></td>
    <td><strong>3 Serbestlik:</strong> Z ötelemesi + X etrafında dönme (Rx) + Y etrafında dönme (Ry)</td>
    <td>Parçanın tezgaha veya montaj yüzeyine oturduğu <strong>en geniş düz taban yüzeyi</strong>.</td>
  </tr>
  <tr>
    <td><strong>İkincil Datum (Secondary - B)</strong></td>
    <td><strong>2 Nokta (Doğru / Çizgi)</strong></td>
    <td><strong>2 Serbestlik:</strong> X ötelemesi + Z etrafında dönme (Rz)</td>
    <td>Parçanın dayandığı <strong>en uzun işlenmiş yan kenar</strong> veya ana merkezleme deliği.</td>
  </tr>
  <tr>
    <td><strong>Üçüncül Datum (Tertiary - C)</strong></td>
    <td><strong>1 Nokta (Durdurucu)</strong></td>
    <td><strong>1 Serbestlik:</strong> Y ötelemesi (Son serbestlik sıfırlanır!)</td>
    <td>Parçanın dayandığı <strong>kısa yan kenar (stop pimi)</strong>.</td>
  </tr>
</tbody>
</table>
</div>
<p><em>Sonuç: Parça tezgâha bağlandığında artık 0 serbestlik kalmıştır; parça uzayda tek ve kesin bir konuma kilitlenmiştir!</em></p>

<h2>Konum Toleransı (True Position - ⌖) Mantığı</h2>
<p>Teknik resimde deliğin yerini belirten ölçüler kutu içine alınır: <code>[50]</code> ve <code>[100]</code>. Buna <strong>Temel Boyut (Basic Dimension)</strong> denir. Temel boyutun kendi toleransı yoktur; parçanın uzaydaki teorik kusursuz koordinatını tanımlar. Deliğin gerçek ekseni ise bu teorik merkezin etrafındaki silindirik bir alan içinde gezinebilir:</p>

<div class="iki-sutun">
  <div>
    <h4>Kare Tolerans Bölgesi (±0.1 mm)</h4>
    <p>X ±0.1 ve Y ±0.1 verildiğinde delik merkezi 0.2 × 0.2 mm'lik bir kare içinde kalmalıdır. Köşegen mesafesi: <code>√(0.1² + 0.1²) = 0.141 mm</code> olur. Yani çaprazda 0.14 mm sapmaya izin varken, düz kenarda 0.10 mm'de parça hurdaya çıkarılır!</p>
  </div>
  <div>
    <h4>Dairesel Konum Toleransı (Ø 0.28 mm)</h4>
    <p>Konum toleransında <code>[ ⌖ | Ø 0.28 | A | B | C ]</code> yazılır. Cıvata dairesel olduğu için sapma yönünün bir önemi yoktur. Karenin etrafını saran daire imalatçıya <strong>%57 DAHA FAZLA İMALAT ALANI</strong> kazandırır! Tezgâhta parça daha hızlı ve ucuza işlenir.</p>
  </div>
</div>

<h2>Maksimum Malzeme Koşulu (MMC - Ⓜ) ve Bonus Tolerans</h2>
<p>Konum toleransının yanındaki <code>Ⓜ</code> sembolü, montaj yapılabilirliğini garanti ederken imalat maliyetini düşüren en büyük mühendislik silahıdır.</p>
<ul>
  <li><strong>MMC (Maximum Material Condition):</strong> Parçanın en ağır / en dolu olduğu haldir.
    <ul>
      <li>Bir <strong>MİL</strong> için MMC = <strong>En büyük mil çapıdır</strong> (Maksimum malzeme).</li>
      <li>Bir <strong>DELİK</strong> için MMC = <strong>En küçük delik çapıdır</strong> (En az talaş kalkmış, delik dar, yani malzeme maksimum!).</li>
    </ul>
  </li>
</ul>

<h3>Bonus Tolerans Nasıl Hesaplanır? (Sayısal Örnek)</h3>
<p>Teknik resimde şöyle bir delik tanımlanmış olsun:</p>
<div class="formul">
Delik Ölçüsü: Ø10.0 +0.2 / 0.0 mm &nbsp;&nbsp;|&nbsp;&nbsp; Geometrik Tolerans: [ ⌖ | Ø 0.1 Ⓜ | A | B | C ]
</div>
<ol>
  <li>Deliğin <strong>MMC Boyutu:</strong> En dar hali olan <strong>Ø10.00 mm</strong>'dir.</li>
  <li>Eğer CNC operatörü deliği tam <strong>Ø10.00 mm</strong> delerse; deliğin eksenel kaçıklık toleransı tam tablodaki değerdir: <strong>Ø0.10 mm</strong>.</li>
  <li>Operatör matkabı biraz büyük vurdu ve deliği <strong>Ø10.20 mm</strong> deldi (Hala izin verilen ölçü içinde).</li>
  <li>Delik büyüdüğü için içine girecek cıvata için delikte fazladan <code>10.20 - 10.00 = 0.20 mm</code> boşluk oluştu!</li>
  <li>İşte bu oluşan 0.20 mm boşluğa <strong>BONUS TOLERANS</strong> denir ve geometrik konum toleransına eklenir:
    <div class="formul">
    Toplam İzin Verilen Konum Toleransı = 0.10 (Temel) + 0.20 (Bonus) = <strong>Ø0.30 mm!</strong>
    </div>
  </li>
</ol>
<p><em>Normalde 0.2 mm eksen kaçıklığı yüzünden hurdaya ayrılacak olan parça, delik büyük delindiği için cıvata rahatça içinden geçer ve parça kurtarılır!</em></p>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li><strong>3-2-1 Kuralı</strong> ile parça uzaydaki 6 serbestlik derecesini sıfırlar: Birincil Datum A (3 nokta taban), İkincil Datum B (2 nokta uzun kenar), Üçüncül Datum C (1 nokta stop).</li>
  <li>Kutu içindeki ölçüler <code>[100]</code> <strong>Temel Boyut (Basic Dimension)</strong>'dur; toleransı yoktur, kusursuz teorik konumu belirtir.</li>
  <li>Dairesel konum toleransı (<code>⌖ Ø0.2</code>), geleneksel ±0.1 kare toleransa göre imalatçıya <strong>%57 daha geniş tolerans alanı</strong> sağlar.</li>
  <li><strong>MMC (Ⓜ):</strong> Parçanın en dolu halidir (delikte en küçük çap, milde en büyük çap).</li>
  <li>Delik MMC'den uzaklaşıp büyüdükçe aradaki fark <strong>Bonus Tolerans</strong> olarak konum toleransına eklenir; montaj garantilenirken hurda parçalar kurtarılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir delik için teknik resimde <code>Ø20 +0.1/0.0</code> ve <code>[ ⌖ | Ø0.05 Ⓜ | A | B ]</code> verilmiştir. Parça üretildiğinde delik çapı Ø20.08 mm, eksen kaçıklığı ise teorik merkezden 0.11 mm çıkmıştır. Bu parça kabul edilir mi, hurda mıdır?</summary>
<div>Kabul edilir! Hesaplayalım:<br>
1. Delik MMC boyutu = 20.00 mm'dir.<br>
2. Gerçek üretilen çap = 20.08 mm. MMC'den sapma (Bonus Tolerans) = <code>20.08 - 20.00 = 0.08 mm</code>.<br>
3. Toplam izin verilen konum toleransı = <code>0.05 (Temel) + 0.08 (Bonus) = Ø0.13 mm</code>.<br>
4. Gerçek ölçülen eksen kaçıklığı 0.11 mm, izin verilen 0.13 mm'nin altında kaldığı için parça <strong>SAĞLAMDIR (OK)</strong>. Bonus tolerans olmasaydı parça 0.05 sınırını aştığı için hurdaya gidecekti.</div></details>
<details><summary>Teknik resimde bir pim için konum toleransının yanına Ⓜ koydun. Mil için MMC nedir ve bonus tolerans nasıl çalışır?</summary>
<div>Mil için MMC (Maksimum Malzeme Durumu) <strong>en büyük mil çapıdır</strong>. Örneğin pim Ø8.0 (-0.05 / -0.10) ise MMC boyutu Ø7.95 mm'dir. Pim tornada daha ince işlenirse (örneğin Ø7.90 mm), karşı deliğe girmesi kolaylaşır; dolayısıyla aradaki 0.05 mm fark pimin konum toleransına bonus olarak eklenir.</div></details>
<details><summary>Bir fikstür plakasında 4 adet montaj deliği var. Ölçüleri kenardan kenara zincirleme X1, X2, X3 vermek yerine neden Datum A|B|C'ye göre temel boyut [X] ve Konum toleransı (⌖) ile vermelisin?</summary>
<div>Zincirleme ölçü verdiğinizde her deliğin tezgâh toleransı bir sonrakine eklenir (tolerans yığılması). 4. deliğe geldiğinizde toplam hata 0.5–1.0 mm'yi bulabilir ve montaj kapağı deliklere uymaz. Datum referanslı konum toleransında ise her delik birbirinden bağımsız olarak doğrudan ana referans noktasına göre delinir; hata birikmesi (yığılma) sıfırdır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-7', `
<p class="giris">Talaşlı imalat tezgâhından çıkan hiçbir metal yüzey atomik düzeyde pürüzsüz değildir; mikroskop altında bakıldığında yüzey kraterler, tepeler ve vadilerden oluşan bir dağ silsilesi gibidir. Bir yüzeyin ne kadar pürüzsüz olması gerektiği estetik bir tercih değil; sürtünme katsayısını, dinamik sızdırmazlığı, yorulma mukavemetini ve parça maliyetini doğrudan yöneten <strong>Yüzey Pürüzlülüğü (Surface Roughness - ISO 21920 / ISO 4287)</strong> standardıdır.</p>

<h2>Temel Pürüzlülük Parametreleri: Ra vs. Rz</h2>
<div class="iki-sutun">
  <div>
    <h4>Ra (Aritmetik Ortalama Pürüzlülük)</h4>
    <p>Profil sapmalarının mutlak değerlerinin ölçüm boyu boyunca aritmetik ortalamasıdır. Dünya genelinde en yaygın kullanılan standarttır.</p>
    <ul>
      <li><strong>Artısı:</strong> Genel işleme kalitesini gösterir.</li>
      <li><strong>Kusuru:</strong> Yüzeydeki tek bir derin çatlağı veya keskin tepeyi gizler! Aritmetik ortalama alındığı için tekil derin kusurlar genel ortalamada kaybolur.</li>
    </ul>
  </div>
  <div>
    <h4>Rz (Maksimum Tepe-Çukur Yüksekliği)</h4>
    <p>Ölçüm uzunluğundaki en yüksek 5 tepe ile en derin 5 vadinin farklarının ortalamasıdır.</p>
    <ul>
      <li><strong>Hayati Önemi:</strong> <strong>Hidrolik/pnömatik sızdırmazlık yüzeylerinde (O-ring, keçe) mutlaka Rz kontrol edilmelidir!</strong> Yüzeyin Ra değeri çok iyi olsa bile tek bir vadi derinliği O-ring'in altından yağın kaçmasına sebep olur.</li>
      <li><strong>Pratik Dönüşüm:</strong> Çelik parçalarda kaba bir kural olarak <code>Rz ≈ 4 ila 6 × Ra</code> kabul edilir.</li>
    </ul>
  </div>
</div>

<h2>İmalat Yöntemleri ve Ulaşılan Ra Değerleri Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>İmalat Yöntemi</th>
    <th>Ekonomik Ra Aralığı [µm]</th>
    <th>Teknik Resim Sınıfı</th>
    <th>Mekanik Fonksiyon ve Tipik Parça Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Oksi-Gaz / Plazma Kesim</strong></td>
    <td>12.5 – 25 µm</td>
    <td>Kaba Yüzey</td>
    <td>Kaynaklı şaselerin ham sac kenarları, montajda havada kalan yüzeyler.</td>
  </tr>
  <tr>
    <td><strong>Lazer Kesim</strong></td>
    <td>3.2 – 6.3 µm</td>
    <td>Orta</td>
    <td>Sac parçaların dış konturları. 10 mm altı saclarda mükemmeldir.</td>
  </tr>
  <tr>
    <td><strong>Kaba Frezeleme / Tornalama</strong></td>
    <td>6.3 – 12.5 µm</td>
    <td>Kaba Talaş</td>
    <td>Döküm kabuğu temizleme, sonraki operasyonlara hazırlık pasonu.</td>
  </tr>
  <tr>
    <td><strong>Standart CNC Freze / Torna</strong></td>
    <td><strong>Ra 3.2 µm</strong></td>
    <td><strong>Genel Standart (N8)</strong></td>
    <td><strong>Otomasyon parçalarının varsayılan yüzeyi.</strong> Cıvata basma yüzeyleri, braketler.</td>
  </tr>
  <tr>
    <td><strong>İnce CNC Freze / Torna (Finish)</strong></td>
    <td><strong>Ra 1.6 µm</strong></td>
    <td><strong>Hassas (N7)</strong></td>
    <td>İki metalin birbirine boşluksuz oturduğu montaj yüzeyleri, pim delikleri, statik O-ring basma kanalları.</td>
  </tr>
  <tr>
    <td><strong>Silindirik / Düzlem Taşlama</strong></td>
    <td><strong>Ra 0.8 – 0.4 µm</strong></td>
    <td><strong>Çok Hassas (N6 - N5)</strong></td>
    <td><strong>Rulman oturma milleri ve yuvaları, lineer ray kızak altı faturaları, keçe temas milleri.</strong></td>
  </tr>
  <tr>
    <td><strong>Honlama / Süperfinish / Lepleme</strong></td>
    <td><strong>Ra 0.2 – 0.05 µm</strong></td>
    <td><strong>Ayna Yüzey (N4 - N2)</strong></td>
    <td>Hidrolik silindir iç boruları, pnömatik piston milleri, hava yatakları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Teknik Resimde Yüzey Sembolleri ve Antet Gösterimi</h2>
<div class="kutu ipucu"><span class="kb">Yüzey Pürüzlülüğü Gösterim Kuralları</span>
<ul>
  <li><strong>Açık Kök Sembolü (√):</strong> Pürüzlülük kontrolü var ama talaş kaldırma yöntemi serbest.</li>
  <li><strong>Üstü Kapalı Üçgen Sembolü:</strong> <strong>Talaş kaldırma ZORUNLU!</strong> (Tornalanacak veya frezelenecek). İçine <code>Ra 3.2</code> yazılır.</li>
  <li><strong>İçi Daireli Sembol:</strong> <strong>Talaş kaldırmak YASAK!</strong> Parça ham kalacak (döküm, dövme veya soğuk haddelenmiş sac yüzeyi korunacak).</li>
  <li><strong>Genel Antet Notu:</strong> Parçanın üzerindeki 50 yüzeyden 45 tanesi standart işleme ise, resmin sağ üst köşesine toplu gösterim konulur: 
  <br><code>Ra 3.2 (✓ Ra 0.8, Ra 1.6)</code> → Anlamı: "Resimde üzerinde özel sembol olmayan tüm yüzeyler <strong>Ra 3.2</strong> işlenecektir; parantez içindekiler ise resim üzerinde ayrıca işaretlenen kritik yüzeylerdir."</li>
</ul>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li><strong>Ra</strong> genel pürüzlülük ortalamasıdır; ancak dinamik sızdırmazlıkta derin çizikleri yakalamak için <strong>Rz</strong> kontrolü zorunludur.</li>
  <li>Otomasyonda standart CNC işlenmiş yüzeyler için varsayılan değer <strong>Ra 3.2 µm</strong>'dir.</li>
  <li>Hassas montaj yüzeyleri ve pim delikleri için <strong>Ra 1.6 µm</strong>; rulman oturma yüzeyleri ve taşlama için <strong>Ra 0.8 µm</strong> istenir.</li>
  <li>Hidrolik/pnömatik silindir ve keçe yüzeylerinde sürtünmeyi ve sızıntıyı önlemek için <strong>Ra 0.4 – 0.2 µm (honlanmış)</strong> yüzey şarttır.</li>
  <li>Gereksiz yere Ra 0.4 istemek parçanın taşlamaya girmesine yol açar ve maliyeti 3 katına çıkarır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir hidrolik silindir mili tasarlıyorsun. Milin üzerinde NBR keçe (yağ keçesi) çalışacak. Teknik resme Ra 1.6 yazdın. İmalattan gelen mil 1 hafta sonra keçeyi parçalayıp yağ kaçırmaya başladı. Neden?</summary>
<div>Dinamik yağ keçesi (rotary/linear seal) çalışan millerde mil yüzeyi zımpara gibi davranmamalıdır. Ra 1.6 talaşlı finiş yüzeyidir ve mikroskop altında keskin talaş izleri barındırır; mil gidip geldikçe elastomer keçeyi rendeleyerek aşındırır. Keçe çalışan millerde yüzey taşlanmış veya krom kaplanıp parlatılmış olmalı ve pürüzlülük <strong>Ra 0.2 – 0.4 µm (Rz ≤ 1.6 µm)</strong> olmalıdır.</div></details>
<details><summary>Bir fikstür plakasının tüm yüzeylerine genel olarak "Ra 0.4" yazarsan atölyede ne olur?</summary>
<div>CNC freze standart olarak Ra 1.6 – 3.2 çıkarır. Ra 0.4 elde etmek frezeyle çok zordur; parçanın tüm yüzeylerinin (yanlar, cepler, delikler dahil) düzlem taşlama tezgahına girmesi veya özel pahalı elmas takımlarla çok düşük ilerlemeyle işlenmesi gerekir. Parçanın imalat süresi 1 saatten 6 saate çıkar, maliyeti 4 katına fırlatır. Plakanın sadece kritik montaj yüzeyine Ra 0.8 veya 1.6 verilmeli, geri kalanı Ra 3.2 serbest bırakılmalıdır.</div></details>
<details><summary>Çelik parçalarda Ra ile Rz arasında neden yaklaşık 1:4 ile 1:6 oranı vardır? Biri diğerinin yerine birebir geçer mi?</summary>
<div>Ra ortalama sapmayı temsil ederken, Rz en uçtaki tepe ve vadilerin mesafesini ölçer. Standart talaşlı imalat profilinde tepeler ve çukurlar ortalama değerin yaklaşık 4–6 katı derinliğe ulaşır. Birebir birbirinin yerine geçemezler; çünkü profilde tek bir derin çizik varsa Ra bunu neredeyse hiç etkilemezken Rz fırlar. Sızdırmazlıkta mutlaka Rz belirtilmelidir.</div></details>
</div>
`);
