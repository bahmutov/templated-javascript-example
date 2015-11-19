(function initAnalytics(id) {
  if (!id) {
    throw new Error('missing analytics id ' + id);
  }
  console.log('initialized analytics with id', id);
}(analyticsId));
