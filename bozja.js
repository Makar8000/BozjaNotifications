'use strict';

const shouldFire = (fate, option) => {
  if (!fateConfig.options.types.find(type => type === option))
    return false;
  if (option === 'crit' && !fate.spawnsCrit)
    return false;
  if (option === 'solo' && !fate.spawnsSolo)
    return false;

  return true;
}

const sendTTSNotification = fate => {
  if (!shouldFire(fate, fateConfig.options.tts))
    return;

  let cmd = { 'call': 'say', 'text': `${fate.name}` };
  window.callOverlayHandler(cmd);
}

const sendPushNotification = fate => {
  if (!shouldFire(fate, fateConfig.options.push))
    return;

  const pushOptions = {
    token: fateConfig.options.pushConfig.token,
    user: fateConfig.options.pushConfig.user,
    title: "Skirmish Pop",
    message: fate.name
  }

  if (fateConfig.options.pushConfig.device)
    pushOptions.device = fateConfig.options.pushConfig.device;

  fetch('https://api.pushover.net/1/messages.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pushOptions)
  }).then(response => {
    if (!response.ok)
      console.error("Unable to send notification for fate", fate);
  });
}

const onFate = e => {
  if (e.detail.eventType !== 'add')
    return;

  const fate = fateConfig.fates.find(fate => fate.id === e.detail.fateID);
  if (!fate)
    return;

  sendTTSNotification(fate)
  sendPushNotification(fate);
}

window.addEventListener('DOMContentLoaded', async (e) => {
  window.addOverlayListener('onFateEvent', e => onFate(e));
  window.startOverlayEvents();
});
