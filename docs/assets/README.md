# GramLab — Assets Klasörü

Tüm görsel ve ses dosyaları buraya gelir.
index.html otomatik olarak assets/ klasöründen yükler.

═══════════════════════════════════════════
## 🖼️ GÖRSELLER
═══════════════════════════════════════════

| Dosya adı          | Kullanıldığı yer                    | Format |
|--------------------|-------------------------------------|--------|
| might-guy.png      | Disiplin Modu butonu (sağ köşe)     | Kare   |
| Don_Corleone.png   | The Family butonu (sağ köşe)        | Kare   |
| Don_Face.png       | The Family diyalogda Don avatar     | Kare   |

### PNG kuralları
- Kare format (örn: 200×200 veya 400×400px)
- Şeffaf arka plan (PNG) tercih edilir
- Dosya yoksa otomatik emoji fallback gösterilir

### Yeni NPC görseli eklemek için
index.html içinde _mafiaAvatarHtml fonksiyonunu bul:
  var imgMap = {'Don Corleone': 'assets/Don_Face.png'};
Yeni satır ekle:
  var imgMap = {
    'Don Corleone': 'assets/Don_Face.png',
    'Barzini Capo': 'assets/Barzini_Face.png',
  };

═══════════════════════════════════════════
## 🎵 MÜZİK & SES
═══════════════════════════════════════════

| Dosya adı          | Kullanıldığı yer            |
|--------------------|-----------------------------|
| mafia-music.mp3    | The Family arka plan müziği |
| achievement.mp3    | Rozet kazanma (gelecekte)   |
| correct.mp3        | Doğru cevap (gelecekte)     |
| wrong.mp3          | Yanlış cevap (gelecekte)    |
| gate-pass.mp3      | Kapı geçişi (gelecekte)     |

═══════════════════════════════════════════
## 📁 KLASÖR YAPISI
═══════════════════════════════════════════

docs/
├── index.html
├── mafia-missions.js
└── assets/
    ├── README.md          ← Bu dosya
    ├── might-guy.png      ← Ekle (kare PNG)
    ├── Don_Corleone.png   ← Ekle (kare PNG)
    ├── Don_Face.png       ← Ekle (kare PNG)
    └── mafia-music.mp3    ← Ekle
