export type Stat = {
  /** The figure itself, as a number so it can be counted up to. */
  value: number;
  /** Trailing glyph where the design has one — "15+" and "12+". Content, not
   *  decoration, so it is never part of the counted value. */
  suffix?: string;
  label: string;
};

/** Figma `Frame 1984078221` node 2127:9943 — four cells, left to right. */
export const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Years Active" },
  { value: 4, label: "Continents" },
  { value: 3, label: "Conservation Projects" },
  { value: 12, suffix: "+", label: "Partner Institutions" },
];
