import { Card } from "@/components/aily/Card";

const creationItems = [
  { title: '文本润色', desc: '优化文案表达效果' },
  { title: '文本扩写', desc: '扩展文案内容长度' },
  { title: '文本改写', desc: '调整文案表达方式' },
];

export default function CreationSection() {
  return (
    <Card className="mt-6 p-4">
      <h2 className="text-lg font-semibold mb-4">智能创作</h2>
      <div className="space-y-4">
        {creationItems.map((item, index) => (
          <div key={index} className="flex items-center p-3 bg-gray-100 rounded-lg">
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              立即使用
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
