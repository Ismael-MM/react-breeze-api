import { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/ui/Spinner';
import useAuthContext from '../hooks/useAuthContext';
export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [direccion, setDireccion] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [cp, setCp] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const { register, errors, loading } = useAuthContext();
    const handleRegister = async (e) => {
        e.preventDefault();
        register({ name, email, password, apellido1, apellido2, direccion, provincia, localidad, cp, telefono, password_confirmation });
    };
    return (<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={handleRegister}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input id="name" name="name" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              apellido1
            </label>
            <div className="mt-2">
              <input id="apellido1" name="apellido1" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={apellido1} onChange={(e) => setApellido1(e.target.value)}/>
            </div>
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              apellido2
            </label>
            <div className="mt-2">
              <input id="apellido2" name="apellido2" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={apellido2} onChange={(e) => setApellido2(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              direccion
            </label>
            <div className="mt-2">
              <input id="direccion" name="direccion" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              provincia
            </label>
            <div className="mt-2">
              <input id="provincia" name="provincia" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={provincia} onChange={(e) => setProvincia(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              localidad
            </label>
            <div className="mt-2">
              <input id="localidad" name="localidad" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={localidad} onChange={(e) => setLocalidad(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">
              cp
            </label>
            <div className="mt-2">
              <input id="cp" name="cp" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={cp} onChange={(e) => setCp(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              telefono
            </label>
            <div className="mt-2">
              <input id="telefono" name="telefono" type="text" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `} value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 $`} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input id="password_confirmation" name="password_confirmation" type="password" autoComplete="current-password" className={`block w-full border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 $`} value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center gap-x-2 disabled:cursor-not-allowed" disabled={loading}>
              <Spinner loading={loading}/>
              <span>Sign up</span>
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>);
}
