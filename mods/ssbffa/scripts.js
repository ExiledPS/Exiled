'use strict';

const fs = require('fs');

function extend(obj, src) {
	for (let key in src) {
		if (src.hasOwnProperty(key)) obj[key] = src[key];
	}
	return obj;
}

let ExiledSSB = JSON.parse(fs.readFileSync('config/ssb.json', 'utf-8'));

exports.BattleScripts = {
	randomCustomSSBTeam: function (side) {
		//let ExiledSSB = JSON.parse(fs.readFileSync('config/ssb.json', 'utf-8'));
		let team = [];
		let variant = this.random(2);

		//Save these incase we decide to readd base sets
		/*var baseSets = {
			'Zarel': {
				species: 'Meloetta',
				ability: 'Serene Grace',
				item: '',
				gender: 'F',
				moves: ['lunardance', 'fierydance', 'perishsong', 'petaldance', 'quiverdance'],
				signatureMove: "Relic Song Dance",
				evs: {
					hp: 4,
					atk: 252,
					spa: 252
				},
				nature: 'Quiet',
			},
			'Joim': {
				species: 'Zapdos',
				ability: 'Tinted Lens',
				item: 'Life Orb',
				gender: 'M',
				shiny: true,
				moves: ['thunderbolt', 'hurricane', 'quiverdance'],
				signatureMove: "Gaster Blaster",
				evs: {
					hp: 4,
					spa: 252,
					spe: 252
				},
				ivs: {
					atk: 0
				},
				nature: 'Modest',
			},
			'*SpaceGazer': {
				species: 'Registeel',
				ability: 'No Guard',
				item: 'Weakness Policy',
				moves: ['Zap Cannon', 'Iron Head', 'Stone Edge'],
				signatureMove: 'Spacial Blast',
				evs: {
					atk: 252,
					spd: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'*Spacial Bot': {
				species: 'Regirock',
				ability: 'Sturdy',
				item: 'Leftovers',
				moves: [
					['Stone Edge', 'Earthquake'][this.random(2)], 'Explosion', 'Iron Head'
				],
				signatureMove: 'Ancient Ritual',
				evs: {
					atk: 252,
					spd: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'*Exiled Bot': {
				species: 'Regice',
				ability: 'Flash Fire',
				item: 'Leftovers',
				moves: ['Ice Beam', 'Ancient Power', 'Thunderbolt'],
				signatureMove: 'Frostbite',
				evs: {
					spa: 252,
					spd: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'‽Edles': {
				species: 'Unown',
				ability: 'Defiant',
				item: 'Choice Specs',
				moves: ['Hidden Power'],
				signatureMove: 'Ad Blitz',
				evs: {
					spa: 252,
					spd: 252,
					hp: 4
				},
				nature: 'Modest',
			}
		};*/
		//Parse player objects into sets.
		let ssbSets = {};
		for (let key in ExiledSSB) {
			if (!ExiledSSB[key].active) continue; //This pokemon is not to be used yet.
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)] = {};
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].name = ExiledSSB[key].name;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].species = ExiledSSB[key].species;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].ability = ExiledSSB[key].ability;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].item = ExiledSSB[key].item;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].gender = (ExiledSSB[key].gender === 'random' ? ((variant === 1) ? 'M' : 'F') : ExiledSSB[key].gender);
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].moves = ExiledSSB[key].movepool;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].signatureMove = ExiledSSB[key].cMove;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].evs = ExiledSSB[key].evs;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].ivs = ExiledSSB[key].ivs;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].nature = ExiledSSB[key].nature;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].level = parseInt(ExiledSSB[key].level);
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].shiny = ExiledSSB[key].shiny;
			ssbSets[(ExiledSSB[key].symbol + ExiledSSB[key].name)].happiness = ExiledSSB[key].happiness;
		}

		//var sets = extend(baseSets, ssbSets);
		let backupSet = {
			'Unown': {
				species: 'Unown',
				ability: 'Levitate',
				item: 'Choice Specs',
				moves: ['Hidden Power'],
				evs: {
					spa: 252,
					spd: 252,
					hp: 4,
				},
				nature: 'Modest',
			},
		};
		let sets;
		if (Object.keys(ssbSets).length === 0) {
			sets = extend(ssbSets, backupSet);
		} else {
			sets = ssbSets;
		}

		for (let k in sets) {
			sets[k].moves = sets[k].moves.map(toId);
			if (sets[k].baseSignatureMove) sets[k].baseSignatureMove = toId(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		let pool = Object.keys(sets);
		for (let i = 0; i < (Object.keys(sets).length < 6 ? Object.keys(sets).length : 6); i++) {
			let name = this.sampleNoReplace(pool);
			if (i === 1 && ExiledSSB[toId(side.name)] && ExiledSSB[toId(side.name)].active && sets[(ExiledSSB[toId(side.name)].symbol + ExiledSSB[toId(side.name)].name)] && pool.indexOf((ExiledSSB[toId(side.name)].symbol + ExiledSSB[toId(side.name)].name)) !== -1) {
				pool.push(name); //re-add
				name = pool[pool.indexOf((ExiledSSB[toId(side.name)].symbol + ExiledSSB[toId(side.name)].name))];
				pool.splice(pool.indexOf(name), 1);
			}
			let set = sets[name];
			set.name = name;
			if (!set.level) set.level = 100;
			if (!set.ivs) {
				set.ivs = {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				};
			} else {
				for (let iv in {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) {
				set.evs = {
					hp: 84,
					atk: 84,
					def: 84,
					spa: 84,
					spd: 84,
					spe: 84,
				};
			}
			if (set.signatureMove) {
				set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			}
			team.push(set);
		}
		return team;
	},
};
