(function initAnalytics(id) {
  if (!id) {
    console.error('missing analytics id ' + id);
    return;
  }
  console.log('initialized analytics with id', id);
}(typeof analyticsId === 'undefined' ? '' : analyticsId));
