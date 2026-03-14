import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className='max-w-5xl mx-auto px-6'>
        {/* Hero */}
        <section className='pt-36 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Left — Text */}
          <div className='flex-1'>
            <h1 className='animate-fade-up text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-navy mb-6'>
              A document app
              <br />
              you&apos;ll love using
            </h1>
            <p className='animate-fade-up animate-delay-1 text-lg text-muted leading-relaxed max-w-md mb-10'>
              A simple and beautiful document tracking app designed to help you never miss a renewal deadline
            </p>
            <div className='animate-fade-up animate-delay-2'>
              <Link
                href='/waitlist'
                className='inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-accent-dark transition-colors'
              >
                <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 0 1 0 1.724l-2.144 1.222-2.53-2.529 2.53-2.657zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z' />
                </svg>
                Get Early Access
              </Link>
            </div>
          </div>

          {/* Right — Phone Mockup Image */}
          <div className='animate-fade-up animate-delay-3 shrink-0'>
            <div className='relative w-[280px] sm:w-[320px]'>
              <Image
                src='/pixel-weydocs.png'
                alt='WeyDocs app screenshot'
                width={320}
                height={640}
                className='rounded-[2.5rem]'
                priority
              />
            </div>
          </div>
        </section>

        {/* Developer Note */}
        <section className='pb-24'>
          <div className='animate-fade-up animate-delay-4 bg-[#EEF1F4] rounded-3xl p-10 sm:p-14'>
            <h2 className='text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy mb-6'>
              Hi, I&apos;m Waleed
            </h2>
            <div className='space-y-4 text-foreground/70 leading-relaxed max-w-2xl'>
              <p>
                I built WeyDocs to solve my own problem. Living in Saudi Arabia, I was constantly scrambling to remember
                when my iqama, vehicle registration, or insurance was about to expire. A missed deadline means fines,
                disruptions, and unnecessary stress.
              </p>
              <p>
                I wanted to build a document tracking experience that felt{' '}
                <strong className='text-navy'>incredible</strong> to use — so great design and interaction was something
                I put a lot of time into.
              </p>
              <p>Hopefully you feel that when you use it and my app helps you as much as it&apos;s helped me :)</p>
            </div>
            <div className='mt-10'>
              <p className='font-semibold text-sm text-navy'>Waleed Ahmad</p>
              <p className='text-sm text-muted'>WeyDocs developer</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
