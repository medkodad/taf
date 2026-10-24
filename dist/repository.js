"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellRepository = exports.WizardRepository = exports.Repository = void 0;
const decorators_1 = require("./decorators");
class Repository {
    items = [];
    add(item) { this.items.push(item); }
    getAll() { return [...this.items]; }
}
exports.Repository = Repository;
class WizardRepository extends Repository {
    nextId = 1;
    // Exercice 1 : l'identifiant est attribué par le référentiel
    create(data) {
        const wizard = { id: this.nextId++, ...data };
        this.add(wizard);
        return wizard;
    }
    // Exercice 2
    findByHouse(house) {
        return this.getAll().filter(wizard => wizard.house === house);
    }
}
exports.WizardRepository = WizardRepository;
// Exercice 4
class SpellRepository extends Repository {
    add(spell) {
        super.add(spell);
    }
}
exports.SpellRepository = SpellRepository;
__decorate([
    decorators_1.ValidateSpellPower
], SpellRepository.prototype, "add", null);
