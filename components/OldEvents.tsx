const callouts = [
  {
    name: 'Interview Experience',
    description: " Sarthak Saxena and Rachit R Jindal will be the day's speakers.They'll talk about their interview experiences and provide essential learnings on how to do well in them.",
    imageSrc:
      'https://cdn.discordapp.com/attachments/577128047740977162/1077991562316890233/IMG_20220929_175156.jpg',
    imageAlt:
      'interview experience ',
    href: '#',
  },
  {
    name: 'Expert Talk',
    description: "Expert talk🎙 on Role of Engineers in Accelerating India's Development by Mr.Piyush Verma",
    imageSrc:
      'https://cdn.discordapp.com/attachments/577128047740977162/1078015139535654933/SPICE3.jpg',
    imageAlt:
      'Expert Talk by Mr. Piyush Verma',
    href: '#',
  },
  {
    name: 'ML Workshop',
    description: ' A Machine Learning Event at NIT Jalandhar featuring Yash Rastogi, a third-year B.Tech Student with Expertise in Machine Learning! The event was a great success, providing attendees with valuable insights and learnings to enhance their ML skillset. 🔥🤖 ',
    imageSrc:
      'https://cdn.discordapp.com/attachments/577128047740977162/1077992694875443330/20230208_180815.jpg',
    imageAlt: 'ML Workshop yash rastogi',
    href: '#',
  },
]

export default function OldEvents() {
  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-5 tracking-tight text-gray-900 sm:text-4xl'>
              Recents Events
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
              Some of our recent sessions that we have conducted. We have
              conducted many more events so far. Please visit our{' '}
              {/* Change instagram link here */}
              <a
                href='https://www.instagram.com/spice-nitj/'
                className='font-semibold text-orange-500 hover:text-orange-600'>
                Instagram Page
              </a>{' '}
              to see more.
            </p>
          </div>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 '>
            {callouts.map((callout) => (
              <div key={callout.name} className='group rounded-md  relative shadow-lg overflow-hidden'>
                <div className='relative h-80 w-full  overflow-hidden  bg-white group-hover:opacity-90 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className='h-full w-full object-auto   object-center'
                  />
                </div>
                <h3 className='mt-6 text-md text-gray-800  px-2'>
                  <a href={callout.href}>
                    <span className='absolute inset-0' />
                    {callout.name}
                  </a>
                </h3>
                <p className='text-base font-light text-gray-900 px-2 py-2'>
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
