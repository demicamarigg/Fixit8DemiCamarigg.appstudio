

Dropdown1.onclick = function(s) {
    if (typeof(s) == "Login") {
        return;
    }
    NSB.MsgBox("you selected " + Dropdown1.selection);
};


Pagination1.onclick = function(choice) {
  NSB.MsgBox("This is the page you chose: " + choice);
};

/*
Changed the whole background color to a teal

Dropdown changes:
made the font italic
changed the weight of the font
changed the background color to dark blue

pagination changes:
made the font size 20
changed the weight of the font to 100
changed the numbers 

*/