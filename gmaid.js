//Alex Maki-Jokela
//Written sometime in 2016ish

function cleanUp() {
  var delayDays = 2 // Enter # of days before messages are moved to archive
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate && !threads[i].hasStarredMessages())
      {
        threads[i].moveToArchive();
      }
  }
}
