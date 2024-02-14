export function NoteCard(){
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
            <span className='text-sm font-medium text-slate-300'>
                há 2 dias
            </span>
            
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at libero voluptate, hic esse ea quos deserunt ratione tempore officiis, nostrum deleniti? Ducimus quisquam dicta soluta deserunt officiis inventore a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam libero nulla odio tenetur? Labore provident expedita, aliquam dolorum rem fugit natus pariatur error nulla, tempore voluptatum doloribus. Ea, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid possimus facere tempora temporibus consequuntur, quos libero accusantium commodi exercitationem excepturi ad earum reprehenderit incidunt molestias harum adipisci eveniet? Veritatis!
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
        </button>
    )
}