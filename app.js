const volume = document.querySelector('#volume');
const telegram = document.querySelector('#telegram');

function updateTelegramLink() {
  const message = volume.value
    ? `Здравствуйте! Хочу записаться на наращивание ресниц ${volume.value}. Подскажите, пожалуйста, свободное время.`
    : 'Здравствуйте! Хочу записаться на наращивание ресниц. Помогите, пожалуйста, подобрать объём и время.';
  const link = new URL('https://t.me/U_OLESU');
  link.searchParams.set('text', message);
  telegram.href = link.href;
}

volume.addEventListener('change', updateTelegramLink);
document.querySelectorAll('[data-volume]').forEach((option) => {
  option.addEventListener('click', () => {
    volume.value = option.dataset.volume;
    updateTelegramLink();
  });
});
updateTelegramLink();
