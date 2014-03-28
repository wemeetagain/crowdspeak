var conversationSection = document.getElementsByClassName("conversation")[0],
    headerLeftIcon = document.getElementsByTagName("header")[0].children[0],
    headerRightIcon = document.getElementsByTagName("header")[0].children[2],
    msgBar = document.getElementById("sendmsg"),
    openConversation = function (conversation) {
      conversationSection.style.left = "0%";
      headerLeftIcon.src = "./media/icons/png/arrow-back5_white.png";
      headerRightIcon.src = "./media/icons/png/info_white.png";
      headerLeftIcon.onclick = backToList;
      msgBar.style.bottom = "0";
    },
    backToList = function () {
      conversationSection.style.left = "100%";
      headerLeftIcon.src = "./media/icons/png/more_white.png";
      headerRightIcon.src = "./media/icons/png/edit_white.png";
      headerLeftIcon.onclick = "alert('still nothing here')";
      msgBar.style.bottom = "-30px";
    }
