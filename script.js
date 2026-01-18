// Crear un paint con canvas 

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

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

        const positionMouseWin = canvas.getBoundingClientRect();

        let x = e.clientX - positionMouseWin.left
        let y = e.clientY - positionMouseWin.top

        ctx.lineTo(x,y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x,y);    
    })
}

eventosMouse();