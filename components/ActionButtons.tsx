import { Button } from "@/components/aily/Button";

export default function ActionButtons() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <Button className="h-12 bg-green-500 hover:bg-green-600 text-white">
        + 小红书笔记
      </Button>
      <Button className="h-12 bg-purple-500 hover:bg-purple-600 text-white">
        AI助理
      </Button>
    </div>
  );
}
