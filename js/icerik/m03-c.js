// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.8 – 3.10: Tolerans Zinciri, Kaynak Sembolleri, Montaj Resmi ve BOM)
// Mekatronik & Makine Tasarımı: Montaj Analizi, İmalat Kodları ve Mühendislik Dokümantasyonu

KITAP.bolum('m3', '3-8', `
<p class="giris">Tek tek çizilen parçaların her biri kendi tolerans sınırları içinde kusursuz üretilmiş olabilir; ancak 5 parça üst üste monte edildiğinde aradaki montaj boşluğunun sıfırlanıp mekanizmanın kilitlendiği veya 2 mm boşluk kalıp yalpalamaya başladığı çok sık görülür. Bu duruma <strong>Tolerans Yığılması (Tolerance Stack-up)</strong> denir. Bu bölümde Worst-Case ve RSS istatistiksel tolerans zinciri hesaplarını inceliyoruz.</p>

<h2>1 Boyutlu (1D) Tolerans Zinciri Kurma Metodolojisi</h2>
<ol>
  <li><strong>Kritik Boşluğu (Gap - Y) Tanımla:</strong> İki parça arasında hedeflenen çalışma boşluğunu (örneğin segman ile rulman arasındaki eksenel boşluk) döngünün kapanış noktası seçin.</li>
  <li><strong>Vektör Döngüsü Oluştur:</strong> Boşluğun bir ucundan başlayarak parçaların temas eden boyutsal yüzeyleri üzerinden bir uçtan diğer uca kapalı bir hat çizin:
    <ul>
      <li>Boşluğu <strong>ARTIRAN</strong> ölçü yönleri: <strong>Pozitif Vektör (+)</strong></li>
      <li>Boşluğu <strong>AZALTAN</strong> ölçü yönleri: <strong>Negatif Vektör (-)</strong></li>
    </ul>
  </li>
  <li><strong>Nominal Boşluk:</strong> <code>Y<sub>nom</sub> = Σ (Pozitif Boyutlar) - Σ (Negatif Boyutlar)</code></li>
</ol>

<h2>İki Temel Hesaplama Yöntemi: Worst-Case vs. RSS</h2>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Parametre / Özellik</th>
    <th>En Kötü Durum Analizi (Worst-Case / WC)</th>
    <th>İstatistiksel Analiz (RSS - Root Sum of Squares)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Hesaplama Prensibi</strong></td>
    <td>Tüm parçaların aynı anda en kötü tolerans sınırında üretildiği varsayılır (Aritmetik toplam).</td>
    <td>Parçaların normal Gauss dağılımına (Çan eğrisi) uyduğu kabul edilir (Kareler toplamının karekökü).</td>
  </tr>
  <tr>
    <td><strong>Formül</strong></td>
    <td><strong>T<sub>toplam</sub> = Σ |T<sub>i</sub>|</strong></td>
    <td><strong>T<sub>toplam</sub> = √( T<sub>1</sub>² + T<sub>2</sub>² + … + T<sub>n</sub>² )</strong></td>
  </tr>
  <tr>
    <td><strong>Montaj Güvenilirliği</strong></td>
    <td><strong>%100 (Sıfır Hata Garantisi)</strong></td>
    <td><strong>%99.73 (3-Sigma / Cpk ≥ 1.0)</strong> (~Binde 3 montaj riski)</td>
  </tr>
  <tr>
    <td><strong>Tolerans Gereksinimi</strong></td>
    <td>Çok dar toleranslar gerektirir (Parça maliyeti artar).</td>
    <td>Toleransları rahatlatır (Daha ucuz tezgahlarda imalat imkanı).</td>
  </tr>
  <tr>
    <td><strong>Nerede Kullanılır?</strong></td>
    <td><strong>Özel makine imalatı, az adetli otomasyon (1–10 adet), güvenlik ve havacılık.</strong></td>
    <td><strong>Büyük seri üretim, otomotiv sektörü, beyaz eşya (yılda binlerce adet).</strong></td>
  </tr>
</tbody>
</table>
</div>

<h2>Sayısal Örnek: Yatak Gövdesi ve Rulman Paketi</h2>
<p>Bir mil üzerindeki iki segman arasına 3 adet parça dizilmektedir. Hedef boşluk (Gap):</p>
<ul>
  <li>Gövde Boşluğu (L<sub>g</sub>): <code>50.0 ±0.3 mm</code> (+)</li>
  <li>Parça 1 (Rulman A): <code>15.0 ±0.1 mm</code> (-)</li>
  <li>Parça 2 (Ara Burç): <code>20.0 ±0.2 mm</code> (-)</li>
  <li>Parça 3 (Rulman B): <code>14.5 ±0.1 mm</code> (-)</li>
</ul>
<p><strong>Nominal Boşluk:</strong> <code>50.0 - (15.0 + 20.0 + 14.5) = 50.0 - 49.5 = <strong>0.50 mm</strong></code></p>

<div class="iki-sutun">
  <div>
    <h4>Worst-Case (WC) Sonucu</h4>
    <p><code>T<sub>WC</sub> = 0.3 + 0.1 + 0.2 + 0.1 = <strong>±0.70 mm</strong></code></p>
    <ul>
      <li>Maksimum Boşluk: <code>0.50 + 0.70 = <strong>1.20 mm</strong></code></li>
      <li>Minimum Boşluk: <code>0.50 - 0.70 = <strong>-0.20 mm (KASINTI / MONTAJ İMKÂNSIZ!)</strong></code></li>
    </ul>
    <p><em>Worst-case analizi gösteriyor ki parçalar en kötü toleransta üretilirse rulmanlar yuvaya sığmaz (0.2 mm çakışma var)!</em></p>
  </div>
  <div>
    <h4>RSS (İstatistiksel) Sonucu</h4>
    <p><code>T<sub>RSS</sub> = √( 0.3² + 0.1² + 0.2² + 0.1² ) = √( 0.09 + 0.01 + 0.04 + 0.01 ) = √0.15 = <strong>±0.387 mm</strong></code></p>
    <ul>
      <li>Maksimum Boşluk: <code>0.50 + 0.39 = <strong>0.89 mm</strong></code></li>
      <li>Minimum Boşluk: <code>0.50 - 0.39 = <strong>+0.11 mm (Montaj Kurtarır)</strong></code></li>
    </ul>
  </div>
</div>

<h2>Tolerans Yığılmasını Sahada Çözme Yöntemleri</h2>
<ol>
  <li><strong>Şim Paketi (Shim Pack / Lamine Şim):</strong> Eksenel boşluğu toleransla daraltmaya çalışmak yerine araya 0.05, 0.1, 0.2 mm soyulabilir pirinç/paslanmaz şim sacı koyarak montajda sıfırlamak.</li>
  <li><strong>Ayar Cıvataları ve Slotlar:</strong> Sabit delik yerine oval delik (slot) açarak montaj anında komparatörle hizalama imkanı bırakmak.</li>
  <li><strong>Eşleyerek İşleme (Match Drilling / Line Boring):</strong> İki gövdeyi önce cıvatalayıp, rulman deliklerini montajlı halde tek seferde delmek.</li>
</ol>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Tolerans zincirinde parçaların toleransları üst üste yığılarak montaj boşluğunu bozar veya kasıntı yaratır.</li>
  <li><strong>Worst-Case (WC):</strong> Toleransların doğrudan mutlak toplamıdır; az adetli otomasyon ve özel makinelerde %100 montaj garantisi için şarttır.</li>
  <li><strong>RSS Yöntemi:</strong> Seri üretimde parçaların çan eğrisi dağılımına dayanır; toleransları rahatlatır.</li>
  <li>Toleransları aşırı daraltıp imalatı pahalılaştırmak yerine <strong>ayar şimi (shim)</strong> veya <strong>slotlu delik</strong> tasarlamak en iyi DFM yaklaşımıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Özel bir montaj fikstürü tasarlıyorsun ve toplamda sadece 1 adet üretilecek. Tolerans analizinde Worst-Case mi kullanmalısın yoksa RSS mi? Neden?</summary>
<div>Kesinlikle <strong>Worst-Case (WC)</strong> kullanılmalıdır! RSS yöntemi binlerce parçalık seri üretimde istatistiksel olasılıklara (parçaların çoğunun nominale yakın çıkacağına) dayanır. Tek adetlik özel makine imalatında istatistik çalışmaz; üretilen o tek parça toleransın en ucunda çıkarsa montaj sahada kilitlenir ve makine teslimatı haftalarca gecikir.</div></details>
<details><summary>5 adet sac parçanın üst üste cıvatalandığı bir pakette sac kalınlık toleransı her parça için ±0.2 mm'dir. Bu paketin toplam kalınlık toleransı Worst-case ve RSS'e göre kaç mm olur?</summary>
<div>1. Worst-Case: <code>5 × 0.2 = <strong>±1.0 mm</strong></code>.<br>
2. RSS: <code>√( 5 × 0.2² ) = √( 5 × 0.04 ) = √0.20 ≈ <strong>±0.447 mm</strong></code>.<br>
Görüldüğü gibi seri üretimde istatistiksel hata ±1.0 mm yerine ±0.45 mm civarında toplanır.</div></details>
<details><summary>Rulman eksenel boşluğunu sıfırlamak için toleransları ±0.01 mm'ye çekmek mi yoksa 0.5 mm boşluk bırakıp ayar şimi (shim ring) kullanmak mı daha doğrudur?</summary>
<div>Ayar şimi (shim) kullanmak endüstriyel olarak katbekat daha doğrudur ve ucuzdur. Gövde ve mil faturalarına ±0.01 mm vermek taşlama gerektirir ve maliyeti 4 kat artırır. Oysa nominalde 0.5 mm boşluk bırakıp araya DIN 988 standart şim pulu (veya 0.05 mm soyulabilir lamine şim) koymak, montajcının komparatörle tam istenen tatlı sıkılıkta boşluğu sıfırlamasını sağlar.</div></details>
</div>
`);

KITAP.bolum('m3', '3-9', `
<p class="giris">Kaynaklı imalat, otomasyon şaseleri ve ağır fikstürlerin temelidir. Ancak kaynakçıya sadece "buraları kaynat" denilirse; ya aşırı kaynak çekip parçayı muz gibi büker, ya da yetersiz kaynak atıp ilk dinamik darbede şasenin kırılmasına yol açar. Kaynak dikişinin tipi, kalınlığı, uzunluğu ve nerede çekileceği <strong>ISO 2553 ve AWS D1.1 Kaynak Sembolleri</strong> ile teknik resimde net olarak tanımlanır.</p>

<h2>ISO 2553 Kaynak Sembolü Mimarisi</h2>
<p>Bir kaynak sembolü 4 ana bileşenden oluşur:</p>
<ol>
  <li><strong>Ok Çizgisi (Arrow Line):</strong> Kaynak yapılacak birleşme bölgesini işaret eder.</li>
  <li><strong>Referans Çizgisi (Reference Line - Sürekli Çizgi):</strong> Sembollerin yerleştirildiği yatay çizgi.</li>
  <li><strong>Tanımlama Çizgisi (Identification Line - Kesik Çizgi):</strong> ISO 2553 standardına özgüdür. Sembolün ok tarafında mı yoksa karşı tarafta mı olduğunu belirler.</li>
  <li><strong>Kuyruk (Tail):</strong> Kaynak yöntemi kodu (Örn: <code>135</code> MAG, <code>141</code> TIG), elektrot tipi veya kalite seviyesi (ISO 5817 B/C/D).</li>
</ol>

<h2>Ok Tarafı (Arrow Side) vs. Karşı Taraf (Other Side) Mantığı</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Sembolün Çizgideki Konumu (ISO 2553)</th>
    <th>Kaynağın Gerçekleştiği Taraf</th>
    <th>Açıklama</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sürekli Çizginin ÜZERİNDE</strong></td>
    <td><strong>OK TARAFI (Arrow Side)</strong></td>
    <td>Okun ucunun doğrudan temas ettiği yüzeye kaynak çekilir.</td>
  </tr>
  <tr>
    <td><strong>Kesik Çizginin (Tanımlama Çizgisi) ÜZERİNDE</strong></td>
    <td><strong>KARŞI TARAF (Other Side)</strong></td>
    <td>Okun gösterdiği birleşimin arkasındaki / karşı yüzeyine kaynak çekilir.</td>
  </tr>
  <tr>
    <td><strong>Hem Üstte Hem Altta Çift Sembol</strong></td>
    <td><strong>HER İKİ TARAF (Both Sides)</strong></td>
    <td>Sacın veya profilin her iki yanına karşılıklı simetrik kaynak çekilir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Temel Kaynak Tipleri ve Sembolleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kaynak Türü</th>
    <th>Sembol</th>
    <th>Boyutlandırma Örneği</th>
    <th>Anlamı ve Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Köşe Kaynağı (Fillet Weld)</strong></td>
    <td><strong>△ (Sağ dik üçgen)</strong></td>
    <td><strong>a5</strong> veya <strong>z7</strong></td>
    <td>T-birleşimler ve bindirmeler (Otomasyon şaselerinde %80 kullanılan kaynak).</td>
  </tr>
  <tr>
    <td><strong>Küt / Alın Kaynağı (Square Butt)</strong></td>
    <td><strong>| | (İki paralel dik çizgi)</strong></td>
    <td>s3</td>
    <td>İnce sacların boşluksuz veya aralıklı alın alına kaynatılması (ağız açılmadan).</td>
  </tr>
  <tr>
    <td><strong>Tek V Alın Kaynağı (Single-V)</strong></td>
    <td><strong>V</strong></td>
    <td>s10</td>
    <td>Kalın plakaların (t &gt; 6 mm) tam nüfuziyetli kaynatılması için V kanalı açılması.</td>
  </tr>
  <tr>
    <td><strong>Çift V / X Kaynağı (Double-V)</strong></td>
    <td><strong>X</strong></td>
    <td>s20</td>
    <td>Ağır levhaların distorsiyonu önlemek için her iki yandan simetrik kaynatılması.</td>
  </tr>
  <tr>
    <td><strong>Punta / Direnç Kaynağı (Spot Weld)</strong></td>
    <td><strong>◯ (Daire)</strong></td>
    <td>(16)</td>
    <td>Otomotiv gövde saclarının nokta direnç kaynağıyla birleştirilmesi.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Dikiş Kalınlığı: Boğaz Kalınlığı (a) vs. Kenar Uzunluğu (z)</h2>
<div class="iki-sutun">
  <div>
    <h4>Boğaz Kalınlığı "a" (Avrupa / ISO)</h4>
    <p>Kaynak kökünden dikiş yüzeyine olan en kısa dik mesafedir (Üçgenin hipotenüse inen yüksekliği).</p>
    <ul>
      <li>Resimde: <code>a4</code>, <code>a6</code> yazılır.</li>
      <li><strong>Mühendislik Hesabı:</strong> Mukavemet hesaplarında gerilme taşıyan kesit daima "a" kesitidir!</li>
    </ul>
  </div>
  <div>
    <h4>Kenar Uzunluğu "z" (Amerika / AWS)</h4>
    <p>Kaynağın sac yüzeyine yapıştığı bacak uzunluğudur (Üçgenin dik kenarı).</p>
    <ul>
      <li>Resimde: <code>z6</code>, <code>z8</code> yazılır.</li>
      <li><strong>Dönüşüm Formülü:</strong> <br><code>a = z · cos(45°) = z · 0.707</code><br>
      Örn: <code>a5 ≈ z7</code> (a=5 mm dikiş için kaynak bacağı 7 mm olmalıdır).</li>
    </ul>
  </div>
</div>

<h2>Özel Ek Semboller ve Kesintili Kaynak</h2>
<ul>
  <li><strong>Çevre Kaynağı (Daire Sembolü - ◯):</strong> Ok ile referans çizgisinin kesişim noktasına konan bir daire, birleşimin kapalı tüm konturu boyunca (örneğin borunun etrafı komple) kaynak yapılacağını belirtir.</li>
  <li><strong>Saha / Şantiye Kaynağı (Bayrak Sembolü - ⚑):</strong> Parçanın atölyede değil, müşteri tesisinde montaj sahasında kaynatılacağını belirtir.</li>
  <li><strong>Kesintili Kaynak (Intermittent Weld):</strong> Sürekli dikiş yerine aralıklı kaynak. Örn: <code>a4 10 × 50 (100)</code> → 4 mm boğaz kalınlığında, 50 mm boyunda 10 adet dikiş; her dikişin merkezleri arası mesafe (hatve) 100 mm.</li>
</ul>

<div class="kutu uyari"><span class="kb">Kaynak Distorsiyonunu (Çekmesini) Önleme Tasarımı</span>
Aşırı kaynak atmak mukavemeti artırmaz, sadece ısı girdisini katlayarak şaseyi büker!
<ol>
  <li><strong>Dikiş Kalınlığı Kuralı:</strong> İnce sacın et kalınlığından daha büyük kaynak dikişi atılmaz (<code>a ≈ 0.7 × t<sub>min</sub></code>). 5 mm sac için <code>a3.5</code> yeterlidir; <code>a8</code> çekmek saçmalıktır.</li>
  <li><strong>Kesintili Kaynak Kullan:</strong> Yüksek mukavemet gerekmeyen koruma sacı veya şase bağlantılarında sürekli dikiş yerine kesintili kaynak tasarlayın (Isı girdisi %50 düşer).</li>
  <li><strong>Simetrik Paso:</strong> Kaynak dikişlerini nötr eksene göre simetrik yerleştirin ki çekme kuvvetleri birbirini sıfırlasın.</li>
</ol>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>ISO 2553'te referans çizgisi üzerinde sürekli ve kesik çift çizgi vardır: Sürekli çizgideki sembol <strong>ok tarafını</strong>, kesik çizgideki <strong>karşı tarafı</strong> gösterir.</li>
  <li>Avrupa'da kaynak kalınlığı <strong>boğaz kalınlığı (a)</strong> ile ölçülür; Amerika'da kenar uzunluğu (z) kullanılır (<code>a = 0.707 × z</code>).</li>
  <li>Kesişim noktasındaki <strong>daire (◯)</strong> profilin tüm çevresi boyunca kaynak yapılacağını; <strong>bayrak (⚑)</strong> montaj sahasında kaynaklanacağını gösterir.</li>
  <li>Gereksiz kalın kaynak dikişi çekmeyi ve distorsiyonu önlemek için <code>a ≤ 0.7 × t<sub>min</sub></code> kuralı uygulanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Teknik resimde bir T-birleşim üzerinde <code>a5</code> köşe kaynağı sembolü var. Atölyedeki kaynakçı kumpasla kaynak bacağını ölçtüğünde 5 mm görüyor ve "kaynak tamam" diyor. Kaynak uygun mudur?</summary>
<div>Hayır, kaynak yetersizdir! Resimde "a5" yazmaktadır, yani boğaz kalınlığı (etkili taşıyıcı yükseklik) 5 mm olmalıdır. Kaynak bacağı (z) 5 mm ise, boğaz kalınlığı <code>a = 5 × 0.707 = 3.53 mm</code> olur! Bu kaynak hedeflenen mukavemetin %30 altındadır. Boğaz kalınlığının 5 mm olması için kaynakçının bacak boyunu en az <code>z = 5 / 0.707 ≈ 7.1 mm</code> doldurması gerekir.</div></details>
<details><summary>Kaynak sembolünün kırılma noktasındaki küçük bayrak (⚑) ne anlama gelir? Bu sembolü taşıyan parça talaşlı imalata montajdan önce girebilir mi?</summary>
<div>Bayrak sembolü <strong>Saha Kaynağı (Field Weld)</strong> demektir. Parçanın imalat atölyesinde kaynatılmayacağını; makinenin müşteri fabrikasında kurulurken şantiyede yerinde kaynatılacağını belirtir. Dolayısıyla atölyede bu kaynak yapılamaz ve o bölgede talaşlı imalat planlanıyorsa montaj sırası ona göre kurgulanmalıdır.</div></details>
<details><summary>4 mm et kalınlığındaki profil şasenin birleşimine bir stajyer mühendis <code>a8</code> köşe kaynağı yazmıştır. Usta bu resmi görünce neden kızar?</summary>
<div>4 mm sacın birleşimine 8 mm boğaz kalınlığı (yaklaşık 11 mm bacak boyu) kaynak çekmeye çalışmak, sacın kendisinden daha kalın devasa bir dikiş demektir. Kaynakçı bu dikişi doldurmak için defalarca paso atmak zorunda kalır; profili aşırı ısıtarak sacı deler veya şaseyi tamamen çarpıtarak çarpık (distorsiyonlu) bir hurdaya çevirir. 4 mm profil için doğru kaynak <code>a ≈ 0.7 × 4 = 2.5 … 3 mm</code> olmalıdır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-10', `
<p class="giris">Yüzlerce parçadan oluşan bir otomasyon hücresinde tasarımın kalitesi sadece tekil parçaların doğruluğuyla değil; bu parçaların nasıl bir araya geleceğini anlatan <strong>Montaj Resmi (Assembly Drawing)</strong> ve her bir vidanın, sensörün, rulmanın kodunu eksiksiz listeleyen <strong>Malzeme Listesi (BOM - Bill of Materials)</strong> ile ölçülür. Eksik bir BOM, montaj hattını haftalarca durdurur.</p>

<h2>Montaj Resmi Türleri ve Hiyerarşisi</h2>
<ol>
  <li><strong>Genel Yerleşim Montajı (General Layout Assembly):</strong> Makinenin dış boyutları (U x G x Y), operatör çalışma alanları, servis kapısı açılma boşlukları, pnömatik/elektrik giriş noktaları ve zemin ankraj deliklerini gösteren üst düzey resimdir. Tolerans ve detay içermez; yerleşimi hedefler.</li>
  <li><strong>Alt Montaj Resimleri (Sub-Assemblies):</strong> Makinenin modüler istasyonları (Örn: Besleme Konveyörü Montajı, Pick & Place Kartezyen Modülü Montajı). Atölyede o modülü toplayacak teknisyenin kullandığı ana resimdir.</li>
  <li><strong>Patlatılmış Montaj Görünüşü (Exploded View):</strong> Parçaların birbirine hangi sırayla ve hangi yönden takılacağını gösteren izometrik montaj kılavuzu (Servis ve bakım el kitabı için hayati).</li>
</ol>

<h2>Balonlama (Balloons) ve Pozlama Kuralları</h2>
<p>Montaj resminde her parça bir kılavuz çizgi ve ucundaki daire (balon) içindeki <strong>Poz Numarası (Item Number)</strong> ile işaretlenir:</p>
<ul>
  <li><strong>Sıralama Disiplini:</strong> Balonlar resmin etrafına rastgele saçılmaz. Saat yönünde (veya tersinde) ya da yatay/dikey düzgün grid hatları üzerinde hizalanarak dizilir.</li>
  <li><strong>Kesişen Çizgi Yasağı:</strong> Balon kılavuz çizgileri birbirini asla kesmemelidir! Çizgilerin kesişmesi atölyede yanlış parçanın takılmasına sebep olur.</li>
  <li><strong>Standart Bağlantı Elemanı Gruplama:</strong> Bir cıvata, yaylı rondela, düz pul ve somun dizilimi varsa; 4 ayrı balon yerine tek bir kılavuz çizgisi üzerine dikey sıralanmış ortak balon grubu asılabilir.</li>
</ul>

<h2>Malzeme Listesi (BOM) Tablo Yapısı ve Standart Sütunlar</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Poz No</th>
    <th>Parça Adı / Tanımı</th>
    <th>Parça Kodu / Çizim No</th>
    <th>Adet</th>
    <th>Malzeme</th>
    <th>Tedarik Türü</th>
    <th>Standart / Sipariş Kodu / Tedarikçi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1</strong></td>
    <td>Alt Taban Şasesi</td>
    <td>OTM-100-01-001</td>
    <td>1</td>
    <td>S235JR</td>
    <td><strong>İmalat (Make)</strong></td>
    <td>Kaynaklı ve Frezelenmiş Gövde</td>
  </tr>
  <tr>
    <td><strong>2</strong></td>
    <td>Lineer Profil Ray</td>
    <td>OTM-100-01-002</td>
    <td>2</td>
    <td>Rulman Çeliği</td>
    <td><strong>Satın Alma (Buy)</strong></td>
    <td>THK SHS25V1SS+640L</td>
  </tr>
  <tr>
    <td><strong>3</strong></td>
    <td>Merkezleme Pimi</td>
    <td>OTM-100-01-003</td>
    <td>4</td>
    <td>100Cr6</td>
    <td><strong>Standart (Norm)</strong></td>
    <td>DIN 7979-D Ø8x30 - m6</td>
  </tr>
  <tr>
    <td><strong>4</strong></td>
    <td>İndüksiyon Sensörü</td>
    <td>OTM-100-01-004</td>
    <td>2</td>
    <td>Pirinç / PBT</td>
    <td><strong>Satın Alma (Buy)</strong></td>
    <td>Sick IME12-04BPSZW2S (M12 PNP NO)</td>
  </tr>
  <tr>
    <td><strong>5</strong></td>
    <td>İnbus Cıvata</td>
    <td>OTM-100-01-005</td>
    <td>16</td>
    <td>Çelik 8.8 Galvaniz</td>
    <td><strong>Standart (Norm)</strong></td>
    <td>ISO 4762 (DIN 912) M6x25</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mühendislik Değişiklik Yönetimi ve Revizyon Bloğu (ECN / ECO)</h2>
<div class="kutu tehlike"><span class="kb">Revizyonsuz Teknik Resim Sahaya İnmez!</span>
Bir makine parçası tasarlandıktan sonra montajda veya testte bir hata çıkar ve delik çapı M6'dan M8'e büyütülür. Eğer bu değişiklik sadece 3D modelde yapılıp teknik resme <strong>Revizyon Kaydı</strong> girilmezse:
1. Satın alma eski resimden sipariş geçer; talaşlı imalat eski parçayı işler.
2. Sahada yeni cıvata eski deliğe girmez; montaj kilitlenir!
<strong>Kural:</strong> Teknik resmin sağ üst köşesindeki Revizyon Tablosuna mutlaka:
<code>Rev: B | Değişiklik: Motor flanş delikleri M6'dan M8'e büyütüldü (ECO-1042) | Tarih: 28.10.2026 | Çizen: A.K. | Onay: M.Y.</code> yazılmalıdır.</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Montaj resimleri Genel Yerleşim, Alt Montaj ve Patlatılmış (Exploded) Montaj hiyerarşisinde hazırlanır.</li>
  <li>Balon numaraları resmin etrafında saat yönünde hizalı dizilmeli ve kılavuz çizgileri birbirini asla kesmemelidir.</li>
  <li>Malzeme Listesinde (BOM) her parçanın <strong>İmalat mı Satın Alma mı</strong> olduğu, net tedarikçi sipariş kodu veya DIN/ISO standardı mutlaka yazılmalıdır.</li>
  <li>Teknik resimdeki her güncelleme antetteki <strong>Revizyon Bloğuna (Rev A, B, C...)</strong> gerekçesiyle işlenmelidir; revizyonsuz çizim atölyeyi kaosa sürükler.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir BOM tablosunda standart bir cıvata için Parça Kodu sütununa sadece "M8 Cıvata" yazılmış. Bu gösterim montaj ve satın alma açısından neden kabul edilemez?</summary>
<div>M8 cıvatanın yüzlerce çeşidi vardır: İnbus başlı mı (DIN 912), altıköşe başlı mı (DIN 933), havşa başlı mı (DIN 7991)? Boyu kaç mm (20 mm mi, 60 mm mi)? Mukavemet sınıfı nedir (8.8 mi, 10.9 mu, A2 paslanmaz mı)? Kaplaması var mı (siyah mı, galvaniz mi)? Satın alma bu bilgiyle sipariş açamaz veya yanlış cıvata alır. BOM'da tam standart kodu yazılmalıdır: <code>ISO 4762 M8x35 - 8.8 Galvaniz</code>.</div></details>
<details><summary>Büyük bir makine montaj resminde balon çizgilerinin birbirini kesmesi neden teknik resim standartlarına göre kesinlikle yasaktır?</summary>
<div>Atölye ortamında basılı A3/A1 teknik resimleri okuyan montaj teknisyeni, kesişen çizgileri takip ederken göz yanılması yaşar. Örneğin bir sensör braketinin balonunu takip ederken çizgiler kesiştiği için ucu cıvataya gidebilir; yanlış parçaya yanlış numara eşleşir, montaj sırası ve parça yerleşimi hatalı yapılır. Çizgiler birbirine paralel veya kırılmadan doğrudan kendi parçasına gitmelidir.</div></details>
<details><summary>CATIA'da montaj yaparken standart satın alma parçalarını (rulman, cıvata, pnömatik silindir) Part Number olarak nasıl isimlendirmelisin?</summary>
<div>CATIA'da varsayılan isim "Part1", "Part2" gibi anlamsızdır. Satın alma parçalarında Part Number doğrudan <strong>üretici sipariş kodu</strong> yapılmalıdır (Örn: <code>SKF_6204_2RSH</code> veya <code>FESTO_DSNU_25_50_PPV_A</code>). Böylece CATIA'dan otomatik BOM tablosu oluşturulduğunda hiçbir manuel düzeltme gerekmeden satın alma listesi saniyeler içinde eksiksiz ve hatasız üretilir.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #059669; background: rgba(5,150,105,0.06);">
<h3>Modül 3 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li>Antetteki <strong>1. Açı / 3. Açı projeksiyon konisini</strong> daima kontrol et; ters kalıp facialarını önle.</li>
  <li>Özel tolerans yazmadığın her ölçü <strong>ISO 2768-mK</strong> genel toleransına tabidir; kaynaklı şaselerde <strong>ISO 13920</strong> kullan.</li>
  <li>Talaşlı imalatta kural: <strong>Esas Delik (H7)</strong> sabittir; kayan geçme <code>H7/g6</code>, montaj geçmesi <code>H7/h6</code>, rulman mili <code>H7/k6</code>, pres sıkı geçme <code>H7/p6</code>'dır.</li>
  <li>Düzlemsellik ve silindiriklik asla datum almaz; cıvata deliklerinde konum toleransı (<code>⌖</code>) ve <strong>MMC (Ⓜ) bonus toleransı</strong> ile maliyeti düşür.</li>
  <li>Dinamik sızdırmazlıkta Ra yetmez, <strong>Rz</strong> kontrol et. Yataklarda aşırı dar tolerans yerine <strong>ayar şimi (shim)</strong> tasarla.</li>
  <li>Kaynakta kalınlık mukavemet demek değildir; <code>a ≤ 0.7 × t</code> kuralıyla distorsiyonu önle. BOM'da satın alma kodlarını eksiksiz belirt.</li>
</ul></div>
`);
