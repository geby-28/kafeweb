/* ===== Topic chips ===== */
const chips = document.querySelectorAll('.topic-chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
  });
});

/* ===== FAQ accordion ===== */
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');

  btn.addEventListener('click', () => {
    const isOpen = answer.classList.contains('is-open');
    // collapse all
    faqItems.forEach(i => {
      i.querySelector('.faq-answer').classList.remove('is-open');
      i.querySelector('.faq-item, .faq-item').classList.remove('is-open');
      i.querySelector('.faq-icon').textContent = 'add';
    });
    if (!isOpen) {
      answer.classList.add('is-open');
      item.classList.add('is-open');
      icon.textContent = 'close';
    }
  });
});

/* ===== Form submit ===== */
function handleFormSubmit() {
  alert('Terima kasih! Pesan Anda telah diterima oleh Concierge Matcha & Salt. Kami akan menghubungi Anda melalui WhatsApp atau email dalam waktu singkat.');
}