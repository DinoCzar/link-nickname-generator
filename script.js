const prefixName = [
	'The ',
	'The ',
	'The ',
	'Mr. ',
	'Mister ',
	'Sir ',
	'Lord ',
	'Count ',
	'Lt. ',
	'Prof. ',
	'President ',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
];

const firstName = [
	'Doodle',
	'Bugger',
	'Strudel',
	'Poodle',
	'Noodle',
	'Butter',
	'Nut',
	'Butt',
	'Snugger',
	'Snicker',
	'Buggo',
	'Snuggle',
	'Strugger',
	'Struggle',
	'Jugger',
	'',
	'Fluffer',
	'Nutter',
	'Chunker',
];
const secondName = [
	'Doodle',
	'Bugger',
	'Strudel',
	'Poodle',
	'Noodle',
	'Butter',
	'Nut',
	'Butt',
	'Wuggo',
	'Wicker',
	'Squash',
	'Strudes',
	'naut',
	'Squasher',
	'Nug',
	'Snuggle',
	'Bus',
	'Strut',
	'Jugger',
	'Doods',
	'Sauce',
	'',
	'Bot',
	'Nuggo',
	'Nutter',
	'Fluff',
	'Monster',
	'Nuffer',
	'Muffin',
];

const content = document.querySelector('#content');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
	let prefix = prefixName[Math.floor(Math.random() * prefixName.length)];
	let first = firstName[Math.floor(Math.random() * firstName.length)];
	let second = secondName[Math.floor(Math.random() * secondName.length)];
	if (first === '' && second === '') {
		return (content.textContent = 'The Noodler');
	} else if (second === 'naut') {
		return (content.textContent = 'The ' + first + second);
	}
	if (first === second) {
		return (content.textContent = 'The ' + first);
	} else {
		return (content.textContent = prefix + ' ' + first + ' ' + second);
	}
});