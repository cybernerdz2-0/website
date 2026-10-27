var COPY = {
  en: {
    greeting: "Hi, I'm Veronica, an AI voice assistant. You are here, and we welcome you. I'm here to help you through this guide.",
    note: "Voice: Veronica, an AI assistant, spoken by your own device.",
    title: "Ask Veronica",
    hint: "Ask about this page. Veronica answers only with the words written here.",
    placeholder: "What would you like to know?",
    button: "Ask",
    before: ["Good question. Here's what this page says:", "I'm glad you asked.", "Let's look at this together."],
    after: ["You're not alone in this.", "Take it one step at a time."],
    miss: "I'm sorry, I couldn't find that on this page. You can email help@cybrenerdz.com and a cybersecurity expert can help you."
  },
  es: {
    greeting: "Hola, soy Veronica, una asistente de voz con inteligencia artificial. Usted está aquí, y le damos la bienvenida. Estoy aquí para ayudarle a recorrer esta guía.",
    note: "Voz: Veronica, una asistente de inteligencia artificial, hablada por su propio dispositivo.",
    title: "Pregúntele a Veronica",
    hint: "Pregunte sobre esta página. Veronica responde solo con lo que está escrito aquí.",
    placeholder: "¿Qué le gustaría saber?",
    button: "Preguntar",
    before: ["Buena pregunta. Esto es lo que dice esta página:", "Me alegra que lo pregunte.", "Veámoslo juntos."],
    after: ["No está solo en esto.", "Vaya un paso a la vez."],
    miss: "Lo siento, no pude encontrar eso en esta página. Puede escribir a help@cybrenerdz.com y un experto en ciberseguridad puede ayudarle."
  },
  zh: {
    greeting: "您好，我是 Veronica，一名人工智能语音助手。您已经在这里了，我们欢迎您。我会陪着您看完这份指南。",
    note: "语音：Veronica，一位人工智能助手，由您自己的设备朗读。",
    title: "问问 Veronica",
    hint: "就本页提一个问题。Veronica 只根据这里写的内容回答。",
    placeholder: "您想了解什么？",
    button: "提问",
    before: ["问得好。这一页是这样说的：", "很高兴您问了这个问题。", "我们一起来看看。"],
    after: ["在这件事上，您不是一个人。", "一步一步来。"],
    miss: "对不起，我在这一页上没有找到。您可以发邮件到 help@cybrenerdz.com，网络安全专家可以帮助您。"
  },
  vi: {
    greeting: "Xin chào, tôi là Veronica, trợ lý giọng nói trí tuệ nhân tạo. Bạn đang ở đây, và chúng tôi chào đón bạn. Tôi ở đây để giúp bạn đi qua hướng dẫn này.",
    note: "Giọng nói: Veronica, trợ lý trí tuệ nhân tạo, do chính thiết bị của bạn đọc.",
    title: "Hỏi Veronica",
    hint: "Hãy hỏi về trang này. Veronica chỉ trả lời bằng những gì được viết ở đây.",
    placeholder: "Bạn muốn biết điều gì?",
    button: "Hỏi",
    before: ["Câu hỏi hay. Trang này nói thế này:", "Tôi vui vì bạn đã hỏi.", "Chúng ta cùng xem nhé."],
    after: ["Bạn không đơn độc trong chuyện này.", "Hãy đi từng bước một."],
    miss: "Tôi rất tiếc, tôi không tìm thấy điều đó trên trang này. Bạn có thể gửi thư tới help@cybrenerdz.com và một chuyên gia an ninh mạng có thể giúp bạn."
  },
  tl: {
    greeting: "Kumusta, ako si Veronica, isang AI voice assistant. Nandito ka, at malugod ka naming tinatanggap. Nandito ako para tulungan kang basahin ang gabay na ito.",
    note: "Boses: Veronica, isang AI assistant, binabasa ng sarili mong aparato.",
    title: "Tanungin si Veronica",
    hint: "Magtanong tungkol sa pahinang ito. Sumasagot si Veronica gamit lang ang nakasulat dito.",
    placeholder: "Ano ang gusto mong malaman?",
    button: "Tanong",
    before: ["Magandang tanong. Ito ang sinasabi ng pahinang ito:", "Natutuwa akong nagtanong ka.", "Tingnan natin ito nang magkasama."],
    after: ["Hindi ka nag-iisa rito.", "Isa-isang hakbang lang."],
    miss: "Paumanhin, hindi ko iyon makita sa pahinang ito. Maaari kang mag-email sa help@cybrenerdz.com at matutulungan ka ng isang eksperto sa cybersecurity."
  },
  ko: {
    greeting: "안녕하세요, 저는 인공지능 음성 도우미 Veronica예요. 이곳에 와 주셔서, 환영해요. 이 안내를 함께 살펴보도록 도와드릴게요.",
    note: "음성: 인공지능 도우미 Veronica, 당신의 기기에서 읽어 줍니다.",
    title: "Veronica에게 물어보기",
    hint: "이 페이지에 대해 물어보세요. Veronica는 여기에 적힌 내용만으로 답해요.",
    placeholder: "무엇을 알고 싶으신가요?",
    button: "물어보기",
    before: ["좋은 질문이에요. 이 페이지에는 이렇게 적혀 있어요:", "물어봐 주셔서 다행이에요.", "함께 살펴봐요."],
    after: ["이 일에서 혼자가 아니에요.", "한 단계씩 천천히 해요."],
    miss: "미안해요, 이 페이지에서 그걸 찾지 못했어요. help@cybrenerdz.com 으로 이메일을 보내시면 사이버보안 전문가가 도와드릴 수 있어요."
  },
  ar: {
    greeting: "مرحبًا، أنا Veronica، مساعدة صوتية تعمل بالذكاء الاصطناعي. أنت هنا، ونحن نرحب بك. أنا هنا لمساعدتك في هذا الدليل.",
    note: "الصوت: Veronica، مساعدة ذكاء اصطناعي، ينطقها جهازك أنت.",
    title: "اسأل Veronica",
    hint: "اسأل عن هذه الصفحة. تجيب Veronica فقط بما هو مكتوب هنا.",
    placeholder: "ماذا تود أن تعرف؟",
    button: "اسأل",
    before: ["سؤال جيد. هذا ما تقوله هذه الصفحة:", "يسعدني أنك سألت.", "لننظر إلى هذا معًا."],
    after: ["لست وحدك في هذا.", "خذ الأمر خطوة بخطوة."],
    miss: "آسفة، لم أجد ذلك في هذه الصفحة. يمكنك مراسلة help@cybrenerdz.com ويمكن لخبير في الأمن السيبراني مساعدتك."
  },
  ru: {
    greeting: "Здравствуйте, я Veronica, голосовой помощник с искусственным интеллектом. Вы здесь, и мы рады вам. Я здесь, чтобы помочь вам пройти это руководство.",
    note: "Голос: Veronica, помощник с искусственным интеллектом, его произносит ваше собственное устройство.",
    title: "Спросить Veronica",
    hint: "Задайте вопрос об этой странице. Veronica отвечает только тем, что здесь написано.",
    placeholder: "Что вы хотите узнать?",
    button: "Спросить",
    before: ["Хороший вопрос. Вот что сказано на этой странице:", "Я рада, что вы спросили.", "Давайте посмотрим вместе."],
    after: ["Вы в этом не одни.", "Двигайтесь по одному шагу."],
    miss: "Мне жаль, я не нашла это на странице. Вы можете написать на help@cybrenerdz.com, и эксперт по кибербезопасности сможет помочь."
  },
  fr: {
    greeting: "Bonjour, je suis Veronica, une assistante vocale dotée d'intelligence artificielle. Vous êtes ici, et nous vous accueillons. Je suis là pour vous aider à parcourir ce guide.",
    note: "Voix : Veronica, une assistante d'intelligence artificielle, lue par votre propre appareil.",
    title: "Demander à Veronica",
    hint: "Posez une question sur cette page. Veronica répond seulement avec ce qui est écrit ici.",
    placeholder: "Que souhaitez-vous savoir ?",
    button: "Demander",
    before: ["Bonne question. Voici ce que dit cette page :", "Je suis contente que vous ayez demandé.", "Regardons cela ensemble."],
    after: ["Vous n'êtes pas seul dans cette épreuve.", "Allez-y une étape à la fois."],
    miss: "Je suis désolée, je n'ai pas trouvé cela sur cette page. Vous pouvez écrire à help@cybrenerdz.com et un expert en cybersécurité pourra vous aider."
  },
  ht: {
    greeting: "Bonjou, mwen se Veronica, yon asistan vwa ak entèlijans atifisyèl. Ou la, epi nou akeyi ou. Mwen la pou ede ou nan gid sa a.",
    note: "Vwa: Veronica, yon asistan entèlijans atifisyèl, li pale sou pwòp aparèy ou.",
    title: "Mande Veronica",
    hint: "Poze yon kesyon sou paj sa a. Veronica reponn sèlman ak sa ki ekri la a.",
    placeholder: "Kisa ou ta renmen konnen?",
    button: "Mande",
    before: ["Bèl kesyon. Men sa paj sa a di:", "Mwen kontan ou mande.", "Ann gade sa ansanm."],
    after: ["Ou pa poukont ou nan sa.", "Pran sa yon etap alafwa."],
    miss: "Mwen regrèt, mwen pa jwenn sa sou paj sa a. Ou ka ekri bay help@cybrenerdz.com epi yon ekspè nan cybersecurity ka ede ou."
  },
  pt: {
    greeting: "Olá, eu sou Veronica, uma assistente de voz com inteligência artificial. Você está aqui, e nós lhe damos as boas-vindas. Estou aqui para ajudar você a percorrer este guia.",
    note: "Voz: Veronica, uma assistente de inteligência artificial, falada pelo seu próprio dispositivo.",
    title: "Pergunte à Veronica",
    hint: "Faça uma pergunta sobre esta página. A Veronica responde só com o que está escrito aqui.",
    placeholder: "O que você gostaria de saber?",
    button: "Perguntar",
    before: ["Boa pergunta. Eis o que esta página diz:", "Que bom que você perguntou.", "Vamos ver isso juntos."],
    after: ["Você não está sozinho nisso.", "Vá um passo de cada vez."],
    miss: "Sinto muito, não encontrei isso nesta página. Você pode escrever para help@cybrenerdz.com e um especialista em cibersegurança pode ajudar."
  },
  hi: {
    greeting: "नमस्ते, मैं Veronica हूँ, एक एआई आवाज़ सहायक। आप यहाँ हैं, और हम आपका स्वागत करते हैं। मैं इस गाइड में आपकी मदद करने के लिए यहाँ हूँ।",
    note: "आवाज़: Veronica, एक एआई सहायक, जिसे आपका अपना उपकरण बोलता है।",
    title: "Veronica से पूछें",
    hint: "इस पन्ने के बारे में पूछें। Veronica केवल यहाँ लिखी बात से जवाब देती है।",
    placeholder: "आप क्या जानना चाहते हैं?",
    button: "पूछें",
    before: ["अच्छा सवाल है। इस पन्ने पर यह लिखा है:", "आपने पूछा, इससे अच्छा लगा।", "चलिए इसे साथ में देखते हैं।"],
    after: ["इसमें आप अकेले नहीं हैं।", "एक-एक कदम चलें।"],
    miss: "माफ़ कीजिए, मुझे यह इस पन्ने पर नहीं मिला। आप help@cybrenerdz.com पर ईमेल कर सकते हैं, और एक साइबर सुरक्षा विशेषज्ञ आपकी मदद कर सकता है।"
  }
};

/* CyberNerdz 2.0: self-hosted, no network requests, no tracking. Checklists use localStorage on this device only. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  doc.querySelectorAll(".js-only").forEach(function (el) { el.hidden = false; });
  doc.querySelectorAll(".js-print").forEach(function (b) { b.addEventListener("click", function () { window.print(); }); });
  // Tickable checklists (localStorage only)
  var store = null; try { store = window.localStorage; } catch (e) { store = null; }
  doc.querySelectorAll("input.keep").forEach(function (cb, i) {
    var key = "cn2:" + (cb.getAttribute("data-key") || (root.lang + "-g" + i));
    if (store && store.getItem(key) === "1") cb.checked = true;
    cb.addEventListener("change", function () { if (store) { if (cb.checked) store.setItem(key, "1"); else store.removeItem(key); } });
  });
  // Self-check quiz (computed here; nothing sent)
  var quiz = doc.getElementById("quiz");
  if (quiz) {
    var out = quiz.querySelector(".quiz-out");
    quiz.addEventListener("change", function () {
      var yes = quiz.querySelectorAll('input[type=radio][value="1"]:checked').length;
      var answered = quiz.querySelectorAll("input[type=radio]:checked").length;
      if (!answered) return;
      var lvl = yes === 0 ? 0 : (yes === 1 ? 1 : 2);
      out.className = "quiz-out lvl" + lvl; out.textContent = out.getAttribute("data-r" + lvl);
    });
  }

  var lang = (root.lang || "en").toLowerCase().split("-")[0];
  var copy = COPY[lang] || COPY.en;

  /* Voice rank (on-device speechSynthesis only): same language, then English Jenny,
     then gentle female names, then a name containing Female, then any remaining voice.
     Natural / Neural / Online / Enhanced / Premium / Google win ties. Male names rank last. */
  var GENTLE = ["jenny", "aria", "ava", "samantha", "michelle", "allison", "emma", "karen", "moira", "tessa", "serena", "susan", "zira", "paulina", "monica", "elvira", "dalia", "denise", "amelie", "xiaoxiao", "huihui", "hoaimy", "sunhi", "salma", "svetlana", "francisca", "swara", "blessica"];
  var MALE = ["david", "mark", "guy", "ryan", "daniel", "alex", "fred", "jorge", "james", "george", "thomas", "ravi", "andrew", "brian", "eric", "christopher", "liam", "oliver", "william", "benjamin", "aaron", "arthur", "diego", "enrique", "juan", "pablo", "raul", "carlos", "ivan", "yuri", "pavel", "filip", "tony", "richard", "sean", "tom", "kangkang", "yunyang", "yunjian", "hemant", "madhur", "steffan", "naayf", "hamed", "shakir", "conrad", "gordon"];
  var NATURAL = ["natural", "neural", "online", "enhanced", "premium", "google"];
  var want = (root.getAttribute("data-voice") || root.lang || "en").toLowerCase().replace(/_/g, "-");
  var base = want.split("-")[0];
  var fallback = { ht: "fr", tl: "fil" }[base] || "";
  var synth = window.speechSynthesis;
  var canSpeak = !!(synth && typeof window.SpeechSynthesisUtterance !== "undefined");
  var greeted = false;
  var beforeIx = 0, afterIx = 0;
  var queue = [], token = 0, paused = false, gapTimer = null, sessionVoice = null;
  var PITCH = 1.1, VOLUME = 0.85, GAP = 300;

  function fold(s) {
    s = (s || "").toLowerCase();
    try { s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); } catch (e) {}
    return s;
  }
  function words(s) {
    var m;
    try { m = fold(s).match(/[\p{L}\p{N}]+/gu); }
    catch (err) { m = fold(s).match(/[a-z0-9]+/g); }
    return m || [];
  }
  function stopMap(list) {
    var o = {};
    list.split(/\s+/).forEach(function (w) { if (w) o[w] = 1; });
    return o;
  }
  var STOPS = {
    en: stopMap("a an the and or to of in on for is are was were be been it this that these those you your yours we our with as at if do not from they them their i me my so but about what how when where who can will just into than then there here please am"),
    es: stopMap("el la los las un una unos unas de del al y o u que en es son por para con su sus no lo le les se mi mis me te ti como esta este esto esa ese eso ya mas si usted ustedes hay ser esta puede pueden mi"),
    fr: stopMap("le la les un une des de du au aux et ou que qui quoi dans en est sont pour avec sur par ce cet cette ces ne pas vous votre vos nous je il elle on mais comme plus si y a"),
    pt: stopMap("o a os as um uma uns umas de do da dos das e ou que em e sao por para com seu sua seus suas no na nos nas se me te voce como esta este isso isto ja mais nao eu ele ela"),
    vi: stopMap("la va cua cac mot nhung cho voi trong tren duoc khong co nay kia ban toi chung khi thi hay hoac ve tu den de"),
    ko: stopMap("은 는 이 가 을 를 에 의 와 과 도 로 으로 하다 있다 없다 그 저 이것 당신 수 등 및 또는 그리고"),
    ar: stopMap("في من على إلى الى عن مع هذا هذه ذلك تلك ما لا لم لن إن ان أو و ثم قد كان كانت هو هي أنت انا أنا نحن"),
    ru: stopMap("и в во не на с со что это как а то он она они вы мы к ко от для по о об же бы ли уже или если да нет ни при из у я мне меня мой моя ваш ваша"),
    hi: stopMap("का के की है हैं और से में को पर यह ये था थी तो भी हो नहीं नही एक क्या कैसे आप हम ने या"),
    ht: stopMap("ou se nan ak pou ki sa te yo li mwen nou pa gen yon de a"),
    tl: stopMap("ang mga ng sa na at ay ito iyan kung ano para hindi ka mo namin ninyo si sina")
  };

  function contentWords(list) {
    var stop = STOPS[lang] || STOPS.en, kept = [];
    list.forEach(function (w) { if (w.length >= 2 && !stop[w]) kept.push(w); });
    return kept.length ? kept : list.filter(function (w) { return w.length >= 2; });
  }
  function grams(s) {
    var chars = fold(s).replace(/[^\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g, "");
    var g = [];
    if (chars.length === 1) g.push(chars);
    for (var i = 0; i < chars.length - 1; i++) g.push(chars.substr(i, 2));
    return g;
  }
  function voiceScore(v) {
    var vlang = (v.lang || "").toLowerCase().replace(/_/g, "-");
    var family = 0;
    if (vlang === want || vlang.indexOf(want + "-") === 0 || (want.length > vlang.length && want.indexOf(vlang + "-") === 0)) family = 3;
    else if (vlang === base || vlang.indexOf(base + "-") === 0) family = 2;
    else if (fallback && (vlang === fallback || vlang.indexOf(fallback + "-") === 0)) family = 1;
    else return null;
    var name = fold(v.name || "");
    var toks = words(name);
    var named = false, identity = 200;
    if (toks.indexOf("female") !== -1) { identity = 500; named = true; }
    for (var i = GENTLE.length - 1; i >= 0; i--) {
      if (toks.indexOf(GENTLE[i]) !== -1) { identity = 900 - i; named = true; }
    }
    if (base === "en" && toks.indexOf("jenny") !== -1) { identity = 2000; named = true; }
    if (!named) {
      var male = toks.indexOf("male") !== -1;
      if (!male) { for (var m = 0; m < MALE.length; m++) if (toks.indexOf(MALE[m]) !== -1) { male = true; break; } }
      identity = male ? 40 : 200;
    }
    var natural = 0;
    for (var n = 0; n < NATURAL.length; n++) if (name.indexOf(NATURAL[n]) !== -1) natural++;
    return { voice: v, family: family, identity: identity, natural: natural, region: vlang === want ? 1 : 0 };
  }
  function pickVoice() {
    var list = [], voices = synth.getVoices() || [], i;
    for (i = 0; i < voices.length; i++) {
      var scored = voiceScore(voices[i]);
      if (scored) list.push(scored);
    }
    if (!list.length) return null;
    list.sort(function (a, b) {
      if (b.family !== a.family) return b.family - a.family;
      if (b.identity !== a.identity) return b.identity - a.identity;
      if (b.natural !== a.natural) return b.natural - a.natural;
      return b.region - a.region;
    });
    return list[0].voice;
  }
  function whenVoices(cb) {
    var ready = synth.getVoices() || [];
    if (ready.length) { cb(); return; }
    var done = false;
    function finish() {
      if (done) return;
      if (!(synth.getVoices() || []).length) return;
      done = true;
      cb();
    }
    if (synth.addEventListener) synth.addEventListener("voiceschanged", finish);
    else synth.onvoiceschanged = finish;
    setTimeout(function () { if (!done) { done = true; cb(); } }, 1200);
  }
  function currentRate() {
    var el = doc.querySelector(".tts-rate");
    var n = el ? parseFloat(el.value) : 0.9;
    return isFinite(n) && n > 0 ? n : 0.9;
  }
  function splitSpeakable(text) {
    var src = (text || "").replace(/\s+/g, " ").trim();
    if (!src) return [];
    var saved = [];
    function stash(re) {
      src = src.replace(re, function (m) {
        saved.push(m);
        return "\uE000" + (saved.length - 1) + "\uE001";
      });
    }
    stash(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
    stash(/\b\d+[.,]\d+\b/g);
    function restore(s) {
      return s.replace(/\uE000(\d+)\uE001/g, function (_, n) { return saved[+n] || ""; }).replace(/\s+/g, " ").trim();
    }
    var parts = [], buf = "";
    for (var i = 0; i < src.length; i++) {
      var ch = src.charAt(i);
      buf += ch;
      var boundary = "。！？؟।…!?;；".indexOf(ch) !== -1;
      if (!boundary && (ch === "." || ch === ":")) {
        var next = src.charAt(i + 1);
        boundary = !next || /\s/.test(next);
      }
      if (!boundary && (ch === "\u2014" || ch === "\u2013") && buf.trim().length > 1) boundary = true;
      if (!boundary) continue;
      var piece = restore(buf);
      if (piece) parts.push(piece);
      buf = "";
    }
    var tail = restore(buf);
    if (tail) parts.push(tail);
    var merged = [];
    parts.forEach(function (p) {
      if (p.length < 3 && merged.length) merged[merged.length - 1] += " " + p;
      else if (p.length >= 3) merged.push(p);
    });
    return merged.length ? merged : (src ? [src] : []);
  }
  function stopSpeech() {
    token++;
    paused = false;
    queue = [];
    sessionVoice = null;
    if (gapTimer) { clearTimeout(gapTimer); gapTimer = null; }
    try { synth.cancel(); } catch (e) {}
  }
  function pump(my) {
    if (my !== token || paused) return;
    if (!queue.length) return;
    var text = queue.shift();
    var u = new SpeechSynthesisUtterance(text);
    var v = sessionVoice;
    u.lang = v && v.lang ? v.lang : want;
    if (v) { try { u.voice = v; } catch (err) {} }
    u.rate = currentRate();
    u.pitch = PITCH;
    u.volume = VOLUME;
    u.onend = function () {
      if (my !== token || paused || !queue.length) return;
      gapTimer = setTimeout(function () { gapTimer = null; pump(my); }, GAP);
    };
    u.onerror = function (ev) {
      if (my !== token || paused) return;
      var err = ev && ev.error;
      if (err === "canceled" || err === "cancelled" || err === "interrupted") return;
      if (!queue.length) return;
      gapTimer = setTimeout(function () { gapTimer = null; pump(my); }, GAP);
    };
    try { synth.speak(u); } catch (e) {}
  }
  function begin(chunks) {
    if (!canSpeak) return;
    stopSpeech();
    var my = token;
    queue = chunks.filter(function (c) { return !!c; });
    if (!queue.length) return;
    whenVoices(function () {
      if (my !== token) return;
      sessionVoice = pickVoice();
      gapTimer = setTimeout(function () {
        gapTimer = null;
        if (my !== token || paused) return;
        pump(my);
      }, 50);
    });
  }
  function speakParts(parts) {
    var chunks = [];
    parts.forEach(function (p) { splitSpeakable(p).forEach(function (c) { chunks.push(c); }); });
    begin(chunks);
  }
  function togglePause() {
    if (!canSpeak) return;
    if (!queue.length && !synth.speaking && !synth.paused && !gapTimer) return;
    if (paused) {
      paused = false;
      try { if (synth.paused) synth.resume(); } catch (e) {}
      if (!synth.speaking && queue.length) pump(token);
      return;
    }
    paused = true;
    if (gapTimer) { clearTimeout(gapTimer); gapTimer = null; }
    try { if (synth.speaking && !synth.paused) synth.pause(); } catch (e) {}
  }
  function textOf(sel) {
    var el = sel === "main" ? doc.getElementById("main") : doc.querySelector(sel);
    if (!el) return "";
    var c = el.cloneNode(true);
    c.querySelectorAll(".tts,.toolbar,.tts-note,.ask,script,style,noscript,.cite,.quiz-out,input,textarea,select,button,.speed").forEach(function (n) { n.remove(); });
    c.querySelectorAll("h1,h2,h3,h4,summary,legend,p,li").forEach(function (block) {
      var t = (block.textContent || "").trim();
      if (t && !/[.!?。！？؟।:：…]$/.test(t)) block.appendChild(doc.createTextNode("."));
    });
    var holder = doc.createElement("div");
    holder.className = "tts-measure";
    holder.appendChild(c);
    doc.body.appendChild(holder);
    var text = "";
    try { text = c.innerText || ""; } catch (err) { text = ""; }
    if (!text) text = c.textContent || "";
    holder.remove();
    return text.replace(/\s+/g, " ").trim();
  }
  function readAloud(sel) {
    var parts = [];
    if (!greeted) { greeted = true; parts.push(copy.greeting); }
    parts.push(textOf(sel));
    speakParts(parts);
  }

  function plain(el) {
    var c = el.cloneNode(true);
    c.querySelectorAll(".cite,.tts,.tts-note,.ask,button,input,script,style,noscript").forEach(function (n) { n.remove(); });
    return (c.textContent || "").replace(/\s+/g, " ").trim();
  }
  function hasInnerPassage(el) {
    var inner = el.querySelectorAll("p, li, blockquote");
    for (var i = 0; i < inner.length; i++) {
      if (!inner[i].closest(".cite,.ask,.tts,.toolbar")) return true;
    }
    return false;
  }
  function findPassage(query) {
    var main = doc.getElementById("main");
    if (!main) return "";
    var qWords = contentWords(words(query));
    var qGrams = grams(query);
    var foldedQ = fold(query).replace(/\s+/g, " ").trim();
    var nodes = main.querySelectorAll("p, li, blockquote, h2, h3, summary, legend");
    var best = null;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.closest(".ask,.tts,.toolbar,.cite,.tts-note")) continue;
      if (hasInnerPassage(el)) continue;
      var text = plain(el);
      if (text.length < 24) continue;
      var pw = {}, ws = words(text), hits = 0, score = 0, w;
      for (w = 0; w < ws.length; w++) pw[ws[w]] = (pw[ws[w]] || 0) + 1;
      for (w = 0; w < qWords.length; w++) {
        if (pw[qWords[w]]) { hits++; score += 2 + Math.min(pw[qWords[w]], 3); }
      }
      if (qGrams.length) {
        var set = {}, gs = grams(text), g, gh = 0;
        for (g = 0; g < gs.length; g++) set[gs[g]] = 1;
        for (g = 0; g < qGrams.length; g++) if (set[qGrams[g]]) gh++;
        if (gh) { hits += gh; score += gh * 2; }
      }
      if (foldedQ.length > 3 && fold(text).indexOf(foldedQ) !== -1) score += 8;
      if (!hits || score <= 0) continue;
      var denom = qWords.length + (qGrams.length ? Math.min(qGrams.length, 8) : 0);
      score = score * (hits / (denom || 1));
      if (!best || score > best.score || (score === best.score && text.length < best.text.length)) best = { score: score, text: text };
    }
    return best ? best.text : "";
  }
  function nextWrap() {
    var before = copy.before[beforeIx % copy.before.length];
    var after = copy.after[afterIx % copy.after.length];
    beforeIx++;
    afterIx++;
    return { before: before, after: after };
  }
  function emailParagraph(text) {
    var p = doc.createElement("p");
    p.className = "ask-miss";
    var bits = text.split("help@cybrenerdz.com");
    p.appendChild(doc.createTextNode(bits[0]));
    if (bits.length > 1) {
      var a = doc.createElement("a");
      a.href = "mailto:help@cybrenerdz.com";
      a.textContent = "help@cybrenerdz.com";
      p.appendChild(a);
      p.appendChild(doc.createTextNode(bits.slice(1).join("help@cybrenerdz.com")));
    }
    return p;
  }
  function mountAsk() {
    var main = doc.getElementById("main");
    if (!main || doc.getElementById("ask-veronica")) return;
    var section = doc.createElement("section");
    section.className = "card ask";
    section.id = "ask-veronica";
    var h = doc.createElement("h2");
    h.id = "ask-veronica-title";
    h.textContent = copy.title;
    var hint = doc.createElement("label");
    hint.className = "small";
    hint.htmlFor = "ask-veronica-q";
    hint.textContent = copy.hint;
    var row = doc.createElement("div");
    row.className = "ask-row";
    var input = doc.createElement("input");
    input.type = "search";
    input.id = "ask-veronica-q";
    input.autocomplete = "off";
    input.enterKeyHint = "search";
    input.placeholder = copy.placeholder;
    var button = doc.createElement("button");
    button.type = "button";
    button.className = "btn btn-primary ask-go";
    button.textContent = copy.button;
    var live = doc.createElement("div");
    live.className = "ask-out";
    live.setAttribute("aria-live", "polite");
    row.appendChild(input);
    row.appendChild(button);
    section.appendChild(h);
    section.appendChild(hint);
    section.appendChild(row);
    section.appendChild(live);
    var anchor = doc.getElementById("help-now");
    if (anchor && anchor.parentNode) anchor.insertAdjacentElement("afterend", section);
    else main.appendChild(section);
    function run() {
      var q = (input.value || "").replace(/\s+/g, " ").trim().slice(0, 400);
      if (!q) return;
      live.textContent = "";
      var passage = findPassage(q);
      if (!passage) {
        live.appendChild(emailParagraph(copy.miss));
        speakParts([copy.miss]);
        return;
      }
      var wrap = nextWrap();
      var b = doc.createElement("p");
      b.className = "ask-before";
      b.textContent = wrap.before;
      var quote = doc.createElement("blockquote");
      quote.className = "ask-passage";
      quote.textContent = passage;
      var a = doc.createElement("p");
      a.className = "ask-after";
      a.textContent = wrap.after;
      live.appendChild(b);
      live.appendChild(quote);
      live.appendChild(a);
      speakParts([wrap.before, passage, wrap.after]);
    }
    button.addEventListener("click", run);
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") { ev.preventDefault(); run(); }
    });
  }

  mountAsk();

  if (!canSpeak) {
    doc.querySelectorAll(".tts, .tts-page, .tts-pause, .tts-stop, .speed").forEach(function (el) { el.hidden = true; });
    doc.querySelectorAll(".tts-none").forEach(function (el) { el.hidden = false; });
    return;
  }
  function addNote(container) {
    if (!container || container.querySelector(".tts-note")) return;
    var p = doc.createElement("p");
    p.className = "tts-note";
    p.textContent = copy.note;
    container.appendChild(p);
  }
  doc.querySelectorAll(".tts").forEach(addNote);
  var bar = doc.querySelector(".toolbar");
  if (bar && bar.querySelector(".tts-page")) addNote(bar);
  doc.addEventListener("click", function (ev) {
    var node = ev.target;
    if (node && node.nodeType !== 1) node = node.parentElement;
    var b = node && node.closest ? node.closest("button") : null;
    if (!b) return;
    if (b.classList.contains("tts-page")) readAloud("main");
    else if (b.classList.contains("tts-play")) readAloud(b.closest(".tts").getAttribute("data-target"));
    else if (b.classList.contains("tts-pause")) togglePause();
    else if (b.classList.contains("tts-stop")) stopSpeech();
  });
  if (synth.addEventListener) synth.addEventListener("voiceschanged", function () { if (!sessionVoice) sessionVoice = pickVoice(); });
  window.addEventListener("pagehide", function () { try { synth.cancel(); } catch (e) {} });
})();
