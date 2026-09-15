"use client";

import { useState } from "react";
import LinkArrow from "@/components/icons/LinkArrow";
import { ENQUIRY_KINDS } from "./contact.data";
import s from "./Contact.module.css";

/**
 * Figma node 1993:3279 — the message form.
 *
 * Real fields, not the design's drawn rectangles: every one is a labelled
 * control with the right `type` and `autocomplete`, so a browser can fill it
 * and a screen reader can announce it. The labels are the design's own small
 * caps, and they are <label for> rather than captions floating above inputs.
 *
 * **It posts nowhere yet.** There is no endpoint in this project and no mail
 * credentials, so submitting validates the fields and stops. Wiring it to a
 * form service or a route handler is a separate, small change; until then the
 * page says so rather than pretending to have sent something.
 */
export default function ContactForm() {
  const [attempted, setAttempted] = useState(false);

  return (
    <form
      className={s.form}
      /* Nothing to post to yet — see the note above. Validation still runs,
         which is why this is a real form and not a div of inputs. */
      onSubmit={(e) => {
        e.preventDefault();
        setAttempted(true);
      }}
      noValidate={false}
    >
      <p className={`${s.formKicker} wf-label`}>SEND A MESSAGE</p>

      <div className={s.row}>
        <div className={s.field}>
          <label className="wf-label" htmlFor="contact-first">
            FIRST NAME
          </label>
          <input
            id="contact-first"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
          />
        </div>

        <div className={s.field}>
          <label className="wf-label" htmlFor="contact-last">
            LAST NAME
          </label>
          <input
            id="contact-last"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      <div className={s.field}>
        <label className="wf-label" htmlFor="contact-email">
          EMAIL
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className={s.field}>
        <label className="wf-label" htmlFor="contact-org">
          ORGANISATION
        </label>
        <input
          id="contact-org"
          name="organisation"
          type="text"
          autoComplete="organization"
        />
      </div>

      <div className={s.field}>
        <label className="wf-label" htmlFor="contact-kind">
          WHAT&rsquo;S THIS ABOUT
        </label>
        {/* A real <select>, so it opens the platform's own picker on a phone.
            Figma's caret is the control's own on every browser but Safari,
            which is why the arrow is drawn by CSS rather than typed here. */}
        <select id="contact-kind" name="kind" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          {ENQUIRY_KINDS.map((kind) => (
            <option key={kind} value={kind}>
              {kind}
            </option>
          ))}
        </select>
      </div>

      <div className={s.field}>
        <label className="wf-label" htmlFor="contact-message">
          MESSAGE
        </label>
        <textarea id="contact-message" name="message" rows={5} required />
      </div>

      <div className={s.consent}>
        <input id="contact-consent" name="consent" type="checkbox" required />
        <label htmlFor="contact-consent" className="wf-small">
          I&rsquo;ve read the privacy notice and agree to be contacted about
          this enquiry.
        </label>
      </div>

      <div className={s.submitRow}>
        <button type="submit" className={`${s.submit} wf-holo-hover`}>
          Send message <LinkArrow />
        </button>
      </div>

      {/* Said plainly rather than faked. `role="status"` so it is announced
          once when it appears, without stealing focus. */}
      {attempted && (
        <p className={`${s.notice} wf-small`} role="status">
          This form is not connected to an inbox yet. In the meantime, please
          write to{" "}
          <a href="mailto:admin@lifesciencetrust.com">
            admin@lifesciencetrust.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
