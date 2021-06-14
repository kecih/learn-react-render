const Conditional = () => {
    const isLogin = true;
    const userName = 'Casey';
    
    // if(isLogin) return <div>Anda sudah login</div>
    // else return <div>Silahkan Login</div>

    // const message = isLogin && 'Anda sudah login (short-circuit)'
    // return <div>{message}</div>

    // const message = isLogin ? 'Anda sudah login (ternary)' : 'Silahkan login (ternary)';
    // return <div>{message}</div>

    return <div>
        {/* {isLogin && 'Anda sudah login (short-circuit-insidejsx)'} */}
        {/* {isLogin ? 'Anda sudah login (ternary-insidejsx)' : 'Silahkan login (ternary-insidejsx)'} */}
        {isLogin ? <b>{userName} sudah login </b> : <b>silahkan login</b>}
    </div>
}

export default Conditional;