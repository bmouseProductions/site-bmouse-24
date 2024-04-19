import { Botao } from "../../../../components/BotaoEscuro/Botao";
import SliderHome from "../../../../components/sliders/SliderHome";


export const SectionThree = () => {
  return (
    <section className=" bg-section-one2 bg-contain mx-auto  flex items-center lg:!bg-400 xl:!bg-600 ">
      <div className=" container px-5 lg:px-10 xl:px-20 mx-auto flex flex-col md:flex-row gap-10 justify-between ">
        <div className="relative mb-10 w-full flex justify-center md:items-end ">
          <SliderHome />
          <div className="absolute bottom-0 mb-[-40px] w-full max-w-[200px] ">
            <Botao tipo="tipo2" text="Saiba Mais" link="/sobre" />
          </div>
        </div>
          
        <div className="text-white flex flex-col gap-5 xl:gap-10 md:max-w-[50%] ">
          <div className=" py-2 px-3 max-w-[130px] xl:max-w-[180px] xl:text-xl text-center uppercase rounded-3xl border-2 border-white">
            <h3>Sobre nós</h3>
          </div>
          <h1 className="font-tittle text xl:text-[150px] ">
            Somos especialistas!
          </h1>
          <div className="flex flex-col  gap-5">
            <p>
              A BMouse é muito mais do que uma agência de marketing. Somos uma agência de criatividade com um compromisso inabalável em levar a sua marca a novos patamares.
            </p>
            <p>
              Os nossos diferenciais? Além de possuirmos o Studio BMouse, um espaço equipado com tecnologia de ponta para produções audiovisuais de altíssima qualidade, ainda contamos com uma equipe de especialistas em cada setor.
            </p>

            <strong className="font-bold">
              Conte com a BMouse para fazer a diferença no mercado.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
