'use client';
import { Box } from '@/components/Box';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

import { useLoginForm } from './useLoginForm';

export function LoginForm() {
  const {
    email,
    handler: { handleChangeEmail, handleSubmit },
  } = useLoginForm();

  return (
    <Box className="w-[560px]">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <Input
          inputContainerClassName="w-full"
          label="이메일 주소를 입력해 주세요."
          onChange={handleChangeEmail}
          value={email}
        />

        <Button className="w-full" size="lg" type="submit">
          로그인하기
        </Button>
      </form>
    </Box>
  );
}
