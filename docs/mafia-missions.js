// ═══════════════════════════════════════════════════════════════
// THE FAMILY — MAFIA MISSIONS
// Bu dosyayı düzenleyerek görevleri özelleştirebilirsiniz.
// ═══════════════════════════════════════════════════════════════

var MAFIA_MISSIONS = [

  // ─── GÖREV 1: İlk Toplantı — Don Seni Çağırıyor ──────────────
  {
    id: 1,
    title: "Mission 1: The Don's Invitation",
    location: "THE DON'S OFFICE — SUNDAY EVENING",
    rank_unlock: 'mafia_associate',
    scenes: [

      // SAHNE 1 — Tanışma
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Ah... you are here. Sit down. I heard about you from my men. They say you are <em>smart and reliable</em>. I want to ask you something. How are you?",
        teach: {
          title: "💬 Small Talk — Nasıl Gideceği Sorusu",
          body: "'How are you?' — Nasılsın? Resmi ortamda buna şöyle cevap verilir:<br>• <b>I am fine, thank you.</b> — İyiyim, teşekkür ederim.<br>• <b>Very well, sir.</b> — Çok iyi efendim. (saygılı)<br>• <b>I am doing well, thank you for asking.</b> — İyiyim, sorduğun için teşekkürler."
        },
        choices: [
          {
            text: "I am very well, Don. Thank you for asking.",
            tr: "✓ Mükemmel! 'I am very well' kibarca 'çok iyiyim' demek. 'Thank you for asking' = sorduğun için teşekkürler. Resmi ortamda çok doğal.",
            hint: "✓ Polite formal greeting",
            correct: true
          },
          {
            text: "I am good, Don. How are you doing?",
            tr: "✗ 'I am good' günlük dilde geçer ama 'I am well' daha resmi. Ayrıca Don'a 'How are you doing?' sormak biraz saygısız sayılabilir — önce o sorar.",
            hint: "✗ Informal + asking Don back is bold",
            correct: false
          },
          {
            text: "Fine. What do you want?",
            tr: "✗ Çok kaba! 'What do you want?' Don'a söylenmez. 'Fine' da çok kısa ve soğuk. Bu aile içinde saygı her şeydir.",
            hint: "✗ Too rude — no respect shown",
            correct: false
          }
        ]
      },

      // SAHNE 2 — Don açıklıyor, öğretici kalıp
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Good. Tonight I have a dinner with an important man — <em>Mr. Barzini</em>. I want you to invite him personally. Go to his office. Be polite. Tell him: <em>'The Don would like to invite you to dinner.'</em> Can you remember this?",
        teach: {
          title: "📝 Davet Kalıbı — Inviting Someone to Dinner",
          body: "Birisini yemeğe davet ederken şu kalıplar kullanılır:<br>• <b>Would you like to join us for dinner?</b> — Bizimle yemeğe gelmek ister misiniz?<br>• <b>The Don would like to invite you to dinner.</b> — Don sizi yemeğe davet etmek istiyor.<br>• <b>You are cordially invited to dinner.</b> — Yemeğe nazikçe davet ediliyorsunuz.<br><br>'Would like' = 'want' in very polite English!"
        },
        choices: [
          {
            text: "Yes, Don. I will remember. 'The Don would like to invite you to dinner.'",
            tr: "✓ Doğru! Hem söz verdin ('I will remember') hem de kalıbı tekrar ettin. Bu Don'a güven verir. 'Will' = gelecekte yapacağını söz verirken kullanılır.",
            hint: "✓ Confirms + repeats the phrase",
            correct: true
          },
          {
            text: "Yes, I know. Don wants Barzini to come eat with him.",
            tr: "✗ Anlam doğru ama dil çok kaba. 'Wants Barzini to come eat' yerine 'would like to invite' kullanmak çok daha kibar ve resmi. Bu Don'un seninle gönderdiği mesajdır.",
            hint: "✗ Meaning ok but language too casual",
            correct: false
          },
          {
            text: "Sure. I go now.",
            tr: "✗ İki hata: 'Sure' çok rahat ve saygısız. 'I go now' yanlış — gideceksen 'I will go now' veya 'I am going now' olmalı. Present Simple burada kullanılmaz.",
            hint: "✗ 'I go now' wrong tense + too casual",
            correct: false
          }
        ]
      },

      // SAHNE 3 — Barzini'nin ofisinde, kapıdaki adam
      {
        npc: { name: "Barzini's Guard", avatar: "💂", color: "#8090b0" },
        text: "Stop. Who are you and <em>what do you want</em>? Mr. Barzini is a busy man. You cannot just walk in here.",
        teach: {
          title: "🚪 Kendini Tanıtma — Introducing Yourself Formally",
          body: "Resmi bir ortamda kendini şöyle tanıtırsın:<br>• <b>My name is [isim]. I am here on behalf of [kişi].</b><br>&nbsp;&nbsp;Adım [isim]. [kişi] adına buradayım.<br>• <b>I have a message for Mr. Barzini.</b> — Bay Barzini için bir mesajım var.<br>• <b>on behalf of</b> = adına, yerine<br><br>Bu kalıbı ezberle — çok işine yarar!"
        },
        choices: [
          {
            text: "My name is [your name]. I am here on behalf of Don Corleone. I have a message for Mr. Barzini.",
            tr: "✓ Mükemmel! 'On behalf of' = adına. 'I have a message' = bir mesajım var. Bu cümle yapısı çok resmi ve etkili. Gurda iyi izlenim bıraktın.",
            hint: "✓ Formal self-introduction — perfect",
            correct: true
          },
          {
            text: "I am from Don Corleone. Tell Barzini I need to talk to him.",
            tr: "✗ 'Tell Barzini' çok emir kipinde. Gurda 'tell' diyemezsin, 'Please let Mr. Barzini know' veya 'I would like to speak with Mr. Barzini' demeliydin.",
            hint: "✗ 'Tell Barzini' — too commanding",
            correct: false
          },
          {
            text: "Don Corleone sent me. Where is Barzini?",
            tr: "✗ 'Where is Barzini?' garda sormak çok saygısız. Doğrudan isim kullanmak da sorunlu — 'Mr. Barzini' olmalı. Nerede olduğunu sorman gerekmez, o seni yanına alır.",
            hint: "✗ Asking 'where is Barzini?' is disrespectful",
            correct: false
          }
        ]
      },

      // SAHNE 4 — Barzini ile yüz yüze
      {
        npc: { name: "Barzini Capo", avatar: "🕴️", color: "#8090b0" },
        text: "Hmm. A messenger from Corleone. Interesting. I am <em>very busy</em> this week. Why should I come to this dinner? What is the reason?",
        teach: {
          title: "🍽️ Yemeğe Davet Etme — Giving a Reason",
          body: "Birini yemeğe davet ederken neden gelmesi gerektiğini şöyle açıklayabilirsin:<br>• <b>It would be a great opportunity to...</b> — ... için harika bir fırsat olur.<br>• <b>The Don wishes to discuss something important.</b> — Don önemli bir şeyi görüşmek istiyor.<br>• <b>It would be an honour for us.</b> — Bizim için bir onur olur.<br><br><b>Would</b> = koşullu/kibar gelecek. 'It would be' kalıbını çok kullan!"
        },
        choices: [
          {
            text: "Don Corleone wishes to discuss a matter of mutual benefit. It would be a great honour to have you at the table.",
            tr: "✓ Harika! 'Mutual benefit' = karşılıklı çıkar — çok güçlü bir davet gerekçesi. 'Would be a great honour' = kibar 'would' kullanımı. Barzini'yi ikna ettin.",
            hint: "✓ Mutual benefit + would be — perfect",
            correct: true
          },
          {
            text: "The Don wants to talk business with you. You should come.",
            tr: "✗ 'You should come' çok baskılı — biri seni yemeğe davet ederse 'you should come' demez, 'we would love to have you' der. 'Wants to talk business' da fazla kaba.",
            hint: "✗ 'You should come' — too pushy",
            correct: false
          },
          {
            text: "Don Corleone is inviting you. It is very important. Please come.",
            tr: "✗ Fazla basit ve biraz çaresiz görünüyor. 'Please come' telaşlı. Barzini'nin gelmek istemesini sağlayacak güçlü bir sebep sunmadın. Neden gelmeli?",
            hint: "✗ No strong reason given — sounds desperate",
            correct: false
          }
        ]
      },

      // SAHNE 5 — Barzini kabul ediyor, saat ayarlama
      {
        npc: { name: "Barzini Capo", avatar: "🕴️", color: "#8090b0" },
        text: "Mutual benefit... Corleone always has <em>interesting ideas</em>. Very well. I will come. But tell me — <em>what time</em> is the dinner? And where exactly?",
        teach: {
          title: "🕐 Saat ve Yer Bildirme — Telling Time and Location",
          body: "Saat ve yer bildirmek için:<br>• <b>The dinner is at eight o'clock in the evening.</b> — Yemek akşam sekizde.<br>• <b>It will be held at the Corleone residence.</b> — Corleone konutunda düzenlenecek.<br>• <b>at + saat</b> → at seven, at midnight, at noon<br>• <b>in the evening / morning / afternoon</b><br><br>Dikkat: 'in the evening' ama 'at night' — ikisi farklı!"
        },
        choices: [
          {
            text: "The dinner is at eight o'clock in the evening. It will be held at the Corleone residence on Fifth Street.",
            tr: "✓ Mükemmel! 'At eight o'clock' saat belirtme. 'In the evening' = akşam. 'Will be held' = düzenlenecek (pasif gelecek). Tüm bilgileri temiz ve net verdin.",
            hint: "✓ At + time + in the evening — correct",
            correct: true
          },
          {
            text: "Eight PM. At Don's house.",
            tr: "✗ Teknik olarak doğru ama çok kısa ve kaba. 'At Don's house' yerine 'at the Corleone residence' daha resmi. Barzini önemli bir adam — cevabın en az iki tam cümle olmalı.",
            hint: "✗ Too short and informal",
            correct: false
          },
          {
            text: "In the eight evening at the Don place on Fifth.",
            tr: "✗ Birkaç dilbilgisi hatası: 'In the eight evening' yanlış — 'at eight in the evening' olmalı. 'The Don place' de yanlış — 'the Don's place' veya 'the Corleone residence'.",
            hint: "✗ 'In the eight evening' — wrong preposition",
            correct: false
          }
        ]
      },

      // SAHNE 6 — Geri dönüş, Don'a rapor
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "You are back. Good. Tell me — <em>did Barzini accept the invitation?</em> What did he say exactly?",
        teach: {
          title: "📣 Haber Vermek — Reporting Back",
          body: "Birinden aldığın mesajı aktarırken:<br>• <b>He said that he would come.</b> — Geleceğini söyledi.<br>• <b>He accepted the invitation.</b> — Daveti kabul etti.<br>• <b>He agreed to attend the dinner.</b> — Yemeğe katılmayı kabul etti.<br><br><b>Reported Speech (Dolaylı Anlatım):</b><br>'I will come' → He said that <b>he would</b> come.<br>'I accept' → He said that <b>he accepted</b>."
        },
        choices: [
          {
            text: "Yes, Don. He accepted the invitation. He said that he would come at eight o'clock. He seemed interested in the discussion.",
            tr: "✓ Harika rapor! 'He accepted' = kabul etti. 'He said that he would come' = dolaylı anlatım (reported speech) doğru kullanıldı. 'He seemed interested' = ilgili göründü. Don memnun oldu.",
            hint: "✓ Reported speech + full report",
            correct: true
          },
          {
            text: "Yes. Barzini is coming. He will come at eight.",
            tr: "✗ Bilgi doğru ama rapor çok kısa. Don daha fazla detay bekler: Barzini nasıl tepki verdi? Ne dedi? Dilbilgisi olarak 'He will come' yerine 'He said he would come' daha doğru reported speech.",
            hint: "✗ Too brief — Don needs more details",
            correct: false
          },
          {
            text: "Barzini said yes. He comes tonight at eight.",
            tr: "✗ 'He comes tonight' yanlış zaman — geleceği belirtmek için 'He is coming tonight' veya 'He will come tonight' olmalı. Present Simple burada geleceği anlatmaz.",
            hint: "✗ 'He comes tonight' — wrong tense for future",
            correct: false
          }
        ]
      }

    ],
    result: {
      icon: "🤝",
      rank: "ASSOCIATE",
      color: "#8a8060",
      message: "The Don leans back in his chair and smiles — slowly. 'You did well,' he says quietly. 'You spoke with respect. You delivered the message correctly. And you came back with the right answer.' He stands, extends his hand. 'Welcome to the family, Associate.'",
      italian: '"L\'uomo d\'onore — the man of honour."'
    }
  },

  // ─── GÖREV 2: Barzini Toplantısı ─────────────────────────────
  {
    id: 2,
    title: "Mission 2: The Dinner Table",
    location: "CORLEONE RESIDENCE — 8 PM",
    rank_unlock: 'mafia_soldier',
    scenes: [
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Barzini has arrived. Before we sit, I need you to <em>greet him properly</em>. In this family, first impressions matter. Go to him. Introduce yourself.",
        teach: {
          title: "🤝 Tanışma — Meeting Someone for the First Time",
          body: "Resmi tanışma kalıpları:<br>• <b>It is a pleasure to meet you, Mr. Barzini.</b> — Tanıştığımıza memnun oldum.<br>• <b>I have heard a great deal about you.</b> — Sizin hakkınızda çok şey duydum.<br>• <b>Please allow me to introduce myself.</b> — Kendimi tanıtmama izin verin.<br><br>'Nice to meet you' günlük — resmi ortamda 'It is a pleasure' daha güçlü!"
        },
        choices: [
          {
            text: "It is a pleasure to meet you, Mr. Barzini. I have heard a great deal about you.",
            tr: "✓ Mükemmel! 'It is a pleasure' = resmi tanışma ifadesi. 'I have heard a great deal about you' = Present Perfect, geçmişten günümüze duyduklarını anlatıyor. Barzini etkilendi.",
            hint: "✓ Formal greeting — excellent",
            correct: true
          },
          {
            text: "Hello Mr. Barzini. Nice to meet you.",
            tr: "✗ 'Nice to meet you' çok günlük. Bu önemli bir iş yemeği — 'It is a pleasure to meet you' çok daha uygun. 'Hello' da fazla samimi.",
            hint: "✗ 'Nice to meet you' too casual here",
            correct: false
          },
          {
            text: "Hey. I am the Don's man. You know why we are here.",
            tr: "✗ 'Hey' çok kaba. 'The Don's man' güvenilir bir tanıtım değil. Ve 'you know why we are here' tehditkâr duyuluyor — bu bir yemek daveti, sorgu değil.",
            hint: "✗ 'Hey' + threatening tone — terrible",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Barzini Capo", avatar: "🕴️", color: "#8090b0" },
        text: "Likewise. You work for Corleone? How long have you <em>been with the family</em>?",
        teach: {
          title: "⏳ Present Perfect — Ne Kadar Süredir?",
          body: "'How long have you been...' sorusuna cevap verirken:<br>• <b>I have been with the family for two years.</b> — İki yıldır ailedeyim.<br>• <b>I have worked for the Don since last year.</b> — Geçen yıldan beri Don için çalışıyorum.<br><br><b>for</b> = bir süre için (for two years, for a month)<br><b>since</b> = belirli bir andan beri (since 2020, since Monday)<br><br>Bu ikisini karıştırma!"
        },
        choices: [
          {
            text: "I have been with the family for about a year now. I am still learning, but I am committed.",
            tr: "✓ Doğru! 'Have been... for a year' = Present Perfect + for. 'I am still learning' = dürüstlük. 'I am committed' = bağlılığını gösteriyor. Barzini bunu saygıyla karşıladı.",
            hint: "✓ Present Perfect + 'for' — correct",
            correct: true
          },
          {
            text: "I work here since one year ago.",
            tr: "✗ İki hata: 'I work here' Present Simple — burada Present Perfect kullanılmalı: 'I have worked here'. 'Since one year ago' yanlış — 'since last year' veya 'for one year' olmalı.",
            hint: "✗ 'I work since' — use Present Perfect",
            correct: false
          },
          {
            text: "Long enough. Why do you ask?",
            tr: "✗ 'Long enough' muğlak ve kibar değil. 'Why do you ask?' ise savunmacı ve şüpheci görünüyor. Barzini samimi bir soru sordu — samimi cevap ver.",
            hint: "✗ Evasive + suspicious tone",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Enough small talk. Sit, both of you. Now — Mr. Barzini, last year we had a <em>disagreement</em> about the northern territory. I believe both of our families <em>suffered</em> because of this. What do you think?",
        teach: {
          title: "🗣️ Fikirlerinizi İfade Etme — Expressing Opinions",
          body: "Görüşünüzü kibarca ifade etmek için:<br>• <b>I think / I believe / In my opinion...</b> — Bence / Bana göre...<br>• <b>I agree with you on that point.</b> — O konuda sizi hak veriyorum.<br>• <b>I understand your point, however...</b> — Noktanızı anlıyorum, ancak...<br>• <b>You make a valid point.</b> — Geçerli bir nokta söylüyorsunuz.<br><br>Müzakereda 'I believe' ile başlamak çok güçlü!"
        },
        choices: [
          {
            text: "I believe you make a valid point, Don. Both sides lost something. Perhaps it is time to find a better solution.",
            tr: "✓ Harika! 'You make a valid point' = geçerli bir nokta söylüyorsunuz. 'Both sides lost' = nesnel değerlendirme. 'Perhaps it is time' = kibar öneri. Barzini ve Don ikisi de seni dinliyor.",
            hint: "✓ Valid point + balanced view",
            correct: true
          },
          {
            text: "Yes, you are right. We suffered a lot because of Barzini.",
            tr: "✗ 'We suffered because of Barzini' — bu masada Barzini var! Birini suçlamak müzakereyi bitirir. Tarafsız ve yapıcı konuşmak gerekiyor.",
            hint: "✗ Blaming Barzini at his face — disaster",
            correct: false
          },
          {
            text: "It is not our fault. Barzini should say sorry.",
            tr: "✗ 'Should say sorry' çok çocuksu. 'It is not our fault' savunmacı. Bu müzakere masası — kim haklı kim haksız değil, nasıl ilerleyeceğiz diye konuşulur.",
            hint: "✗ Blame + demanding apology — wrong approach",
            correct: false
          }
        ]
      }
    ],
    result: {
      icon: "🔫",
      rank: "SOLDIER",
      color: "#c89040",
      message: "Barzini puts down his fork and looks at you with something like respect. 'Your man speaks well, Corleone,' he says. The Don nods. 'He is learning.' That evening, you leave the dinner as a Soldier. Words have power — and tonight, yours had it.",
      italian: '"Un vero soldato — a true soldier."'
    }
  },

  // ─── GÖREV 3: Aile Konseyi ────────────────────────────────────
  {
    id: 3,
    title: "Mission 3: The Council",
    location: "THE FAMILY COUNCIL — LITTLE ITALY",
    rank_unlock: 'mafia_capo',
    scenes: [
      {
        npc: { name: "Consigliere Tom", avatar: "👔", color: "#90a0c0" },
        text: "Three families want our territory. The Don has asked for your advice. Speak clearly.",
        choices: [
          {
            text: "If we allow all three families in, we will lose control of the streets within six months.",
            tr: "✓ Birinci koşul cümlesi (First Conditional) — 'If + Present Simple, will + V1'. Gerçek ve olası bir gelecek senaryosu. Net ve mantıklı analiz.",
            hint: "✓ First Conditional — real future",
            correct: true
          },
          {
            text: "If we would allow them, we were losing control of streets.",
            tr: "✗ Karışık koşul yapısı. Birinci koşulda 'if' cümlesinde 'would' kullanılmaz. 'If we allow... we will lose' olmalı.",
            hint: "✗ Wrong conditional forms",
            correct: false
          },
          {
            text: "We should allowing them because it is better for everyone maybe.",
            tr: "✗ 'Should allowing' yanlış — 'should allow'. 'Maybe' otorite eksikliği gösterir. Konsey'de kararlı konuşmak gerekir.",
            hint: "✗ 'should allowing' + weak 'maybe'",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "And if we refuse all three — we make three enemies. There must be a <em>smarter way</em>.",
        choices: [
          {
            text: "We could negotiate with one family privately, offer limited rights, and use that to divide the other two.",
            tr: "✓ 'Could' — kibar öneri kipi. Stratejik düşünme: bir aileyi kullanarak diğer ikisini bölmek. Consigliere gibi düşünmek.",
            hint: "✓ 'Could' for suggestion",
            correct: true
          },
          {
            text: "We must to refuse all of them because they will take advantage of us.",
            tr: "✗ 'Must to refuse' yanlış — 'must refuse' (no 'to' after must).",
            hint: "✗ 'must to' — no infinitive after modal",
            correct: false
          },
          {
            text: "I think maybe we can try to talk with one of them and see what happens.",
            tr: "✗ 'I think maybe' + 'see what happens' — çok belirsiz. Konsey'de somut plan sunmak gerekir.",
            hint: "✗ Too vague for a council",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Good plan. But if the chosen family <em>breaks the agreement</em>, what then?",
        choices: [
          {
            text: "Should they betray us, we withdraw all cooperation immediately and make an example of their leadership.",
            tr: "✓ Ters çevrilmiş koşul (Inverted Conditional) — ileri düzey resmi İngilizce. 'Should they betray' = 'If they should betray'. Çok etkileyici.",
            hint: "✓ Inverted conditional — advanced",
            correct: true
          },
          {
            text: "If they will break it, we are going to punish them very badly.",
            tr: "✗ 'If' cümlesinde 'will' kullanılmaz — bu temel bir kural. 'If they break it, we will punish them' olmalı.",
            hint: "✗ 'will' in if-clause",
            correct: false
          },
          {
            text: "When they betray us we punish them and everyone will see it.",
            tr: "✗ 'When' ihaneti kesin bir gerçek gibi sunar — 'if' daha uygun.",
            hint: "✗ 'when' assumes certainty",
            correct: false
          }
        ]
      }
    ],
    result: {
      icon: "💼",
      rank: "CAPO",
      color: "#d4a030",
      message: "The Don announces: you are now a Capo. The room looks at you differently. Your words carry weight.",
      italian: '"Il Capo ha parlato."'
    }
  },

  // ─── GÖREV 4: Müzakere ───────────────────────────────────────
  {
    id: 4,
    title: "Mission 4: The Negotiation",
    location: "PRIVATE DINING ROOM — MANHATTAN",
    rank_unlock: 'mafia_consigliere',
    scenes: [
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Three men want the same territory. I need you to mediate. Find a solution that <em>keeps the peace</em>.",
        choices: [
          {
            text: "If each family takes a different district, we avoid conflict and all three benefit.",
            tr: "✓ Birinci koşul cümlesi — pratik çözüm, herkesin kazandığı senaryo.",
            hint: "✓ First conditional — practical",
            correct: true
          },
          {
            text: "We should giving each family something so they will be happy.",
            tr: "✗ 'Should giving' yanlış — 'should give'.",
            hint: "✗ 'should giving' — wrong form",
            correct: false
          },
          {
            text: "Maybe if we would split it, everyone is satisfied probably.",
            tr: "✗ 'Maybe' + 'probably' + yanlış koşul yapısı = üç zayıflık.",
            hint: "✗ Triple weakness",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Rival Capo", avatar: "🕴️", color: "#9090b0" },
        text: "Why trust your arrangement? The last deal your family made — it <em>wasn't honoured</em>.",
        choices: [
          {
            text: "That was then. This arrangement is backed by the Don's word — and his word has never been broken.",
            tr: "✓ 'That was then' — geçmişi kabul edip ileri bakış. 'Has never been broken' — Present Perfect ile güçlü güvence.",
            hint: "✓ Past vs present — authoritative",
            correct: true
          },
          {
            text: "Those things happened but it is not relevant now for this situation.",
            tr: "✗ Savunmacı ton. 'It is not relevant' — endişeyi ciddiye almadan geçiştirme.",
            hint: "✗ Dismissive — not reassuring",
            correct: false
          },
          {
            text: "You should not bring up old things. We are talking about today.",
            tr: "✗ 'You should not bring up' — karşı tarafı azarlama. Müzakereda güveni yıkar.",
            hint: "✗ Scolding — breaks trust",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Well done. Now write the terms. Be precise — <em>a contract must be clear</em>.",
        choices: [
          {
            text: "Each family will operate exclusively within their assigned territory. Any violation will be treated as a declaration of war.",
            tr: "✓ 'Will operate exclusively' — kesin gelecek taahhüdü. 'Declaration of war' — net sonuç. Hukuki dile yakın, resmi ve bağlayıcı.",
            hint: "✓ 'will' for formal terms",
            correct: true
          },
          {
            text: "The families are going to stay in their areas and if they don't there are problems.",
            tr: "✗ 'There are problems' — çok belirsiz. Sözleşmede sonuçlar net olmalı.",
            hint: "✗ 'problems' — too vague",
            correct: false
          },
          {
            text: "Everyone must to stay in their own place or the Don gets angry.",
            tr: "✗ 'Must to stay' yanlış — 'must stay'. 'The Don gets angry' çok gayri resmi.",
            hint: "✗ 'must to' + informal",
            correct: false
          }
        ]
      }
    ],
    result: {
      icon: "🕵️",
      rank: "CONSIGLIERE",
      color: "#9060d0",
      message: "'You have the mind of a consigliere,' the Don says. The three families sign. You have earned the title.",
      italian: '"Il consigliere del Don."'
    }
  },

  // ─── GÖREV 5: İhanet ─────────────────────────────────────────
  {
    id: 5,
    title: "Mission 5: The Betrayal",
    location: "ABANDONED WAREHOUSE — NEW JERSEY",
    rank_unlock: 'mafia_don',
    scenes: [
      {
        npc: { name: "Traitor", avatar: "😤", color: "#c04040" },
        text: "I know what you did for the Don. And I know something he doesn't. <em>Help me</em> — or I'll make sure everyone hears it.",
        choices: [
          {
            text: "You've made a serious mistake coming to me with this. I suggest you reconsider — quickly.",
            tr: "✓ 'You've made' — Present Perfect, doğrudan sonuç. 'I suggest you reconsider' — kibar ama tehditkar. Soğukkanlılık ve güç bir arada.",
            hint: "✓ Present Perfect — calm threat",
            correct: true
          },
          {
            text: "I will not help you and you should be scared of what happens next.",
            tr: "✗ 'You should be scared' — duygusal ve açık bir tehdit. Güçlü insanlar tehdit etmez, ima eder.",
            hint: "✗ Emotional — reveals weakness",
            correct: false
          },
          {
            text: "You are making a big error right now and I'm not happy about this.",
            tr: "✗ 'I'm not happy' çok kişisel ve çocuksu. Lider bu durumda duygularını değil, sonuçları konuşur.",
            hint: "✗ 'I'm not happy' — too personal",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Consigliere Tom", avatar: "👔", color: "#90a0c0" },
        text: "The Don heard about this man. How did you <em>handle it</em>?",
        choices: [
          {
            text: "He was offered a choice. He made the wrong one. It won't be a problem anymore.",
            tr: "✓ Pasif yapı: 'He was offered' — sorumluluğu gizler, profesyonellik gösterir. 'It won't be a problem' — kesin ve temiz.",
            hint: "✓ Passive — professional discretion",
            correct: true
          },
          {
            text: "I talked to him and I think he understood what I was saying to him.",
            tr: "✗ 'I think he understood' — emin olmamak zayıflık. Net olmayan yanıt güven sarsar.",
            hint: "✗ 'I think' — uncertain outcome",
            correct: false
          },
          {
            text: "I handled it. He is not here anymore and that is all you need to know.",
            tr: "✗ 'That is all you need to know' — Consigliere Tom'a saygısızlık. Hiyerarşiye uymayan bir yanıt.",
            hint: "✗ Disrespectful to hierarchy",
            correct: false
          }
        ]
      },
      {
        npc: { name: "Don Corleone", avatar: "👴", color: "#c8a060" },
        text: "Good. You have learned the most important lesson. In this business, <em>silence is power</em>. Do you understand?",
        choices: [
          {
            text: "I understand, Don. A man who speaks too much reveals too much. I have nothing more to say.",
            tr: "✓ Don'un mesajını kendi sözlerinle tekrar etmek, anlayışı kanıtlar. 'I have nothing more to say' — sözü eylemin ta kendisiyle bitirmek. Mükemmel.",
            hint: "✓ Mirrors wisdom — then silence",
            correct: true
          },
          {
            text: "Yes Don, I understand about silence and I will always remember this lesson.",
            tr: "✗ 'I will always remember' — çok fazla kelime. Suskunluk dersi verilirken uzun konuşmak ironidir.",
            hint: "✗ Over-explaining silence",
            correct: false
          },
          {
            text: "Of course. I am always silent when it is the best option for everyone.",
            tr: "✗ 'When it is the best option' — koşullu ifade, suskunluğun her zaman değil bazen yapıldığını ima eder.",
            hint: "✗ Conditional weakens the message",
            correct: false
          }
        ]
      }
    ],
    result: {
      icon: "👑",
      rank: "DON",
      color: "#d060a0",
      message: "The Don looks at you with something close to pride. 'You are ready,' he says. You have become a Don.",
      italian: '"Il Don ha parlato."'
    }
  }

  // ─── BURAYA YENİ GÖREV EKLEYEBİLİRSİNİZ ─────────────────────
  // Virgül koyup yukarıdaki yapıyı kopyalayın.
  // Her sahneye 'teach' alanı ekleyebilirsiniz:
  // teach: { title: "Başlık", body: "HTML içerik" }
];
