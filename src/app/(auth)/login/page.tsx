import SignInForm from "./_components/login-form";

const SignIn = async () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <SignInForm />
    </div>
  );
};

export default SignIn;
