"use client";

export default function Signin() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (error) setError(undefined);

    // const formData = new FormData(event.currentTarget);
    // await signIn("credentials", {
    //   username: formData.get("username"),
    //   password: formData.get("password"),
    //   redirect: false,
    // }).then((result) => {
    //   if (result?.error) {
    //     setError(result.error);
    //   } else {
    //     router.push("/" + locale);
    //   }
    // });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-base-content/10 rounded-lg md:p-7 p-4 bg-base-100"
    >
      <div className="">
        <div>
          <label htmlFor="email" className="block text-sm mb-1 dark:text-white">
            نام کاربری
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="email-error"
            />
            <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              <svg
                className="h-5 w-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="block text-sm mb-1 dark:text-white"
            >
              گذرواژه
            </label>
            <a
              className="text-sm text-primary decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../examples/html/modal-recover-account.html"
            >
              رمز خود را فراموش کرده اید?
            </a>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              required
              aria-describedby="password-error"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              <svg
                className="h-5 w-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="password-error">
            8+ characters required
          </p>
        </div>
        <div className="flex items-center mt-3">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              بخاطر سپاری
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 mt-5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary-100 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          ورود به سایت
        </button>
      </div>

      <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
        کاربر جدید هستید؟
        <a
          href="#!"
          className="text-red-300 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ms-1"
        >
          یک حساب بسازید
        </a>
      </p>
    </form>
  );
}
