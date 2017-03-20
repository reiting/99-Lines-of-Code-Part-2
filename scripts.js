function addSong() {

    var friends = ['Wayne', 'Connie', 'Kwinn', 'Sarah', 'Davida'];


    for (n = 0; n < friends.length; n++) {
        //create div and give class name
        var eachFriend = document.createElement('div');
        eachFriend.className = 'friend';
        document.body.appendChild(eachFriend);
        //create h3 and append to div
        var friendNames = document.createElement('h3');
        eachFriend.appendChild(friendNames);
        //attached array of friends to html
        friendNames.innerHTML = (friends[n]);

        for (i = 99; i > 0; i--) {
            //create p createElement
            var songLyrics = document.createElement('p');
            //append p to h3
            friendNames.appendChild(songLyrics);
            //append lyrics to p elements
            if (i == 1) {
                songLyrics.innerHTML = i + " line of code in the file, " + i + " line of code; " + friends[n] + " strikes one out, clears it all out, no more lines of code in the file."
            } else if (i - 1 == 1) {
                songLyrics.innerHTML = i + " lines of code in the file, " + i + " lines of code; " + friends[n] + " strikes one out, clears it all out, " + [i - 1] + " line of code in the file."
            } else {
                songLyrics.innerHTML = i + " lines of code in the file, " + i + " lines of code; " + friends[n] + " strikes one out, clears it all out, " + [i - 1] + " lines of code in the file."
            }

        }
    }
};