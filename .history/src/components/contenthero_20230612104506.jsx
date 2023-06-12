import React from 'react'
import img6 from '../images/heroabout/IMG_0584.jpg'
import img7 from '../images/heroabout/IMG_0061.jpg'
import img8 from '../images/heroabout/IMG_0078.jpg'
import img9 from '../images/heroabout/IMG_0409.jpg'

const contenthero = () => {
  return (
    <div className="mb-36 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  We believe that young voices have the power to shape the future. We provide a safe and inclusive space where youth from diverse backgrounds can come together, exchange ideas, and collaborate on projects that make a real impact. Whether you're a student, a young professional, an artist, an entrepreneur, or simply someone with a passion for change, this is the place for you.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                Our platform is designed to inspire, educate, and connect. Here, you'll find a wealth of resources, articles, and thought-provoking discussions covering a wide range of topics that matter to the youth of today. From social justice and environmental sustainability to mental health and personal development, we strive to address the issues that shape our generation.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src={img6}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src={ img8 }
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      src={img7}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src={ img9 }
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default contenthero