function printAll(){
    const json = `
[
  {
    "title": "☕️ Alltag",
    "questions": [
      "Wie war dein Tag bisher?",
      "Was steht bei dir heute noch an?",
      "Gibt’s etwas, worauf du dich heute noch freust?",
      "Wie sieht dein typischer Morgen/Abend aus?",
      "Was ist dein persönlicher Energie-Booster am Tag?",
      "Hast du heute schon was Neues erlebt oder gelernt?",
      "Gibt’s etwas, das du jeden Tag machst, ohne groß darüber nachzudenken?",
      "Wann war dein letzter richtig fauler Tag?",
      "Hast du manchmal das Gefühl, die Zeit vergeht zu schnell?",
      "Wie oft brauchst du „Zeit für dich“?"
    ]
  },
  {
    "title": "🍝 Essen & Trinken",
    "questions": [
      "Was ist dein absolutes Comfort-Food?",
      "Gibt es ein Gericht, das du perfekt zubereiten kannst?",
      "Bist du eher Team Frühstück, Mittag oder Abendessen?",
      "Isst du lieber herzhaft oder süß zum Frühstück?",
      "Gibt es ein Essen, das du gar nicht magst?",
      "Wie stehst du zu vegan/vegetarisch – schon ausprobiert?",
      "Magst du Street Food oder lieber schick essen gehen?",
      "Gibt es ein Essen, das dich an einen Urlaub erinnert?",
      "Welche Snacks dürfen bei dir zu einem Filmabend nicht fehlen?",
      "Kaffee: schwarz, mit Milch, mit Hafermilch – oder gar nicht?"
    ]
  },
  {
    "title": "📱 Medien & Unterhaltung",
    "questions": [
      "Was ist deine Lieblingsserie aller Zeiten?",
      "Welcher Film hat dich emotional richtig mitgenommen?",
      "Gibt es eine Serie oder einen Film, den alle lieben – außer dir?",
      "Wie oft schaust du Nachrichten oder informierst dich online?",
      "Welche YouTube-Kanäle kannst du empfehlen?",
      "Was hörst du beim Putzen oder Kochen – Musik, Podcast, gar nichts?",
      "Welche Musikrichtung beschreibt deinen Musikgeschmack am besten?",
      "Hörst du Musik eher unterwegs oder zuhause?",
      "Gibt es ein Buch, das dein Denken verändert hat?",
      "Liest du lieber E-Books, Hörbücher oder klassisch auf Papier?"
    ]
  },
  {
    "title": "🏖️ Freizeit & Hobbys",
    "questions": [
      "Was würdest du tun, wenn du plötzlich eine Woche frei hättest?",
      "Gibt es ein Hobby, das du irgendwann mal aufgeben musstest?",
      "Was war dein ungewöhnlichstes Hobby?",
      "Gibt es etwas, das du regelmäßig machst, um runterzukommen?",
      "Bist du Team „lange wach bleiben“ oder „früh raus und was erleben“?",
      "Was tust du, wenn dir langweilig ist?",
      "Bastelst, malst oder schreibst du manchmal?",
      "Gibt es etwas, das du immer schon mal ausprobieren wolltest, dich aber nie getraut hast?",
      "Wie wichtig ist dir Freizeit im Alltag?",
      "Gibt es einen Skill, den du dir selbst beigebracht hast?"
    ]
  },
  {
    "title": "🚶‍♂️ Tägliches Leben & Routinen",
    "questions": [
      "Wie organisierst du deinen Tag: To-do-Listen, Kalender oder einfach los?",
      "Wie oft checkst du am Tag dein Handy?",
      "Gibt es ein Gerät oder eine App, ohne die du nicht leben könntest?",
      "Wie gehst du mit Stress um?",
      "Was nervt dich im Alltag am meisten?",
      "Welches kleine Alltagsproblem würdest du gerne „wegzaubern“?",
      "Was bedeutet für dich „ein produktiver Tag“?",
      "Wie gestaltest du deine Mittagspause?",
      "Wie oft gehst du einkaufen – planvoll oder spontan?",
      "Was ist dein liebster Alltagsluxus?"
    ]
  },
  {
    "title": "🧳 Reisen & Orte",
    "questions": [
      "Was war dein aufregendstes Reiseerlebnis?",
      "Bist du eher der Pauschalreise- oder Abenteuer-Typ?",
      "Welche Sprache würdest du gerne fließend sprechen – fürs Reisen?",
      "Was darf auf keinen Fall in deinem Gepäck fehlen?",
      "Gibt es einen Ort, der dich richtig enttäuscht hat?",
      "Hast du Lieblingsorte in deiner eigenen Stadt oder Region?",
      "Magst du es, neue Leute auf Reisen kennenzulernen?",
      "Gibt es ein Reiseziel, das du bewusst meidest?",
      "Wie planst du Reisen – durchorganisiert oder spontan?",
      "Reist du lieber allein oder in Gesellschaft?"
    ]
  },
  {
    "title": "🐶 Tiere & Natur",
    "questions": [
      "Hattest oder hast du ein Haustier?",
      "Bist du eher Hunde- oder Katzenmensch – oder beides?",
      "Gibt es ein Tier, das du faszinierend findest, aber auch ein bisschen unheimlich?",
      "Was würdest du als erstes tun, wenn du einen Bauernhof hättest?",
      "Warst du schon mal in einem Wildpark oder auf Safari?",
      "Gibt es ein Tier, das du gerne als Haustier hättest, wenn alles möglich wäre?",
      "Hast du einen Lieblingsbaum oder eine Lieblingsblume?",
      "Wie oft gehst du spazieren, einfach nur um draußen zu sein?",
      "Bist du gerne im Wald oder eher am Wasser?",
      "Gibt es einen Naturort, der dich richtig beruhigt?"
    ]
  }
]
`
    
    const obj = JSON.parse(json);
    const objLen = (obj.length) * Math.random()
    const objElem = obj[Math.floor(objLen)]
    const liliLen = (objElem.questions.length) * Math.random()
    const question = objElem.questions[Math.floor(liliLen)]
    return {"title":objElem.title, "question":question}
}