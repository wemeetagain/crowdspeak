var conversationSection = document.getElementsByClassName("conversation")[0],
    headerLeftIcon = document.getElementsByTagName("header")[0].children[0],
  openConversation = function (conversation) {
    conversationSection.style.left = "2%";
    headerLeftIcon.src = "/media/icons/png/arrow-back5_white.png";
    headerLeftIcon.onclick = backToList;
  },
    backToList = function () {
      conversationSection.style.left = "99%";
      headerLeftIcon.src = "/media/icons/png/more_white.png";
      headerLeftIcon.onclick = "alert('still nothing here')";
    }