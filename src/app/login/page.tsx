import { LogoIcon } from '@/icons/LogoIcon';
import { LoginForm } from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-6">
        <LogoIcon />

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="font-bold-48 text-gray-700">반갑습니다.</div>
          <div className="font-medium-32 text-gray-600">로그인 정보를 입력해 주세요.</div>
        </div>
      </div>

      <LoginForm />
    </div>
  );
}
