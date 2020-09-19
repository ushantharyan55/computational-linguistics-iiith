var corpus = [
  [
    'The child liked the chocolate.',
    'She was stopped by the bravest knight.',
    'Mary baked a cake for his birthday',
    'She decorated the cake carefully',
    'Mary wore a dress with polka dots.',
  ],
  [
    'राम ने सीता के लिए फल तोड़ा।',
    'छोटे बच्चे पाठशाला जल्दी आयेंगे।',
    'मेहनत का फल मीठा होता है।',
    'वाह! वह खूबसूरत है।',
    'पेड़ से पत्ते गिर गए।',
  ],
];

//----------------Corpus-----------------//

var subheading = document.getElementById('subheading');
var description = document.getElementById('description');
var langcontent = document.getElementById('langcontent');
var contenttable = document.getElementById('contenttable');
var submit = document.getElementById('submit');
var x;

function Clearfn() {
  subheading.innerHTML = '';
  description.innerHTML = '';
  langcontent.innerHTML = '';
  contenttable.innerHTML = '';
  submit.innerHTML = '';
}

function Introductionfn() {
  description.style.fontSize = '15px';
  subheading.innerHTML = 'Introduction';
  description.innerHTML =
    'Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus. The basic parts of speech are : Noun, Verb, Determiner, Adjective, Adverb, Preposition (in English), Postposition (in Hindi).<br><br>';
  document.getElementById('image1').style.display = '';
}
function Theoryfn() {
  subheading.innerHTML = 'Theory';
  document.getElementById('image1').style.display = 'none';
  var extra =
    '"Parts of speech" are the basic lexical categories of the words present in a language. It is very important to understand these, in order to understand the grammar and use of the language concerned.<br><br>Eg:<ul><li>Ram(Noun) ate(Verb) an(Determiner) apple(Noun) with(Preposition) a(Article) fork(Noun).</li><li>राम(Noun) ने(Postposition) चम्मच(Noun) से(Postposition) मिठाई(Noun) खाई(Verb).</li></ul><br>Each part of speech explains how the word is used. In fact, the same word can act as different parts of speechs depending on the context.<br><br>Eg: A noun in one sentence and an adjective in the next.<ul><li>The glass was broken(Verb).</li><li>The broken(Adjective) glass pierced her flesh.</li><br><br>Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.<br><br>';
  description.innerHTML =
    extra +
    '<table id="table1"><tr><th>POS</th><th>FUNCTION</th><th>EXAMPLE</th></tr><tr><td>Verb</td><td>action or state</td><td>take, eat, है, सोना, गया</td></tr><tr><td>Noun</td><td>naming word; person or thing</td><td>table, John, honesty, राम, कुर्सी, हिम्मत</td></tr><tr><td>Pronoun</td><td>replaces noun</td><td>he, she, you, मैं, वह</td></tr><tr><td>Determiner</td><td>occurs before noun or noun phrase</td><td>the, many, all</td></tr><tr><td>Adjective</td><td>describes noun</td><td>green, big, छोटा, सुन्दर, काला</td></tr><tr><td>Adverb</td><td>describes verb</td><td>naturally, slowly,धीरे, जल्दी</td></tr><tr><td>Preposition</td><td>joins noun to other POS</td><td>in,of, about</td></tr><tr><td>Postposition</td><td>joins noun to other POS</td><td>में, से, के लिए</td></tr><tr><td>Conjunction</td><td>joins two words, phrases, sentences</td><td>but, so, और, या</td></tr><tr><td>Interjection</td><td>express emotion or surprise followed by exclamation marks</td><td>Hello!, Hurray!, वाह!</td></tr></table></ul>';
}
function Objectivefn() {
  description.style.fontSize = '16px';
  subheading.innerHTML = 'Objective';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    '<br><hr><br>The objective of this experiment is to test the knowledge of basic part of speech of words as they appear in a sentence.<br><br><hr>';
}
function CreateTable(corpusstring) {
  contenttable.innerHTML = '';
  var rows = '';
  var corpusS1 = '';
  corpusS1 = corpusstring.split(' ');
  if (x == 'english') {
    rows = '';
    for (i = 0; i < corpusS1.length; i++) {
      rows +=
        '<tr><td>' +
        corpusS1[i] +
        "</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Determiner'>Determiner</option><option value = 'Preposition'>Preposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
    }
  } else if (x == 'hindi') {
    rows = '';
    for (i = 0; i < corpusS1.length; i++) {
      rows +=
        '<tr><td>' +
        corpusS1[i] +
        "</td><td><select><option value = 'Noun'>Noun</option><option value = 'Pronoun'>Pronoun</option><option value = 'Verb'>Verb</option><option value = 'Adjective'>Adjective</option><option value = 'Adverb'>Adverb</option><option value = 'Postposition'>Postposition</option><option value = 'Conjunction'>Conjunction</option><option value = 'Interjection'>Interjection</option></select></td><td></td><td></td></tr>";
    }
  }
  contenttable.innerHTML =
    '<center><table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>' +
    rows +
    '</table></center>';
}

function Contents(id) {
  contenttable.innerHTML =
    "<center><br><i><font color='Blue'>Select the POS tag for corresponding words</font></i><br></center>";
  var sentence = '';
  if (id == 'eng') {
    sentence = document.getElementById(id).value;
    if (sentence == 'english1') {
      CreateTable(corpus[0][0]);
    }
    if (sentence == 'english2') {
      CreateTable(corpus[0][1]);
    }
    if (sentence == 'english3') {
      CreateTable(corpus[0][2]);
    }
    if (sentence == 'english4') {
      CreateTable(corpus[0][3]);
    }
    if (sentence == 'english5') {
      CreateTable(corpus[0][4]);
    }
  }
  if (id == 'hin') {
    sentence = document.getElementById(id).value;
    if (sentence == 'hindi1') {
      CreateTable(corpus[1][0]);
    }
    if (sentence == 'hindi2') {
      CreateTable(corpus[1][1]);
    }
    if (sentence == 'hind3') {
      CreateTable(corpus[1][2]);
    }
    if (sentence == 'hindi4') {
      CreateTable(corpus[1][3]);
    }
    if (sentence == 'hindi5') {
      CreateTable(corpus[1][4]);
    }
  }
}

function dropdownmenu() {
  x = '';
  x = document.getElementById('lang').value;
  if (x == 'select') {
    alert('Select language');
  }
  if (x == 'english') {
    contenttable.innerHTML = '';
    langcontent.innerHTML =
      "<center><select id='eng' onchange = 'Contents(this.id)'><option value='engselect'>---Select a sentence---</option><option value='english1'>" +
      corpus[0][0] +
      "</option><option value='english2'>" +
      corpus[0][1] +
      "</option><option value='english3'>" +
      corpus[0][2] +
      "</option><option value='english4'>" +
      corpus[0][3] +
      "</option><option value='english5'>" +
      corpus[0][4] +
      '</option></select></center>';
  }
  if (x == 'hindi') {
    contenttable.innerHTML = '';
    langcontent.innerHTML =
      "<center><select id='hin' onchange = 'Contents(this.id)'><option value='hinselect'>---Select a sentence---</option><option value='hindi1'>" +
      corpus[1][0] +
      "</option><option value='hindi2'>" +
      corpus[1][1] +
      "</option><option value='hindi3'>" +
      corpus[1][2] +
      "</option><option value='hindi4'>" +
      corpus[1][3] +
      "</option><option value='hindi5'>" +
      corpus[1][4] +
      '</option></select></center>';
  }
}

function Experimentfn() {
  subheading.innerHTML = 'Experiment';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    "<center><select id='lang' onchange = 'dropdownmenu()'><option value='select'>---Select Language---</option><option value='english'>English</option><option value='hindi'>Hindi</option></select></center>";
}

function Quizfn() {
  description.style.fontSize = '16px';
  subheading.innerHTML = 'Quizzes';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    '<b>Assign POS tag to each word in the following sentences</b><ol><li>Heat water in a large vessel.</li><li>The dog is happy.</li><li>The happy dog.</li><li>Park the car near the park.</li><li>The dog is sitting just at the gate.</li></ol><br><ol><li>बहार जाओ</li><li>गाड़ी उद्द्यान में खड़ी करो</li><li>राम खाना खाकर सो गया</li><li>राम खाते खाते सो गया</li><li>राम ने खाते खाते खाता खुलवाया</li></ol>';
}
function Procedurefn() {
  subheading.innerHTML = 'Procedure';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    '<b><u>STEP1 :</u></b> Select a language from the drop down menu.<br><b><u>STEP2 :</u></b> Select a sentence from the drop down menu.<br><b><u>STEP3 :</u></b> Select corresponding POS for each word in the sentence and and click the <button>Submit</button> button<br><b><u>OUTPUT :</u></b> The submitted answer will be checked.<br><b><u>STEP4 :</u></b> If incorrect, click on <button>Get Answer</button> button for the correct answer or repeat STEP3.<br><br><br><hr>';
}

function Furtherreadingsfn() {
  description.style.fontSize = '16px';
  subheading.innerHTML = 'Further Reading';
  document.getElementById('image1').style.display = 'none';
  description.innerHTML =
    "<center><b>Hindi</b><br>-Yamuna Kachru<br><i>Chapter 6</i><br><br><b>A Student's Introduction To English Grammar</b><br>- Rodney D. Huddleston<br><i>Chapter 6</i></center>";
}
