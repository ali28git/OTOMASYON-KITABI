// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.1 – 3.4: Görünüşler, Genel Toleranslar, ISO Geçmeler, Rulman/Pim Geçmeleri)
// Mekatronik & Makine Tasarımı: Sahada İmalat ve Montaj Hatalarını Sıfırlayan Mühendislik Kılavuzu

KITAP.bolum('m3', '3-1', `
<p class="giris">Teknik resim, tasarım mühendisi ile talaşlı imalat ustası, kaynakçı ve kalite kontrol metroloğu arasındaki evrensel sözleşmedir. CATIA'da harika görünen bir 3D model, teknik resmi eksik, hatalı veya çelişkili çizilmişse atölyede hurdaya dönüşür. Bu bölümde projeksiyon kurallarından kesit alma inceliklerine, ölçülendirme hiyerarşisinden CATIA Drafting püf noktalarına kadar eksiksiz teknik resim disiplinini inceliyoruz.</p>

<h2>İzdüşüm Metotları: 1. Açı (Avrupa) vs. 3. Açı (Amerikan)</h2>
<p>Dünya genelinde iki ana ortografik projeksiyon sistemi kullanılır. Antette yer alan kesik koni sembolü, parçaya nereden bakıp nereye çizeceğinizi belirler:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Özellik</th>
    <th>1. Açı Projeksiyonu (First Angle - ISO / Avrupa)</th>
    <th>3. Açı Projeksiyonu (Third Angle - ANSI / Amerika & Japonya)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sembol</strong></td>
    <td>Koni solda dar, sağda geniş; daireler sağda (Göz → Parça → İzdüşüm Düzlemi)</td>
    <td>Koni solda geniş, sağda dar; daireler solda (Göz → İzdüşüm Düzlemi → Parça)</td>
  </tr>
  <tr>
    <td><strong>Üstten Görünüş</strong></td>
    <td>Ön görünüşün <strong>ALTINA</strong> çizilir.</td>
    <td>Ön görünüşün <strong>ÜSTÜNE</strong> çizilir.</td>
  </tr>
  <tr>
    <td><strong>Soldan Görünüş</strong></td>
    <td>Ön görünüşün <strong>SAĞINA</strong> çizilir.</td>
    <td>Ön görünüşün <strong>SOLUNA</strong> çizilir.</td>
  </tr>
  <tr>
    <td><strong>Kullanım Alanı</strong></td>
    <td>Türkiye, Almanya, tüm Avrupa ve ISO standardı kullanan ülkeler.</td>
    <td>ABD, Kanada, Japonya ve bu ülkelere fason çalışan otomotiv/havacılık tedarikçileri.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Sahadan Yaşanmış Facia: Ayna Görüntüsü (Mirror) Kalıp</span>
Amerikan bir otomotiv firmasına kalıp çizen genç bir mühendis, antetteki sembolü kontrol etmeden Türkiye varsayılanı olan 1. Açı düzeninde teknik resim basmıştır. CNC operatörü çizimi 3. Açı kabul ederek sol kuleyi sağ kule zannedip işlemiş; 15.000 € değerindeki takım çeliği blok tamamen ters (ayna görüntüsü) üretilerek hurda olmuştur! <strong>Kural: Antetteki projeksiyon konisini daima iki kez kontrol et.</strong></div>

<h2>Görünüş Seçimi ve Kesit Alma Kuralları (ISO 128)</h2>
<p>Teknik resimde amaç "en çok görünüşü koymak" değil, <strong>parçanın tüm geometrisini ve toleranslarını en az görünüşle ve kesik (görünmeyen) çizgilere en az ihtiyaç duyacak şekilde</strong> ifade etmektir.</p>

<h3>Boyuna Kesiti ASLA Alınmayan Standart Elemanlar</h3>
<p>ISO 128-47 standardına göre, montaj resimlerinde kesit düzlemi aşağıdaki elemanların ekseninden boyuna geçse bile bu elemanlar <strong>KESİLMEMİŞ (DOLU)</strong> olarak gösterilir:</p>
<ul>
  <li><strong>Bağlantı Elemanları:</strong> Cıvatalar, somunlar, saplamalar, pullar, rondelalar ve perçinler.</li>
  <li><strong>Miller ve Şaftlar:</strong> Dolu miller, kamalı miller ve akslar boyuna kesilmez (Sadece lokal koparma / kısmi kesit ile kama kanalı gösterilebilir).</li>
  <li><strong>Pimler ve Kamalar:</strong> Silindirik, konik pimler ve paralel kamalar boyuna taranmaz.</li>
  <li><strong>Rulman Yuvarlanma Elemanları:</strong> Bilyalar ve silindirik/konik makaralar asla taranmaz (Sadece iç ve dış bilezik taranır).</li>
  <li><strong>Federler (Takviye Kanatları / Ribs):</strong> Döküm veya kaynaklı braketlerdeki ince takviye federleri boyuna kesilirse taranmaz! Taranırsa parça sanki masif ve aşırı etli gibi yanlış algılanır. Enine kesilirse taranır.</li>
</ul>

<h2>Ölçülendirme İlkeleri: İmalatçı Gibi Düşünmek</h2>
<ol>
  <li><strong>Tek Referanstan (Datum) Ölçülendirme:</strong> Ölçüleri birbirine zincirleme (kümülatif) bağlama. Daima parçanın montajda oturduğu işlenmiş yüzeyi veya ana faturayı referans (0 noktası) kabul ederek oradan ölçü ver.</li>
  <li><strong>Kapalı Ölçü Zinciri Yasağı:</strong> Bir parçanın toplam boyunu verdiysen, ara kademelerin tamamını ölçülendirip zinciri kapatma. Kademelerden en önemsiz olanını serbest bırak (veya parantez içinde referans ölçü <code>(50)</code> olarak yaz). Aksi halde genel toleranslar birbiriyle çelişir ve parçayı işleyen usta kararsız kalır.</li>
  <li><strong>Görünmeyen Çizgiye Ölçü Vermeme:</strong> Kesik çizgili (görünmeyen) kenarlara asla ölçü verme. O bölgeden lokal kesit alarak kenarı net görünür hale getir, ölçüyü öyle ver.</li>
  <li><strong>Dişli Delik Ölçülendirmesi:</strong> Kör kılavuz deliklerinde daima iki derinlik belirtilmelidir: Matkap delik derinliği ve Kılavuz (vida) boyu (Örn: <code>M8x1.25 - 6H ↧ 16, Matkap ↧ 20</code>).</li>
</ol>

<h2>CATIA V5 / 3DEXPERIENCE Drafting Pratikleri</h2>
<div class="kutu ipucu"><span class="kb">CATIA'da Hatasız Teknik Resim İçin 4 Hayati Ayar</span>
<ol>
  <li><strong>Thread (Vida Dişi) Gösterimi:</strong> CATIA'da yeni bir görünüş aldığında vida dişleri varsayılan olarak kapalı gelebilir. Görünüş çerçevesine sağ tıkla → <em>Properties</em> → <em>View</em> sekmesinde <strong>Thread</strong> kutusunu mutlaka işaretle. Aksi halde teknik resimde vida çizgisi çıkmaz, atölye orayı düz delik deler!</li>
  <li><strong>Center Line ve Axis:</strong> Deliklerin ve silindirik yüzeylerin eksen çizgilerini elle çizmeyin. Görünüş seçiliyken <em>Properties</em> üzerinden <strong>Axis</strong> ve <strong>Center Line</strong> açılmalıdır.</li>
  <li><strong>Over-dimensioning Kontrolü:</strong> CATIA'da ölçü verirken sarı renkli uyarı çıkıyorsa sistem "Bu ölçü başka bir ölçüyle geometrik olarak zaten kilitli" diyordur. O ölçüyü silin veya parantezli referans ölçüye çevirin.</li>
  <li><strong>Force Dimensions along Direction:</strong> Pah ve kanal ölçülerinde ölçü çizgisinin parçaya paralel veya dik hizalanması için sağ tık menüsünden hizalama modunu mutlaka sabitleyin.</li>
</ol>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Antetteki projeksiyon sembolü kritiktir: <strong>1. Açı (ISO/Avrupa)</strong> Türkiye ve Avrupa'da; <strong>3. Açı (ANSI)</strong> ABD ve Japonya'da kullanılır. Ters algılanırsa parça ayna görüntüsü üretilir.</li>
  <li>Montaj kesitlerinde cıvata, somun, mil, pim, kama, bilya ve <strong>federler boyuna taranmaz</strong>.</li>
  <li>Ölçülendirmede kapalı zincir yapılmaz; en az bir ölçü boşta bırakılır veya referans <code>(X)</code> ölçü yapılır.</li>
  <li>Ölçüler görünmeyen kesik çizgilere verilmez; lokal veya tam kesit alınarak net kenardan ölçülendirilir.</li>
  <li>CATIA Drafting'de <em>Properties → Thread</em> açılmazsa teknik resimde dişler görünmez ve usta kılavuz çekmeyi unutur.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kaynaklı bir L-braketin ortasında eğilmeye karşı 10 mm et kalınlığında bir üçgen feder (takviye kanadı) var. Montaj resminde federin tam ortasından boyuna kesit aldın. Feder taranır mı?</summary>
<div>Hayır, taranmaz! ISO 128 standardına göre federler, nervürler ve takviye sacları boyuna kesildiklerinde taranmazlar, kesilmemiş dolu parça gibi bırakılırlar. Eğer feder taranırsa, resmi okuyan kişi parçayı arkaya doğru komple dolu devasa bir blok zanneder. Feder sadece enine (dik) kesilirse taranır.</div></details>
<details><summary>Boyu 100 mm olan iki kademeli bir milde; sol kademeyi 40 mm, sağ kademeyi 60 mm, toplam boyu da 100 mm olarak teknik resimde ölçülendirdin. Kalite kontrol bu resmi neden reddeder?</summary>
<div>Bu hata <strong>aşırı ölçülendirme (kapalı ölçü zinciri)</strong> hatasıdır. Genel tolerans ISO 2768-m olsun (±0.3 mm). İmalatçı 40'ı 40.2 işler, 60'ı 60.2 işler; ikisi de tolerans dahilindedir. Ancak parçanın toplam boyu 100.4 mm olur ve 100±0.3 sınırını aşarak hurda olur! Doğru yöntem: İki fonksiyondan kritik olanına net ölçü vermek, diğer kademeyi boş bırakmak veya toplam boyu parantez içinde <code>(100)</code> referans ölçü yapmaktır.</div></details>
<details><summary>Teknik resimde bir delik eksenine göre simetrik olan parçada neden ölçüler deliğin merkezinden verilir de dış sac kenarından verilmez?</summary>
<div>Fonksiyonel yüzey delik eksenidir (örneğin rulman yuvası veya pim deliği). Parça çalışırken mekanizma deliğe göre merkezlenir. Eğer ölçüyü dış ham kenardan verirseniz, dış kenarın kesim/lazer çapağı veya sac büküm toleransı deliğin konumuna yansır ve eksen kaçıklığı oluşur. Ölçülendirme daima parçanın çalıştığı montaj datumundan dışarıya doğru yapılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-2', `
<p class="giris">Tasarımcıların teknik resimde yaptığı en büyük iki acemilik şunlardır: Ya hiçbir ölçüye tolerans yazmayıp ustanın keyfine bırakmak ya da her ölçüye gereksiz yere ±0.05 yazarak parça maliyetini 5 katına fırlatmak. Modern üretimde özel tolerans yazılmayan her ölçünün yasal bağlayıcılığı <strong>Genel Toleranslar (ISO 2768)</strong> ile belirlenir.</p>

<h2>ISO 2768 Standardı ve Yapısı</h2>
<p>Teknik resmin antetinde (sağ alt köşe) <strong>"Genel Tolerans: ISO 2768-mK"</strong> ibaresini görürsünüz. Bu kod iki bağımsız bölümden oluşur:</p>
<ul>
  <li><strong>ISO 2768-1:</strong> Doğrusal (lineer) ölçüler, pahlar, radyuslar ve açılar için boyutsal toleranslar.
    <ul>
      <li><code>f</code> (fine - hassas): Takım tezgahı iş milleri, mastarlar, hassas kalıplar.</li>
      <li><code>m</code> (medium - orta): <strong>Otomasyon ve makine imalatının evrensel standardı.</strong></li>
      <li><code>c</code> (coarse - kaba): Kaba kaynaklı yapılar, alevli kesimler.</li>
      <li><code>v</code> (very coarse - çok kaba): Dökümhane kaba temizleme ölçüleri.</li>
    </ul>
  </li>
  <li><strong>ISO 2768-2:</strong> Doğrusallık, düzlemsellik, diklik ve dairesel salgı için geometrik form toleransları (<code>H</code> hassas, <code>K</code> orta, <code>L</code> kaba).</li>
</ul>

<h2>ISO 2768-1 Doğrusal Ölçü Tolerans Tablosu (mm)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tolerans Sınıfı</th>
    <th>0.5 – 3</th>
    <th>&gt;3 – 6</th>
    <th>&gt;6 – 30</th>
    <th>&gt;30 – 120</th>
    <th>&gt;120 – 400</th>
    <th>&gt;400 – 1000</th>
    <th>&gt;1000 – 2000</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>f (Hassas)</strong></td>
    <td>±0.05</td>
    <td>±0.05</td>
    <td>±0.1</td>
    <td>±0.15</td>
    <td>±0.2</td>
    <td>±0.3</td>
    <td>±0.5</td>
  </tr>
  <tr>
    <td><strong>m (Orta - Standart)</strong></td>
    <td><strong>±0.1</strong></td>
    <td><strong>±0.1</strong></td>
    <td><strong>±0.2</strong></td>
    <td><strong>±0.3</strong></td>
    <td><strong>±0.5</strong></td>
    <td><strong>±0.8</strong></td>
    <td><strong>±1.2</strong></td>
  </tr>
  <tr>
    <td><strong>c (Kaba)</strong></td>
    <td>±0.2</td>
    <td>±0.3</td>
    <td>±0.5</td>
    <td>±0.8</td>
    <td>±1.2</td>
    <td>±2.0</td>
    <td>±3.0</td>
  </tr>
  <tr>
    <td><strong>v (Çok Kaba)</strong></td>
    <td>—</td>
    <td>±0.5</td>
    <td>±1.0</td>
    <td>±1.5</td>
    <td>±2.5</td>
    <td>±4.0</td>
    <td>±6.0</td>
  </tr>
</tbody>
</table>
</div>

<h2>Pahlar ve Yuvarlatma Radyusları İçin ISO 2768-1 (mm)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tolerans Sınıfı</th>
    <th>0.5 – 3 mm Arası Radyus/Pah</th>
    <th>&gt;3 – 6 mm Arası Radyus/Pah</th>
    <th>&gt;6 mm Üzeri Radyus/Pah</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>f (Hassas) ve m (Orta)</strong></td>
    <td><strong>±0.2 mm</strong></td>
    <td><strong>±0.5 mm</strong></td>
    <td><strong>±1.0 mm</strong></td>
  </tr>
  <tr>
    <td><strong>c (Kaba) ve v (Çok Kaba)</strong></td>
    <td>±0.4 mm</td>
    <td>±1.0 mm</td>
    <td>±2.0 mm</td>
  </tr>
</tbody>
</table>
</div>

<h2>Farklı İmalat Yöntemleri İçin Genel Tolerans Standartları</h2>
<div class="kutu uyari"><span class="kb">Her Parçanın Antetine Körü Körüne ISO 2768-m Yazılmaz!</span>
ISO 2768 sadece talaş kaldırarak işlenen (CNC torna/freze) metal parçalar için gerçekçidir. Diğer imalat yöntemleri için doğru genel tolerans normunu antete yazmazsanız tedarikçiyle mahkemelik olursunuz:
<ul>
  <li><strong>Kaynaklı İmalat Şaseleri:</strong> <strong>ISO 13920</strong> (Örn: <code>ISO 13920-BF</code> veya <code>CG</code>). Kaynak gerilmeleriyle 2 metrelik bir şasede ISO 2768-m (±1.2 mm) yakalamak imkânsızdır; ISO 13920 sınıf C'de ±6 mm tolerans verilir.</li>
  <li><strong>Sac Metal Kesim ve Büküm:</strong> <strong>DIN 6930-2</strong> veya ISO 2768-c (kaba). Lazer kesim hassas olsa da abkant bükümde saç kalınlık dalgalanması yüzünden büküm ölçüleri ±0.5 mm oynar.</li>
  <li><strong>Plastik Enjeksiyon ve 3D Baskı:</strong> <strong>DIN 16742</strong> (Plastik kalıplama toleransları). Çekme (shrinkage) payı yüzünden plastik parçalara metal talaşlı imalat toleransı verilemez.</li>
  <li><strong>Alüminyum Ekstrüzyon Profiller:</strong> <strong>EN 755-9</strong> veya <strong>EN 12020-2</strong> (Hassas ekstrüzyon toleransları).</li>
</ul>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Teknik resimde üzerinde özel tolerans yazmayan tüm ölçüler antette belirtilen <strong>Genel Tolerans standardına</strong> tabidir.</li>
  <li>Talaşlı imalat parçalarında antete <strong>ISO 2768-mK</strong> yazılır (m: doğrusal orta sınıf, K: geometrik orta sınıf).</li>
  <li>ISO 2768-m sınıfında tolerans ölçü büyüdükçe artar: 20 mm için ±0.2 mm iken, 300 mm için ±0.5 mm, 1500 mm için ±1.2 mm'dir.</li>
  <li>Kaynaklı konstrüksiyonlarda asla ISO 2768 kullanılmaz; <strong>ISO 13920</strong> standardı kullanılır.</li>
  <li>Sac büküm parçalarında abkant büküm hatları için genel tolerans olarak <strong>ISO 2768-c</strong> veya <strong>DIN 6930-2</strong> geçerlidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>CNC frezede işlenecek bir alüminyum gövdenin antetinde "ISO 2768-m" yazıyor. Resimde bir kanal derinliği "25" olarak verilmiş (özel tolerans yazılmamış). Bu parçanın kabul edilebilir ölçü aralığı nedir?</summary>
<div>Tabloya bakılır: 25 mm ölçüsü <strong>"&gt;6 – 30 mm"</strong> aralığındadır. Bu aralık için "m" sınıfı tolerans <strong>±0.2 mm</strong>'dir. Dolayısıyla üretilen kanal derinliği <strong>24.80 mm ile 25.20 mm</strong> arasında ise parça kalite kontrolden onay alır.</div></details>
<details><summary>3 metre boyunda kaynaklı bir profil makine şasesinin antetine genç mühendis ISO 2768-m yazmıştır. İmalat ustası "Ben bu işi yapmam ya da 5 katı para isterim" demiştir. Usta neden haklıdır?</summary>
<div>3000 mm boyunda bir kaynaklı şasede kaynak yapılırken sıcaklık sebebiyle profiller çeker, burulur ve esner. ISO 2768-m talaşlı imalat normudur ve 3 metrede ±1.5 mm gibi kaynakla yakalanması imkansız bir hassasiyet talep eder. Bu hassasiyeti yakalamak için şasenin dev bir portal CNC tezgaha bağlanıp komple taranması gerekir ki bu da maliyeti 5 kat artırır. Doğru norm <strong>ISO 13920-C</strong> olmalıdır (kaynaklı şase için ±6 mm tolerans yeterlidir).</div></details>
<details><summary>Tasarımcı bir milin serbest fatura boyuna "45 ±0.02 mm" yazmıştır. Bu fatura havada durmaktadır ve hiçbir yere temas etmemektedir. Bu toleransın fabrikaya zararı nedir?</summary>
<div>Fonksiyonel olmayan boşluktaki bir ölçüye ±0.02 mm tolerans vermek, CNC operatörünün parçayı seri üretmek yerine her parçada tezgâhı durdurup mikrometreyle ölçüm yapmasına, paso hızını düşürmesine ve reddedilen parça oranının artmasına yol açar. Parçanın maliyeti %40–60 artar. Serbest ölçüler toleranssız bırakılmalı ve ISO 2768-m'e (±0.3 mm) terk edilmelidir.</div></details>
</div>
`);

KITAP.bolum('m3', '3-3', `
<p class="giris">Makine mühendisliğinde iki parça birbiriyle eşleştiğinde ya dönecektir (boşluklu), ya elle/çekiçle sökülebilir şekilde merkezlenecektir (ara geçme), ya da asla oynamayacak şekilde presle kilitlenecektir (sıkı geçme). Bu mekanik ilişkiyi yöneten evrensel dil <strong>ISO 286 Tolerans ve Geçme Sistemidir</strong>.</p>

<h2>Temel Prensipler: Büyük Harf, Küçük Harf ve Sıfır Çizgisi</h2>
<div class="iki-sutun">
  <div>
    <h4>DELİK (Büyük Harf: A … ZC)</h4>
    <p>Dişi elemanların tamamını (delik, kama kanalı, rulman yuvası) temsil eder.</p>
    <ul>
      <li><strong>"H" Delik:</strong> <strong>Esas Delik</strong>tir. Alt sapması sıfırdır (EI = 0). Yani delik asla nominal ölçünün altına inemez! Daima nominal ölçü ile artı tolerans arasındadır (Örn: Ø20 H7 = <code>+0.021 / 0.000</code>).</li>
    </ul>
  </div>
  <div>
    <h4>MİL (Küçük Harf: a … zc)</h4>
    <p>Erkek elemanların tamamını (mil çapı, kama genişliği, pim) temsil eder.</p>
    <ul>
      <li><strong>"h" Mil:</strong> <strong>Esas Mil</strong>dir. Üst sapması sıfırdır (es = 0). Yani mil asla nominal ölçünün üstüne çıkamaz! Daima nominal ölçü ile eksi tolerans arasındadır (Örn: Ø20 h6 = <code>0.000 / -0.013</code>).</li>
    </ul>
  </div>
</div>

<h2>Neden %95 "Esas Delik Sistemi" Tercih Edilir?</h2>
<div class="kutu not"><span class="kb">Atölye Ekonomisi ve Takım Maliyeti</span>
Bir deliği hassas işlemek için standart takımlar (matkap, rayba, bara) kullanılır. Piyasada <strong>Ø20 H7 rayba</strong> 30 Euro'ya hazır satılır. Eğer "Esas Mil" sistemi seçip deliğe F7, P7, S7 gibi garip ölçüler vermeye kalkarsanız, her delik çapı için yüzlerce Euro'ya özel takım yaptırmak zorunda kalırsınız! 
Buna karşılık mil tornada işlenir; CNC tornacı tek bir standart elmas uçla mili <code>g6</code> da işler, <code>k6</code> da işler, <code>p6</code> da işler. Bu yüzden makine imalatında <strong>Daimadelik H7 sabit tutulur, geçme karakteri milin harfiyle (g, h, j, k, m, p, s) değiştirilir</strong>.</div>

<h2>IT Tolerans Kaliteleri (ISO 286)</h2>
<p>Harfin yanındaki rakam tolerans aralığının büyüklüğünü (kalitesini) gösterir. Rakam küçüldükçe işleme hassasiyeti ve maliyet katlanarak artar:</p>
<ul>
  <li><strong>IT01 – IT4:</strong> Blok mastarlar, optik ve ölçüm cihazları, kalibrasyon ekipmanları.</li>
  <li><strong>IT5 – IT6:</strong> <strong>Taşlanmış yüzeyler</strong>, hassas rulman oturma milleri, CNC iş milleri.</li>
  <li><strong>IT7 – IT8:</strong> <strong>Raybalanmış delikler</strong>, hassas CNC torna/freze, standart rulman yuvaları (H7, h6, f7).</li>
  <li><strong>IT9 – IT11:</strong> Kaba talaşlı imalat, kamalar, dişli genişlikleri, segman kanalları.</li>
  <li><strong>IT12 – IT16:</strong> Sac kesim, lazer kesim, dövme ve döküm kaba yüzeyleri.</li>
</ul>

<h2>3 Temel Geçme Grubu ve Sayısal Örnekler (Ø20 mm İçin)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Geçme Türü</th>
    <th>ISO Kodu</th>
    <th>Delik Toleransı (H7) [mm]</th>
    <th>Mil Toleransı [mm]</th>
    <th>Minimum Boşluk/Sıkılık</th>
    <th>Maksimum Boşluk/Sıkılık</th>
    <th>Mekanik Karakter ve Kullanım Yeri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2"><strong>Boşluklu Geçme<br>(Clearance Fit)</strong></td>
    <td><strong>H7 / g6</strong></td>
    <td>+0.021 / 0.000</td>
    <td>-0.007 / -0.020 (g6)</td>
    <td><strong>+0.007 mm Boşluk</strong></td>
    <td><strong>+0.041 mm Boşluk</strong></td>
    <td><strong>Hassas Kayan Geçme:</strong> Yağ filmiyle rahatça kayar ve döner. Spindle milleri, lineer kızak kayıcıları.</td>
  </tr>
  <tr>
    <td><strong>H8 / f7</strong></td>
    <td>+0.033 / 0.000</td>
    <td>-0.020 / -0.041 (f7)</td>
    <td><strong>+0.020 mm Boşluk</strong></td>
    <td><strong>+0.074 mm Boşluk</strong></td>
    <td><strong>Serbest Dönen Geçme:</strong> Bronz burç - mil yataklamaları, konveyör avaraları. Isınsa bile kilitlenmez.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Ara Geçme<br>(Transition Fit)</strong></td>
    <td><strong>H7 / h6</strong></td>
    <td>+0.021 / 0.000</td>
    <td>0.000 / -0.013 (h6)</td>
    <td><strong>0.000 mm (Sıfır Temas)</strong></td>
    <td><strong>+0.034 mm Boşluk</strong></td>
    <td><strong>Kayar / İtme Geçme:</strong> Elle veya plastik çekiçle hafifçe vurarak monte edilir. Sökülebilir dişli kasnak göbekleri.</td>
  </tr>
  <tr>
    <td><strong>H7 / k6</strong></td>
    <td>+0.021 / 0.000</td>
    <td>+0.015 / +0.002 (k6)</td>
    <td><strong>-0.002 mm Sıkılık</strong></td>
    <td><strong>+0.019 mm Boşluk</strong></td>
    <td><strong>Tokmak Geçme:</strong> Bakır çekiçle vurarak geçer. Rulman iç bileziğinin mile montaj standardı! Boşluksuz merkezler.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Sıkı Geçme<br>(Interference Fit)</strong></td>
    <td><strong>H7 / p6</strong></td>
    <td>+0.021 / 0.000</td>
    <td>+0.035 / +0.022 (p6)</td>
    <td><strong>-0.001 mm Sıkılık</strong></td>
    <td><strong>-0.035 mm Sıkılık</strong></td>
    <td><strong>Pres Geçme:</strong> Hidrolik presle basılır. Kama olmadan orta seviye tork iletir. Sabit pimler, burç dış çapı.</td>
  </tr>
  <tr>
    <td><strong>H7 / s6</strong></td>
    <td>+0.021 / 0.000</td>
    <td>+0.048 / +0.035 (s6)</td>
    <td><strong>-0.014 mm Sıkılık</strong></td>
    <td><strong>-0.048 mm Sıkılık</strong></td>
    <td><strong>Ağır Sıkı Geçme (Shrink Fit):</strong> Mil sıvı azotta soğutulur (-196°C) veya gövde ısıtılır (200°C). Sökülemez! Yüksek tork.</td>
  </tr>
</tbody>
</table>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Büyük harf <strong>DELİK</strong> (H), küçük harf <strong>MİL</strong> (h) toleransıdır. Rakam küçüldükçe hassasiyet artar (IT5 &lt; IT7 &lt; IT11).</li>
  <li>Ekonomik nedenlerle daima <strong>Esas Delik Sistemi (H7)</strong> seçilir; rayba standarttır, mil tornada ayarlanır.</li>
  <li><strong>H7/g6:</strong> Hassas kayan, yağlanan eksenel çalışan geçme.</li>
  <li><strong>H7/h6:</strong> Elle veya hafif tokmakla montaj yapılan sıfır boşluklu montaj geçmesi.</li>
  <li><strong>H7/k6:</strong> Tokmakla çakılan, rulman iç bilezikleri için standart ara geçme.</li>
  <li><strong>H7/p6:</strong> Presle basılan, geri sökülmeyen sıkı geçme.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Ø30 mm çapında bir bronz yatak burcunu çelik gövdeye presleyip, içine de dönen bir çelik mil geçireceksin. Gövde-burç ve burç-mil için hangi ISO geçmelerini önerirsin?</summary>
<div>1. <strong>Gövde - Burç Dış Çapı:</strong> Burç gövde içinde dönmemeli ve kaymamalıdır; presle çakılmalıdır → <strong>H7 / p6</strong> (veya r6).<br>
2. <strong>Burç İç Çapı - Dönen Mil:</strong> Bronz burç içinde mil sürekli dönecek ve ısınacaktır. Yağ filmi oluşabilmesi ve ısıl genleşmede sıkışmaması için boşluklu olmalıdır → <strong>H8 / f7</strong> (veya H7 / e7).</div></details>
<details><summary>H7 deliğin alt sapması neden daima sıfırdır? Ø25 H7 bir deliğin ölçüsü 24.98 mm çıkarsa ne olur?</summary>
<div>H harfi "Esas Delik" sembolüdür ve tanım gereği alt tolerans sınırı tam sıfır çizgisi üzerindedir (EI = 0). Dolayısıyla nominal ölçünün altına inemez. Eğer Ø25 H7 delik 24.98 mm işlenmişse, deliğin çapı nominalden 0.02 mm küçüktür; parça tolerans dışıdır ve standart H7 pim veya rulman bu deliğe kesinlikle girmez!</div></details>
<details><summary>Sıkı geçme yapılacak bir milde H7/s6 yerine H7/p6 seçilirse ne fark eder?</summary>
<div><code>p6</code> hafif sıkı pres geçmedir (örneğin Ø20'de 1 ila 35 mikron sıkılık); atölye tipi mekanik veya hidrolik el presiyle monte edilebilir. <code>s6</code> ise ağır sıkı geçmedir (14 ila 48 mikron sıkılık); presle basmaya kalkarsanız delik çeperi yırtılır veya talaş kaldırır. <code>s6</code> montajı için gövdenin indüksiyonla ısıtılması veya milin kuru buz / sıvı azotla dondurulması (büzme geçme) şarttır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-4', `
<p class="giris">Mekatronik tasarımların sahada en sık kilitlendiği yerler rulman oturma yüzeyleri, merkezleme pimleri ve kaymalı yatak burçlarıdır. Bir rulman yuvasını 0.02 mm dar işlerseniz rulman iç boşluğu sıfırlanıp 10 dakikada yanar; 0.02 mm geniş işlerseniz mil rulmanın içinde döner (fretting korozyonu). Bu bölümde rulman, pim ve burç toleranslarını üretici katalog normlarıyla inceliyoruz.</p>

<h2>Rulman Yataklama Toleransları (ISO 492 / SKF & Schaeffler Normu)</h2>
<p>Rulman toleransı seçerken ilk kural şudur: <strong>"Hangi bilezik dönüyor ve yükün yönü ne?"</strong></p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Çalışma Durumu</th>
    <th>Bilezik</th>
    <th>Yük Tipi</th>
    <th>Önerilen Geçme Toleransı</th>
    <th>Açıklama ve Neden?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2"><strong>Dönen Mil / Sabit Gövde</strong><br><small>(En yaygın durum: Motor mili, redüktör, konveyör tamburu)</small></td>
    <td><strong>İç Bilezik (Mil)</strong></td>
    <td>Çevresel Yük (Dönen)</td>
    <td><strong>k5 / k6 / m5</strong> (Hassasta <strong>j6</strong>)</td>
    <td><strong>SIKI / ARA GEÇME:</strong> İç bilezik dönme kuvvetiyle mil üzerinde kayıp sıvanmasın diye sıkı geçmelidir!</td>
  </tr>
  <tr>
    <td><strong>Dış Bilezik (Gövde)</strong></td>
    <td>Noktasal Yük (Sabit)</td>
    <td><strong>H7 / H8</strong> (Dökümde <strong>J7</strong>)</td>
    <td><strong>BOŞLUKLU GEÇME:</strong> Dış bilezik gövdede rahatça eksenel kaysın (serbest yatak ısıl uzamayı karşılasın).</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Sabit Mil / Dönen Gövde</strong><br><small>(Avare gergi kasnağı, araba tekerlek poryası)</small></td>
    <td><strong>İç Bilezik (Mil)</strong></td>
    <td>Noktasal Yük (Sabit)</td>
    <td><strong>h6 / g6</strong></td>
    <td><strong>BOŞLUKLU GEÇME:</strong> Sabit kalan iç bilezik mile rahatça takılır.</td>
  </tr>
  <tr>
    <td><strong>Dış Bilezik (Gövde)</strong></td>
    <td>Çevresel Yük (Dönen)</td>
    <td><strong>M7 / N7 / P7</strong></td>
    <td><strong>SIKI GEÇME:</strong> Kasnak döndükçe rulman dış bileziği yuvada dönüp gövdeyi aşındırmasın diye preslenir.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Rulman Yuvasını Çok Sıkı İşleme Tuzağı (C3 Boşluğu)</span>
Standart bir sabit bilyalı rulmanın içinde bilyaların serbest dönmesi için mikron seviyesinde (5–20 µm) <strong>radyal iç boşluk (radial internal clearance)</strong> vardır. Eğer mili <code>m6</code> veya <code>p6</code> gibi aşırı sıkı işlerseniz, iç bilezik radyal olarak genleşir ve rulmanın içindeki tüm boşluğu yutar! Bilyalar iki bilezik arasına sıkışır, rulman dönerken uğultu yapar ve 50 saatte kilitlenir. Çözüm: Yüksek sıkılık veya yüksek çalışma sıcaklığı varsa mutlaka <strong>C3 iç boşluklu rulman</strong> seçilmelidir!</div>

<h2>Merkezleme Pimleri (Dowels) ve Fikstür Tasarımı (DIN 7979 / DIN 6325)</h2>
<p>İki plakayı cıvatayla sıktığınızda cıvatalar sadece baskı kuvveti uygular; cıvata deliği boşluklu olduğu için (M8 için delik Ø9 mm'dir) parçalar 1 mm kayabilir. Hassas konum tekrarlanabilirliğini sağlayan eleman <strong>Merkezleme Pimi (Dowel Pin)</strong>'dir.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Eleman / Bölge</th>
    <th>Standart Pim Tipi</th>
    <th>Delik Toleransı</th>
    <th>Montaj / Fonksiyon Özelliği</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alt Taban Plakası (Sabit Gövde)</strong></td>
    <td>DIN 6325 Sertleştirilmiş Silindirik Pim (m6 toleranslı)</td>
    <td><strong>H7 (veya M6)</strong></td>
    <td>Pim tabana <strong>sıkı preslenir</strong> ve kalıcı olarak orada çakılı kalır.</td>
  </tr>
  <tr>
    <td><strong>Üst Sökülen Plaka (Hassas Parça)</strong></td>
    <td>Karşılayan delik</td>
    <td><strong>H7 (veya F7)</strong></td>
    <td>Plaka pimin üzerinden elle veya hafif itmeyle rahatça sökülüp takılır (Boşluksuz merkezleme).</td>
  </tr>
  <tr>
    <td><strong>Kör Delikli Gövdeler</strong></td>
    <td><strong>DIN 7979-D (Çekme Dişli Pim)</strong></td>
    <td><strong>H7</strong></td>
    <td>Pimin arkasında M4/M5/M6 iç vida dişi ve gövdesinde boyuna düz <strong>hava tahliye kanalı (flat vent)</strong> bulunur.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Hava Sıkışması (Piston Etkisi) ve Sökülemeyen Pim</span>
Kör bir deliğe hava kanalı olmayan düz bir DIN 6325 pimi çakmaya kalkarsanız, dipte sıkışan hava kompresyon yapar ve pimi dışarı fırlatır ya da çakamazsınız. Çaksanız bile arkadan vuramayacağınız için pimi asla geri sökemezsiniz! <strong>Altın Kural: Kör deliklerde DAİMA içten dişli ve hava kanallı DIN 7979-D pimi kullanın.</strong> Sökerken ters çekiç (slide hammer) vidalanıp 5 saniyede çıkarılır.</div>

<h2>Fikstürlerde 2 Pim Kuralı ve Elmas Pim (Diamond Pin)</h2>
<p>İki parçayı hizalamak için <strong>tam 2 adet pim</strong> kullanılır (3 pim aşırı kısıtlama / over-constraint yapar ve montajı kilitler). İki delik arasındaki eksen mesafesi toleransı (örneğin ±0.05 mm) yüzünden iki silindirik pim deliklere kasıntı yapar ve plakayı sıkıştırır:</p>
<ul>
  <li><strong>1. Pim:</strong> Tam <strong>Silindirik Pim</strong> (X ve Y eksenindeki tüm serbestliği sıfırlar, ana referans / 0 noktasıdır).</li>
  <li><strong>2. Pim:</strong> <strong>Elmas (Rombik / Flattened) Pim</strong> (Sadece açısal dönmeyi - Theta - kilitler; iki pim arasındaki eksen mesafesi kaçıklıklarını yanlardaki boşlukla tolere eder).</li>
</ul>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Dönen mil üzerinde rulman iç bileziği dönme kuvvetiyle sıvanmasın diye <strong>H7/k5, k6 veya m5</strong> sıkı geçme ile bağlanır.</li>
  <li>Rulman dış bileziği ise gövdede serbest yatağın ısıl uzayabilmesi için <strong>H7 veya J7</strong> boşluklu geçme ile yataklanır.</li>
  <li>Aşırı sıkı yataklamalarda bilyaların kilitlenmemesi için <strong>C3 iç boşluklu</strong> rulman seçilmelidir.</li>
  <li>Merkezleme pimlerinde sabit taban deliği <strong>H7/m6 (sıkı)</strong>, sökülebilir üst plaka deliği <strong>H7/h6 veya F7 (kayar)</strong> yapılır.</li>
  <li>Kör deliklerde hava sıkışmasını önlemek ve geri sökebilmek için mutlaka <strong>DIN 7979-D (çekme dişli ve hava kanallı)</strong> pim kullanılmalıdır.</li>
  <li>İki pimli fikstürlerde eksenler arası mesafe toleransı kasıntısını önlemek için ikinci pim <strong>Elmas (Diamond) Pim</strong> olmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir konveyör rulosunda mil sabit duruyor, dış boru gövde rulmanlarla milin etrafında dönüyor (avare rulo). Rulman iç ve dış bilezik toleransları klasik bir motor miline göre nasıl değişir?</summary>
<div>Klasik motor milinde iç bilezik döner (mil sıkı k6, gövde boşluklu H7). Ancak avare ruloda gövde döndüğü için dış bilezik çevresel dinamik yüke maruz kalır; dolayısıyla <strong>dış bilezik gövdeye SIKI (M7 veya P7)</strong> preslenmelidir. Sabit duran iç bilezik ise noktasal yük altındadır ve mile <strong>BOŞLUKLU (h6 veya g6)</strong> geçmelidir. Kural: Dönen bilezik daima sıkı geçer!</div></details>
<details><summary>Kör bir deliğe DIN 6325 standart düz silindirik pimi presle çaktın. Üst plaka hatalı işlendiği için pimi geri çıkarıp revize etmen gerekiyor. Parçanın arkasında delik yok. Ne yapacaksın?</summary>
<div>Geçmiş olsun! Parçayı hurdaya atmak ya da pimi erozyonda (EDM) çürüterek delmek zorundasın; çünkü arkasında delik yoktur ve düz pimin tutulacak hiçbir yeri yoktur. Bu facianın önüne geçmek için kör deliklere daima kafasında M4/M5 vida dişi olan <strong>DIN 7979-D çekme dişli pim</strong> tasarlanmalıdır.</div></details>
<details><summary>Neden bir fikstürde parçayı merkezlemek için 3 veya 4 adet merkezleme pimi kullanmak büyük bir tasarım hatasıdır?</summary>
<div>Düzlemde bir rijit cismin 3 serbestlik derecesi vardır: X ötelemesi, Y ötelemesi ve Z ekseni etrafında dönme (θ). 1. pim X ve Y'yi kilitler (2 serbestlik gider). 2. pim dönmeyi kilitler (son serbestlik de biter). 3. veya 4. pimi koyduğunuzda sistem <strong>aşırı kısıtlanmış (over-constrained)</strong> olur. Tezgâh toleransları yüzünden 3. pimin deliği mikron seviyesinde kaçık olacağından parça pimlere kasar ve asla yerine oturmaz veya çekiçle çakıldıktan sonra sökülemez!</div></details>
</div>
`);
