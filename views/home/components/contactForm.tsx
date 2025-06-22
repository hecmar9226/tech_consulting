export const ContactForm = () => {
  return (
    <form className="p-7 bg-white w-full lg:rounded-xl">
      <div className="flex flex-col gap-5">
        <div className="w-full flex  flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <p>Nombre</p>
            <input
              // onChange={handleInputChange}
              name='name'
              id='name'
              placeholder='Ingresa tu nombre'
              className='bg-gray-100 border-1 rounded-lg p-3'
              defaultValue="hector"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p>Apellidos</p>
            <input
              // onChange={handleInputChange}
              name='name'
              id='name'
              placeholder='Ingresa tu nombre'
              className='bg-gray-100 border-1 rounded-lg p-3'
              defaultValue="hector"
            />
          </div>
        </div>
        <div className="w-full flex  flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-1 w-full">
            <p>Correo</p>
            <input
              // onChange={handleInputChange}
              name='name'
              id='name'
              placeholder='Ingresa tu nombre'
              className='bg-gray-100 border-1 rounded-lg p-3'
              defaultValue="hector"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p>Teléfono</p>
            <input
              // onChange={handleInputChange}
              name='name'
              id='name'
              placeholder='Ingresa tu nombre'
              className='bg-gray-100 border-1 rounded-lg p-3'
              defaultValue="hector"
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-1 w-full">
            <p>Mensaje</p>
            <textarea
              name="message"
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full bg-gray-100 border-1 rounded-1 p-3 rounded-lg h-[80px] overflow-hidden"
            />
          </div>
        <div className="w-full">
          <button className="bg-green-400 text-black p-2 w-full lg:max-w-[100px]">
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}