"use client";

import { useEffect } from "react";

/**
 * One no-op touch listener, for one browser's sake.
 *
 * Mobile Safari does not apply `:active` to an element unless a touch listener
 * is registered somewhere above it. Without one, the entire touch state of
 * every button on this site — the holographic fill, the 4px lift, the label
 * turning black — is dead on an iPhone while working everywhere else. There is
 * no CSS answer to it; the listener has to exist.
 *
 * On `document` rather than on each button, because one listener covers the
 * whole page including anything added later. Passive, so it can never delay a
 * scroll. It renders nothing.
 *
 * A client component rather than an attribute in the root layout: that layout
 * is a server component, and an event handler cannot cross that boundary —
 * the build fails with "Event handlers cannot be passed to Client Component
 * props" if you try, which is how this ended up here.
 */
export default function TouchActive() {
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  return null;
}
