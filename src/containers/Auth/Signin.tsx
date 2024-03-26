"use client";

import { Input } from "@/components/FormControl";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import Link from "next/link";

export interface FormValues {
  username: string;
  password: string;
}

const defaultValues: FormValues = {
  username: "",
  password: "",
};

export default function Signin() {
  const t = useTranslations();
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
  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="border border-base-content/10 rounded-lg md:p-7 p-4 bg-base-100">
      <div className="mb-6 prose text-center">
        <h2>ورود به سایت</h2>
      </div>
      <Formik
        initialValues={defaultValues}
        //   validationSchema={formSchemaRegisterProduct}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            name="username"
            component={Input}
            label={t("Signin.username")}
            classInput="border-none bg-base-200"
            classLabel="bg-base-200"
          />
          <Field
            name="password"
            component={Input}
            label={t("Signin.password")}
            classInput="border-0 bg-base-200"
            className="mt-6"
            classLabel="bg-base-200"
          />

          <div className="form-control mt-3">
            <label className="label cursor-pointer">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">مرا بخاطر بسپار</span>
            </label>
          </div>

          <button type="submit" className="btn btn-custom w-full mt-4">
            ورود به سایت
          </button>
        </Form>
      </Formik>
      <p className="mb-0 mt-4 text-sm">
        کاربر جدید هستید؟
        <Link href="#!" className="text-primary ps-2">
          یک حساب بسازید
        </Link>
      </p>
    </div>
  );
}
