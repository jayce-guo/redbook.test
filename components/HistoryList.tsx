import { Card } from "@/components/aily/Card";

export default function HistoryList() {
  return (
    <Card className="mt-6 p-4">
      <h2 className="text-lg font-semibold mb-4">创作历史</h2>
      <div className="h-32 flex items-center justify-center text-gray-400">
        暂无创作记录
      </div>
    </Card>
  );
}
