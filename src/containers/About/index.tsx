import Breadcrumbs from "@/components/Breadcrumbs";
import SectionAttributes from "./SectionAttributes";
import SectionWorks from "./SectionWorks";

export default function About() {
  return (
    <>
      <section className="md:min-h-52 min-h-36 bg-[url('/static/section/section.jpg')] bg-center">
        <div className="container m-auto">
          <div className="mb-5 prose">
            <h1>درباره ما</h1>
          </div>
          <Breadcrumbs />
        </div>
      </section>
      <section>
        <div className="container">
          <SectionAttributes />
        </div>
      </section>
      <section>
        <div className="container">
          <SectionWorks />
        </div>
      </section>
    </>
  );
}
