
import {useContext} from 'react';
import {useMyContext} from '../app/MyStateProvider';

const Login = () =>{
    const [state,setState] = useMyContext();

    return( <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} />
    );
}

export default Login;