// MODÜL 1 — Malzeme Bilgisi (Bölüm 1.1 – 1.5)

KITAP.bolum('m1', '1-1', `
<p class="giris">Bir malzemeyi "sağlam" ya da "dayanıklı" diye tarif etmek mühendislikte bir şey ifade etmez. Bir parça hangi açıdan "sağlam" olmalı? Kırılmamak mı, eğilmemek mi, aşınmamak mı, darbede çatlamamak mı? Bu bölüm malzemeyi tarif eden özellikleri ve en önemlisi <strong>mukavemet ile rijitlik arasındaki farkı</strong> anlatıyor.</p>

<h2>Gerilme–Şekil Değiştirme Eğrisi</h2>
<p>Bir çubuğu çekme cihazında çektiğinizde, uygulanan gerilmeye (σ = F/A) karşı uzama oranını (ε = ΔL/L) çizersiniz. Bu eğri malzemenin "kimlik kartıdır".</p>
<ul>
  <li><strong>Elastik bölge:</strong> Yükü kaldırınca parça eski haline döner. Eğim = <strong>Elastisite Modülü (E)</strong>.</li>
  <li><strong>Akma noktası (Re veya Rp0,2):</strong> Kalıcı şekil değişiminin başladığı gerilme. Belirgin akma noktası olmayan malzemelerde (alüminyum, ıslah çelikleri) %0,2 kalıcı uzamaya karşılık gelen gerilme alınır: <code>Rp0,2</code>.</li>
  <li><strong>Çekme mukavemeti (Rm):</strong> Eğrinin tepe noktası. Malzemenin taşıyabildiği en yüksek gerilme.</li>
  <li><strong>Kopma uzaması (A %):</strong> Koptuğunda ne kadar uzadığı. Sünekliğin (ductility) ölçüsü.</li>
</ul>

<div class="kutu not"><span class="kb">Tasarımda hangi değer kullanılır?</span>
Makine tasarımında neredeyse her zaman <strong>akma mukavemeti</strong> esas alınır. Çünkü akan bir parça kırılmasa bile artık ölçüsü bozulmuştur, yani makine için "arızalıdır". Gevrek malzemelerde (dökme demir) akma olmadığı için çekme mukavemeti ve daha yüksek emniyet katsayısı kullanılır.</div>

<h2>Mukavemet ve Rijitlik: En Kritik Ayrım</h2>
<p>Bu bölümden tek bir şey aklında kalacaksa bu olsun:</p>
<div class="iki-sutun">
  <div><h4>💪 Mukavemet (strength)</h4>
  Parçanın <strong>kırılmadan / kalıcı şekil değiştirmeden</strong> ne kadar yük taşıyabildiği. Akma (Re) ve çekme (Rm) mukavemeti ile ölçülür. <strong>Alaşım ve ısıl işlemle</strong> büyük oranda değişir.</div>
  <div><h4>📏 Rijitlik (stiffness)</h4>
  Parçanın yük altında <strong>ne kadar esnediği / sehim yaptığı</strong>. Malzeme tarafında <strong>elastisite modülü (E)</strong>, geometri tarafında <strong>atalet momenti (I)</strong> belirler. Alaşım ve ısıl işlem <strong>E'yi neredeyse hiç değiştirmez</strong>.</div>
</div>

<div class="kutu uyari"><span class="kb">Sık yapılan hata</span>
"Bu kol çok esniyor, S235 yerine 42CrMo4 yapalım" demek <strong>işe yaramaz</strong>. Tüm çeliklerin elastisite modülü ~200–210 GPa'dır. 42CrMo4 parça S235 parçanın yaklaşık üç katı yüke dayanır ama <strong>aynı yük altında birebir aynı miktarda esner</strong>. Sehim problemi varsa çözüm <strong>geometridir</strong>: kesiti yüksekleştirmek, kutu profil kullanmak, nervür eklemek, açıklığı kısaltmak.</div>

<p>Otomasyon makinelerinde parçaların büyük çoğunluğu <strong>rijitlik kriterine</strong> göre boyutlandırılır, mukavemete göre değil. Bir pick&amp;place kolu kırılmaz ama 0,3 mm esnerse parça yanlış yere bırakılır. Bu yüzden otomasyoncuların sıradan S235 ve alüminyumu bu kadar çok kullanması bir tesadüf değil.</p>

<h3>Sayısal örnek: Konsol kiriş</h3>
<p>500 mm uzunluğunda, ucunda 100 N yük taşıyan, 40×20 mm dikdörtgen kesitli (yük 40 mm yönünde) bir konsol düşünelim.</p>
<div class="formul">δ = F·L³ / (3·E·I) &nbsp;&nbsp;&nbsp; I = b·h³ / 12 = 20·40³/12 = 106 667 mm⁴
<small>F: kuvvet [N], L: uzunluk [mm], E: elastisite modülü [N/mm²], I: atalet momenti [mm⁴]</small></div>
<table>
<thead><tr><th>Malzeme</th><th>E [GPa]</th><th>Sehim δ [mm]</th><th>Kütle [kg]</th></tr></thead>
<tbody>
<tr><td>Çelik (herhangi biri)</td><td>210</td><td>0,186</td><td>3,14</td></tr>
<tr><td>Alüminyum (6082)</td><td>70</td><td>0,558</td><td>1,08</td></tr>
<tr><td>Gri dökme demir (GJL-250)</td><td>~110</td><td>0,355</td><td>2,88</td></tr>
<tr><td>POM (Delrin)</td><td>~3</td><td>13</td><td>0,56</td></tr>
</tbody></table>
<p>Aynı kesitte alüminyum 3 kat fazla esner ama 3 kat hafiftir. Kesit yüksekliğini 40'tan 58 mm'ye çıkarırsak (h³ ile orantı: 1,45³ ≈ 3) alüminyum, çelikle aynı sehimi verir ve kütlesi hâlâ çeliğin yarısı kadar olur. <strong>Hareketli parçalarda alüminyumun tercih edilmesinin sebebi budur.</strong></p>

<div class="kutu ipucu"><span class="kb">Özgül rijitlik</span>
E/ρ (rijitlik/yoğunluk) oranı çelik, alüminyum ve titanyumda neredeyse aynıdır (~25 GPa·cm³/g). Bu yüzden kütle sınırlı bir tasarımda hangisini seçerseniz seçin aynı rijitliğe aşağı yukarı aynı ağırlıkla ulaşırsınız. Fark, alüminyumun <strong>daha büyük kesitle</strong> çalışabilmesidir ve büyük kesit eğilmede orantısız avantaj sağlar. Karbon fiber bu oranı 3–5 kat artırır; bu yüzden hızlı robot kollarında kullanılır.</div>

<h2>Sertlik</h2>
<p>Sertlik, malzemenin yüzeyine batırılan bir uca karşı direncidir. Pratikte <strong>aşınma direncinin</strong> ve (çeliklerde) mukavemetin dolaylı göstergesidir.</p>
<table>
<thead><tr><th>Yöntem</th><th>Uç</th><th>Nerede kullanılır</th></tr></thead>
<tbody>
<tr><td><strong>Brinell (HB / HBW)</strong></td><td>Sert metal bilye</td><td>Yumuşak/orta çelikler, dökme demir, alüminyum. İz büyüktür, ortalama değer verir.</td></tr>
<tr><td><strong>Vickers (HV)</strong></td><td>Elmas piramit</td><td>Her malzeme; ince kaplama ve sertleştirilmiş tabakalar (nitrürleme, sert krom) için ideal.</td></tr>
<tr><td><strong>Rockwell C (HRC)</strong></td><td>Elmas koni</td><td>Sertleştirilmiş çelikler (~20 HRC üstü). Atölyede en çok duyacağın birim.</td></tr>
<tr><td><strong>Shore A / D</strong></td><td>Yaylı uç</td><td>Kauçuk, poliüretan, elastomerler (ör. "90 Shore A PU tampon").</td></tr>
</tbody></table>

<h3>Yaklaşık sertlik–mukavemet karşılığı (çelikler, ISO 18265'e göre)</h3>
<table>
<thead><tr><th>HRC</th><th>HV</th><th>HB</th><th>Rm ≈ [MPa]</th><th>Tipik örnek</th></tr></thead>
<tbody>
<tr><td>—</td><td>~130</td><td>~125</td><td>~420</td><td>S235 (St37)</td></tr>
<tr><td>—</td><td>~200</td><td>~190</td><td>~650</td><td>C45 normalize</td></tr>
<tr><td>20</td><td>240</td><td>~226</td><td>~770</td><td>Hafif ıslah</td></tr>
<tr><td>30</td><td>302</td><td>~286</td><td>~965</td><td>42CrMo4 +QT, P20 kalıp çeliği</td></tr>
<tr><td>40</td><td>392</td><td>~371</td><td>~1250</td><td>12.9 cıvata, yay çeliği</td></tr>
<tr><td>50</td><td>513</td><td>—</td><td>(~1650)</td><td>Kılavuz pim, aletler</td></tr>
<tr><td>58–62</td><td>650–750</td><td>—</td><td>—</td><td>Rulman, lineer ray, sementasyonlu dişli, 1.2379 bıçak</td></tr>
</tbody></table>
<div class="kutu not">Atölyede pratik formül: alaşımsız/düşük alaşımlı çeliklerde <code>Rm [MPa] ≈ 3,3 × HB</code>. Sadece kaba tahmin içindir.</div>

<h2>Tokluk ve Darbe Dayanımı</h2>
<p><strong>Tokluk</strong>, malzemenin kırılmadan önce enerji sorabilme yeteneğidir. Charpy darbe deneyiyle (çentikli numuneye sarkaç vurularak) Joule cinsinden ölçülür. Sert malzemeler genelde daha az toktur: <strong>sertlik ile tokluk arasında hep bir takas vardır.</strong></p>
<ul>
  <li>Cam ve dökme demir: sert ama gevrek, darbede çatlar.</li>
  <li>Islah edilmiş çelik: hem mukavemetli hem tok. Darbeli yüklenen miller ve kollar için tercih edilir.</li>
  <li>Tamamen sertleştirilmiş (60 HRC) çelik: aşınmaya dayanıklı ama darbede kırılabilir. Bu yüzden dişliler "yüzeyi sert, içi tok" olacak şekilde sementasyonla sertleştirilir.</li>
</ul>

<h2>Yorulma</h2>
<p>Makine parçası kırılmalarının çok büyük kısmı (sıklıkla %80–90 olarak anılır) <strong>yorulma</strong> kaynaklıdır. Akma sınırının altında, hatta onun yarısında bile tekrar eden yüklemeler zamanla çatlak başlatır ve büyütür. Bir otomasyon makinesi günde on binlerce çevrim yaptığı için yorulma her zaman gündemdedir.</p>
<ul>
  <li>Çeliklerde yaklaşık 10⁶–10⁷ çevrimin üzerinde bir <strong>yorulma sınırı</strong> vardır. Kabaca <code>σ<sub>D</sub> ≈ 0,4–0,5 × Rm</code> (parlatılmış numune için).</li>
  <li>Alüminyumun belirgin bir yorulma sınırı <strong>yoktur</strong>; yeterince çevrimde her gerilme seviyesinde sonunda kırılır.</li>
  <li>Çentikler (keskin köşe, kama yuvası, segman kanalı, kaynak dikişi) yorulma ömrünü dramatik şekilde düşürür. <strong>Köşelere radyüs vermek</strong> en ucuz yorulma önlemidir.</li>
</ul>
<p>Detaylı hesap Modül 9'da.</p>

<h2>Fiziksel Özellikler</h2>
<table>
<thead><tr><th>Malzeme</th><th>Yoğunluk [g/cm³]</th><th>E [GPa]</th><th>Isıl genleşme [µm/m·°C]</th><th>Isıl iletkenlik [W/m·K]</th></tr></thead>
<tbody>
<tr><td>Karbon / alaşımlı çelik</td><td>7,85</td><td>205–210</td><td>11–12</td><td>40–50</td></tr>
<tr><td>Östenitik paslanmaz (304)</td><td>7,9</td><td>193–200</td><td>16–17</td><td>15</td></tr>
<tr><td>Gri dökme demir</td><td>7,2</td><td>80–140</td><td>10–11</td><td>45–55</td></tr>
<tr><td>Küresel grafitli dökme demir</td><td>7,1</td><td>165–175</td><td>11–12</td><td>30–35</td></tr>
<tr><td>Alüminyum alaşımları</td><td>2,7–2,8</td><td>69–72</td><td>23–24</td><td>120–170</td></tr>
<tr><td>Pirinç</td><td>8,4–8,5</td><td>~100</td><td>19–20</td><td>~110</td></tr>
<tr><td>Titanyum (Ti6Al4V)</td><td>4,4</td><td>~114</td><td>8,6</td><td>7</td></tr>
<tr><td>POM</td><td>1,41</td><td>~2,8–3,2</td><td>~110</td><td>0,3</td></tr>
<tr><td>PE-UHMW</td><td>0,93</td><td>~0,7</td><td>~150–200</td><td>0,4</td></tr>
<tr><td>Granit</td><td>2,6–2,8</td><td>~50–60</td><td>~6–8</td><td>~3</td></tr>
</tbody></table>

<div class="kutu saha"><span class="kb">Sahadan: Isıl genleşme</span>
2 m uzunluğunda alüminyum profil üzerine çelik bir lineer ray bağladın ve makine sabah 15 °C'de, öğleden sonra 35 °C'de çalışıyor. Fark: ΔL = L·Δα·ΔT = 2000 × (23−11,5)×10⁻⁶ × 20 ≈ <strong>0,46 mm</strong>. İki malzeme bu farkı birbirine zorlar; rayda eğilme, cıvatalarda kayma veya hassasiyet kaybı olabilir. Uzun eksenlerde ya aynı malzeme kullan ya da bir uçta genleşmeye izin ver (sabit-serbest yataklama mantığı).<br><br>
Plastiklerde durum çok daha ciddidir: 1 m'lik PE-UHMW kılavuz 20 °C'lik farkla <strong>3–4 mm</strong> uzar. Bu yüzden plastik kılavuzlar oval deliklerle bağlanır.</div>

<h3>Sönümleme (damping)</h3>
<p>Malzemenin titreşim enerjisini ısıya çevirerek yutma yeteneğidir. Gri dökme demir, mineral döküm (polimer beton) ve plastikler iyi sönümler; çelik ve alüminyum kötü sönümler. Bu yüzden takım tezgahı gövdeleri dökme demirden yapılır (detaylar Bölüm 1.6'da).</p>

<div class="ozet-kutu">
<h3>Özet</h3>
<ul>
<li>Tasarım genelde <strong>akma mukavemetine</strong> göre yapılır.</li>
<li><strong>Mukavemet ≠ rijitlik.</strong> Tüm çeliklerin E'si aynıdır; sehim problemini geometri çözer.</li>
<li>Otomasyonda parçaların çoğu rijitliğe göre boyutlanır.</li>
<li>Sertlik ↑ → aşınma direnci ↑, tokluk ↓.</li>
<li>Kırılmaların çoğu yorulmadandır; keskin köşelerden kaçın.</li>
<li>Farklı malzemeleri birleştirirken ısıl genleşmeyi unutma.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir alüminyum kolun ucu 0,5 mm sehim yapıyor. Malzemeyi 7075-T6 (Rp0,2 ≈ 460 MPa) yaparsam sehim düşer mi?</summary>
<div>Hayır. 7075'in E'si (~71 GPa) 6082 ile neredeyse aynıdır. Daha mukavemetlidir ama aynı miktarda esner. Çözüm kesiti büyütmek, profili değiştirmek veya çeliğe geçmektir (E 3 kat).</div></details>
<details><summary>Neden rulman ve lineer raylar 58–62 HRC sertlikte yapılır?</summary>
<div>Bilyalar küçük temas alanlarında çok yüksek Hertz gerilmeleri oluşturur. Yüzeyin ezilmemesi ve aşınmaması için çok yüksek sertlik gerekir.</div></details>
<details><summary>Bir kaynaklı braket statik hesapta emniyetli çıktı ama 3 ay sonra kaynak kenarından çatladı. Muhtemel sebep nedir?</summary>
<div>Yorulma. Kaynak dikişi güçlü bir çentik etkisi yaratır ve tekrar eden yükler (makine çevrimi, titreşim) akma sınırının çok altındaki gerilmelerde bile çatlak başlatır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-2', `
<p class="giris">Teknik resimde "Malzeme: C45" ya da "1.7225" yazdığını göreceksin. Atölyede ise hâlâ "St37", "Ck45" veya "4140" denildiğini duyacaksın. Bu bölüm çelik isimlerini okumayı ve aralarında çeviri yapmayı öğretiyor.</p>

<h2>İki Sistem: Kısa Ad ve Malzeme Numarası</h2>
<p>Avrupa standardı EN 10027 çelikleri iki şekilde adlandırır:</p>
<ul>
<li><strong>EN 10027-1 Kısa ad:</strong> Bilgi içerir, okunabilir. Örnekler: <code>S235JR</code>, <code>C45</code>, <code>42CrMo4</code>, <code>X5CrNi18-10</code></li>
<li><strong>EN 10027-2 Malzeme numarası:</strong> <code>1.xxxx</code> formatındadır. Kısa ama ezberlemek gerekir. Örnekler: <code>1.0038</code>, <code>1.0503</code>, <code>1.7225</code>, <code>1.4301</code></li>
</ul>
<p>İlk rakam "1" çelik demektir. Sonraki iki rakam çelik grubunu gösterir: <code>1.00xx–1.07xx</code> alaşımsız, <code>1.20xx–1.28xx</code> takım çelikleri, <code>1.40xx–1.45xx</code> paslanmaz, <code>1.5xxx–1.8xxx</code> alaşımlı yapı/makine çelikleri.</p>

<h2>Kullanım Amacına Göre Adlandırma</h2>
<p>Harf, çeliğin kullanım amacını; sayı ise genelde <strong>minimum akma mukavemetini (MPa)</strong> gösterir.</p>
<table>
<thead><tr><th>Harf</th><th>Anlamı</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td><strong>S</strong></td><td>Yapı çeliği (Structural)</td><td>S235JR, S355J2</td></tr>
<tr><td><strong>E</strong></td><td>Makine çeliği (Engineering)</td><td>E295, E335, E360</td></tr>
<tr><td><strong>P</strong></td><td>Basınçlı kap çeliği</td><td>P265GH</td></tr>
<tr><td><strong>B</strong></td><td>Beton çeliği</td><td>B500C</td></tr>
<tr><td><strong>DC / DD</strong></td><td>Soğuk / sıcak haddelenmiş yassı (sac)</td><td>DC01 (eski adı St12), DD11</td></tr>
</tbody></table>

<h3>Örnek: S235JR</h3>
<ul>
<li><code>S</code> → Yapı çeliği</li>
<li><code>235</code> → Minimum akma mukavemeti 235 MPa (≤16 mm kalınlık için)</li>
<li><code>JR</code> → Darbe dayanımı garantisi: <strong>+20 °C'de min. 27 J</strong></li>
</ul>
<table>
<thead><tr><th>Ek</th><th>Darbe enerjisi</th><th>Deney sıcaklığı</th></tr></thead>
<tbody>
<tr><td>JR</td><td>27 J</td><td>+20 °C</td></tr>
<tr><td>J0</td><td>27 J</td><td>0 °C</td></tr>
<tr><td>J2</td><td>27 J</td><td>−20 °C</td></tr>
<tr><td>K2</td><td>40 J</td><td>−20 °C</td></tr>
</tbody></table>
<p>Kapalı ortamdaki bir otomasyon makinesi için <strong>JR yeterlidir</strong>. Soğuk ortam, dış saha veya darbeli yükler varsa J2 tercih edilir. <code>S355J2</code> (eski adıyla St52-3) bu yüzden çok yaygındır.</p>

<h2>Kimyasal Bileşime Göre Adlandırma</h2>

<h3>1) Alaşımsız çelikler: C + karbon × 100</h3>
<p><code>C45</code> → %0,45 karbon. <code>C45E</code> → kükürt miktarı kontrollü (eski adı <strong>Ck45</strong>, atölyede hâlâ çok kullanılır). <code>C60</code> → %0,60 karbon.</p>

<h3>2) Düşük alaşımlı çelikler (hiçbir alaşım elementi ≥%5 değil)</h3>
<p>Format: <strong>[karbon × 100] [alaşım elementleri] [çarpanla çarpılmış miktarlar]</strong></p>
<table>
<thead><tr><th>Çarpan</th><th>Elementler</th></tr></thead>
<tbody>
<tr><td>4</td><td>Cr, Co, Mn, Ni, Si, W</td></tr>
<tr><td>10</td><td>Al, Be, Cu, Mo, Nb, Pb, Ta, Ti, V, Zr</td></tr>
<tr><td>100</td><td>Ce, N, P, S</td></tr>
<tr><td>1000</td><td>B</td></tr>
</tbody></table>
<p><strong>Örnek, 42CrMo4:</strong> %0,42 C. Element sırası Cr, Mo. İlk sayı (4) ilk elemente aittir: 4 / 4 = ~%1 Cr. Molibden için sayı verilmemiş, yani "az miktarda" (~%0,2) demektir.</p>
<p><strong>Örnek, 16MnCr5:</strong> %0,16 C, 5 / 4 ≈ %1,2 Mn, az miktarda Cr. Düşük karbon, sementasyon çeliği olduğunu ele verir.</p>
<p><strong>Örnek, 34CrNiMo6:</strong> %0,34 C, 6 / 4 = ~%1,5 Cr, ayrıca Ni ve Mo.</p>

<h3>3) Yüksek alaşımlı çelikler: X ön eki (en az bir element ≥%5)</h3>
<p>Format: <strong>X [karbon × 100] [elementler] [doğrudan yüzde miktarları]</strong> (çarpan yok!)</p>
<p><strong>Örnek, X5CrNi18-10:</strong> %0,05 C, %18 Cr, %10 Ni → bu, meşhur <strong>304 paslanmazdır</strong> (1.4301).</p>
<p><strong>Örnek, X153CrMoV12:</strong> %1,53 C, %12 Cr, Mo ve V → <strong>1.2379</strong> soğuk iş takım çeliği (AISI D2).</p>

<h3>4) Yüksek hız çelikleri: HS</h3>
<p><code>HS6-5-2</code> → %6 W, %5 Mo, %2 V (sıra her zaman W-Mo-V-Co). Matkap ve freze çakıları.</p>

<h2>Durum (Teslim) Ekleri</h2>
<p>Malzemenin hangi işlemden geçmiş halde teslim edildiğini gösterir. Satın alma ve teknik resim için önemlidir.</p>
<table>
<thead><tr><th>Ek</th><th>Anlamı</th><th>Not</th></tr></thead>
<tbody>
<tr><td><strong>+AR</strong></td><td>Haddelenmiş halde</td><td>En ucuz, toleranslar geniş</td></tr>
<tr><td><strong>+N</strong></td><td>Normalize edilmiş</td><td>Homojen yapı</td></tr>
<tr><td><strong>+A</strong></td><td>Yumuşak tavlanmış</td><td>İşlenmesi kolay, takım çelikleri böyle gelir</td></tr>
<tr><td><strong>+QT</strong></td><td>Islah edilmiş (su verilmiş + temperlenmiş)</td><td>42CrMo4+QT ≈ 28–34 HRC</td></tr>
<tr><td><strong>+C</strong></td><td>Soğuk çekilmiş</td><td>Hassas ölçü (h9–h11), parlak yüzey, artmış mukavemet</td></tr>
<tr><td><strong>+SH</strong></td><td>Soyulmuş (peeled)</td><td>Kabuk alınmış çubuk</td></tr>
<tr><td><strong>+SL</strong></td><td>Taşlanmış ve parlatılmış</td><td>h6–h9 tolerans</td></tr>
</tbody></table>

<div class="kutu saha"><span class="kb">Sahadan: "Transmisyon mili"</span>
Türkiye'de piyasada "transmisyon mili" diye satılan malzeme genellikle <strong>soğuk çekilmiş (+C) C45 veya S235/E295</strong>'tir ve h9 toleransındadır. Bir piyasa terimi olduğu için içeriği tedarikçiye göre değişebilir. Kritik uygulamalarda malzeme sertifikası (<strong>EN 10204 3.1</strong>) iste.</div>

<h2>Uluslararası Karşılıklar</h2>
<p>Katalog ve yabancı müşterilerle çalışırken bu tablo çok işine yarayacak. Karşılıklar <strong>yaklaşıktır</strong>, kimyasal bileşim tam olarak aynı değildir.</p>
<table>
<thead><tr><th>EN kısa ad</th><th>Mat. No</th><th>Eski DIN</th><th>AISI/SAE (ABD)</th><th>JIS (Japonya)</th></tr></thead>
<tbody>
<tr><td>S235JR</td><td>1.0038</td><td>St37-2</td><td>A36 (yakın)</td><td>SS400</td></tr>
<tr><td>S355J2</td><td>1.0577</td><td>St52-3</td><td>A572 Gr.50 (yakın)</td><td>SM490</td></tr>
<tr><td>E295</td><td>1.0050</td><td>St50-2</td><td>—</td><td>SS490</td></tr>
<tr><td>C45</td><td>1.0503</td><td>C45 / Ck45</td><td>1045</td><td>S45C</td></tr>
<tr><td>11SMnPb30</td><td>1.0718</td><td>9SMnPb28</td><td>12L14</td><td>SUM24L</td></tr>
<tr><td>42CrMo4</td><td>1.7225</td><td>42CrMo4</td><td>4140</td><td>SCM440</td></tr>
<tr><td>16MnCr5</td><td>1.7131</td><td>16MnCr5</td><td>5115</td><td>SCr415 (yakın)</td></tr>
<tr><td>34CrNiMo6</td><td>1.6582</td><td>34CrNiMo6</td><td>4340</td><td>SNCM447</td></tr>
<tr><td>100Cr6</td><td>1.3505</td><td>100Cr6</td><td>52100</td><td>SUJ2</td></tr>
<tr><td>X5CrNi18-10</td><td>1.4301</td><td>V2A</td><td>304</td><td>SUS304</td></tr>
<tr><td>X2CrNiMo17-12-2</td><td>1.4404</td><td>V4A</td><td>316L</td><td>SUS316L</td></tr>
<tr><td>X153CrMoV12</td><td>1.2379</td><td>—</td><td>D2</td><td>SKD11</td></tr>
<tr><td>90MnCrV8</td><td>1.2842</td><td>—</td><td>O2</td><td>—</td></tr>
<tr><td>40CrMnMo7</td><td>1.2311</td><td>—</td><td>P20</td><td>—</td></tr>
</tbody></table>

<div class="kutu ipucu"><span class="kb">Misumi ve Japon katalogları</span>
Misumi gibi Japon tedarikçilerin kataloglarında JIS adlarını sık göreceksin: <strong>S45C</strong> (= C45), <strong>SUJ2</strong> (= 100Cr6, rulman çeliği, lineer miller), <strong>SKD11</strong> (= 1.2379), <strong>SUS304</strong>, <strong>SS400</strong> (≈ S235). "SUS" paslanmaz demektir.</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
<li>Harfle başlıyorsa (S, E) sayı min. akma mukavemetidir.</li>
<li>Sayıyla başlıyorsa ilk sayı karbon × 100'dür.</li>
<li>X ile başlıyorsa yüksek alaşımlıdır ve yüzdeler doğrudan yazılır.</li>
<li>1.4xxx paslanmaz, 1.2xxx takım çeliğidir.</li>
<li>+C, +QT, +A gibi durum eklerini satın almada mutlaka belirt.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>"51CrV4" adını çözümle.</summary>
<div>%0,51 C, 4 / 4 = ~%1 Cr, az miktarda vanadyum. Bu bir yay çeliğidir (1.8159).</div></details>
<details><summary>"X2CrNiMo17-12-2" hangi paslanmazdır, "2" ne anlama gelir?</summary>
<div>316L'dir (1.4404). Baştaki 2 = %0,02 C, yani düşük karbon ("L" = Low carbon). Bu, kaynak sonrası taneler arası korozyona karşı dayanımı artırır.</div></details>
<details><summary>Müşteri çiziminde "SCM440" yazıyor. Türkiye'de ne isteyeceksin?</summary>
<div>42CrMo4 (1.7225). İstenen sertlik varsa +QT ıslahlı halde.</div></details>
</div>
`);

KITAP.bolum('m1', '1-3', `
<p class="giris">Otomasyon makinelerindeki çelik parçaların büyük çoğunluğu bu bölümde anlatılan yaklaşık 10 malzemeden yapılır. Hangisinin ne zaman kullanılacağını bilmek, tasarımcının en temel becerilerinden biridir.</p>

<h2>Karbon Oranının Etkisi</h2>
<table>
<thead><tr><th>Karbon oranı</th><th>Mukavemet</th><th>Kaynak</th><th>Sertleşebilirlik</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>&lt; %0,25 (düşük)</td><td>Düşük</td><td>Çok iyi</td><td>Su verilmez (sementasyon gerekir)</td><td>S235, 16MnCr5</td></tr>
<tr><td>%0,25–0,55 (orta)</td><td>Orta-yüksek</td><td>Ön ısıtmayla</td><td>Islah ve indüksiyonla sertleşir</td><td>C45, 42CrMo4</td></tr>
<tr><td>&gt; %0,55 (yüksek)</td><td>Yüksek</td><td>Zor</td><td>Çok iyi sertleşir</td><td>C60, yay ve takım çelikleri</td></tr>
</tbody></table>

<div class="kutu not"><span class="kb">Karbon eşdeğeri (CEV)</span>
Kaynak kabiliyeti sadece karbona değil diğer alaşım elementlerine de bağlıdır:<br>
<code>CEV = C + Mn/6 + (Cr+Mo+V)/5 + (Ni+Cu)/15</code><br>
CEV &lt; 0,40 → rahat kaynak · 0,40–0,60 → ön ısıtma gerekir · &gt; 0,60 → zor, özel prosedür.<br>
Örnek: C45 için CEV ≈ 0,45 + 0,7/6 ≈ 0,57 → ön ısıtma (200–300 °C) gerekir. 42CrMo4 ≈ 0,9 → kaynaktan kaçın.</div>

<h2>Yapı Çelikleri</h2>

<h3>S235JR (St37): "Varsayılan" çelik</h3>
<ul>
<li><strong>Re ≥ 235 MPa, Rm 360–510 MPa</strong></li>
<li>En ucuz, her yerde bulunur: sac, lama, profil, boru, kutu, dolu mil.</li>
<li>Kaynağı çok kolay, bükülür, kesilir.</li>
<li><strong>Kullanım:</strong> Kaynaklı şaseler, montaj plakaları, braketler, koruyucu muhafaza sacları, ağırlık/rijitlik gereken her parça.</li>
<li><strong>Kullanılmaz:</strong> Aşınan yüzeyler, sertlik gereken yerler, yüksek gerilmeli miller.</li>
</ul>

<h3>S355J2 (St52-3)</h3>
<ul>
<li><strong>Re ≥ 355 MPa, Rm 470–630 MPa</strong> (S235'ten ~%50 daha mukavemetli, fiyat farkı küçük)</li>
<li>Kaynak kabiliyeti yine iyi.</li>
<li><strong>Kullanım:</strong> Yüksek yük taşıyan kaynaklı konstrüksiyonlar, kaldırma ekipmanları, vinç kirişleri, pres gövdeleri.</li>
</ul>
<div class="kutu uyari">Rijitlik problemi olan bir şasede S235'ten S355'e geçmek sehimi düşürmez (Bölüm 1.1). S355 sadece <strong>gerilme</strong> sınırdaysa anlamlıdır.</div>

<h3>E295 / E335 / E360 (St50, St60, St70)</h3>
<p>Makine çelikleri. Kaynak için değil, <strong>talaşlı işlenen ve orta yük taşıyan</strong> parçalar için. Isıl işlem uygulanmaz ama sertlikleri doğal olarak S235'ten yüksektir. Hafif yüklü miller, pimler, burçlar, düşük devirli dişliler. Günümüzde yerlerini büyük ölçüde C45'e bırakmışlardır.</p>

<h2>Islah Çelikleri</h2>
<p>Islah (Quench + Temper = sertleştirme + yüksek sıcaklıkta temperleme) ile <strong>hem mukavemetli hem tok</strong> hale getirilebilen orta karbonlu çelikler.</p>

<h3>C45 (Ck45, 1.0503, AISI 1045): Mil çeliği</h3>
<ul>
<li>Normalize: <strong>Re ≈ 340 MPa, Rm ≈ 620 MPa</strong> · Islahlı: Re ≈ 430–490, Rm ≈ 700–850 MPa</li>
<li><strong>İndüksiyonla yüzey sertleştirilebilir:</strong> 55–58 HRC. Bu onun en büyük avantajıdır.</li>
<li>İyi işlenebilir, ucuz, her ölçüde dolu mil olarak bulunur.</li>
<li><strong>Kullanım:</strong> Miller, akslar, pimler, orta yüklü dişliler, kasnaklar, kremayerler, kam milleri, cıvatalı bağlantılardaki pim ve burçlar.</li>
<li><strong>Dikkat:</strong> Kaynak için ön ısıtma gerekir. Büyük kesitlerde ıslah çekirdeğe kadar işlemez (sertleşebilirlik sınırlı, ~Ø16 mm'ye kadar tam sertleşme).</li>
</ul>

<h3>42CrMo4 (1.7225, AISI 4140): Ağır hizmet çeliği</h3>
<ul>
<li>Islahlı (+QT): <strong>Re ≈ 650–900 MPa, Rm ≈ 900–1200 MPa</strong> (çapa bağlı), 28–36 HRC</li>
<li>Krom ve molibden sayesinde <strong>büyük kesitlerde de çekirdeğe kadar</strong> sertleşir.</li>
<li>Tok, yorulma dayanımı yüksek. İndüksiyon ve nitrürleme ile yüzey sertleştirilebilir.</li>
<li><strong>Kullanım:</strong> Yüksek torklu miller, darbeli yükler, hidrolik silindir milleri, ağır yüklü dişliler, 10.9 sınıfı cıvatalar, krank, aks, kesme presi parçaları.</li>
<li>Genelde <strong>ıslahlı (+QT) halde satın alınır</strong> ve bu halde işlenir (~30 HRC tornalanabilir).</li>
</ul>

<h3>34CrNiMo6 (1.6582, AISI 4340)</h3>
<p>42CrMo4'ün bir üst seviyesi. Nikel ilavesi tokluğu ve çok büyük kesitlerde sertleşebilirliği artırır. Ağır redüktör milleri, kritik yüklü parçalar. Pahalıdır, otomasyonda nadir kullanılır.</p>

<h2>Sementasyon Çelikleri</h2>
<p>Düşük karbonlu çeliklerdir (%0,1–0,25 C). Kendi başlarına sertleşmezler. Yüzeylerine karbon emdirilerek (sementasyon) <strong>yüzey 58–62 HRC sert, çekirdek tok</strong> hale getirilirler. Darbe + aşınma olan yerler için idealdir.</p>
<table>
<thead><tr><th>Çelik</th><th>Mat. No</th><th>Kullanım</th></tr></thead>
<tbody>
<tr><td><strong>16MnCr5</strong></td><td>1.7131</td><td>Dişliler, pinyonlar, kam makaraları, kılavuz pimler, zincir dişlileri. Avrupa'da en yaygın sementasyon çeliği.</td></tr>
<tr><td><strong>20MnCr5</strong></td><td>1.7147</td><td>Daha büyük modüllü dişliler, daha yüksek çekirdek mukavemeti.</td></tr>
<tr><td><strong>18CrNiMo7-6</strong></td><td>1.6587</td><td>Ağır redüktör dişlileri, rüzgar türbini şanzımanları.</td></tr>
<tr><td>C15 / C15E</td><td>1.0401</td><td>Basit, düşük yüklü sementasyon parçaları, pimler.</td></tr>
</tbody></table>
<div class="kutu ipucu"><span class="kb">Ne zaman C45 indüksiyon, ne zaman 16MnCr5 sementasyon?</span>
Lokal sertlik yeterliyse (bir milin rulman veya keçe yüzeyi, kremayer dişleri) <strong>C45 + indüksiyon</strong> daha ucuz ve hızlıdır. Tüm yüzey sert olsun, dişin tabanı ve yanakları homojen sertleşsin, darbe dayanımı yüksek olsun isteniyorsa (dişliler) <strong>16MnCr5 + sementasyon</strong> seçilir.</div>

<h2>Otomat Çelikleri</h2>
<p>Kükürt (S) ve bazen kurşun (Pb) ilave edilerek <strong>talaşın kolay kırılması</strong> sağlanmış çeliklerdir. CNC torna otomatlarında seri üretim için idealdir.</p>
<ul>
<li><strong>11SMn30 (1.0715), 11SMnPb30 (1.0718, AISI 12L14)</strong></li>
<li><strong>Avantaj:</strong> Çok hızlı işlenir, yüzey kalitesi mükemmeldir, takım ömrü uzundur.</li>
<li><strong>Dezavantaj:</strong> <strong>Kaynak edilemez</strong>, mukavemeti düşüktür, kükürt inklüzyonları yorulma dayanımını azaltır.</li>
<li><strong>Kullanım:</strong> Burçlar, mesafe parçaları (spacer), özel cıvatalar, nipeller, düşük yüklü küçük torna parçaları.</li>
<li>Kurşunlu otomat çelikleri <strong>RoHS/REACH</strong> açısından kısıtlamalı olabilir; müşteri şartnamesine dikkat.</li>
</ul>

<h2>Özel Amaçlı Çelikler</h2>

<h3>Rulman çeliği: 100Cr6 (1.3505, AISI 52100, SUJ2)</h3>
<p>%1 C, %1,5 Cr. 60–64 HRC'ye sertleştirilir. Rulman bilyaları ve bilezikleri, <strong>lineer miller</strong> (indüksiyonla sertleştirilmiş ve taşlanmış, h6/g6), kılavuz pimler. Lineer mil olarak satın alınır, kendin sertleştirmezsin.</p>

<h3>Gümüş çeliği (Silver steel): 115CrV3 (1.2210)</h3>
<p>Taşlanmış ve parlatılmış halde (h8–h9) satılan yüksek karbonlu çubuk. Sertleştirilebilir (60+ HRC). Hassas pimler, küçük miller, zımbalar, aletler. "Gümüş" adı parlak görünümünden gelir, içinde gümüş yoktur.</p>

<h3>Yay çelikleri: 51CrV4 (1.8159), 60SiCr7, C75S</h3>
<p>Yüksek elastik sınır. Yaylar, yaylı rondelalar, esnek kelepçeler (flexure). 44–50 HRC'de kullanılır.</p>

<h3>Aşınma plakaları: Hardox, Raex, Creusabro</h3>
<p>Su verilmiş, 400–600 HB sertlikte haddelenmiş saclar. Hardox bir markadır (SSAB). <strong>Kullanım:</strong> Hurda/çakıl/maden ile temas eden sürtünme yüzeyleri, kırıcı astarları, kepçe ağızları, oluk ve şutların iç kaplaması. Kaynak edilebilir (uygun prosedürle). Lazer kesilebilir ama işlenmesi zordur.</p>

<h2>Karar Tablosu</h2>
<table>
<thead><tr><th>İhtiyaç</th><th>İlk tercih</th><th>Alternatif</th></tr></thead>
<tbody>
<tr><td>Kaynaklı şase, plaka, braket</td><td>S235JR</td><td>S355J2 (yüksek gerilme)</td></tr>
<tr><td>Genel mil, aks</td><td>C45 (+C çekme)</td><td>42CrMo4 (yüksek yük)</td></tr>
<tr><td>Yüksek torklu / darbeli mil</td><td>42CrMo4+QT</td><td>34CrNiMo6</td></tr>
<tr><td>Rulman/keçe yüzeyi sertliği</td><td>C45 + indüksiyon</td><td>42CrMo4 + indüksiyon</td></tr>
<tr><td>Dişli (sert, tok)</td><td>16MnCr5 sementasyon</td><td>42CrMo4 + nitrürleme / indüksiyon</td></tr>
<tr><td>Lineer kılavuz mil</td><td>Hazır mil (100Cr6/Cf53, sert + taşlanmış)</td><td>Krom kaplamalı</td></tr>
<tr><td>Seri torna parçası, burç, spacer</td><td>11SMnPb30</td><td>C45</td></tr>
<tr><td>Hassas pim, küçük sert mil</td><td>1.2210 gümüş çeliği</td><td>Hazır pim (ISO 8734)</td></tr>
<tr><td>Abrasif aşınma yüzeyi</td><td>Hardox 400/500</td><td>1.2379 (küçük parça)</td></tr>
</tbody></table>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
<li>Şase ve plaka → <strong>S235</strong>. Mil → <strong>C45</strong>. Ağır mil → <strong>42CrMo4</strong>. Dişli → <strong>16MnCr5</strong>.</li>
<li>Karbon ↑ → mukavemet ve sertleşebilirlik ↑, kaynak kabiliyeti ↓.</li>
<li>Otomat çelikleri kaynak edilmez.</li>
<li>Lineer mil, pim, rulman gibi elemanları kendin üretme, standart olarak satın al.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir konveyör tahrik mili tasarlıyorsun: Ø30, kama yuvalı, iki rulman arasında, orta yük. Malzeme?</summary>
<div>C45 (soğuk çekilmiş veya normalize). Rulman oturma yüzeyleri taşlanabilir. Yük yüksek veya darbeliyse 42CrMo4+QT.</div></details>
<details><summary>Bir mile kaynakla flanş eklemek istiyorsun. Mil 42CrMo4. Problem?</summary>
<div>CEV çok yüksek (~0,9). Kaynak bölgesinde sert ve gevrek martenzit oluşur, çatlama riski yüksektir. Ya kaynaksız bir tasarım (sıkı geçme, kilitleme elemanı, cıvatalı flanş) ya da kaynak yapılacaksa S355/C22 gibi bir malzeme tercih edilmeli.</div></details>
<details><summary>Neden şase plakasında 42CrMo4 kullanmak saçma olur?</summary>
<div>Şase rijitliğe göre boyutlanır, E değeri tüm çeliklerde aynıdır. 42CrMo4 pahalıdır, kaynak edilmez ve mukavemet avantajı hiç kullanılmaz.</div></details>
</div>
`);

KITAP.bolum('m1', '1-4', `
<p class="giris">Takım çelikleri adını kalıp ve kesici aletlerden alır, ama otomasyon tasarımcısı onları <strong>aşınan, sert olması gereken küçük parçalarda</strong> çok sık kullanır: fikstür pimleri, kesme bıçakları, aşınma plakaları, merkezleme parçaları.</p>

<h2>Takım Çeliği Grupları</h2>
<table>
<thead><tr><th>Grup</th><th>Özellik</th><th>Tipik çelikler</th></tr></thead>
<tbody>
<tr><td><strong>Soğuk iş çelikleri</strong></td><td>Oda sıcaklığında yüksek sertlik ve aşınma direnci</td><td>1.2379, 1.2842, 1.2510, 1.2767, 1.2363</td></tr>
<tr><td><strong>Sıcak iş çelikleri</strong></td><td>Yüksek sıcaklıkta sertliğini korur</td><td>1.2344 (H13), 1.2343 (H11)</td></tr>
<tr><td><strong>Plastik kalıp çelikleri</strong></td><td>Ön sertleştirilmiş, parlatılabilir</td><td>1.2311, 1.2738 (P20), 1.2083 (paslanmaz)</td></tr>
<tr><td><strong>Yüksek hız çelikleri (HSS)</strong></td><td>Kırmızı sıcaklıkta sertlik</td><td>1.3343 (M2), 1.3243</td></tr>
</tbody></table>

<h2>Otomasyonda En Çok Kullanılanlar</h2>

<h3>1.2379 (X153CrMoV12, AISI D2, SKD11)</h3>
<ul>
<li>%12 Cr, %1,5 C → çok sayıda sert karbür → <strong>mükemmel aşınma direnci</strong></li>
<li>Sertleştirme: <strong>58–62 HRC</strong></li>
<li>Havada sertleşir → çarpılma düşük</li>
<li>Paslanmaz değildir ama korozyona karşı karbon çeliğinden belirgin derecede dirençlidir.</li>
<li><strong>Kullanım:</strong> Kesme bıçakları (folyo, kağıt, plastik, sac), zımba ve matrisler, aşınma plakaları, kızaklar, kılavuz cetveller, fikstür temas yüzleri, şekillendirme kalıpları.</li>
<li><strong>Dezavantaj:</strong> Görece gevrek; darbede kenar kırılabilir. Pahalı. Sertleştirildikten sonra sadece taşlama ve tel erozyonla işlenebilir.</li>
</ul>

<h3>1.2842 (90MnCrV8, AISI O2)</h3>
<ul>
<li>Yağda sertleşen, ucuz, işlenmesi kolay soğuk iş çeliği</li>
<li><strong>56–62 HRC</strong></li>
<li>Taşlanmış lama (flat ground stock) olarak da satılır. Hazır ölçüde, düz ve paralel lamalar.</li>
<li><strong>Kullanım:</strong> Fikstür pimleri, merkezleme parçaları, kılavuz parçalar, ölçü mastarları, küçük bıçaklar, aşınma pedleri.</li>
<li>1.2379 kadar aşınmaya dayanıklı değildir ama daha toktur ve ucuzdur.</li>
</ul>

<h3>1.2510 (100MnCrW4, AISI O1)</h3>
<p>1.2842'ye benzer, ölçü kararlılığı iyi. Mastarlar, kesme aletleri, pimler.</p>

<h3>1.2767 (45NiCrMo16)</h3>
<p>Nikel alaşımlı, <strong>çok tok</strong> soğuk iş çeliği (~50–54 HRC). Darbe altındaki aletler, kalın sac kesme bıçakları, kırılmaması gereken zımbalar.</p>

<h3>1.2311 / 1.2738 (P20): Ön sertleştirilmiş</h3>
<ul>
<li><strong>~28–34 HRC (280–325 HB)</strong> sertlikte satılır, <strong>ısıl işlem gerektirmeden doğrudan işlenir</strong>.</li>
<li><strong>Kullanım:</strong> Isıl işlemle uğraşmadan C45'ten daha sert, aşınmaya daha dayanıklı parça gerektiğinde: fikstür gövdeleri, gripper parmakları, kalıp plakaları, tutucular.</li>
<li>Nitrürlenerek yüzey sertliği artırılabilir.</li>
</ul>
<div class="kutu ipucu"><span class="kb">Pratik ipucu</span>
"Biraz daha sert olsun ama ısıl işleme göndermeyeyim, çarpılma riski de olmasın" diyorsan <strong>P20 (1.2311/1.2738)</strong> veya <strong>42CrMo4+QT</strong> en pratik çözümdür. Tek seferde işle, bitti.</div>

<h3>1.2344 (X40CrMoV5-1, AISI H13)</h3>
<p>Sıcak iş çeliği. Alüminyum döküm kalıpları, ekstrüzyon kalıpları, sıcak dövme. Otomasyonda <strong>ısıl yapıştırma/kaynak çeneleri</strong>, sıcak kesme bıçakları, yüksek sıcaklıktaki fikstürler (ör. plastik kaynak makinesi).</p>

<h2>Takım Çeliği ile Çalışma Kuralları</h2>

<h3>İşlem sırası</h3>
<ol>
<li><strong>Yumuşak tavlı (+A) halde kaba işleme:</strong> Son ölçüye taşlama/erozyon payı bırakılır (tipik olarak 0,2–0,5 mm/yüzey).</li>
<li><strong>Gerilim giderme</strong> (büyük talaş kaldırılmışsa, opsiyonel).</li>
<li><strong>Sertleştirme + temperleme</strong></li>
<li><strong>Taşlama / tel erozyon / sert frezeleme</strong> ile son ölçü.</li>
</ol>

<div class="kutu uyari"><span class="kb">Çarpılma</span>
Sertleştirme sırasında parça çarpılır ve ölçüsü değişir (hacim artışı). İnce, uzun, asimetrik parçalarda çarpılma daha büyüktür. Hassas ölçüleri ısıl işlemden <strong>sonra</strong> verecek şekilde işlem planla. Teknik resimde "sertleştirme sonrası taşlanacak" notu ve işleme payı belirtilmeli.</div>

<div class="kutu not"><span class="kb">Tel erozyon ve 1.2379</span>
1.2379 gibi yüksek alaşımlı çeliklerde büyük blok önce sertleştirilip sonra tel erozyonla kesildiğinde, iç gerilmeler serbest kalarak parçayı çarpıtabilir veya çatlatabilir. Bu yüzden ya önceden başlangıç delikleri ve kaba boşaltma yapılır, ya da "erozyon kalitesinde" (çok kademeli temperlenmiş / vakumda sertleştirilmiş) malzeme kullanılır.</div>

<h3>Sertlik nasıl belirtilir?</h3>
<p>Teknik resimde aralık verilir: <code>Sertleştirilmiş ve temperlenmiş 58–62 HRC</code> veya <code>60 ± 2 HRC</code>. Tek bir değer ("60 HRC") yazmak ısıl işlemcinin hayatını zorlaştırır.</p>

<h2>Standart Parça mı, Kendin mi Üreteceksin?</h2>
<p>Pek çok sert parça <strong>hazır olarak</strong> satın alınabilir ve neredeyse her zaman daha ucuz ve kaliteli olur:</p>
<ul>
<li>Silindirik pimler (ISO 8734, sertleştirilmiş, m6)</li>
<li>Merkezleme/konum pimleri, elmas (diamond) pimler, bilyalı pimler</li>
<li>Kılavuz mil ve burçlar (kalıp elemanları)</li>
<li>Taşlanmış takım çeliği lamaları (1.2842, 1.2379)</li>
<li>Zımba ve matris elemanları</li>
</ul>
<p>Misumi, Meusburger, Hasco, Fibro, Ganter, Kipp, Norelem gibi tedarikçilerin kataloglarına bak.</p>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
<li>Aşınma + sertlik → <strong>1.2379</strong>. Ucuz, sert, genel amaçlı → <strong>1.2842</strong>. Tok → <strong>1.2767</strong>.</li>
<li>Isıl işlemsiz "orta sertlik" → <strong>1.2311/1.2738 (P20)</strong>.</li>
<li>Sıcak çeneler → <strong>1.2344</strong>.</li>
<li>İşlem sırası: kaba işle → sertleştir → taşla. Çarpılmayı planla.</li>
<li>Pim gibi sert standart parçaları hazır al.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Plastik film kesen bir bıçak tasarlıyorsun, ömrü uzun olmalı. Malzeme ve sertlik?</summary>
<div>1.2379, 58–62 HRC, kesme kenarı taşlanmış. Darbe varsa 1.2767 veya PM (toz metalürjisi) çelikler değerlendirilebilir.</div></details>
<details><summary>Bir gripper parmağı parçayı tutarken hafif sürtünüyor ve 6 ayda aşınıyor. Şu an malzeme 6082 alüminyum. Ne önerirsin?</summary>
<div>Seçenekler: (1) Parmağı alüminyum bırak, temas noktasına değiştirilebilir sert bir ped (1.2842 sertleştirilmiş veya POM/PU, parçaya göre) vida ile bağla, ya da (2) sert eloksal uygula. (1) en iyi çözümdür: aşınan parça ucuz ve değiştirilebilir olur.</div></details>
</div>
`);

KITAP.bolum('m1', '1-5', `
<p class="giris">"Paslanmaz çelik" tek bir malzeme değil, birbirinden çok farklı özelliklerde bir aile. 304 ile 316 arasındaki fark, hangisinin mıknatıs tuttuğu, neden paslanmaz cıvataların "yendiği" ve paslanmaz çeliğin de aslında paslanabildiği bu bölümün konusu.</p>

<h2>Neden Paslanmaz?</h2>
<p>Çelikte <strong>en az %10,5 krom</strong> bulunduğunda, yüzeyde nanometre kalınlığında, görünmez bir <strong>krom oksit (Cr₂O₃) pasif tabakası</strong> oluşur. Bu tabaka çizildiğinde oksijenle temas ederek kendini yeniler. Paslanmazlık bu tabakanın sağlam kalmasına bağlıdır.</p>
<div class="kutu uyari">Pasif tabaka oksijene ihtiyaç duyar. Oksijensiz dar aralıklarda (conta altı, cıvata başı altı) ve klorür (tuz, deniz suyu, bazı temizlik kimyasalları) varlığında bu tabaka bozulur ve <strong>paslanmaz da paslanır</strong>. Ayrıca paslanmaz yüzeyine normal çelik talaşı veya tozu bulaşırsa (aynı taşla taşlama, aynı fırçayla temizleme) yüzeyde pas lekeleri oluşur.</div>

<h2>Paslanmaz Çelik Aileleri</h2>
<table>
<thead><tr><th>Aile</th><th>Yapı</th><th>Manyetik mi?</th><th>Sertleşir mi?</th><th>Örnekler</th></tr></thead>
<tbody>
<tr><td><strong>Östenitik</strong></td><td>Cr + Ni</td><td>Hayır (soğuk işlemle hafif)</td><td>Hayır (sadece soğuk işlemle)</td><td>304, 316, 303, 321</td></tr>
<tr><td><strong>Ferritik</strong></td><td>Sadece Cr, düşük C</td><td>Evet</td><td>Hayır</td><td>430</td></tr>
<tr><td><strong>Martenzitik</strong></td><td>Cr + yüksek C</td><td>Evet</td><td><strong>Evet</strong> (50–60 HRC)</td><td>420, 440C</td></tr>
<tr><td><strong>Dubleks</strong></td><td>Östenit + ferrit</td><td>Evet</td><td>Hayır</td><td>2205</td></tr>
<tr><td><strong>Çökelme sertleşmeli</strong></td><td>Cr + Ni + Cu</td><td>Evet</td><td><strong>Evet</strong> (yaşlandırma ile)</td><td>17-4PH</td></tr>
</tbody></table>

<h2>Önemli Kaliteler</h2>
<table>
<thead><tr><th>AISI</th><th>EN</th><th>Kısa ad</th><th>Özellik ve kullanım</th></tr></thead>
<tbody>
<tr><td><strong>304</strong></td><td>1.4301</td><td>X5CrNi18-10</td><td>"Standart paslanmaz". Gıda, genel makine, muhafaza, tank, mutfak. En yaygın ve en ucuz östenitik.</td></tr>
<tr><td>304L</td><td>1.4307</td><td>X2CrNi18-9</td><td>Düşük karbon → kaynak sonrası korozyon riski düşük. Kaynaklı yapılar.</td></tr>
<tr><td><strong>316 / 316L</strong></td><td>1.4401 / 1.4404</td><td>X2CrNiMo17-12-2</td><td><strong>+%2–2,5 Mo</strong> → klorüre karşı çok daha dayanıklı. İlaç, deniz, kimya, tuzlu gıdalar, yoğun CIP yıkama.</td></tr>
<tr><td><strong>303</strong></td><td>1.4305</td><td>X8CrNiS18-9</td><td>Kükürt ilaveli "otomat paslanmaz". Kolay işlenir, korozyon direnci ve kaynak kabiliyeti 304'ten düşük.</td></tr>
<tr><td>321</td><td>1.4541</td><td>X6CrNiTi18-10</td><td>Titanyum stabilize; yüksek sıcaklık, egzoz.</td></tr>
<tr><td>430</td><td>1.4016</td><td>X6Cr17</td><td>Ferritik, ucuz, manyetik. Beyaz eşya, dekoratif paneller.</td></tr>
<tr><td><strong>420</strong></td><td>1.4021 / 1.4034</td><td>X20Cr13 / X46Cr13</td><td>Martenzitik, sertleşir. Bıçaklar, pompa milleri, cerrahi aletler.</td></tr>
<tr><td><strong>440C</strong></td><td>1.4125</td><td>X105CrMo17</td><td>Martenzitik, 58–60 HRC. Paslanmaz rulman, lineer ray ve bilyalar.</td></tr>
<tr><td>17-4PH</td><td>1.4542</td><td>X5CrNiCuNb16-4</td><td>Yüksek mukavemetli (Rp0,2 ~1000 MPa), korozyon direnci iyi. Havacılık, yüksek yüklü paslanmaz miller.</td></tr>
<tr><td>2205</td><td>1.4462</td><td>X2CrNiMoN22-5-3</td><td>Dubleks, çok yüksek klorür ve gerilmeli korozyon direnci. Deniz, kimya, offshore.</td></tr>
</tbody></table>

<h3>304 ve 316: Hangisini seçmeliyim?</h3>
<div class="iki-sutun">
<div><h4>304 yeterli</h4>
<ul><li>Kuru gıda, paketleme</li><li>İç mekan, normal ortam</li><li>Su ile temas (klorür düşük)</li><li>Dekoratif yüzeyler</li></ul></div>
<div><h4>316L gerekli</h4>
<ul><li>İlaç ve medikal (GMP)</li><li>Tuzlu/asitli gıdalar (turşu, et, süt ürünleri)</li><li>Klorlu temizlik/dezenfeksiyon</li><li>Deniz kenarı, dış ortam</li></ul></div>
</div>

<h2>Paslanmazla Tasarım Yaparken Bilinmesi Gerekenler</h2>

<h3>1. İşlenmesi zordur</h3>
<p>Östenitik paslanmazlar <strong>pekleşir</strong>: kesici takım malzemeyi ezdikçe yüzey sertleşir. Yavaş ve küt takımla çalışmak durumu kötüleştirir. İşçilik süresi karbon çeliğine göre 1,5–2 kat olabilir. Mümkünse 303 kullan ya da paslanmaz parçaları basit tut.</p>

<h3>2. Isı iletimi düşüktür, ısıl genleşmesi yüksektir</h3>
<p>Kaynakta çok çarpılır (α ≈ 16–17 µm/m·°C, ısı iletimi çeliğin 1/3'ü).</p>

<h3>3. Yenme (galling / soğuk kaynak)</h3>
<div class="kutu tehlike"><span class="kb">Paslanmaz cıvata + paslanmaz somun</span>
Paslanmaz–paslanmaz sürtünen yüzeylerde (özellikle cıvata-somun dişleri) yüksek basınç altında malzemeler birbirine kaynayabilir. Cıvata sıkarken bir anda kilitlenir ve çoğu zaman koparak kurtarılır. Önlemler: <strong>anti-seize (yapışma önleyici) macun</strong> kullanmak, yavaş sıkmak (akülü vidalamada yüksek devirden kaçınmak), farklı kalitede somun (ör. A4 cıvata + kaplamalı somun), gerekirse kaplamalı cıvata kullanmak.</div>

<h3>4. Paslanmaz cıvata sınıfları</h3>
<p>ISO 3506'ya göre: <code>A2-70</code> → A2 = 304 benzeri, 70 = Rm 700 MPa. <code>A4-80</code> → A4 = 316 benzeri, Rm 800 MPa. A2-70'in akma mukavemeti (~450 MPa) <strong>8.8 çelik cıvatanın (640 MPa) altındadır.</strong> Paslanmaza geçerken cıvata çapını kontrol et.</p>

<h3>5. Endüktif sensörler ve manyetiklik</h3>
<p>Endüktif yaklaşım sensörleri paslanmaz hedefleri yumuşak çeliğe göre daha kısa mesafeden algılar (düzeltme faktörü kabaca 0,6–0,8; sensörün katalogunda yazar). Östenitik paslanmaz manyetik olmadığı için <strong>manyetik tutucular</strong> çalışmaz.</p>

<h3>6. Yüzey kalitesi ve hijyenik tasarım</h3>
<ul>
<li>Sac yüzeyleri: <code>2B</code> (soğuk haddelenmiş, mat), <code>BA</code> (parlak tavlı), <code>No.4 / satine</code> (fırçalanmış), <code>ayna (No.8)</code>.</li>
<li>Gıda ve ilaçta temas yüzeyleri için tipik şart <strong>Ra ≤ 0,8 µm</strong>.</li>
<li>Hijyenik tasarım (EHEDG, 3-A): boşluk ve kör delik bırakma, eğimli yüzeyler (su toplanmasın), kaynaklar taşlanıp parlatılmış, açıktaki dişlerden kaçın.</li>
<li>Kaynak sonrası renk değişimi (temper renkleri) korozyona açıktır; <strong>dekapaj ve pasivasyon</strong> ile giderilmelidir.</li>
</ul>

<div class="kutu saha"><span class="kb">Sahadan: "Her yeri paslanmaz yapalım"</span>
Gıda makinelerinde müşteri "komple paslanmaz" isteyebilir. Ancak bu işçilik maliyetini ciddi artırır. Pratikte <strong>ürünle temas eden ve yıkamaya maruz kalan</strong> bölgeler 304/316 yapılır. İç şase, ürünle teması olmayan yerler bazen boyalı çelik veya eloksallı alüminyum kalabilir. Bu karar müşteri şartnamesine ve hijyen bölgelerine (temas alanı, sıçrama alanı, temassız alan) göre verilir.</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
<li>Paslanmazlık = %10,5+ Cr ile oluşan pasif oksit tabakası.</li>
<li>Genel → <strong>304</strong>. Klorür/ilaç/deniz → <strong>316L</strong>. Kolay işleme → <strong>303</strong>. Sert paslanmaz → <strong>420/440C</strong>.</li>
<li>Östenitik paslanmazlar mıknatıs tutmaz ve ısıl işlemle sertleşmez.</li>
<li>Paslanmaz cıvatalar yenebilir ve 8.8'den zayıftır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Müşteri "paslanmaz çelik, mıknatıs tutmuyor" diyor. Hangi aileden olabilir?</summary>
<div>Östenitik (304, 316 gibi). Ferritik, martenzitik ve dubleks paslanmazlar mıknatıs tutar.</div></details>
<details><summary>Tuzlu turşu dolum makinesinde 304 kullanılmış ve 1 yılda çukurcuklar oluşmuş. Neden ve çözüm?</summary>
<div>Klorür kaynaklı çukurcuk (pitting) korozyonu. Molibden içeren 316L'ye geçilmeli; çok agresif durumda dubleks 2205 değerlendirilmelidir.</div></details>
<details><summary>Paslanmaz bir mil üzerinde rulman çalışacak ve yüzey sert olmalı. Ne seçersin?</summary>
<div>Martenzitik 420 (X46Cr13) veya 440C sertleştirilmiş, ya da yüksek mukavemet ve korozyon direnci için 17-4PH. Alternatif olarak 304 mil üzerine sert krom kaplama düşünülebilir.</div></details>
</div>
`);
