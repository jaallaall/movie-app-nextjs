import SelectInputSimple from "@/components/FormControl/SelectInputSimple";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { optionsGenre, optionsQuality } from "./options";
import InputRange from "./InputRange";
import RangeSlider from "./RangeSlider";

export interface FormValues {
  genre: string;
  quality: string;
  rating: string;
  releaseYear: string;
}

const defaultValues: FormValues = {
  genre: "action/adventure",
  quality: "hd 1080",
  rating: "",
  releaseYear: "",
};

export default function Filter() {
  const t = useTranslations();

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="grid md:grid-cols-[1fr_150px] items-center gap-4">
      <Formik
        initialValues={defaultValues}
        //   validationSchema={formSchemaRegisterProduct}
        onSubmit={onSubmit}
      >
        <Form
          id="form-register-product"
          className="w-full flex gap-4 max-md:flex-wrap"
        >
          <Field
            name="genre"
            options={optionsGenre}
            component={SelectInputSimple}
            label={t("Catalog.genre")}
          />
          <Field
            name="quality"
            options={optionsQuality}
            component={SelectInputSimple}
            label={t("Catalog.quality")}
          />
          <Field
            name="rating"
            component={RangeSlider}
            label={t("Catalog.rating")}
            min={0}
            max={10}
            step={0.1}
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
          <Field
            name="releaseYear"
            component={RangeSlider}
            label={t("Catalog.releaseYear")}
            min={1990}
            max={2024}
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </Form>
      </Formik>

      <div className="md:col-start-3">
        <button className="btn btn-custom btn-outline min-w-[150px]">
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}
