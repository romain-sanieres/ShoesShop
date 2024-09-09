import { auth } from "@/auth";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Separator } from "@/components/ui/separator";
import { OauthButton } from "@/components/auth/OauthButton";

export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <main>
        <div className="flex flex-col gap-y-2 w-96">
          <p className="w-full text-center mb-4">
            Create Account with Credential
          </p>
          <div className="flex flex-col gap-x-2">
            <RegisterForm />
            <div className="flex items-center gap-x-2 w-full my-4">
              <Separator className="w-1/3" />
              <p className="w-full text-center">Or</p>
              <Separator className="w-1/3" />
            </div>
            <form className="w-full flex gap-x-2">
              <OauthButton provider={"google"} />
              <OauthButton provider={"github"} />
            </form>
          </div>
        </div>
      </main>
    );

  return null;
}
