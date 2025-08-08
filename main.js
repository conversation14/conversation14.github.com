function printAll(){
    const json = `
    [
  {
    "title": "🎉 Was macht dir Spaß im Leben?",
    "questions": [
      "Wann hast du zuletzt so richtig gelacht?",
      "Was war dieses Jahr dein schönster Moment bisher?",
      "Welche kleinen Dinge machen dich sofort glücklich?",
      "Hast du einen Insider-Witz mit Freunden?",
      "Gibt es etwas, das dich immer in gute Laune versetzt?",
      "Wann hast du zuletzt etwas zum ersten Mal gemacht?",
      "Was ist für dich ein perfekter Samstagabend?",
      "Welche Aktivität gibt dir das Gefühl, wieder Kind zu sein?",
      "Hast du einen Lieblingsplatz, der dich sofort entspannt?",
      "Wann hast du dich zuletzt richtig frei gefühlt?",
      "Gibt es ein Lied, das dich sofort zum Tanzen bringt?",
      "Wann warst du zuletzt spontan unterwegs?",
      "Welcher Tag war in letzter Zeit besonders unvergesslich für dich?",
      "Gibt es ein Ritual, das dich sofort aufheitert?",
      "Welche Aktivität macht dich immer energiegeladen?"
    ]
  },
  {
    "title": "👩‍🍳 Kochen, Essen & Genießen",
    "questions": [
      "Welches Gericht hast du zuletzt selbst gekocht?",
      "Gibt es ein Familienrezept, das dir besonders am Herzen liegt?",
      "Welche Küche aus der Welt würdest du gerne besser kennenlernen?",
      "Was ist dein einfachstes, aber bestes Rezept?",
      "Welche Zutat hast du immer auf Vorrat?",
      "Hast du schon mal ein Rezept völlig improvisiert?",
      "Welches Essen passt perfekt zu einem gemütlichen Abend?",
      "Magst du lieber Frühstück, Mittagessen oder Abendessen?",
      "Hast du schon mal bei jemandem etwas gegessen, das dich total überrascht hat?",
      "Was bestellst du, wenn du absolut unschlüssig bist?",
      "Hast du schon mal etwas gegessen, nur um jemandem zuliebe?",
      "Was ist deine liebste Beilage zu fast allem?",
      "Gibt es ein Essen, das du nur im Urlaub isst?",
      "Was ist dein Lieblingsessen im Winter?",
      "Was ist dein persönliches Wohlfühlgericht?"
    ]
  },
  {
    "title": "💬 Erinnerungen & Geschichten",
    "questions": [
      "Was war dein schönstes Erlebnis als Kind?",
      "Gibt es eine Reise, die du nie vergessen wirst?",
      "Was war das letzte Mal, dass du dich richtig überwunden hast?",
      "Hast du eine witzige Kindheitserinnerung?",
      "Gab es einen Moment, in dem du dich besonders mutig gefühlt hast?",
      "Hast du schon mal jemanden aus Zufall wiedergetroffen?",
      "Welche Begegnung hat dich nachhaltig beeindruckt?",
      "Gab es ein Ereignis, das deine Sicht auf etwas verändert hat?",
      "Wann warst du das letzte Mal richtig stolz auf dich?",
      "Hast du schon mal etwas erlebt, das fast wie im Film war?",
      "Gab es in deiner Schulzeit einen besonders schönen Moment?",
      "Was war das letzte Mal, dass du jemandem eine Freude gemacht hast?",
      "Hast du schon mal etwas gemacht, das niemand von dir erwartet hätte?",
      "Gibt es einen Ort aus deiner Kindheit, den du heute noch besuchst?",
      "Welche Geschichte erzählst du immer wieder gern?"
    ]
  },
  {
    "title": "🌍 Welt, Menschen & Gedanken",
    "questions": [
      "Welches aktuelle Thema beschäftigt dich gerade?",
      "Gibt es eine Erfindung, die dein Leben erleichtert hat?",
      "Welche kleine Sache macht die Welt für dich schöner?",
      "Was würdest du gerne besser verstehen?",
      "Welche Sprache würdest du gerne sprechen können?",
      "Was findest du faszinierend an anderen Kulturen?",
      "Wenn du einen Tag unsichtbar wärst – was würdest du tun?",
      "Gibt es ein Land, das du gern für längere Zeit erleben würdest?",
      "Welche Erfindung wünschst du dir für die Zukunft?",
      "Was sollte deiner Meinung nach jeder mal im Leben erlebt haben?",
      "Gibt es eine Sache, die du gerne an der Welt ändern würdest?",
      "Was inspiriert dich, Neues zu lernen?",
      "Welche Tradition aus einem anderen Land gefällt dir?",
      "Was hat dich zuletzt so richtig zum Nachdenken gebracht?",
      "Gibt es eine Fähigkeit, die alle Menschen haben sollten?"
    ]
  },
  {
    "title": "🏡 Zuhause & Wohlfühlen",
    "questions": [
      "Wie sieht dein Lieblingsplatz zu Hause aus?",
      "Hast du eine bestimmte Ecke, in der du besonders gern liest oder entspannst?",
      "Welche drei Dinge dürfen in deiner Wohnung nicht fehlen?",
      "Bist du eher der Minimalist oder der Sammler?",
      "Welche Farbe würdest du sofort an deine Wand streichen?",
      "Was macht für dich ein gemütliches Zuhause aus?",
      "Hast du Pflanzen? Falls ja, wie viele überleben bei dir?",
      "Gibt es ein Möbelstück, das dir besonders wichtig ist?",
      "Hörst du Musik, wenn du zu Hause bist?",
      "Was ist das Erste, das du machst, wenn du heimkommst?",
      "Hast du eine Deko, die dich an einen besonderen Moment erinnert?",
      "Magst du lieber große offene Räume oder kleine gemütliche?",
      "Gibt es einen Geruch, der für dich sofort 'Zuhause' bedeutet?",
      "Welche Aussicht würdest du gerne aus deinem Fenster haben?",
      "Wie sieht für dich ein perfekter Abend zu Hause aus?"
    ]
  }
]
`
/*
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
  },
  {
    "title": "🎉 Was macht dir Spaß im Leben?",
    "questions": [
      "Wann hast du zuletzt so richtig gelacht?",
      "Was war dieses Jahr dein schönster Moment bisher?",
      "Welche kleinen Dinge machen dich sofort glücklich?",
      "Hast du einen Insider-Witz mit Freunden?",
      "Gibt es etwas, das dich immer in gute Laune versetzt?",
      "Wann hast du zuletzt etwas zum ersten Mal gemacht?",
      "Was ist für dich ein perfekter Samstagabend?",
      "Welche Aktivität gibt dir das Gefühl, wieder Kind zu sein?",
      "Hast du einen Lieblingsplatz, der dich sofort entspannt?",
      "Wann hast du dich zuletzt richtig frei gefühlt?",
      "Gibt es ein Lied, das dich sofort zum Tanzen bringt?",
      "Wann warst du zuletzt spontan unterwegs?",
      "Welcher Tag war in letzter Zeit besonders unvergesslich für dich?",
      "Gibt es ein Ritual, das dich sofort aufheitert?",
      "Welche Aktivität macht dich immer energiegeladen?"
    ]
  },
  {
    "title": "👩‍🍳 Kochen, Essen & Genießen",
    "questions": [
      "Welches Gericht hast du zuletzt selbst gekocht?",
      "Gibt es ein Familienrezept, das dir besonders am Herzen liegt?",
      "Welche Küche aus der Welt würdest du gerne besser kennenlernen?",
      "Was ist dein einfachstes, aber bestes Rezept?",
      "Welche Zutat hast du immer auf Vorrat?",
      "Hast du schon mal ein Rezept völlig improvisiert?",
      "Welches Essen passt perfekt zu einem gemütlichen Abend?",
      "Magst du lieber Frühstück, Mittagessen oder Abendessen?",
      "Hast du schon mal bei jemandem etwas gegessen, das dich total überrascht hat?",
      "Was bestellst du, wenn du absolut unschlüssig bist?",
      "Hast du schon mal etwas gegessen, nur um jemandem zuliebe?",
      "Was ist deine liebste Beilage zu fast allem?",
      "Gibt es ein Essen, das du nur im Urlaub isst?",
      "Was ist dein Lieblingsessen im Winter?",
      "Was ist dein persönliches Wohlfühlgericht?"
    ]
  },
  {
    "title": "💬 Erinnerungen & Geschichten",
    "questions": [
      "Was war dein schönstes Erlebnis als Kind?",
      "Gibt es eine Reise, die du nie vergessen wirst?",
      "Was war das letzte Mal, dass du dich richtig überwunden hast?",
      "Hast du eine witzige Kindheitserinnerung?",
      "Gab es einen Moment, in dem du dich besonders mutig gefühlt hast?",
      "Hast du schon mal jemanden aus Zufall wiedergetroffen?",
      "Welche Begegnung hat dich nachhaltig beeindruckt?",
      "Gab es ein Ereignis, das deine Sicht auf etwas verändert hat?",
      "Wann warst du das letzte Mal richtig stolz auf dich?",
      "Hast du schon mal etwas erlebt, das fast wie im Film war?",
      "Gab es in deiner Schulzeit einen besonders schönen Moment?",
      "Was war das letzte Mal, dass du jemandem eine Freude gemacht hast?",
      "Hast du schon mal etwas gemacht, das niemand von dir erwartet hätte?",
      "Gibt es einen Ort aus deiner Kindheit, den du heute noch besuchst?",
      "Welche Geschichte erzählst du immer wieder gern?"
    ]
  },
  {
    "title": "🌍 Welt, Menschen & Gedanken",
    "questions": [
      "Welches aktuelle Thema beschäftigt dich gerade?",
      "Gibt es eine Erfindung, die dein Leben erleichtert hat?",
      "Welche kleine Sache macht die Welt für dich schöner?",
      "Was würdest du gerne besser verstehen?",
      "Welche Sprache würdest du gerne sprechen können?",
      "Was findest du faszinierend an anderen Kulturen?",
      "Wenn du einen Tag unsichtbar wärst – was würdest du tun?",
      "Gibt es ein Land, das du gern für längere Zeit erleben würdest?",
      "Welche Erfindung wünschst du dir für die Zukunft?",
      "Was sollte deiner Meinung nach jeder mal im Leben erlebt haben?",
      "Gibt es eine Sache, die du gerne an der Welt ändern würdest?",
      "Was inspiriert dich, Neues zu lernen?",
      "Welche Tradition aus einem anderen Land gefällt dir?",
      "Was hat dich zuletzt so richtig zum Nachdenken gebracht?",
      "Gibt es eine Fähigkeit, die alle Menschen haben sollten?"
    ]
  },
  {
    "title": "🏡 Zuhause & Wohlfühlen",
    "questions": [
      "Wie sieht dein Lieblingsplatz zu Hause aus?",
      "Hast du eine bestimmte Ecke, in der du besonders gern liest oder entspannst?",
      "Welche drei Dinge dürfen in deiner Wohnung nicht fehlen?",
      "Bist du eher der Minimalist oder der Sammler?",
      "Welche Farbe würdest du sofort an deine Wand streichen?",
      "Was macht für dich ein gemütliches Zuhause aus?",
      "Hast du Pflanzen? Falls ja, wie viele überleben bei dir?",
      "Gibt es ein Möbelstück, das dir besonders wichtig ist?",
      "Hörst du Musik, wenn du zu Hause bist?",
      "Was ist das Erste, das du machst, wenn du heimkommst?",
      "Hast du eine Deko, die dich an einen besonderen Moment erinnert?",
      "Magst du lieber große offene Räume oder kleine gemütliche?",
      "Gibt es einen Geruch, der für dich sofort 'Zuhause' bedeutet?",
      "Welche Aussicht würdest du gerne aus deinem Fenster haben?",
      "Wie sieht für dich ein perfekter Abend zu Hause aus?"
    ]
  }
]
*/
    const obj = JSON.parse(json);
    const objLen = (obj.length) * Math.random()
    const objElem = obj[Math.floor(objLen)]
    const liliLen = (objElem.questions.length) * Math.random()
    const question = objElem.questions[Math.floor(liliLen)]
    return {"title":objElem.title, "question":question}
}
