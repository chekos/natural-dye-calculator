export function alumGramsToTeaspoons(alumGrams) {
  return (alumGrams / 7.98).toFixed(2);
}

export function tartaricAcidGramsToTeaspoons(tartaricAcidGrams) {
  return (tartaricAcidGrams / 3.0).toFixed(2);
}

export function alumGramsNeeded(weightOfFabric) {
  return weightOfFabric / 10;
}

export function tartaricAcidGramsNeeded(weightOfFabric) {
  return weightOfFabric / 20;
}
