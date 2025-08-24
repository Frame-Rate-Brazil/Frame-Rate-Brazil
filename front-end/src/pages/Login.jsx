import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="bg-base flex h-100 items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 rounded-2xl">
        <h1 className="text-2xl font-bold">Faça seu login</h1>
        <form action="" className="flex w-full flex-col gap-2">
          <input
            type="email"
            className="w-full rounded-full border border-gray-500 px-4 py-2"
            name=""
            id=""
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-500 px-4 py-2"
            name=""
            id=""
            placeholder="Digite sua senha"
          />

          <button className="bg-secondary-400 w-full cursor-pointer rounded-full border border-gray-500 px-4 py-2 text-base font-bold">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/resgiter" className="font-semibold underline">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login
