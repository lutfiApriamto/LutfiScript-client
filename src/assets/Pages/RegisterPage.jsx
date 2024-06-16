import AuthLayout from "../Layout/AuthLayout"
import FormRegister from "../Fragemnt/FomRegister"

const RegisterPage = () => {
    return (
        <>
        <section id="login" className="w-full h-[100vh] flex items-center justify-center bg-cover bg-top bg-no-repeat bg-fixed" style={{ backgroundImage: "url('../public/img/login.jpg')"}}>
        <button className="bg-yellow-300 hover:bg-yellow-500 fixed top-3 left-3 text-xs px-4 py-2 text-center rounded-full shadow-2xl capitalize font-bold cursor-pointer opacity-80 hover:opacity-100 lg:top-6 lg:left-6 transition duration-500">Back to Home</button>
        <AuthLayout title="Register">
            <FormRegister></FormRegister>
        </AuthLayout>
        </section>
        </>
    )
}

export default RegisterPage