import Map from "@/components/Map";
import { fetchData } from "@/actions/fetchData.action";

export default async function Home() {
  const { docs: data } = await fetchData();

  return (
    <div className="w-full h-screen relative">
      <Map data={data} />
    </div>
  );
}
