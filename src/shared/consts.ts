const LIST_LEFT_PADDING: number = 6;
const LIST_RIGHT_PADDING: number = 6;
const PRIMARY_VIEW_LEFT_PADDING: number = 6;
const PRIMARY_VIEW_RIGHT_PADDING: number = 6;

const POKEMON_TYPE_ICON = {
  bug: require("./../assets/images/png/type-bug.png"),
  dark: require("./../assets/images/png/type-dark.png"),
  dragon: require("./../assets/images/png/type-dragon.png"),
  electric: require("./../assets/images/png/type-electric.png"),
  fairy: require("./../assets/images/png/type-fairy.png"),
  fighting: require("./../assets/images/png/type-fighting.png"),
  fire: require("./../assets/images/png/type-fire.png"),
  flying: require("./../assets/images/png/type-flying.png"),
  ghost: require("./../assets/images/png/type-ghost.png"),
  grass: require("./../assets/images/png/type-grass.png"),
  ground: require("./../assets/images/png/type-ground.png"),
  ice: require("./../assets/images/png/type-ice.png"),
  normal: require("./../assets/images/png/type-normal.png"),
  poison: require("./../assets/images/png/type-poison.png"),
  psychic: require("./../assets/images/png/type-psychic.png"),
  rock: require("./../assets/images/png/type-rock.png"),
  steel: require("./../assets/images/png/type-steel.png"),
  water: require("./../assets/images/png/type-water.png"),
  default: require("./../assets/images/png/type-ice.png"),
};

const BACKGROUND_COLOR = "#559EDF";

export {
  LIST_LEFT_PADDING,
  LIST_RIGHT_PADDING,
  PRIMARY_VIEW_RIGHT_PADDING,
  PRIMARY_VIEW_LEFT_PADDING,
  POKEMON_TYPE_ICON,
  BACKGROUND_COLOR
};
