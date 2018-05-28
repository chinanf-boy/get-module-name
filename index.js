'use strict';
const pkgConf = require('pkg-conf');

function o2s(o){
	return Object.keys(o).map(k =>o[k]).join('')
}

const sync = function(){
	const config = pkgConf.sync('name');
	return o2s(config)
}

const getname = async function(){
	const config = await pkgConf('name');
	return o2s(config)
};

module.exports = getname
module.exports.sync = sync
module.exports.o2s = o2s

