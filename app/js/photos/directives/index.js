module.exports = function(app) {
  require('./full_size_widget')(app);
  require('./thumbnail_widget')(app);
  require('./text_widget')(app);
  require('./dummy_directive')(app);
  require('./photo_album')(app);
  require('./display_switch')(app);
};
