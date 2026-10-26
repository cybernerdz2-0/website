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
  // Read aloud (Web Speech API, runs in the browser)
  var synth = window.speechSynthesis;
  if (!synth || typeof window.SpeechSynthesisUtterance === "undefined") {
    doc.querySelectorAll(".tts, .tts-page, .tts-pause, .tts-stop, .speed").forEach(function (el) { el.hidden = true; el.style.display = "none"; });
    doc.querySelectorAll(".tts-none").forEach(function (el) { el.hidden = false; });
    return;
  }
  var want = (root.getAttribute("data-voice") || root.lang || "en").toLowerCase();
  var base = want.split("-")[0], fallback = { ht: "fr", tl: "fil" };
  function pickVoice() {
    var vs = synth.getVoices() || [], tries = [want, base, fallback[base] || ""], i, j;
    for (i = 0; i < tries.length; i++) { if (!tries[i]) continue;
      for (j = 0; j < vs.length; j++) { var l = (vs[j].lang || "").toLowerCase().replace("_", "-"); if (l === tries[i] || l.indexOf(tries[i] + "-") === 0) return vs[j]; } }
    return null;
  }
  var rateEl = doc.querySelector(".tts-rate");
  function textOf(sel) {
    var el = sel === "main" ? doc.getElementById("main") : doc.querySelector(sel);
    if (!el) return "";
    var c = el.cloneNode(true);
    c.querySelectorAll(".tts, .toolbar, script, .cite, .quiz-out, input").forEach(function (n) { n.remove(); });
    return (c.innerText || c.textContent || "").replace(/\s+/g, " ").trim();
  }
  function speak(sel) {
    synth.cancel();
    var text = textOf(sel), v = pickVoice(), parts = text.match(/[^.!?。！？؟।]+[.!?。！？؟।]?/g) || [text];
    parts.forEach(function (p) {
      var u = new SpeechSynthesisUtterance(p.trim()); u.lang = v ? v.lang : want; if (v) u.voice = v;
      u.rate = rateEl ? parseFloat(rateEl.value) || 0.9 : 0.9; synth.speak(u);
    });
  }
  doc.addEventListener("click", function (ev) {
    var b = ev.target.closest ? ev.target.closest("button") : null; if (!b) return;
    if (b.classList.contains("tts-page")) speak("main");
    else if (b.classList.contains("tts-play")) speak(b.closest(".tts").getAttribute("data-target"));
    else if (b.classList.contains("tts-pause")) { if (synth.paused) synth.resume(); else synth.pause(); }
    else if (b.classList.contains("tts-stop")) synth.cancel();
  });
  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickVoice;
  window.addEventListener("pagehide", function () { synth.cancel(); });
})();
