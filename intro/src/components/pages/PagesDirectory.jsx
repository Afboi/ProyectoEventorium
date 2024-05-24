export function PagesDirectory() {
  return (
    <div className="flex flex-col m-10">
      <h1 className="font-medium text-sm">Directorio de Páginas</h1>
      <p>Aqui puede encontrar todas las páginas de la aplicación.</p>
      <div className="m-2 flex flex-col">
      <p className="font-medium">Aplicación</p>
      <a href="/Homepage">-Página Principal</a>
      <a href="/EventDetails ">-Detalles de Eventos</a>
      </div>
      <div className="m-2 flex flex-col">
      <p className="font-medium">Panel de Acceso</p>
      <a href="/Registration">-Registro</a>
      <a href="/SignIn">-Inicio de Sesión</a>
      <a href="/PasswordRecovery">-Recuperación de Contraseña</a>
      </div>

    </div>
  );
}