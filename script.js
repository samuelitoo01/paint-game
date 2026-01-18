// Crear un paint con canvas 
document.addEventListener('DOMContentLoaded', () => {
    const color = document.querySelector('.color');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const buttonRemove = document.querySelector('.btn');
    let dibujoActivo = false;

    // Creamos los eventos del mouse
    function eventosMouse(){

        canvas.addEventListener('mouseup' , () => {
            dibujoActivo = false ; 
            ctx.beginPath();
        })

        canvas.addEventListener('mousedown' , () => {
            dibujoActivo = true ;
        })

        canvas.addEventListener('mousemove' , (e) =>{
            if(!dibujoActivo) return ;

            const colorActual = color.value

            const positionMouseWin = canvas.getBoundingClientRect();
            // Obtengo la posicion del mouse respecto al canvas
            let x = e.clientX - positionMouseWin.left
            let y = e.clientY - positionMouseWin.top
            // Dibujo las lineas de manera individual para evitar bugs
            ctx.strokeStyle = colorActual
            ctx.lineTo(x,y)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(x,y);    
        })
    }

    eventosMouse();

    // Evento del botón para eliminar todo
    if (buttonRemove) {
        buttonRemove.addEventListener('click', function() {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            dibujoActivo = false;
        });
    } else {
        console.error('Error: No se encontró el botón');
    }
})
