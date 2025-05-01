function printAll(){
    const json = `
[
  {
    "title": "☕️ Wie verbringst du deinen Alltag?",
    "questions": [
      "Wie sieht ein typischer Tag bei dir aus?",
      "Was war heute das Schönste für dich?",
      "Hast du heute schon was erlebt, das dich überrascht hat?",
      "Was machst du morgens als Erstes, wenn du aufwachst?",
      "Gibt es einen Moment am Tag, auf den du dich besonders freust?",
      "Was machst du, um abends zur Ruhe zu kommen?",
      "Wie startest du am liebsten in die Woche?",
      "Was hilft dir, durch stressige Tage zu kommen?",
      "Hast du ein Ritual, das deinen Tag besser macht?",
      "Wie gehst du mit unerwarteten Unterbrechungen im Alltag um?",
      "Was würdest du an deinem Tagesablauf gern ändern?",
      "Wie oft gönnst du dir bewusst eine Pause?",
      "Wann hattest du zuletzt einen richtig entspannten Tag?",
      "Hast du eine Gewohnheit, auf die du stolz bist?",
      "Was war heute dein kleiner Glücksmoment?"
    ]
  },
  {
    "title": "🍽️ Was isst du am liebsten?",
    "questions": [
      "Was ist dein absolutes Lieblingsgericht?",
      "Worauf hast du gerade richtig Appetit?",
      "Gibt es ein Gericht, das du perfekt kochen kannst?",
      "Was ist deine erste Wahl bei einem Restaurantbesuch?",
      "Wie stehst du zu scharfem Essen?",
      "Was darf in deinem Kühlschrank nie fehlen?",
      "Welches Essen erinnert dich an deine Kindheit?",
      "Isst du lieber süß oder herzhaft?",
      "Bist du eher experimentierfreudig oder treu deinen Lieblingsgerichten?",
      "Hast du ein Lieblingsgetränk für den Sommer oder Winter?",
      "Kochst du gerne für andere?",
      "Gibt es ein Essen, das du nie wieder probieren würdest?",
      "Was ist dein ultimativer Mitternachtssnack?",
      "Gibt es ein Gericht aus einem anderen Land, das du gerne nachkochen würdest?",
      "Welches Dessert kannst du nie ablehnen?"
    ]
  },
  {
    "title": "📺 Was schaust, liest oder hörst du gerade?",
    "questions": [
      "Welche Serie hat dich zuletzt richtig gepackt?",
      "Was war der letzte Film, der dich berührt hat?",
      "Welches Buch liegt aktuell auf deinem Nachttisch?",
      "Hörst du Podcasts? Wenn ja, welche kannst du empfehlen?",
      "Welche Musik hilft dir beim Abschalten?",
      "Welche Doku oder Reportage fandest du richtig spannend?",
      "Gibt es ein Genre, das du immer wieder schaust oder liest?",
      "Welche Kinderserie mochtest du früher besonders?",
      "Was war dein Lieblingsfilm als Teenager?",
      "Liest du eher digital oder auf Papier?",
      "Welche Serie könntest du immer wieder schauen?",
      "Was hörst du beim Kochen oder Putzen?",
      "Welches Buch würdest du jedem empfehlen?",
      "Bist du eher Team Hörbuch oder still lesen?",
      "Was war dein letzter spontaner Filmabend?"
    ]
  },
  {
    "title": "🎨 Was machst du gerne in deiner Freizeit?",
    "questions": [
      "Was macht dir in deiner Freizeit am meisten Spaß?",
      "Hast du ein Hobby, das du anderen empfehlen würdest?",
      "Was würdest du gern mal lernen, wenn du die Zeit hättest?",
      "Wie verbringst du einen perfekten freien Nachmittag?",
      "Was machst du, wenn dir langweilig ist?",
      "Hast du ein kreatives Projekt, an dem du gerade arbeitest?",
      "Wann warst du das letzte Mal richtig im Flow?",
      "Welche Freizeitaktivität bringt dich zum Lächeln?",
      "Gibt es etwas, das du immer wieder tust, einfach weil es dir guttut?",
      "Welche Sportart oder Bewegung tut dir besonders gut?",
      "Was hast du zuletzt Neues ausprobiert?",
      "Wie entspannst du dich nach einer langen Woche?",
      "Was inspiriert dich in deiner Freizeit?",
      "Was machst du nur für dich selbst, ohne Ziel oder Zweck?",
      "Gibt es ein Hobby, das du gerne wieder aufleben lassen würdest?"
    ]
  },
  {
    "title": "🗓️ Wie strukturierst du deinen Tag?",
    "questions": [
      "Wie organisierst du deine Aufgaben im Alltag?",
      "Benutzt du Kalender, To-do-Apps oder eher dein Gedächtnis?",
      "Was hilft dir, produktiv zu bleiben?",
      "Wie gehst du mit Aufschieberitis um?",
      "Was motiviert dich morgens aufzustehen?",
      "Wie planst du deinen Wochenstart?",
      "Was ist dein Lieblingsmoment an einem normalen Tag?",
      "Wie schaltest du nach der Arbeit oder Schule ab?",
      "Wie gehst du mit unerwartetem Stress um?",
      "Gibt es einen Tagesrhythmus, der besonders gut für dich funktioniert?",
      "Wie bringst du Erholung und Verpflichtungen ins Gleichgewicht?",
      "Wie bereitest du dich mental auf einen vollen Tag vor?",
      "Gibt es eine kleine Gewohnheit, die deinen Tag verbessert?",
      "Was tust du an einem chaotischen Tag, um wieder Struktur reinzubringen?",
      "Wann fühlst du dich am produktivsten – morgens, mittags oder abends?"
    ]
  },
  {
    "title": "✈️ Wohin möchtest du gerne reisen?",
    "questions": [
      "Was war dein schönstes Reiseerlebnis bisher?",
      "Welches Land möchtest du unbedingt mal bereisen?",
      "Reist du lieber ans Meer, in die Berge oder in Städte?",
      "Wie spontan bist du bei Reisen?",
      "Was darf in deinem Koffer nie fehlen?",
      "Magst du Roadtrips?",
      "Welche Stadt hat dich überrascht – im positiven oder negativen Sinn?",
      "Gibt es ein Reiseziel, das dich nachhaltig beeindruckt hat?",
      "Würdest du gerne mal allein verreisen?",
      "Wie sieht für dich ein perfekter Urlaubstag aus?",
      "Was war dein größtes Abenteuer auf Reisen?",
      "Hast du Lieblingsorte, zu denen du immer wieder zurückkehren würdest?",
      "Welche Reise hat deine Sicht auf die Welt verändert?",
      "Was bedeutet für dich echtes Fernweh?",
      "Planst du Reisen lieber durch oder lässt du dich treiben?"
    ]
  },
  {
    "title": "🐾 Hast du eine Verbindung zur Natur oder zu Tieren?",
    "questions": [
      "Hattest oder hast du ein Haustier?",
      "Bist du eher Katzen- oder Hundemensch – oder beides nicht?",
      "Gibt es ein Tier, das du besonders faszinierend findest?",
      "Wie oft bist du in der Natur unterwegs?",
      "Was gibt dir Energie – Wald, Meer, Berge oder Wiese?",
      "Wie oft brauchst du Natur, um dich wohlzufühlen?",
      "Was war deine schönste Begegnung mit einem Tier?",
      "Würdest du gerne auf dem Land leben?",
      "Gibt es ein Tier, das du gerne einmal in freier Wildbahn sehen würdest?",
      "Wie gehst du mit Tieren um, die du nicht kennst?",
      "Hast du schon mal gezeltet oder draußen übernachtet?",
      "Welche Jahreszeit genießt du draußen am meisten?",
      "Gibt es einen Naturort, der dir besonders viel bedeutet?",
      "Was wäre dein Traumhaustier, wenn alles möglich wäre?",
      "Wie achtest du auf Umwelt und Natur im Alltag?"
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
