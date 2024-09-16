'use client';
import InputCustom from '@/components/InputCustom';
import View from '@/components/View';
import { useState } from 'react';

export default function Home() {
  const [formData, setformData] = useState<{ name_en: string; name_vn: string; address_vn: string; address_en: string; tax: string; image: string } | null>(null);

  const handleOnSubmits = (data: { name_en: string; name_vn: string; address_vn: string; address_en: string; tax: string; image: string }) => {
    setformData(data);
  };
  return (
    <div className='flex w-full'>
      <div className='flex w-1/2'>
        <InputCustom onSubmit={handleOnSubmits} />
      </div>
      <div className='flex w-1/2 justify-center items-center'>
        <View data={formData} />
      </div>
    </div>
  );
}
