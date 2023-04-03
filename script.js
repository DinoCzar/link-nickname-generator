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
    'Radioactive',
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
    'Link', 
    'Linc',
    'Lincoln',
    'Linkin\'',
    'Linker',
    'Stinkin\'',
    'Young',
    'Snuggle',
    'Chunker'
];
const secondName = [
	'Park',
    'Logs', 
    'Log',
    'Link',
    'Logger',
    'Dink',
    'Linc',
    'Dinc',
    'Monster',
    'Chunker',
    'Monkey',
    'Logs'
];

const content = document.querySelector('#content');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
	let prefix = prefixName[Math.floor(Math.random() * prefixName.length)];
	let first = firstName[Math.floor(Math.random() * firstName.length)];
	let second = secondName[Math.floor(Math.random() * secondName.length)];
	if (first === '' && second === '') {
		return (content.textContent = 'Link-a-dink');
	} else
	if (first === second) {
		return (content.textContent = 'The ' + first);
	} else {
		return (content.textContent = prefix + ' ' + first + ' ' + second);
	}
});
