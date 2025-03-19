import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/aily/Button';

export default function UserProfile() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          <div className="h-8 w-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
            {user.username[0]}
          </div>
          <span className="font-medium text-gray-900">{user.username}</span>
          <Button 
            className="px-3 py-1 bg-white/20 hover:bg-white/30 text-gray-900"
            onClick={logout}
          >
            退出
          </Button>
        </>
      ) : (
        <>
          <Button 
            className="px-3 py-1 bg-white/20 hover:bg-white/30 text-gray-900"
            link="/login"
          >
            登录
          </Button>
          <Button 
            className="px-3 py-1 bg-[#FF2442]/80 hover:bg-[#FF2442] text-white"
            link="/register"
          >
            注册
          </Button>
        </>
      )}
    </div>
  );
}
