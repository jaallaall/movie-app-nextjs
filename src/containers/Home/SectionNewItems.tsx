import Tabs, { TabContent } from "@/components/Tabs";
import { data } from "./data";
import Card from "@/components/Card";

export default function SectionNewItems() {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h1>آیتم های جدید</h1>
      </div>
      <Tabs>
        <TabContent label="نتایج جدید" id="tab1" checked>
          <div className="grid gap-4 md:grid-cols-6 grid-cols-2">
            {data.map((item) => {
              return <Card key={item.id} item={item} small />;
            })}
          </div>
        </TabContent>
        <TabContent label="فیلم ها" id="tab2">
          <div className="grid gap-4 md:grid-cols-6 grid-cols-2">test</div>
        </TabContent>
      </Tabs>
    </>
  );
}
