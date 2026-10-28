// Kitap çekirdeği: modül tanımları ve bölüm içerikleri burada toplanır.
// Yeni içerik eklemek için: js/icerik/ altında bir dosya oluştur,
// KITAP.bolum('m2', '2-1', `...html...`) şeklinde kaydet ve index.html'e ekle.
window.KITAP = {
  moduller: [],
  icerik: {},
  bolum(modulId, bolumId, html) {
    this.icerik[modulId + '/' + bolumId] = html;
  }
};
