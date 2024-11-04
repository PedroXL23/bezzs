import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
    return (
      <main>
        <header className="font-bold text-xl mb-4"> 
          <h3 className="font-bold text-xl mb-4 flex justify-center items-center text-center  " >Somos a Bezzs, uma plataforma criada para conectar pessoas que precisam se locomover com motoristas que oferecem esse serviço de maneira confiável e personalizada. Nosso principal objetivo é facilitar a mobilidade urbana, proporcionando conforto, praticidade e rapidez. Somos mais do que uma plataforma de transporte: somos parceiros da cidade e buscamos melhorar a vida das pessoas por meio de soluções inovadoras</h3>
        </header>
        <div className="h-screen flex justify-center items-center bg-slate-600 px-5"> 
        <form className="bg-white p-12 rounded-lg w-96 max-w-full flex justify center items justify-center flex-col gap-2">
          <h2 className="font-bold text-xl mb-4 flex justify-center items-center ">Login</h2>
          <input type="email" 
          placeholder="Usuário"
          className="input input-primary w-full" />
          <input type="password" 
          placeholder="Senha"
          className="input input-primary w-full"
          />
          <button className="btn btn-primary w-full "> Acessar </button>
        </form>
         </div>
      </main>
      
    );
  }