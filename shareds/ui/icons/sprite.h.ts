export interface SpritesMap {
  action: "caret-left" | "caret-right" | "check" | "x";
  brand: "logo";
  info: "exit" | "profile" | "shopping-cart" | "star-empty" | "star-fill";
}
export const SPRITES_META: {
  action: Array<"caret-left" | "caret-right" | "check" | "x">;
  brand: Array<"logo">;
  info: Array<
    "exit" | "profile" | "shopping-cart" | "star-empty" | "star-fill"
  >;
} = {
  action: ["caret-left", "caret-right", "check", "x"],
  brand: ["logo"],
  info: ["exit", "profile", "shopping-cart", "star-empty", "star-fill"]
};
