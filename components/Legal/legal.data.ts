/**
 * The privacy notice.
 *
 * Written against what this site actually does, established by reading it
 * rather than by assuming a template: there is no analytics script, nothing is
 * written to cookies or local storage, and neither form posts anywhere yet.
 * What it does do is load fonts from Google and, on the education page, a
 * YouTube player. Those are the only places a visitor's details leave the
 * page, so those are what the notice leads on.
 *
 * Three things in here are placeholders the trust has to settle, and they are
 * marked in the copy rather than invented: the registered entity and address,
 * the hosting provider, and who to name as the contact for data questions.
 */

export const UPDATED = "15 September 2026";

export type LegalSection = { heading: string; body: string[] };

export const PRIVACY: LegalSection[] = [
  {
    heading: "The short version",
    body: [
      "This site collects almost nothing. It sets no cookies of its own, it stores nothing on your device, and it runs no analytics or advertising scripts. Nobody is being counted, profiled or followed here.",
      "Two things do reach other companies when you visit: the typefaces are served by Google, and the film on the Education page is played by YouTube. Both are explained below, along with what to do if you would rather they did not.",
    ],
  },
  {
    heading: "Who we are",
    body: [
      "This site is published by the LSeT Foundation, the Life Science Education Trust, which runs the Institute of Animal Care and Management in Bengaluru and the conservation and technology work described elsewhere on these pages.",
      "For anything about this notice or about information we hold, write to admin@lifesciencetrust.com.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Nothing, by default. There is no account to create, no tracking pixel, no advertising network, and no cookie banner because there are no cookies to consent to.",
      "If you write to us, whether through a form on this site or directly by email, we hold what you send us for as long as it takes to answer you and to keep a record of the conversation. We do not add it to a mailing list unless you ask us to, and we do not pass it to anyone outside the trust.",
    ],
  },
  {
    heading: "The forms on this site",
    body: [
      "The contact form and the newsletter field are not connected to an inbox yet. Nothing you type into them is sent, stored or transmitted anywhere; submitting the contact form validates what you have written and stops there, and tells you so.",
      "When they are connected, this notice will say what happens to a submission, who processes it and how long it is kept, before the forms start working. Until then, the way to reach us is email.",
    ],
  },
  {
    heading: "Typefaces",
    body: [
      "The site's typefaces are loaded from Google Fonts. To deliver them your browser makes a request to fonts.googleapis.com and fonts.gstatic.com, and Google receives your IP address and basic request information as part of that. Google states that it does not use these requests to build advertising profiles, but the request is still made, and it is made before you interact with anything.",
      "If that matters to you, a browser extension that blocks third-party requests will stop it, and the site remains readable in a fallback typeface.",
    ],
  },
  {
    heading: "The film on the Education page",
    body: [
      "The Education page carries a film hosted on YouTube. Until it plays, the page shows a still image and nothing of YouTube's is loaded. The player loads when the film is in view and you stop scrolling, or when you press play, and from that moment YouTube receives your IP address and can set its own cookies under its own policy.",
      "We use the youtube-nocookie.com player, which does not set advertising cookies before playback, and we have turned off suggestions from other channels at the end. If you do not want YouTube to load at all, do not scroll to rest on that section, or block the domain.",
    ],
  },
  {
    heading: "Hosting and server logs",
    body: [
      "Like any website, the servers that deliver these pages keep short-lived technical logs: IP address, time, the page requested, and the browser making the request. They exist to serve the site and to find faults, not to identify readers, and they are not combined with anything else.",
      "PLACEHOLDER: name the hosting provider here, and the region the site is served from, once that is settled.",
    ],
  },
  {
    heading: "Links away from here",
    body: [
      "This site links out to antzsystems.com, lifesciencetrust.org, our partners' sites and our social accounts. Once you follow one of those links you are on somebody else's site, under their privacy policy, and this notice no longer applies.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask what information we hold about you, ask for it to be corrected, or ask us to delete it. Because we hold so little, the answer to the first question is usually short. Write to admin@lifesciencetrust.com and we will answer within five working days, which is the same undertaking we make on the contact page.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this site starts doing something it does not do today, such as measuring traffic or accepting form submissions, this notice will be updated before that happens rather than after. The date at the top is the date of the current version.",
    ],
  },
];
