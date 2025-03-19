import { Button } from "@/components/aily/Button"
import { Home, BookOpenText, User } from "lucide-react"

export default function BottomNav() {
  const navItems = [
    { name: '首页', icon: Home, active: true },
    { name: '笔记', icon: BookOpenText, active: false },
    { name: '我的', icon: User, active: false },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="grid grid-cols-3 gap-4 p-2">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`h-12 flex-col gap-1 text-gray-500 ${
              item.active ? '!text-gray-900' : ''
            }`}
          >
            <item.icon 
              className={`h-6 w-6 transition-colors ${
                item.active ? 'fill-gray-900' : 'fill-none'
              }`}
              strokeWidth={item.active ? 2 : 1.5}
            />
            <span className="text-xs font-medium">{item.name}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
