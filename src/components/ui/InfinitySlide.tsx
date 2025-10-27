import Image from "next/image";
import { InfiniteSlider } from "./InfinitySidebar";

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <Image
        width={120} height={120}
        src='/assets/features/Frame.svg'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[120px] rounded-lg'
      />
      <Image
        width={120} height={120}
        src='/assets/features/logo-8.svg'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-lg'
      />
      <Image
        width={120} height={120}
        src='/assets/features/logo-27.svg'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[120px] rounded-lg'
      />
      <Image
        width={120} height={120}
        src='/assets/features/logo-30.svg'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-lg'
      />
      <Image
        width={120} height={120}
        src='/assets/features/logo-53.svg'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-lg'
      />
      <Image
        width={120} height={120}
        src='/assets/features/logo-77.svg'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-lg'
      />
    </InfiniteSlider>
  );
}
