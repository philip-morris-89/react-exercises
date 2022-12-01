import { useLogin } from "./useLogin";

export function MyForm() {
  const { username, password, remember, disabled, input, submit, reset, prefill } = useLogin()
  return (
    <div>
      <h1>My Form:</h1>
      <form>
        <div>
          <input type="text" name="username" onChange={input} value={username} placeholder="Username" />
          <br/>
          <br/>
          <input type="password" name="password" onChange={input} value={password} placeholder="Password" />
          <br/>
          <br/>
          <label><input type="checkbox" name="remember" onChange={input} checked={remember} /> Remember password</label>
        </div>
        <br/>
        <div>
          <button onClick={submit} disabled={disabled}>Login</button>
          <br/>
          <button onClick={reset}>Reset form</button>
          <br/>
          <button onClick={prefill}>Prefill form</button>
        </div>
      </form>
    </div>
  )
}