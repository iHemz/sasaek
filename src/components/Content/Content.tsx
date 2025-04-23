import { Activities } from "@/components/Content/Activities/Activities";
import { Chairman } from "@/components/Content/Chairman/Chairman";
import { Culture } from "@/components/Content/Culture/Culture";
import { Headliner } from "@/components/Content/Headliner/Headliner";

export function Content() {
  return (
    <main>
      <Headliner />
      <Culture />
      <Chairman />
      <Activities />
    </main>
  );
}
