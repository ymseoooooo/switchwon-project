import { LogoIcon } from '@/icons/LogoIcon';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Box } from '@/components/Box/Box';

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

      <Box className="flex w-[560px] flex-col gap-8">
        <Input inputContainerClassName="w-full" label="이메일 주소를 입력해 주세요." />

        <Button className="w-full" size="lg">
          로그인하기
        </Button>
      </Box>
    </div>
  );
}
