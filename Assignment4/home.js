setInterval (tellTime, 1000);

function tellTime(){
  var date = new Date();
  document.getElementById("footTime").innerHTML = "The current time is: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function fillContent(){
  var content;
  content = "I never liked the thought of running into one of these guys, mostly because I can never remember what the rule is for keeping yourself safe when encountering one. Am I supposed to run? Am I supposed to shout at it? Should I climb a tree? I have no idea, and that's why Black bears don't rank very high on my favourite animal list.";
  localStorage.setItem("content0", content);

  content = "If this bear was not so fluffy and awesome looking, I would probably have the same opinion as I do with Black bears. Honestly it doesn't matter whether the rule is to run away from or shout at it, because I would probably have no choice but to hug it. It's LITERALLY a teddy bear. Dangerous creatures have no business being this friendly looking.  is a great animal, that  almost wish it could be a pet.";
  localStorage.setItem("content1", content);

  content = "I do not really have too much of an opinion on lions, really. They sleep a lot, hunt hen they need to, travel in packs, but that is kind of it. I mean, was a great movie that gave a lot  expectations when  was a child, but they were ultimately  down when  learned more about them.reiterate lions are okay."
  localStorage.setItem("content2", content);

  content = "Yeah! Here we have the mighty moose! You know? The one that wonders at will like in the song, or the ones that supposedly everyone is supposed to have as a pet in Canada? These guys are huge, and just because of their potential to be ridden like horses, I'm going to have to say that these are awesome animals. Really, who even decided to choose horses over these guys?"
  localStorage.setItem("content3", content);

  content = "Ah yes the symbol of freedom (in America). To be honest, bald eagles seem very awesome and all, but at the same time they kind of freak me out. If you ever take the time to look them at the eyes you can really tell how focused they are on what their looking at. I am glad people are too big to them to hunt with that look on their face. Overall I would say that I am not too big a fan with these guys."
  localStorage.setItem("content4", content);

  content = "I'm not too sure what to say about these guys. I mean, who doesn't like monkeys?";
  localStorage.setItem("content5", content);

}
