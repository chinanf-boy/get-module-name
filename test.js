import test from 'ava';
import getname,{ sync,o2s } from '.';

const n = require('./package.json').name

test('async name', async t => {
	let res = await getname()
	t.is(res, n)
});

test('sync name', t => {
	let res = sync()
	t.is(res, n)
});

test('object 2 string', t => {
	let l = {
		0: 'g',
		1: 'e',
		10: '-',
		11: 'n',
		12: 'a',
		13: 'm',
		14: 'e',
		2: 't',
		3: '-',
		4: 'm',
		5: 'o',
		6: 'd',
		7: 'u',
		8: 'l',
		9: 'e',
	}
	let res = o2s(l)
	t.is(res, n)
});
