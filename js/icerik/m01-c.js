// MODÜL 1 — Malzeme Bilgisi (Bölüm 1.10 – 1.13)

KITAP.bolum('m1', '1-10', `
<p class="giris">Bir çeliğin kimyasal bileşimi onun sadece potansiyelini belirler; bu potansiyeli ortaya çıkaran veya parçayı tamamen kullanılmaz hale getiren şey <strong>ısıl işlemdir</strong>. Otomasyon tasarımcısı bir metalurjist olmak zorunda değildir ancak fırından çıkan parçanın neden çarpıldığını, neden çatladığını ve teknik resimde fırıncıya ne yazması gerektiğini tam olarak bilmelidir.</p>

<h2>Demir-Karbon Faz Dönüşümleri (Mühendisin Bilmesi Gereken Özet)</h2>
<p>Oda sıcaklığında çelik genelde ferrit ve perlit (veya sementit) karışımıdır. Bu yapı yumuşak ve sünektir.</p>
<ul>
  <li><strong>Östenitleme (Tavlama Sıcaklığı):</strong> Çelik ~750–900 °C'ye (östenit bölgesine) ısıtıldığında kristal kafes YMK (Yüzey Merkezli Kübik) yapıya dönüşür ve karbon atomları bu kafesin içine rahatça çözünür.</li>
  <li><strong>Hızlı Soğutma (Su Verme / Quenching):</strong> Çelik aniden suya, yağa veya yüksek basınçlı gaza daldırıldığında, karbon atomlarının kafesten dışarı kaçacak zamanı kalmaz. Kafes sıkışır ve aşırı gergin, iğnemsi bir yapı olan <strong>martenzite</strong> dönüşür.</li>
  <li><strong>Martenzit:</strong> Son derece sert (60–66 HRC) ama <strong>cam gibi gevrektir</strong>. İç gerilmeleri çok yüksektir; yere düşse çatlayabilir. Bu haliyle mekanik parçada doğrudan kullanılamaz.</li>
  <li><strong>Temperleme (Menevişleme / Tempering):</strong> Su verilmiş parça tekrar daha düşük bir sıcaklığa (150–650 °C) ısıtılıp bekletilir. Bu işlem iç gerilmeleri alır, gevreklik kırılır, tokluk kazandırılır. Temperleme sıcaklığı arttıkça <strong>sertlik düşer, tokluk artar</strong>.</li>
</ul>

<div class="kutu tehlike"><span class="kb">Fırıncıya sadece "Sertleştir" denmez!</span>
Su verilip temperlenmemiş bir parça saatli bombadır. Teknik resme daima hedeflenen nihai sertlik aralığı yazılır: Örneğin <code>58–62 HRC</code> veya <code>Islah: 280–320 HB</code>.</div>

<h2>Temel Isıl İşlem Türleri</h2>

<h3>1. Islah (Quench & Tempering - QT)</h3>
<p>Orta karbonlu (%0,3–0,55 C) ve alaşımlı çeliklere uygulanır (C45, 42CrMo4, 34CrNiMo6). Amaç <strong>çekirdek dahil tüm kesitte yüksek mukavemet ve yüksek tokluk</strong> elde etmektir. Genellikle 28–36 HRC (veya 800–1100 MPa çekme mukavemeti) hedeflenir. Mil, aks, yüksek mukavemetli cıvatalar (8.8, 10.9) ve ağır hizmet kollarında kullanılır.</p>

<h3>2. Sementasyon (Karbonlama / Case Hardening)</h3>
<p>Düşük karbonlu çeliklerin (%0,15–0,25 C, ör. 16MnCr5, 20MnCr5) yüzeyine 900–950 °C'de karbon gazı difüze ettirilir. Karbon sadece yüzeyden içeri doğru ilerler (tipik derinlik: 0,5–1,5 mm). Ardından su verilir ve düşük sıcaklıkta temperlenir.</p>
<ul>
  <li><strong>Sonuç:</strong> Yüzey <strong>58–62 HRC</strong> (aşınmaya dirençli), iç çekirdek <strong>30–40 HRC / tok</strong> (darbeleri emer).</li>
  <li><strong>Nerede kullanılır?</strong> Dişliler, zincir dişlileri, kam milleri, ağır hizmet makaraları.</li>
  <li><strong>Teknik resim gösterimi:</strong> <code>Sementasyon derinliği CHD = 0,8 +0,2 mm, Yüzey sertliği: 60 ± 2 HRC</code>.</li>
</ul>

<h3>3. İndüksiyonla Yüzey Sertleştirme</h3>
<p>Parça (genellikle C45, 42CrMo4 gibi orta karbonlular) yüksek frekanslı bir bakır bobinin (indüksiyon bobini) içinden geçirilir. Girdap akımları (Eddy akımları) yüzeyi birkaç saniyede östenit sıcaklığına ısıtır, arkasından gelen su/polimer jeti anında soğutur.</p>
<ul>
  <li><strong>Avantajı:</strong> Parçanın tamamı fırına girmez! Sadece istenen bölge (örneğin milin sadece rulman çalışan yeri veya kramayerin sadece dişleri) sertleştirilir. Parçanın geneli yumuşak kalır, çarpılma çok daha azdır ve işlem saniyeler sürer.</li>
  <li><strong>Teknik resim gösterimi:</strong> İlgili yüzey kalın bir zincir çizgiyle işaretlenir: <code>Yüzey sertleştirme: 54–58 HRC, Sertlik derinliği SHD = 1,5–2,5 mm</code>.</li>
</ul>

<h3>4. Nitrürleme ve Nitrokarbürleme</h3>
<p>Parça 500–550 °C gibi ferrit bölgesinde (düşük sıcaklıkta) azot gazı ortamında tutulur. Azot yüzeye difüze olarak sert nitrür bileşikleri oluşturur.</p>
<ul>
  <li><strong>Avantajı:</strong> Faz dönüşümü (östenit → martenzit) olmaz ve su verilmez! Bu yüzden <strong>boyutsal çarpılma minimumdur</strong>. Yüzey sertliği olağanüstü yüksektir (<strong>65–70 HRC / 900–1100 HV</strong>). İnce bir beyaz tabaka korozyon direncini de katlar.</li>
  <li><strong>Dezavantajı:</strong> Tabaka incedir (0,1–0,4 mm). Ağır noktasal darbelerde alttaki yumuşak malzeme ezilirse kabuk gibi kırılabilir ("yumurta kabuğu etkisi").</li>
  <li><strong>Nerede kullanılır?</strong> Hassas kalıplar, kılavuz burçları, hidrolik miller, dişli çarklar, aşınmaya maruz kalan hassas mekanizma kolları.</li>
</ul>

<h3>5. Gerilim Giderme Tavı (Stress Relieving)</h3>
<p>Kaynaklı şaseler, kalın dökümler veya üzerinde çok yoğun kaba talaş kaldırılmış kalın plakalar 550–650 °C'ye ısıtılır, birkaç saat bekletilir ve <strong>fırın içinde çok yavaş</strong> soğutulur. Faz değişimi olmaz; sadece kristal yapıdaki kalıntı gerilmeler sıfırlanır.</p>
<div class="kutu uyari"><span class="kb">Kaynaklı Şaselerde Kritik Hata</span>
Kaynak yapılmış bir gövdeyi gerilim giderme yapmadan CNC'ye bağlayıp lineer ray yüzeylerini işlersen, parçayı tezgâhtan söktüğün an şase gevşer ve muz gibi eğrilir! İşlem sırası: <strong>Kaynak → Kaba Talaşlı İmalat (opsiyonel) → Gerilim Giderme → Hassas CNC İşleme</strong> olmalıdır.</div>

<h2>Isıl İşlem Yöntemleri Karşılaştırma Tablosu</h2>
<table>
<thead><tr><th>Yöntem</th><th>Tipik Malzeme</th><th>Yüzey Sertliği</th><th>Çekirdek Durumu</th><th>Çarpılma Riski</th><th>Tipik Parçalar</th></tr></thead>
<tbody>
<tr><td><strong>Islah (+QT)</strong></td><td>42CrMo4, C45</td><td>28–36 HRC</td><td>Aynı (homojen)</td><td>Düşük (zaten ıslahlı alınır)</td><td>Miller, cıvatalar, kollar</td></tr>
<tr><td><strong>Tam Sertleştirme</strong></td><td>1.2379, 1.2842</td><td>58–64 HRC</td><td>Sert ve gevrek</td><td>Yüksek</td><td>Bıçaklar, zımbalar, mastarlar</td></tr>
<tr><td><strong>Sementasyon</strong></td><td>16MnCr5</td><td>58–62 HRC</td><td>Tok (30–40 HRC)</td><td>Orta-Yüksek</td><td>Dişliler, kam makaraları, ağır pimler</td></tr>
<tr><td><strong>İndüksiyon</strong></td><td>C45, 42CrMo4</td><td>52–58 HRC</td><td>Orijinal (yumuşak)</td><td>Düşük (lokal)</td><td>Millerin yatak yerleri, kramayerler</td></tr>
<tr><td><strong>Nitrürleme</strong></td><td>42CrMo4, Nitrür çelikleri</td><td>65–70 HRC (HV 900+)</td><td>Orijinal (ıslahlı)</td><td>Çok düşük</td><td>Hassas kızaklar, miller, kalıp parçaları</td></tr>
</tbody></table>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Yüksek darbe + aşınma → <strong>16MnCr5 + Sementasyon</strong>.</li>
  <li>Lokal aşınma + ucuz maliyet → <strong>C45 + İndüksiyonla yüzey sertleştirme</strong>.</li>
  <li>Sıfır çarpılma + yüksek yüzey sertliği → <strong>42CrMo4 +QT + Nitrürleme</strong>.</li>
  <li>Kaynaklı hassas gövdeler işlemeden önce mutlaka <strong>gerilim giderme</strong> görmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Boyu 800 mm, çapı 30 mm olan bir milin üzerinde boydan boya kama kanalı var ve yüzeyinin 60 HRC sert olması isteniyor. Neden fırında komple sertleştirme önerilmez?</summary>
<div>İnce ve uzun parçalarda tam su verme esnasında termal şok ve asimetrik kesit (kama kanalı) nedeniyle mil aşırı derecede eğrilir (çarpılır). Düzeltmek (doğrultma presi) mikro çatlaklara yol açar. Çözüm: Mil ıslahlı malzemeden (42CrMo4) işlenmeli ve nitrürlenmeli ya da hazır indüksiyonlu taşlanmış mil seçilmelidir.</div></details>
<details><summary>Teknik resimde sadece "Sertlik: 60 HRC" yazarsan atölye veya fırıncı ne sorar?</summary>
<div>Hangi yöntemle sertleşecek (komple mi, sementasyon mu, indüksiyon mu?), parça yüzeyi sertleşecekse sertlik derinliği ne kadar olacak, ve sertleştirme sonrası taşlama payı bırakıldı mı?</div></details>
</div>
`);

KITAP.bolum('m1', '1-11', `
<p class="giris">Parçayı doğru malzemeden işledin ve doğru ölçüye getirdin. Peki onu atölyedeki neme, fabrikanın soğutma sıvısına veya operatörün terli eline karşı nasıl koruyacaksın? Yüzey işlemleri parçaya korozyon direnci, aşınma dayanımı, kayganlık veya görsel şıklık kazandırır. Yanlış tolerans verilmiş bir kaplama ise montajda rulmanın yuvaya girmemesine yol açar.</p>

<h2>Kaplama Kalınlığı ve Tolerans İlişkisi (Tasarımcının Kabusu)</h2>
<p>En büyük acemi hatası, parçanın işleme toleransını kaplama payını hesaba katmadan çizmektir. İki tür yüzey işlemi vardır:</p>
<div class="iki-sutun">
  <div><h4>1. Malzemenin İçine İşleyen (Dönüşüm)</h4>
  Yüzeyde neredeyse hiç kalınlık artışı yapmaz (0–2 µm). Toleransı bozmaz.<br>
  <strong>Örnekler:</strong> Siyah oksit (karartma), kimyasal fosfatlama, nitrürleme tabakası.</div>
  <div><h4>2. Dışarıya Doğru Katman Ekleyen</h4>
  Yüzeyin üzerine mikron mertebesinde et kalınlığı biner. Silindirik parçalarda çap artışı <strong>kaplama kalınlığının 2 katıdır</strong>!<br>
  <strong>Örnekler:</strong> Galvaniz çinko (5–15 µm), sert krom (20–100 µm), eloksal (10–50 µm), yaş/toz boya (60–120 µm).</div>
</div>

<div class="kutu tehlike"><span class="kb">Montajda Çakışma!</span>
Ø20 H7 (+0.021 / 0) bir deliğe 15 µm elektrostatik boya veya sert eloksal atılırsa delik çapı 30 µm küçülür ve nominal ölçünün altına düşer. Rulman veya pim asla girmez! Çözüm: Teknik resme <strong>"Kaplama öncesi ölçüdür"</strong> veya <strong>"Kaplama sonrası son ölçüdür"</strong> notu düşülmeli, gerekirse kritik yüzeyler (vida delikleri, rulman yuvaları) maskelenmelidir (maskeleme maliyeti artırır!).</div>

<h2>Çelikler İçin Yüzey İşlemleri</h2>

<h3>1. Siyah Oksit (Karartma / Black Oxide)</h3>
<ul>
  <li>Sıcak alkali banyosunda yüzeyde incecik (~1 µm) Fe₃O₄ tabakası oluşturulur.</li>
  <li><strong>Avantajı:</strong> Ölçüyü kesinlikle değiştirmez! Cıvatalar, pimler, hassas fikstür parçaları için standarttır. Ucuzdur.</li>
  <li><strong>Dezavantajı:</strong> <strong>Tek başına pas koruması sıfıra yakındır!</strong> Korozyon direnci üzerindeki koruyucu yağdan gelir. Yağ silinirse veya ıslanırsa birkaç günde paslanır. Sadece kapalı, yağlı/kuru ortamlarda kullanılır.</li>
</ul>

<h3>2. Çinko Kaplama (Galvaniz / Zinc Plating)</h3>
<ul>
  <li><strong>Elektrolitik Galvaniz (Mavi/Beyaz veya Sarı Pasivasyonlu):</strong> 5–15 µm çinko kaplanır. Çinko "kurban anot" olarak davranır; çizilse bile çeliği korur. Standart bağlantı elemanlarında (8.8 beyaz cıvata) ve sac braketlerde en yaygın işlemdir.</li>
  <li><strong>Sıcak Daldırma Galvaniz (HDG):</strong> Parça 450 °C sıvı çinkoya daldırılır. Kalınlık 50–100 µm'dir. Yüzey pürüzlü ve dalgalıdır. Dış ortam konstrüksiyonları, korkuluklar, güneş enerjisi şaseleri içindir; hassas makine parçasına <strong>asla uygulanmaz</strong>.</li>
</ul>

<h3>3. Kimyasal Nikel (Electroless Nickel Plating - ENP)</h3>
<ul>
  <li>Elektrik akımı olmadan, kimyasal indirgemeyle nikel-fosfor tabakası kaplanır.</li>
  <li><strong>Muazzam Özelliği:</strong> Kör deliklerin içi, vida dişleri, derin cepler dahil olmak üzere parçanın <strong>her noktasına mikron hassasiyetinde tamamen eşit kalınlıkta</strong> (ör. 10 ± 1 µm veya 25 ± 2 µm) kaplanır!</li>
  <li>Sertliği yüksektir (~50 HRC, ısıl işlemle 65 HRC'ye çıkabilir). Korozyon ve aşınma direnci mükemmeldir.</li>
  <li><strong>Nerede kullanılır?</strong> Otomasyonun gözdesidir. Hassas çelik fikstür plakaları, pnömatik bloklar, sensör tutucular, gıdaya yakın temaslı çelik parçalar.</li>
</ul>

<h3>4. Sert Krom (Hard Chrome)</h3>
<ul>
  <li>Yüksek sertlik (65–70 HRC), çok düşük sürtünme ve aşınma direnci sağlar. Kalınlık 20–100+ µm olabilir.</li>
  <li><strong>Nerede kullanılır?</strong> Hidrolik silindir milleri, lineer kılavuz miller, aşınan baskı valsleri. Genellikle kaplandıktan sonra silindirik taşlama ile son çapa getirilir.</li>
</ul>

<h3>5. Elektrostatik Toz Boya ve Yaş Boya</h3>
<ul>
  <li>Gövde şaseleri, sac koruma kapakları ve kaynaklı konstrüksiyonlar için standarttır.</li>
  <li>Kalınlık 60–120 µm arasındadır. İşlenmiş temas yüzeyleri ve dişli delikler <strong>mutlaka maskelenmelidir</strong>.</li>
</ul>

<h2>Alüminyum İçin Yüzey İşlemleri: Eloksal (Anodizing)</h2>
<p>Alüminyumun yüzeyindeki doğal oksit tabakasının elektrokimyasal olarak kontrollü şekilde büyütülmesidir. Tabaka alüminyumun içine doğru %50 büyürken, dışarıya doğru %50 kalınlık ekler (örneğin 20 µm eloksal parçayı tek taraftan 10 µm büyütür, çapta 20 µm artış yapar).</p>
<table>
<thead><tr><th>Tür</th><th>Kalınlık</th><th>Sertlik</th><th>Renk</th><th>Kullanım Amacı</th></tr></thead>
<tbody>
<tr><td><strong>Dekoratif (Tip II) Eloksal</strong></td><td>8–20 µm</td><td>~250–350 HV</td><td>Şeffaf (naturel), siyah, mavi vb.</td><td>Görsel güzellik, parmak izi/korozyon önleme, şase profilleri, paneller</td></tr>
<tr><td><strong>Sert Eloksal (Hardcoat - Tip III)</strong></td><td>30–60 µm</td><td><strong>450–600 HV (yaklaşık 50–55 HRC)</strong></td><td>Koyu gri / zeytin yeşili / bronz</td><td>Aşınma direnci! Pnömatik silindir gövdeleri, gripper çeneleri, kayıcı alüminyum yüzeyler</td></tr>
<tr><td><strong>Kromatlama / Alodine (SurTec 650)</strong></td><td>&lt; 1 µm</td><td>Yumuşak</td><td>Şeffaf / Açık mavi / Sarımsı</td><td>Elektrik iletkenliğini korur, boya altı astar olarak mükemmeldir, EMC koruması sağlar</td></tr>
</tbody></table>

<div class="kutu uyari"><span class="kb">Eloksalda Alaşım Seçimi Önemlidir!</span>
6082 ve 6061 eloksalda çok güzel ve homojen sonuç verir. Ancak yüksek silisyumlu döküm alüminyumlar veya bakır içeren 2007 (otomat alüminyum) eloksal banyosunda kül gibi kararır ve lekelenir. 7075 sert eloksallanabilir fakat hafif sarımsı/bronz bir ton alır.</div>

<h2>Yüzey İşlemi Karar Tablosu</h2>
<table>
<thead><tr><th>Parça ve Durum</th><th>Önerilen İşlem</th><th>Tipik Kalınlık</th><th>Önemli Uyarı</th></tr></thead>
<tbody>
<tr><td>Çelik kaynaklı ana şase</td><td>Kumlama + Toz Boya (RAL 7035 vb.)</td><td>80–120 µm</td><td>İşlenmiş ray yuvalarını ve delikleri maskele</td></tr>
<tr><td>Hassas çelik fikstür / plaka</td><td>Kimyasal Nikel</td><td>15–20 µm</td><td>Kör deliklerde de homojendir, boyutsal kararlı</td></tr>
<tr><td>Basit pim, kovan, iç aparatlar</td><td>Siyah Oksit (Karartma)</td><td>~1 µm</td><td>Ölçü değişmez ama parçayı yağlı tutmalısın</td></tr>
<tr><td>Alüminyum hareketli araba / braket</td><td>Naturel / Siyah Eloksal</td><td>12–15 µm</td><td>H7 deliklerde kaplama payını düşmeyi unutma</td></tr>
<tr><td>Sürtünen alüminyum kılavuz / çene</td><td>Sert Eloksal (Hard Anodize)</td><td>40–50 µm</td><td>Yüzey sertliği 50+ HRC'ye yaklaşır</td></tr>
<tr><td>Topraklama gereken alüminyum plaka</td><td>SurTec 650 (Kromatlama)</td><td>&lt; 1 µm</td><td>Eloksal yalıtkandır; elektriksel temas için bu şart</td></tr>
<tr><td>Standart bağlantı sacları</td><td>Elektrolitik Çinko (Galvaniz)</td><td>8–12 µm</td><td>En ucuz ve pratik pas koruması</td></tr>
</tbody></table>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Eloksal elektrik akımını <strong>geçirmez</strong> (mükemmel yalıtkandır). Topraklama yapacaksan yüzeyi tıraşlamalı ya da kromatlama yaptırmalısın.</li>
  <li>Kimyasal nikel, karmaşık geometrilerde homojen kalınlık veren en güvenilir çözümdür.</li>
  <li>Kaplama sonrası toleransın bozulmaması için teknik resimde maskelenecek bölgeleri açıkça belirt.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Alüminyumdan işlenmiş bir klemensin üzerinde bir panoya topraklama kablosu pabucu bağlayacaksın. Parça komple mavi eloksal kaplandı. Sorun ne olur?</summary>
<div>Eloksal tabakası (Al₂O₃) çok güçlü bir elektrik yalıtkanıdır. Cıvatayı sıksan bile klemens gövdesi ile pabuç arasında elektriksel iletim sağlanamaz, topraklama çalışmaz. Ya pabuç oturma yüzeyi eloksal öncesi maskelenmeli, ya montajda kazınmalı, ya da iletken kromat kaplama (Alodine/SurTec) seçilmelidir.</div></details>
<details><summary>Neden rulman oturma çapına sahip bir çelik mile elektrostatik toz boya veya sıcak daldırma galvaniz uygulanmaz?</summary>
<div>Her iki yöntemin de katman kalınlığı çok fazladır (60–100+ µm) ve kalınlık homojen dağılmaz (damlamalar, portakal kabuğu dokusu oluşur). Rulmanın mikron toleranslı (ör. k5, m5) yuvası tamamen bozulur. Millerde kimyasal nikel, karartma veya taşlanmış sert krom kullanılır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-12', `
<p class="giris">Makineyi mükemmel tasarladın, montajı yapıldı, fabrika sahasına gitti. 6 ay sonra müşteri arıyor: "Cıvataların etrafındaki alüminyum parçalar beyaz bir toz halinde ufalanıp dökülüyor!" Tebrikler, <strong>galvanik korozyonla</strong> (pil etkisiyle) tanıştın. Bu bölüm, yan yana getirmemen gereken malzemeleri ve korozyon tuzaklarını anlatıyor.</p>

<h2>Galvanik (Bimetalik) Korozyon Nedir?</h2>
<p>Farklı elektrokimyasal potansiyele sahip iki farklı metal elektriksel olarak birbirine temas ettiğinde ve bu temas ortamında bir <strong>elektrolit</strong> (nem, yoğuşma suyu, tuzlu hava, soğutma sıvısı) bulunduğunda bir mini pil (galvanik hücre) oluşur.</p>
<ul>
  <li><strong>Anot (Aktif / Soy Olmayan Metal):</strong> Elektron kaybeder ve <strong>hızla korozyona uğrayarak erir</strong>.</li>
  <li><strong>Katot (Soy / Asil Metal):</strong> Elektronları alır ve korunur.</li>
</ul>

<div class="formul">
ΔV = E<sub>katot</sub> - E<sub>anot</sub> &nbsp;&nbsp;&nbsp; (Potansiyel Farkı)
<small>Kural: Standart iç ortamda potansiyel farkı &gt; 0,25 V ise; nemli/dış ortamda &gt; 0,15 V ise ciddi galvanik korozyon riski vardır!</small>
</div>

<h2>Galvanik Seri (Soydan Aktife Doğru)</h2>
<p>Yukarıdaki metaller "Soy"dur (kendi erimez, komşusunu eritir); aşağıdakiler "Aktif"tir (hızla eriyip kurban olurlar):</p>
<ol>
  <li>Platin, Altın (En soy)</li>
  <li>Titanyum</li>
  <li><strong>Paslanmaz Çelik (Pasif halde - 316, 304)</strong></li>
  <li>Nikel, Kimyasal Nikel</li>
  <li>Bronz, Bakır, Pirinç</li>
  <li><strong>Karbon Çeliği, Dökme Demir</strong></li>
  <li><strong>Alüminyum Alaşımları (6082, 7075...)</strong></li>
  <li><strong>Çinko (Galvaniz kaplama)</strong></li>
  <li>Magnezyum (En aktif)</li>
</ol>

<h2>En Tehlikeli Durum: Küçük Anot / Büyük Katot Alanı</h2>
<div class="kutu tehlike"><span class="kb">Alan Oranı Kuralı</span>
Eriyen metalin (anot) yüzey alanı, korunan metalin (katot) yüzey alanına göre ne kadar <strong>küçükse</strong>, korozyon hızı o kadar <strong>şiddetli</strong> olur!
<ul>
  <li><strong>Örnek 1 (Çok Tehlikeli):</strong> Dev bir paslanmaz çelik sacı alüminyum perçin veya çinko kaplı cıvatayla birleştirmek. Anot (cıvata/perçin) miniciktir, akım yoğunluğu devasadır; cıvata birkaç ayda eriyip kopar!</li>
  <li><strong>Örnek 2 (Göreceli Güvenli):</strong> Büyük bir alüminyum gövdeye paslanmaz (A2) tek bir M5 cıvata sıkmak. Anot (dev alüminyum kütle) katoda göre çok büyüktür. Ancak yine de su/nem toplanan yerlerde cıvata başı çevresinde alüminyum oyulacaktır.</li>
</ul></div>

<h2>Sahada Sık Karşılaşılan Galvanik Eşleşmeler</h2>
<table>
<thead><tr><th>Çift</th><th>Risk Seviyesi</th><th>Ne Olur? Nasıl Önlenir?</th></tr></thead>
<tbody>
<tr><td><strong>Alüminyum + Paslanmaz Çelik</strong></td><td>Yüksek (ıslak ortamda)</td><td>Alüminyum çukurlaşır (pitting) ve beyaz toz oluşturur. İzolasyon pulu (poliamid pul) veya korozyon önleyici montaj macunu (Duralac) kullan.</td></tr>
<tr><td><strong>Alüminyum + Bakır / Bronz</strong></td><td><strong>Aşırı Tehlikeli</strong></td><td>Bakır ile alüminyum asla doğrudan temas etmemelidir! Arada bimetalik Al-Cu geçiş pulları kullanılır.</td></tr>
<tr><td><strong>Çelik + Paslanmaz Çelik</strong></td><td>Orta</td><td>Normal çelik paslanır. Dış ortamda izole edilmelidir.</td></tr>
<tr><td><strong>Alüminyum + Galvanizli Çelik</strong></td><td>Düşük / Güvenli</td><td>Çinko ile alüminyumun potansiyelleri çok yakındır. İç mekan otomasyonunda en standart ve ekonomik eşleşmedir.</td></tr>
</tbody></table>

<h2>Diğer Korozyon Türleri</h2>

<h3>1. Aralık Korozyonu (Crevice Corrosion)</h3>
<p>Birbiri üzerine binen sacların arasında, cıvata başı altında veya conta aralığında durgun sıvı birikirse oksijen tükenir. Özellikle paslanmaz çelik oksijensiz kaldığında pasif tabakasını yenileyemez ve dar aralığın içinde şiddetli paslanma başlar. Tasarım kuralı: <strong>Sıvının göllenebileceği ölü cepler ve dar aralıklar bırakma; tahliye delikleri aç!</strong></p>

<h3>2. Çukurcuk Korozyonu (Pitting)</h3>
<p>Klorür iyonlarının (tuz, kimyasal temizlik maddeleri) pasif tabakayı delip noktasal olarak derinlemesine oyuklar açmasıdır. Gıda makinelerinde 304 paslanmaz yerine molibdenli <strong>316L</strong> seçilmesinin ana nedeni budur.</p>

<h3>3. Gerilmeli Korozyon Çatlağı (SCC)</h3>
<p>Sürekli bir çekme gerilmesi (örneğin sıkı geçme presleme veya montaj gerilmesi) altındaki bir parçanın korozif bir ortamla (özellikle klorür) buluştuğunda aniden cam gibi kırılmasıdır. Östenitik paslanmazlar ve yüksek mukavemetli alüminyumlar (7075) buna hassastır.</p>

<div class="ozet-kutu"><h3>Korozyondan Korunma Altın Kuralları</h3>
<ul>
  <li>Mümkünse benzer metalleri eşleştir (ör. Alüminyum şaseye çinko kaplı 8.8 cıvata; paslanmaz gövdeye paslanmaz cıvata).</li>
  <li>Farklı metaller zorunluysa elektriksel teması kes: <strong>Plastik pul (poliamid), teflon burç veya izolasyon contası</strong> kullan.</li>
  <li>Drenajı sağla: Yıkama sıvısının veya yoğuşmanın parçaların üzerinde göllenmesine izin verme. Eğim ver, alt kısımlara tahliye delikleri aç.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Islak gıda yıkama hattında büyük bir 304 paslanmaz tankın ayağını zemine galvaniz kaplı çelik cıvatayla bağlıyorsun. Ne olur?</summary>
<div>Galvanizli çelik cıvata (anot) devasa paslanmaz tank tabanına (katot) göre çok küçük kalır. Yıkama suyu elektrolit görevi görür. Cıvatanın çinko kaplaması günler içinde yok olur, hemen ardından çelik gövde paslanarak kopma noktasına gelir. Bağlantı da paslanmaz (A4) cıvatayla yapılmalı veya izole edilmelidir.</div></details>
</div>
`);

KITAP.bolum('m1', '1-13', `
<p class="giris">Tasarım masasındasın; CATIA'da yeni bir parça çiziyorsun. Malzeme ağacından ne seçeceksin? Bu bölüm, önceki 12 bölümün endüstriyel bir özetidir. Bir parçayı tasarlarken aklından geçirmen gereken mantıksal karar ağacını ve kıdemli mühendislerin tecrübeyle öğrendiği hataları içerir.</p>

<h2>Malzeme Seçim Algoritması (Adım Adım)</h2>

<div class="kutu not"><span class="kb">Adım 1: Parçanın Temel Rolü Ne?</span>
<ul>
  <li><strong>Hareketsiz / Şase / Taban:</strong> Ağırlık dert değil, rijitlik ve titreşim sönümü önemli → <strong>S235JR</strong> kaynaklı şase veya <strong>Dökme Demir (GJL-250)</strong> ya da seri makineler için <strong>Alüminyum Sigma Profil</strong>.</li>
  <li><strong>Hareketli (Kartezyen eksen, robot ucu, döner tabla):</strong> Ataleti düşürmek şart! → <strong>6082-T6 Alüminyum</strong> veya ekstrem dinamiklerde <strong>Karbon Fiber / 7075</strong>.</li>
  <li><strong>Kuvvet / Tork Aktarımı (Mil, dişli, flanş):</strong> Yüksek gerilme ve yorulma → <strong>C45</strong> veya <strong>42CrMo4+QT</strong>.</li>
  <li><strong>Aşınma / Sürtünme / Kılavuzluk:</strong> Temas yüzeyi sert olmalı → <strong>1.2379</strong>, <strong>16MnCr5 sementasyon</strong> veya yağlamasız plastik <strong>POM / PE-UHMW / Bronz</strong>.</li>
</ul></div>

<div class="kutu not"><span class="kb">Adım 2: Çalışma Ortamı Nasıl?</span>
<ul>
  <li><strong>Kuru, standart fabrika içi:</strong> Karbon çeliği + siyah oksit veya galvaniz; alüminyum + naturel eloksal.</li>
  <li><strong>Nemli, su sıçrayan, periyodik silinen:</strong> Alüminyum (eloksallı), kimyasal nikel kaplı çelik veya <strong>AISI 304</strong>.</li>
  <li><strong>Gıda teması / İlaç / Kimyasal / Tuzlu:</strong> <strong>AISI 316L</strong> veya sertifikalı plastikler (mavi POM, PE-UHMW).</li>
</ul></div>

<div class="kutu not"><span class="kb">Adım 3: İmalat Adedi ve Yöntemi Ne?</span>
<ul>
  <li>1–3 adet (Özel otomasyon): Standart lama/plaka ölçülerinden talaşlı imalat veya lazer kesim + abkant büküm. Karmaşık döküm veya özel kalıp ekstrüzyondan kaçın!</li>
  <li>100+ adet: Ekstrüzyon profil, hassas döküm, sac kalıpları veya enjeksiyon plastik.</li>
</ul></div>

<h2>Hızlı Başvuru Matrisi</h2>
<table>
<thead><tr><th>Makine Parçası</th><th>Standart Malzeme Seçimi</th><th>Isıl / Yüzey İşlemi</th><th>Neden Bu Malzeme?</th></tr></thead>
<tbody>
<tr><td><strong>Ana Şase Gövdesi</strong></td><td>S235JR (St37) Kutu Profil / Plaka</td><td>Kaynak + Gerilim Giderme + Toz Boya</td><td>Ucuz, kolay kaynaklanır, yüksek rijitlik</td></tr>
<tr><td><strong>Hassas Taban Plakası</strong></td><td>Döküm Alüminyum Plaka (ACP 5080)</td><td>Yüzeyler zaten frezeli; eloksal isteğe bağlı</td><td>İşlerken kesinlikle çarpılmaz, düzlemsel</td></tr>
<tr><td><strong>Konveyör Tahrik Mili</strong></td><td>C45 (+C Soğuk Çekilmiş)</td><td>Rulman yerleri indüksiyonla sertleştirilebilir (opsiyonel)</td><td>İşlenebilirliği iyi, ucuz, hazır h9 tolerans</td></tr>
<tr><td><strong>Yüksek Torklu Servo Mil</strong></td><td>42CrMo4+QT (1.7225)</td><td>Zaten ıslahlı (30 HRC) işlenir; gerekirse nitrürleme</td><td>Yüksek burulma mukavemeti ve yorulma direnci</td></tr>
<tr><td><strong>Ağır Hizmet Dişlisi</strong></td><td>16MnCr5 (1.7131)</td><td>Sementasyon (58–62 HRC, CHD 0,8 mm)</td><td>Diş yüzeyi aşınmaz, göbek darbede kırılmaz</td></tr>
<tr><td><strong>Gripper Bağlantı Braketi</strong></td><td>6082-T6 Alüminyum</td><td>Naturel Eloksal (15 µm)</td><td>Hafif, robot yükünü azaltır, mukavemeti yeterli</td></tr>
<tr><td><strong>Fikstür Konum Pimi</strong></td><td>1.2842 veya Hazır DIN 6321 pimi</td><td>Sertleştirilmiş 58–60 HRC</td><td>Aşınmaz, referans noktasını yıllarca korur</td></tr>
<tr><td><strong>Folyo / Kağıt Kesme Bıçağı</strong></td><td>1.2379 (D2) Soğuk İş Takım Çeliği</td><td>Vakum Sertleştirme (60 ± 2 HRC) + Taşlama</td><td>Yüksek krom karbürleri sayesinde körelmez</td></tr>
<tr><td><strong>Şişe / Kutu Kılavuz Şeridi</strong></td><td>PE-UHMW (PE 1000)</td><td>İşlem yok</td><td>Sürtünme katsayısı çok düşük, ürünü çizmez</td></tr>
<tr><td><strong>Pnömatik Silindir Sonu Tampon</strong></td><td>Poliüretan (PU - 90 Shore A)</td><td>İşlem yok</td><td>Darbe enerjisini yutar, kalıcı ezilmez</td></tr>
<tr><td><strong>Hassas Kayıcı Burç / Dişli</strong></td><td>POM-C (Delrin)</td><td>İşlem yok</td><td>Nemden şişmez, boyutsal kararlı, yağlamasız kayar</td></tr>
<tr><td><strong>Hücre Koruma Camı</strong></td><td>Polikarbonat (PC) - 4 ila 6 mm</td><td>İşlem yok (çizilmez kaplamalı opsiyonel)</td><td>Fırlayan parçalara karşı kırılmaz (pleksi DEĞİL!)</td></tr>
</tbody></table>

<h2>Genç Mekatronikçilerin Yaptığı 10 Kritik Hata</h2>
<ol>
  <li><strong>Rijitlik için pahalı çelik seçmek:</strong> "Bu parça çok esniyor, St37 yerine 4140 yapalım" demek. (Tüm çeliklerin E modülü aynıdır; kesiti büyüt!).</li>
  <li><strong>Alüminyum levhayı derin boşaltıp çarpıtmak:</strong> Haddelenmiş levhadan tek taraflı cep boşaltıp muz gibi eğrilen parçaya şaşırmak. (Döküm alüminyum plaka kullan!).</li>
  <li><strong>Paslanmaz cıvatayı kuru kuru sıkmak:</strong> Paslanmaz somun ve cıvatayı tork tabancasıyla hızla sıkıp kaynatarak (galling) kilitlemek. (Anti-seize macun sür!).</li>
  <li><strong>Koruma kabininde pleksiglas (akrilik) kullanmak:</strong> Darbede şangırdayıp operatörü yaralayan cam takmak. (Polikarbonat kullan!).</li>
  <li><strong>Alüminyuma kısa diş boyu bırakmak:</strong> M6 cıvatayı 6 mm alüminyum dişe bağlayıp ilk torkta yivleri sıyırmak. (En az 2×d = 12 mm diş veya Helicoil!).</li>
  <li><strong>Siyah oksiti paslanmaz zannetmek:</strong> Karartılmış parçayı suyla çalışan makineye koyup 3 günde pas içinde bırakmak.</li>
  <li><strong>Kaplama kalınlığını unutmak:</strong> Rulman yuvasına H7 tolerans verip üstüne 40 µm sert eloksal attırmak; rulmanı çakarken parçayı patlatmak.</li>
  <li><strong>Islak ortamda paslanmazla alüminyumu çıplak birleştirmek:</strong> Galvanik korozyonla alüminyumun un ufak olmasına şahit olmak. (Poliamid izolasyon pulu koy!).</li>
  <li><strong>Kaynaklı şaseyi gerilim gidermeden CNC'de işlemek:</strong> Tezgâhtan inince lineer ray yüzeylerinin çarpıldığını görmek.</li>
  <li><strong>Hassas parçayı PA6'dan (poliamit) yapmak:</strong> Yazın nemli havada su emip şişen ve sıkışan burçlar üretmek. (POM veya PET kullan!).</li>
</ol>

<div class="ozet-kutu"><h3>Modül 1 Kapanış Özeti</h3>
<p>Malzeme seçimi bir fantezi değil, <strong>fonksiyon + imalat + maliyet</strong> dengesidir. Otomasyon dünyasında parçaların %80'i S235 çelik, 6082 alüminyum, C45 mil ve POM plastikten yapılır. Geriye kalan %20'lik özel durumlar (1.2379 bıçak, 42CrMo4 ağır mil, 316L hijyen, sementasyonlu dişli) için bu modüldeki ilkeleri aklında tutman seni sahada her zaman bir adım önde tutacaktır.</p></div>

<div class="test"><h3>Büyük Modül 1 Sınavı</h3>
<details><summary>Soru 1: Bir robot kolunun ucuna parçayı tutacak iki parmaklı bir gripper tasarlıyorsun. Parça hafif olmalı ama parmaklar iş parçasını sıkarken esnememeli. Ne seçersin?</summary>
<div>Gövde ve parmaklar 6082-T651 veya mukavemet/rijitlik optimizasyonu için 7075-T6 alüminyum. Parçaya temas eden aşınabilir yüzeyler için vidalanmış değiştirilebilir POM veya sertleştirilmiş çelik pedler.</div></details>
<details><summary>Soru 2: 1000 mm açıklığı olan bir köprüde orta noktada 1 mm'den az sehim isteniyor. Alüminyum profil kurtarmıyor. Çelik kutu profile geçtin. Ne kazandın?</summary>
<div>Çeliğin E modülü (~210 GPa) alüminyumun (~70 GPa) 3 katıdır. Birebir aynı geometriye sahip kesitte sehim otomatikman 1/3'üne düşer!</div></details>
<details><summary>Soru 3: Gıda paketleme makinesinde salamura zeytinlerin geçtiği bir hatta hangi malzeme ailesi zorunludur?</summary>
<div>Yoğun tuz (klorür) ve asidik ortam olduğundan AISI 316L (1.4404) paslanmaz çelik ve gıdaya uygun mavi PE-UHMW veya POM kullanılmalıdır. 304 paslanmaz tuz yüzünden çukurcuk korozyonuna uğrar.</div></details>
</div>
`);
