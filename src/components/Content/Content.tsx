import { Activities } from "@/components/Content/Activities/Activities";
import { AppSection } from "@/components/Content/AppSection/AppSection";
import { Chairman } from "@/components/Content/Chairman/Chairman";
import { Culture } from "@/components/Content/Culture/Culture";
import { Donation } from "@/components/Content/Donation/Donation";
import { Headliner } from "@/components/Content/Headliner/Headliner";

export function Content() {
  return (
    <main>
      <Headliner />
      <Culture />
      <Chairman />
      <Activities />
      <Donation />
      <AppSection />
    </main>
  );
}
