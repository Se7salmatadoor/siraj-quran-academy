// No network calls and no storage. The page only builds a WhatsApp link;
// the applicant reviews the message and sends it from their own WhatsApp.
(function () {
  var NUMBER = '201062145463';
  var views = { home: document.getElementById('home'), apply: document.getElementById('apply') };
  function show(name) {
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== name; });
    document.querySelectorAll('nav button').forEach(function (b) { b.classList.toggle('on', b.dataset.view === name); });
    window.scrollTo(0, 0);
  }
  document.addEventListener('click', function (e) {
    var v = e.target.closest('[data-view]');
    if (v) show(v.dataset.view);
  });
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    var text = [
      'السلام عليكم، أرغب في الالتحاق بأكاديمية سراج لتحفيظ القرآن الكريم أونلاين.',
      'مقدم الطلب: ' + f.who.value,
      'اسم الطالب: ' + f.name.value.trim(),
      'السن: ' + f.age.value.trim(),
      'المستوى: ' + f.level.value,
      'الهدف: ' + f.goal.value,
      'برجاء التواصل لمعرفة الاشتراك ومواعيد الحصص.'
    ].join('\n');
    document.getElementById('msg').textContent = text;
    document.getElementById('wa').href = 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(text);
    document.getElementById('preview').hidden = false;
  });
})();
