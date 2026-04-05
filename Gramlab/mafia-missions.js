// ═══════════════════════════════════════════════════════════════
// THE FAMILY — MAFIA MISSIONS
// Bu dosyayı düzenleyerek görevleri özelleştirebilirsiniz.
//
// YAPI:
// {
//   id: görev numarası (1,2,3...),
//   title: "Mission X: Başlık",
//   location: "YER — ZAMAN",
//   rank_unlock: 'mafia_associate' | 'mafia_soldier' | 'mafia_capo' | 'mafia_consigliere' | 'mafia_don' | 'mafia_godfather',
//   scenes: [
//     {
//       npc: { name: "İsim", avatar: "emoji", color: "#renk" },
//       text: "NPC diyaloğu. <em>vurgulanan kelime</em>",
//       choices: [
//         {
//           text: "Oyuncu cevabı (İngilizce)",
//           tr: "Türkçe açıklama — neden doğru/yanlış?",
//           hint: "✓/✗ Dilbilgisi notu",
//           correct: true | false
//         },
//       ]
//     }
//   ],
//   result: {
//     icon: "emoji",
//     rank: "RÜTBE ADI",
//     color: "#renk",
//     message: "Tamamlama metni",
//     italian: '"İtalyanca söz."'
//   }
// }
// ═══════════════════════════════════════════════════════════════

var MAFIA_MISSIONS = [
  // ─── GÖREV 1: İlk Toplantı ───────────────────────────────────
  {
    id:1, title:"Mission 1: The First Meeting",
    location:"THE DON'S OFFICE — MIDNIGHT", rank_unlock:'mafia_associate',
    scenes:[
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"So... you want to be part of <em>this family</em>. They say you are clever. But clever men die young in this business. Tell me — why should I trust you?",
        choices:[
          {
            text:"I have always been loyal, Don. I would never betray the family.",
            tr:"✓ 'I have always been' — Present Perfect kullanımı doğru. Geçmişten günümüze süregelen bir özelliği anlatır. Otoriteli ve güven verici bir yanıt.",
            hint:"✓ Present Perfect — lifelong truth",
            correct:true
          },
          {
            text:"I am loyal, Don. I never betrayed nobody.",
            tr:"✗ 'Never betrayed nobody' — çift olumsuz. İngilizcede 'never betrayed anybody' olmalı. Dilbilgisi hatası güven sarsar.",
            hint:"✗ Double negative",
            correct:false
          },
          {
            text:"Don, I'm being loyal since always.",
            tr:"✗ 'I'm being loyal' yanlış — durum fiilleri (be, know, love) Continuous formda kullanılmaz. 'I have always been loyal' olmalı.",
            hint:"✗ Stative verb in continuous",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"My consigliere tells me you <em>handled a problem</em> last week — quietly. Is that true?",
        choices:[
          {
            text:"Yes, Don. I took care of it. Nobody saw anything.",
            tr:"✓ 'I took care of it' — Simple Past doğru kullanım. Geçmişte tamamlanmış bir eylem. 'Nobody saw anything' da güçlü bir ifade.",
            hint:"✓ Simple Past — completed action",
            correct:true
          },
          {
            text:"Yes, Don. I have took care about it yesterday.",
            tr:"✗ 'Have took' yanlış — 'yesterday' gibi belirli zaman zarflarıyla Present Perfect kullanılmaz. 'I took care of it yesterday' olmalı.",
            hint:"✗ Present Perfect with 'yesterday'",
            correct:false
          },
          {
            text:"Yes, Don. I was taking care of it last week.",
            tr:"✗ Past Continuous devam eden eylemi anlatır. İş tamamlandıysa Simple Past kullanılır: 'I took care of it'.",
            hint:"✗ Past Continuous — suggests ongoing",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"I need someone to deliver a message to the Barzini family with <em>respect and authority</em>. Can you do this?",
        choices:[
          {
            text:"I can handle it, Don. I will make sure the message is delivered with respect.",
            tr:"✓ 'I can handle it' — güven ifadesi. 'Will make sure' anlık taahhüt için will kullanımı doğru. Resmi ve kararlı.",
            hint:"✓ Modal 'will' for commitment",
            correct:true
          },
          {
            text:"I am able to do it, Don. I am going to be respectful, maybe.",
            tr:"✗ 'Maybe' kelimesi kararsızlık gösterir. Don'a konuşurken tereddüt etmemek gerekir. 'Be going to' burada da zayıf kalır.",
            hint:"✗ 'Maybe' shows weakness",
            correct:false
          },
          {
            text:"I can to do it, Don. I will delivering the message.",
            tr:"✗ İki hata: 'can to do' yanlış — 'can' sonrası yalın mastar gelir. 'Will delivering' yanlış — 'will + V1': 'will deliver' olmalı.",
            hint:"✗ 'Can to' + 'will delivering'",
            correct:false
          }
        ]
      }
    ],
    result:{icon:"🤝",rank:"ASSOCIATE",color:"#8a8060",
      message:"The Don nods slowly. You have spoken with the right words — careful, loyal, strong. You are now part of the family. Welcome, Associate.",
      italian:'"L\'uomo d\'onore."'}
  },

  // ─── GÖREV 2: Barzini Toplantısı ─────────────────────────────
  {
    id:2, title:"Mission 2: The Barzini Meeting",
    location:"BARZINI WAREHOUSE — BROOKLYN", rank_unlock:'mafia_soldier',
    scenes:[
      {
        npc:{name:"Barzini Capo",avatar:"🕴️",color:"#8090b0"},
        text:"You come alone? That is either very brave or very stupid. Give me the message from Corleone. Choose your words carefully.",
        choices:[
          {
            text:"Don Corleone sends his respects. He wishes to discuss a matter of mutual benefit.",
            tr:"✓ Resmi üçüncü şahıs kullanımı. 'Sends his respects' — saygı ifadesi. 'Wishes to discuss' — zarif, diplomatik bir açılış.",
            hint:"✓ Formal register — third person",
            correct:true
          },
          {
            text:"The Don wants you to listen to what he says to you.",
            tr:"✗ 'Wants you to listen' doğrudan ve buyurucu. Müzakerede bu ton karşı tarafı savunmaya geçirir. Daha diplomatik dil gerekli.",
            hint:"✗ Too commanding",
            correct:false
          },
          {
            text:"Corleone is sending me because he is wanting to talk business.",
            tr:"✗ 'Is wanting' yanlış — 'want' durum fiilidir, Continuous kullanılmaz. 'He wants to talk business' olmalı.",
            hint:"✗ Stative verb in continuous",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Barzini Capo",avatar:"🕴️",color:"#8090b0"},
        text:"Last time we <em>trusted</em> the Corleone family, we lost territory. Why should this time be different?",
        choices:[
          {
            text:"Because both families have suffered enough. A war helps nobody — it destroys everything we built.",
            tr:"✓ 'Have suffered' — Present Perfect, ortak deneyime atıf. 'Destroys everything we built' — güçlü, mantıklı argüman. Doğru ton.",
            hint:"✓ Present Perfect — shared experience",
            correct:true
          },
          {
            text:"Because if you don't agree, there will be consequences for you.",
            tr:"✗ Tehdit dili müzakereyi bitirir. Karşı tarafı köşeye sıkıştırmak yerine ortak çıkarı vurgulamak gerekir.",
            hint:"✗ Threatening — ends negotiation",
            correct:false
          },
          {
            text:"Because the two families have been suffering since a long time.",
            tr:"✗ 'Since a long time' yanlış — 'since' belirli bir an için kullanılır. 'For a long time' olmalı. Dilbilgisi hatası güvenilirliği zedeler.",
            hint:"✗ 'since' vs 'for'",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Barzini Capo",avatar:"🕴️",color:"#8090b0"},
        text:"You speak well. What does Corleone offer for <em>our cooperation</em>?",
        choices:[
          {
            text:"Don Corleone is prepared to offer safe passage through his territory and a fair share of the northern docks.",
            tr:"✓ 'Is prepared to offer' — resmi teklif yapısı, ciddiyeti gösterir. Somut teklifler: güvenli geçiş + kuzey iskelesi payı.",
            hint:"✓ 'Is prepared to' — formal offer",
            correct:true
          },
          {
            text:"He will give you some stuff from the north docks if you cooperate.",
            tr:"✗ 'Some stuff' belirsiz ve saygısız. Müzakerede somut ve değerli bir teklif sunmak gerekir. Bu dil Don'u küçük düşürür.",
            hint:"✗ 'Some stuff' — too vague",
            correct:false
          },
          {
            text:"Corleone he offers you the docks and maybe other things too.",
            tr:"✗ İki hata: 'Corleone he' — çift özne. 'Maybe other things' — belirsizlik zayıflık işareti. Her ikisi de güvenilirliği düşürür.",
            hint:"✗ Double subject + vague",
            correct:false
          }
        ]
      }
    ],
    result:{icon:"🔫",rank:"SOLDIER",color:"#c89040",
      message:"The Barzini Capo extends his hand. You delivered the message with skill. Back at the Don's house, you are welcomed as a Soldier of the family.",
      italian:'"Un vero soldato."'}
  },

  // ─── GÖREV 3: Aile Konseyi ────────────────────────────────────
  {
    id:3, title:"Mission 3: The Council",
    location:"THE FAMILY COUNCIL — LITTLE ITALY", rank_unlock:'mafia_capo',
    scenes:[
      {
        npc:{name:"Consigliere Tom",avatar:"👔",color:"#90a0c0"},
        text:"Three families want our territory. The Don asked for your advice. Speak clearly.",
        choices:[
          {
            text:"If we allow all three families in, we will lose control of the streets within six months.",
            tr:"✓ Birinci koşul cümlesi (First Conditional) — 'If + Present Simple, will + V1'. Gerçek ve olası bir gelecek senaryosu. Net ve mantıklı analiz.",
            hint:"✓ First Conditional — real future",
            correct:true
          },
          {
            text:"If we would allow them, we were losing control of streets.",
            tr:"✗ Karışık koşul yapısı. Birinci koşulda 'if' cümlesinde 'would' kullanılmaz. 'If we allow... we will lose' olmalı.",
            hint:"✗ Wrong conditional forms",
            correct:false
          },
          {
            text:"We should allowing them because it is better for everyone maybe.",
            tr:"✗ 'Should allowing' yanlış — 'should + V1': 'should allow'. 'Maybe' otorite eksikliği gösterir. Konsey'de kararlı konuşmak gerekir.",
            hint:"✗ 'should allowing' + weak 'maybe'",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"And if we refuse all three — we make three enemies. There must be a <em>smarter way</em>.",
        choices:[
          {
            text:"We could negotiate with one family privately, offer limited rights, and use that to divide the other two.",
            tr:"✓ 'Could' — kibar öneri kipi. Stratejik düşünme: bir aileyi kullanarak diğer ikisini bölmek. Consigliere gibi düşünmek.",
            hint:"✓ 'Could' for suggestion",
            correct:true
          },
          {
            text:"We must to refuse all of them because they will take advantage of us.",
            tr:"✗ 'Must to refuse' yanlış — modal fiillerden sonra 'to' gelmez: 'must refuse'. Ayrıca üçünü reddetmek Don'un dediği gibi akıllıca değil.",
            hint:"✗ 'must to' — no infinitive after modal",
            correct:false
          },
          {
            text:"I think maybe we can try to talk with one of them and see what happens.",
            tr:"✗ 'I think maybe' + 'see what happens' — çok belirsiz. Konsey'de somut plan sunmak gerekir. Bu yanıt liderlik eksikliği gösterir.",
            hint:"✗ Too vague for a council",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"Good plan. But if the chosen family <em>breaks the agreement</em>, what then?",
        choices:[
          {
            text:"Should they betray us, we withdraw all cooperation immediately and make an example of their leadership.",
            tr:"✓ Ters çevrilmiş koşul (Inverted Conditional) — ileri düzey resmi İngilizce. 'Should they betray' = 'If they should betray'. Çok etkileyici.",
            hint:"✓ Inverted conditional — advanced",
            correct:true
          },
          {
            text:"If they will break it, we are going to punish them very badly.",
            tr:"✗ 'If' cümlesinde 'will' kullanılmaz — bu temel bir kural. 'If they break it, we will punish them' olmalı.",
            hint:"✗ 'will' in if-clause",
            correct:false
          },
          {
            text:"When they betray us we punish them and everyone will see it.",
            tr:"✗ 'When' ihaneti kesin bir gerçek gibi sunar — 'if' daha uygun. Ayrıca 'we punish them' — bu koşulda Simple Present garip durur.",
            hint:"✗ 'when' assumes certainty",
            correct:false
          }
        ]
      }
    ],
    result:{icon:"💼",rank:"CAPO",color:"#d4a030",
      message:"The Don announces: you are now a Capo. The room looks at you differently. Your words carry weight.",
      italian:'"Il Capo ha parlato."'}
  },

  // ─── GÖREV 4: Müzakere ───────────────────────────────────────
  {
    id:4, title:"Mission 4: The Negotiation",
    location:"PRIVATE DINING ROOM — MANHATTAN", rank_unlock:'mafia_consigliere',
    scenes:[
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"Three men want the same territory. I need you to mediate. Find a solution that <em>keeps the peace</em>.",
        choices:[
          {
            text:"If each family takes a different district, we avoid conflict and all three benefit.",
            tr:"✓ Birinci koşul cümlesi — pratik çözüm, herkesin kazandığı senaryo. 'Avoid conflict' ve 'all three benefit' — dengeli ve akıllıca.",
            hint:"✓ First conditional — practical",
            correct:true
          },
          {
            text:"We should giving each family something so they will be happy.",
            tr:"✗ 'Should giving' yanlış — 'should give'. Ayrıca 'so they will be happy' çok belirsiz — ne verilecek? Consigliere somut konuşur.",
            hint:"✗ 'should giving' — wrong form",
            correct:false
          },
          {
            text:"Maybe if we would split it, everyone is satisfied probably.",
            tr:"✗ 'Maybe' + 'probably' + yanlış koşul yapısı = üç zayıflık bir arada. 'If we would split' yanlış, 'if we split' olmalı.",
            hint:"✗ Triple weakness",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Rival Capo",avatar:"🕴️",color:"#9090b0"},
        text:"Why trust your arrangement? The last deal your family made — it <em>wasn't honored</em>.",
        choices:[
          {
            text:"That was then. This arrangement is backed by the Don's word — and his word has never been broken.",
            tr:"✓ 'That was then' — geçmişi kabul edip ileri bakış. 'Has never been broken' — Present Perfect ile güçlü bir güvence. Diplomatik ama kararlı.",
            hint:"✓ Past vs present — authoritative",
            correct:true
          },
          {
            text:"Those things happened but it is not relevant now for this situation.",
            tr:"✗ Savunmacı ton. 'It is not relevant' — endişeyi ciddiye almadan geçiştirme. Karşı tarafı tatmin etmez.",
            hint:"✗ Dismissive — not reassuring",
            correct:false
          },
          {
            text:"You should not bring up old things. We are talking about today.",
            tr:"✗ 'You should not bring up' — karşı tarafı azarlama. Bu müzakerede çok saldırgan. Güveni yıkar.",
            hint:"✗ Scolding — breaks trust",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"Well done. Now write the terms. Be precise — <em>a contract must be clear</em>.",
        choices:[
          {
            text:"Each family will operate exclusively within their assigned territory. Any violation will be treated as a declaration of war.",
            tr:"✓ 'Will operate exclusively' — kesin gelecek taahhüdü. 'Declaration of war' — net sonuç. Hukuki dile yakın, resmi ve bağlayıcı.",
            hint:"✓ 'will' for formal terms",
            correct:true
          },
          {
            text:"The families are going to stay in their areas and if they don't there are problems.",
            tr:"✗ 'There are problems' — çok belirsiz. Sözleşmede sonuçlar net olmalı. 'Be going to' da burada zayıf kalır.",
            hint:"✗ 'problems' — too vague",
            correct:false
          },
          {
            text:"Everyone must to stay in their own place or the Don gets angry.",
            tr:"✗ 'Must to stay' yanlış — 'must stay'. 'The Don gets angry' çok çocuksu ve gayri resmi. Sözleşme dili bu olamaz.",
            hint:"✗ 'must to' + informal",
            correct:false
          }
        ]
      }
    ],
    result:{icon:"🕵️",rank:"CONSIGLIERE",color:"#9060d0",
      message:"'You have the mind of a consigliere,' the Don says. The three families sign. You have earned the title.",
      italian:'"Il consigliere del Don."'}
  },

  // ─── GÖREV 5: İhanet ─────────────────────────────────────────
  {
    id:5, title:"Mission 5: The Betrayal",
    location:"ABANDONED WAREHOUSE — NEW JERSEY", rank_unlock:'mafia_don',
    scenes:[
      {
        npc:{name:"Traitor",avatar:"😤",color:"#c04040"},
        text:"I know what you did for the Don. And I know something he doesn't. <em>Help me</em> — or I'll make sure everyone hears it.",
        choices:[
          {
            text:"You've made a serious mistake coming to me with this. I suggest you reconsider — quickly.",
            tr:"✓ 'You've made' — Present Perfect, doğrudan sonuç. 'I suggest you reconsider' — kibar ama tehditkar. Soğukkanlılık ve güç bir arada.",
            hint:"✓ Present Perfect — calm threat",
            correct:true
          },
          {
            text:"I will not help you and you should be scared of what happens next.",
            tr:"✗ 'You should be scared' — duygusal ve açık bir tehdit. Güçlü insanlar tehdit etmez, ima eder. Bu yanıt zayıflık gösterir.",
            hint:"✗ Emotional — reveals weakness",
            correct:false
          },
          {
            text:"You are making a big error right now and I'm not happy about this.",
            tr:"✗ 'I'm not happy' çok kişisel ve çocuksu. Lider bu durumda duygularını değil, sonuçları konuşur.",
            hint:"✗ 'I'm not happy' — too personal",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Consigliere Tom",avatar:"👔",color:"#90a0c0"},
        text:"The Don heard about this man. How did you <em>handle it</em>?",
        choices:[
          {
            text:"He was offered a choice. He made the wrong one. It won't be a problem anymore.",
            tr:"✓ Pasif yapı: 'He was offered' — sorumluluğu gizler, profesyonellik gösterir. 'It won't be a problem' — kesin ve temiz. Consigliere gibi konuşmak.",
            hint:"✓ Passive — professional discretion",
            correct:true
          },
          {
            text:"I talked to him and I think he understood what I was saying to him.",
            tr:"✗ 'I think he understood' — emin olmamak zayıflık. Ayrıca 'what I was saying to him' gereksiz uzatma. Net olmayan yanıt güven sarsar.",
            hint:"✗ 'I think' — uncertain outcome",
            correct:false
          },
          {
            text:"I handled it. He is not here anymore and that is all you need to know.",
            tr:"✗ 'That is all you need to know' — Consigliere Tom'a saygısızlık. Hiyerarşiye uymayan bir yanıt. Kısa ama sert ve uygunsuz.",
            hint:"✗ Disrespectful to hierarchy",
            correct:false
          }
        ]
      },
      {
        npc:{name:"Don Corleone",avatar:"👴",color:"#c8a060"},
        text:"Good. You have learned the most important lesson. In this business, <em>silence is power</em>. Do you understand?",
        choices:[
          {
            text:"I understand, Don. A man who speaks too much reveals too much. I have nothing more to say.",
            tr:"✓ Don'un mesajını kendi sözlerinle tekrar etmek, anlayışı kanıtlar. 'I have nothing more to say' — sözü eylemin ta kendisiyle bitirmek. Mükemmel.",
            hint:"✓ Mirrors wisdom — then silence",
            correct:true
          },
          {
            text:"Yes Don, I understand about silence and I will always remember this lesson.",
            tr:"✗ 'I will always remember' — çok fazla kelime. Suskunluk dersi verilirken uzun konuşmak ironidir. Don'un gözünde değer kaybettirir.",
            hint:"✗ Over-explaining silence",
            correct:false
          },
          {
            text:"Of course. I am always silent when it is the best option for everyone.",
            tr:"✗ 'When it is the best option' — koşullu ifade, suskunluğun her zaman değil bazen yapıldığını ima eder. Don bunu fark eder.",
            hint:"✗ Conditional weakens the message",
            correct:false
          }
        ]
      }
    ],
    result:{icon:"👑",rank:"DON",color:"#d060a0",
      message:"The Don looks at you with something close to pride. 'You are ready,' he says. You have become a Don.",
      italian:'"Il Don ha parlato."'}
  }

  // ─── BURAYA YENİ GÖREV EKLEYEBİLİRSİNİZ ─────────────────────
  // Virgül koyup yukarıdaki yapıyı kopyalayın.
  // rank_unlock değerleri:
  //   'mafia_associate', 'mafia_soldier', 'mafia_capo',
  //   'mafia_consigliere', 'mafia_don', 'mafia_godfather'
];
