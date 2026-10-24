document.querySelectorAll('[data-share-url]').forEach((container) => {
  const button = container.querySelector('.share-button');
  const status = container.querySelector('.share-status');
  const linkField = container.querySelector('.share-url');
  const shareData = {
    title: container.dataset.shareTitle,
    text: container.dataset.shareText,
    url: container.dataset.shareUrl
  };
  const supportsShare = typeof navigator.share === 'function'
    && (typeof navigator.canShare !== 'function' || navigator.canShare(shareData));

  button.textContent = supportsShare ? 'Share' : 'Copy link';
  button.title = supportsShare ? 'Share this page' : 'Copy a link to this page';
  button.disabled = false;
  linkField.value = shareData.url;
  linkField.addEventListener('focus', () => linkField.select());

  button.addEventListener('click', async () => {
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = '';
    linkField.hidden = true;

    try {
      if (supportsShare) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
        }
      }

      try {
        await navigator.clipboard.writeText(shareData.url);
        status.textContent = 'Link copied.';
      } catch {
        linkField.hidden = false;
        status.textContent = 'Select and copy this link.';
        linkField.focus();
        linkField.select();
      }
    } finally {
      button.disabled = false;
    }
  });
});