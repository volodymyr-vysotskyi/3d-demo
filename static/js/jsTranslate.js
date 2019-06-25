var jsTrans = {
	'Unsupported file format!': 'Unsupported file format!',
	'Too large file. maximum size is 20 mb!': 'Too large file. maximum size is 20 mb!'
};

function jsTranslate(translateKey){
	if(jsTrans[translateKey]){
		return jsTrans[translateKey];
	} else {
		return translateKey;
	}
}