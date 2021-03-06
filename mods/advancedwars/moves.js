'use strict';

exports.BattleMovedex = {
	"infgun": {
		id: "infgun",
		name: "INF Gun",
		basePower: 50,
		pp: 99,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flame Burst", target);
		},
		target: "normal",
		type: "INF",
	},
	"bazooka": {
		id: "bazooka",
		name: "Bazooka",
		basePower: 100,
		pp: 3,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Octazooka", target);
		},
		target: "normal",
		type: "MECH",
	},
	"mechgun": {
		id: "mechgun",
		name: "Mech Gun",
		basePower: 60,
		pp: 99,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Metal Burst", target);
		},
		target: "normal",
		type: "INF",
	},
	"lcannon": {
		id: "lcannon",
		name: "lcannon",
		basePower: 100,
		pp: 9,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash Cannon", target);
		},
		target: "normal",
		type: "LTank",
	},
	"tankgun": {
		id: "tankgun",
		name: "Tank Gun",
		basePower: 70,
		pp: 99,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fire Blast", target);
		},
		target: "normal",
		type: "INF",
	},
	"mdcannon": {
		id: "mdcannon",
		name: "MDCannon",
		basePower: 150,
		pp: 6,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash Cannon", target);
		},
		target: "normal",
		type: "MDTank",
	},
	"mdtankgun": {
		id: "mdtankgun",
		name: "MDTank Gun",
		basePower: 80,
		pp: 99,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Inferno", target);
		},
		target: "normal",
		type: "INF",
	},
	"neocannon": {
		id: "neocannon",
		name: "Neocannon",
		basePower: 200,
		pp: 9,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Flash Cannon", target);
		},
		target: "normal",
		type: "Neotank",
	},
	"neogun": {
		id: "neogun",
		name: "NeoGun",
		basePower: 200,
		pp: 9,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Incinerate", target);
		},
		target: "normal",
		type: "INF",
	},
	"bmissile": {
		id: "bmissile",
		name: "BMissile",
		basePower: 125,
		pp: 6,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sinister Arrow Raid", target);
		},
		target: "normal",
		type: "BCopter",
	},
	"bcoptergun": {
		id: "bcoptergun",
		name: "BCopter Gun",
		basePower: 75,
		pp: 99,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Smart Strike", target);
		},
		target: "normal",
		type: "BCopter",
	},
	"fmissiles": {
		id: "fmissiles",
		name: "FMissiles",
		basePower: 150,
		pp: 9,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Focus Blast", target);
		},
		target: "normal",
		type: "Fighter",
	},
	"bombs": {
		id: "bombs",
		name: "Bombs",
		basePower: 255,
		pp: 9,
		accuracy: true,
		category: "Special",
		secondary: false,
		priority: false,
		flags: {protect: 1},
		onHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Egg Bomb", target);
			this.add('-anim', source, "Magnet Bomb", target);
		},
		target: "normal",
		type: "Bomber",
	},
};