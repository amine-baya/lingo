import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
// import { Image } from next/Images;

type Props = {
    activeCourse: {title: string};
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;

}

export const UserProgress = ({activeCourse,hearts,points,hasActiveSubscription}:Props) => {
  return (
    <div className='flex items-center justify-between gap-x-2 w-full mt-6'>
        <Link href="/courses">
            <Button variant='ghost'>
                {/* <Image src='' alt={activeCourse.title} height={28} width={28} className='mr-2' />  */}
                {activeCourse.title}
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant='ghost' className="text-orange-500">
                {points}
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant='ghost' className="text-rose-500">
                {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts }
            </Button>
        </Link>
    </div>
  )
}
