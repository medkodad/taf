import type { Wizard, NewWizard, Spell } from "./types";
import { ValidateSpellPower } from "./decorators";

export class Repository<T extends { id: number }> {
  protected items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return [...this.items]; }
}

export class WizardRepository extends Repository<Wizard> {
  private nextId = 1;

  // Exercice 1 : l'identifiant est attribué par le référentiel
  create(data: NewWizard): Wizard {
    const wizard: Wizard = { id: this.nextId++, ...data };
    this.add(wizard);
    return wizard;
  }

  // Exercice 2
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(
      wizard => wizard.house === house
    );
  }
}

// Exercice 4
export class SpellRepository extends Repository<Spell> {
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}
