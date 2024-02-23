const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center
            fixed bottom-0 left-0 right-0
            bg-gradient-to-r from-pink-footer to-blue-footer
            p-6"
    >
      <div className="text">
        <p
          className="text-white 
                    uppercase font-normal text-base
                    mb-[10px]"
        >
          Testar o Premium de graça
        </p>
        <p className="text-white text-base font-medium">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div
        className="bg-white text-black text-base 
                font-bold py-4 px-8 border-none 
                rounded-3xl cursor-pointer hover:scale-105 
                transition-transform"
      >
        <button type="button">Inscreva-se grátis</button>
      </div>
    </footer>
  );
};

export default Footer;
