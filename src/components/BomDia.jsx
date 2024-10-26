import React from 'react'

function BomDia ({mensagem}) {
    return (
        <div className='bom-dia'>
            {mensagem ? "Bom dia" : "Boa noite"}
        </div>
    )
} 

export default BomDia