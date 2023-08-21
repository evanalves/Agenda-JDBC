/**
 * Validação de formulário
 *@author 
 */

function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	
	if(nome === ""){
		alert('preencha o campo nome')
		frmContato.nome.focus()
		return false
	}else if (fone === ""){
		alert('preencha o campo Fone')
		frmContato.fone.focus()
	}else{
		document.forms["frmContato"].submit()
	}
	
}