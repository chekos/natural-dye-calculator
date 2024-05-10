---
theme: "dashboard"
---

# Natural Dye Calculator

```js
import {
  alumGramsToTeaspoons,
  tartaricAcidGramsToTeaspoons,
  alumGramsNeeded,
  tartaricAcidGramsNeeded,
} from "./utils.js";
```

```js
const alumGrams = alumGramsNeeded(weightOfFabric);
const tartaricGrams = tartaricAcidGramsNeeded(weightOfFabric);
const alumTeaspoons = alumGramsToTeaspoons(alumGrams);
const tartarTeaspoons = tartaricAcidGramsToTeaspoons(tartaricGrams);
```

## Alum Mordant Recipe

<div class="grid grid-cols-2">
<div>

**Step 1**:
Weigh the fabric and record it.

```js
const weightOfFabric = view(
  Inputs.number([0, 500], {
    step: 1,
    value: 196,
    placeholder: "196",
    label: "Weight of fabric (grams)",
  })
);
```

**Step 2**:
Wet fabric in water. For wool, it takes a little bit of time for the water to get really into the wool.

**Step 3**:
Take fabric out of water and let excess water drain. The fabric needs to be wet but it doesn't need to be dripping.

**Step 4**:
In a pot add enough cold water to cover the fabric.

**Step 5**:
Calculate alum needed (10% of weight of fabric).

For ${weightOfFabric} grams of fabric, you'll need <strong>${alumGrams} grams of alum</strong>. This translates to <strong>${alumTeaspoons} teaspoons</strong> (or ${(alumTeaspoons / 3).toFixed(1)} tablespoons).

**Step 6**:
In a separate smaller pot or cup add hot water and dissolve the alum.

**Step 7**:
Once dissolved, add the alum and water mix to the larger pot with cold water.

<small>(We'll repeat the process now for tartaric acid)</small>

**Step 8**:
Calculate tartar needed (5% of weight of fabric).

For ${weightOfFabric} grams of fabric, you'll need <strong>${tartaricGrams} grams of tartaric acid</strong>. This translates to <strong>${tartarTeaspoons} teaspoons</strong> (or ${(tartarTeaspoons / 3).toFixed(1)} tablespoons).

**Step 9**:
In a separate smaller pot or cup add hot water and dissolve the tartar. You may reuse the one used for alum.

**Step 10**:
Once dissolved, add the tartar and water mix to the larger pot with cold water.

**Step 11**:
Mix the larger pot with cold water.

**Step 12**:
Add the fabric to the pot.

**Step 13**:
Bring the mix, with the fabric in, to a boil.

**Step 14**:
Turn the heat down to a simmer.

**Step 15**:
Stir the fabric every once in a while using a wooden or plastic spoon. Metal spoons may affect the mix unless it's stainless steel.

**Step 16**:
Make sure the fabric stays submerged in the mix.

**Step 17**:
Simmer for 45-60 minutes.

**Step 18**:
Let mix cool down (~2 hours depending on the room temp).

**Step 19**:
After mix is cool, you can remove the fabric from the mix.

**Step 20**:
Hang wool to air dry.

</div>
<div class="note" label="Summary">

For <strong>${weightOfFabric} grams of fabric</strong>, you need:

<ul>
<li>${alumGrams} grams of alum (<strong>${alumTeaspoons} teaspoons</strong> or ${(alumTeaspoons / 3).toFixed(1)} tablespoons).</li>

<li>${tartaricGrams} grams of tartaric acid (<strong>${tartarTeaspoons} teaspoons</strong> or ${(tartarTeaspoons / 3).toFixed(1)} tablespoons).</li>
</ul>

</div>
