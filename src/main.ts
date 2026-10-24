import type { NewWizard } from "./types";
import { WizardRepository, SpellRepository } from "./repository";

// ---------- Exercice 1 ----------
const wizards = new WizardRepository();
const newWizard: NewWizard = { name: "Harry Potter", house: "Gryffindor", level: 5, active: true };
console.log(wizards.create(newWizard));
wizards.create({ name: "Draco Malfoy", house: "Slytherin", level: 5, active: true });
wizards.create({ name: "Hermione Granger", house: "Gryffindor", level: 6, active: true });

// ---------- Exercice 2 ----------
console.log(wizards.findByHouse("Gryffindor"));

// ---------- Exercice 3 ----------
import type { SpellCastEvent } from "./types";

function handleSpellCast(event: SpellCastEvent): void {
  console.log(
    `Wizard ${event.wizardId} cast ${event.spellName}`
  );
}

handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus"
});

// ---------- Exercice 4 ----------
const spells = new SpellRepository();

spells.add({
  id: 102,
  name: "Protego",
  category: "defense",
  power: 50
});

try {
  spells.add({
    id: 103,
    name: "Invalid Spell",
    category: "attack",
    power: -10
  });
} catch (error) {
  console.log((error as Error).message);
}

// ---------- Exercice 5 ----------
import { Cache } from "./decorators";

class SpellCalculator {
  @Cache
  calculatePower(basePower: number, multiplier: number): number {
    console.log("Calculating...");

    return basePower * multiplier;
  }
}

const calculator = new SpellCalculator();

console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(10, 3));
console.log(calculator.calculatePower(5, 2));

// ---------- Exercice 6 ----------
import type { House, Wizard } from "./types";

const validHouses: readonly House[] = [
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff"
];

function isHouse(value: unknown): value is House {
  return (
    typeof value === "string" &&
    validHouses.some(house => house === value)
  );
}

function isWizard(value: unknown): value is Wizard {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string" &&
    isHouse(candidate.house) &&
    typeof candidate.level === "number" &&
    typeof candidate.active === "boolean"
  );
}

const validData: unknown = {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true
};

const invalidData: unknown = {
  id: 2,
  name: "Viktor",
  house: "Durmstrang",
  level: 5,
  active: true
};

console.log(isWizard(validData));   // true
console.log(isWizard(invalidData)); // false
