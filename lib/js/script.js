window.addEventListener('load', function () {


  // Obtaining node elements
  var spellBtn = document.getElementById('submit');
  var userText = document.getElementById('userText');
  var results = document.getElementById('results');
  var add = document.getElementById('add');
  var word = document.getElementById('word');

  var dict = null;

  // add event listeners to elements
  spellBtn.addEventListener('click', checkSpelling);
  add.addEventListener('click', addWord);

  // function to add new word
  function addWord(event) {
    var text = word.value;
    dict[text] = true;
    checkSpelling(event);
  }

  // function to check spelling
  function checkSpelling(event) {
    if (dict !== null) {
      clearResults(results);
      var words = userText.value.split(' ');
      for (var i = 0; i < words.length; i++) {
        var w = words[i].toLowerCase();

        var el = document.createTextNode(w);
        if (dict[w] === true) {
          results.appendChild(el);
        } else {
          var sp = document.createElement('span');
          sp.classList.add('wrong');
          sp.textContent = w;
          results.appendChild(sp);
        }
        var s = document.createTextNode(' ');
        results.appendChild(s);
      }
    }

  }

  function clearResults(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  loadJSON(function (text) {
    dict = JSON.parse(text);
  });

  function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', '/assets/js/sample.json', true);
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
              }
        };
        xobj.send(null);
     }
})


