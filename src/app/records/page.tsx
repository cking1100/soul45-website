import { permanentRedirect } from "next/navigation";

export default function RecordsPage() {
  permanentRedirect("/about#records");
}
