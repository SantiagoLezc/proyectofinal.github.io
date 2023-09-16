const PRESUPUESTAR = document.getElementById('presupuestar');
const GS = document.getElementById('gs');
const ERROR = document.getElementById('error');
PRESUPUESTAR.addEventListener('click', () => {
    const MATERIAL = parseInt(document.getElementById('material').value);
    const COMBUS = parseInt(document.getElementById('combus').value);
    const MANODEOBRA = parseInt(document.getElementById('ManoDeObra').value);
    const VIATICO = parseInt(document.getElementById('viatico').value);
    const OTROS = parseInt(document.getElementById('otros').value);
    const DIFICULTAD = parseFloat(document.getElementById('dificultad').value);

    let esValido = validarForm(MATERIAL, COMBUS, VIATICO, OTROS, MANODEOBRA, DIFICULTAD)
console.log(esValido);
    if (esValido === true) {
        if (MATERIAL >= 0 && COMBUS >= 0 && MANODEOBRA >= 0 && VIATICO >= 0 && OTROS >= 0 && DIFICULTAD >= 0) {

            let suma = (MATERIAL + MANODEOBRA + COMBUS + OTROS)
            let dificultad = suma * DIFICULTAD
            let resultado = (dificultad + suma)
            let presupuesto = resultado * 0.6
            let presupuestoFinal = resultado + presupuesto + VIATICO
            let presupuestoFormateado = presupuestoFinal.toLocaleString('es-ES', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            GS.innerHTML = `Presupuesto: ${presupuestoFormateado} Gs`
            GS.style.display = 'block';
            ERROR.style.display = 'none'
        }

    }

    else {
        ERROR.style.display = 'block'
        GS.style.display = 'none'
    }

})
function validarForm(MATERIAL, COMBUS, VIATICO, MANODEOBRA, OTROS, DIFICULTAD) {

    esValido = true

    //Material
    if (isNaN(MATERIAL)) {
        esValido = false
        document.getElementById('materialError').textContent = '* completa este campo'
        document.getElementById('material').classList.add('inputError')

    }
    else {
        document.getElementById('materialError').textContent = ''
        document.getElementById('material').classList.remove('inputError')
    }
    //Combus
    if (isNaN(COMBUS)) {
        esValido = false
        document.getElementById('combusError').textContent = '* completa este campo'
        document.getElementById('combus').classList.add('inputError')
    }
    else {
        document.getElementById('combusError').textContent = ''
        document.getElementById('combus').classList.remove('inputError')
    }
    //Viatico
    if (isNaN(VIATICO)) {
        esValido = false
        document.getElementById('viaticoError').textContent = '* completa este campo'
        document.getElementById('viatico').classList.add('inputError')
    }
    else {
        document.getElementById('viaticoError').textContent = ''
        document.getElementById('viatico').classList.remove('inputError')
    }
    //Mano de obra
    if (isNaN(MANODEOBRA)) {
        esValido = false
        document.getElementById('manoObraError').textContent = '* completa este campo'
        document.getElementById('ManoDeObra').classList.add('inputError')

    }
    else {
        document.getElementById('manoObraError').textContent = ''
        document.getElementById('ManoDeObra').classList.remove('inputError')
    }


    //OTROS
    if (isNaN(OTROS)) {
        esValido = false
        document.getElementById('otrosError').textContent = '* completa este campo'
        document.getElementById('otros').classList.add('inputError')

    }
    else {
        document.getElementById('otrosError').textContent = ''
        document.getElementById('otros').classList.remove('inputError')
    }

    //Dificultad
    if (isNaN(DIFICULTAD)) {
        esValido = false
        document.getElementById('dificultadError').textContent = '* completa este campo'
        document.getElementById('dificultad').classList.add('inputError')

    }
    else if (DIFICULTAD > 1) {
        esValido = false
        document.getElementById('dificultadError').textContent = '* Rango de valor entre 0 y 1'
        document.getElementById('dificultad').classList.add('inputError')
    }
    else {
        document.getElementById('dificultadError').textContent = ''
        document.getElementById('dificultad').classList.remove('inputError')
    }
    return esValido



}